import { prisma } from "@/lib/prisma";

export async function getCustomers() {
    return prisma.customer.findMany({
        include: {
            orders: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
}

export async function getCustomerById(id: number) {
    return prisma.customer.findUnique({
        where: {
            id,
        },
        include: {
            orders: {
                include: {
                    items: {
                        include: {
                            product: true,
                        },
                    },
                },
                orderBy: {
                    createdAt: "desc",
                },
            },
        },
    });
}

export async function getCustomersCount() {
    return prisma.customer.count();
}

export async function getRecentCustomers(limit = 5) {
    return prisma.customer.findMany({
        take: limit,
        include: {
            orders: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
}

