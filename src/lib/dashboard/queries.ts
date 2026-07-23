import { prisma } from  "@/lib/prisma";

export async function getDashboardStats() {
    const [
        totalOrders,
        totalCustomers,
        totalProducts,
        totalCategories,
        pendingOrders,
        revenue,
    ] = await Promise.all([
        prisma.order.count(),
        prisma.customer.count(),
        prisma.product.count(),
        prisma.category.count(),
        prisma.order.count({
            where: {
                status: "PENDING",
            },
        }),

        prisma.order.aggregate({
            _sum: {
                total: true,
            },
        }),
    ]);

    return {
        totalOrders,
        totalCustomers,
        totalProducts,
        totalCategories,
        pendingOrders,

        totalRevenue: revenue._sum.total ?? 0,
    };
}

export async function getLatestOrders() {
    return prisma.order.findMany({
        take: 5,

        orderBy: {
            createdAt: "desc",
        },

        include: {
            customer: true,
        },
    });
}

export async function getLatestCustomers() {
    return prisma.customer.findMany({
        take: 5,

        orderBy: {
            createdAt: "desc",
        },
        include: {
            orders: true,
        },
    });
}