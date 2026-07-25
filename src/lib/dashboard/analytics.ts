import { prisma } from "@/lib/prisma";
import { OrderStatus } from "@prisma/client";

export async function getDashboardAnalytics() {
    const now = new Date();

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(now.getDate() - 6);

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(now.getDate() - 29);

    const startOfYear = new Date(now.getFullYear(), 0, 1);

    const [
        revenue7Days,
        revenue30Days,
        monthlyRevenue,
        orderStatus,
        topProductsRaw,
        lowStockProducts,
        latestOrders,
    ] = await Promise.all([
        prisma.order.findMany({
            where: {
                createdAt: {
                    gte: sevenDaysAgo,
                },
            },
            select: {
                total: true,
                createdAt: true,
            },
            orderBy: {
                createdAt: "asc",
            },
        }),

        prisma.order.findMany({
            where: {
                createdAt: {
                    gte: thirtyDaysAgo,
                },
            },
            select: {
                total: true,
                createdAt: true,
            },
            orderBy: {
                createdAt: "asc",
            },
        }),

        prisma.order.findMany({
            where: {
                createdAt: {
                    gte: startOfYear,
                },
            },
            select: {
                total: true,
                createdAt: true,
            },
        }),

        Promise.all(
            Object.values(OrderStatus).map(async (status) => ({
                status,
                count: await prisma.order.count({
                    where: { status },
                }),
            }))
        ),

        prisma.orderItem.groupBy({
            by: ["productId"],
            _sum: {
                quantity: true,
            },
            orderBy: {
                _sum: {
                    quantity: "desc",
                },
            },
            take: 10,
        }),

        prisma.product.findMany({
            where: {
                stock: {
                    lte: 10,
                },
            },
            orderBy: {
                stock: "asc",
            },
        }),

        prisma.order.findMany({
            include: {
                customer: true,
            },
            orderBy: {
                createdAt: "desc",
            },
            take: 10,
        }),
    ]);

    const topProducts = await Promise.all(
        topProductsRaw.map(async (item) => {
            const product = await prisma.product.findUnique({
                where: {
                    id: item.productId,
                },
                select: {
                    id: true,
                    name: true,
                    stock: true,
                    slug: true,
                },
            });

            return {
                productId: item.productId,
                name: product?.name ?? "Unknow Product",
                slug: product?.slug ?? "",
                stock: product?.stock ?? 0,
                quantity: item._sum.quantity ?? 0,
            };
        })
    );

    return {
        revenue7Days,
        revenue30Days,
        monthlyRevenue,
        orderStatus,
        topProducts,
        lowStockProducts,
        latestOrders,
    };
}