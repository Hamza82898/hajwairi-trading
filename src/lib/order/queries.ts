import { prisma } from "@/lib/prisma";

export async function getOrders() {
    return prisma.order.findMany({
        include: {
            customer: true,
            items: {
                include: {
                    product: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc"
        },
    });
}

export async function getOrderById(id: number) {
    return prisma.order.findUnique({
        where: {
            id,
        },
        include: {
            customer: true,
            items: {
                include: {
                    product: {
                        include: {
                            images: true
                        },
                    },
                },
            },
        },
    });
}

export async function getRecentOrders(limit = 5) {
    return prisma.order.findMany({
        take: limit,
        include: {
            customer: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
}

export async function getOrdersCount() {
    return prisma.order.count();
}

export async function getPendingOrdersCount() {
    return prisma.order.count({
        where: {
            status: "PENDING",
        },
    });
}

export async function getTotalRevenue() {
    const result = await prisma.order.aggregate({
        _sum: {
            total: true,
        },
    });
    return result._sum.total ?? 0;
}