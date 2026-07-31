import { prisma } from "@/lib/prisma";

export async function getCustomers(
    search?: string,
    sort?: string,
    page = 1,
    limit = 10,
) {
    const where = search
        ? {
            OR : [
                {
                    fullName: {
                        contains: search,
                        mode: "insensitive" as const,
                    },
                },
                {
                    phone: {
                        contains: search,
                    },
                },
                {
                    email: {
                        contains: search,
                        mode: "insensitive" as const,
                    },
                },
            ],
          }
        : {};

    const totalCustomers = await prisma.customer.count({
        where,
    });

    const customers = await prisma.customer.findMany({
        where,

        include: {
            user: true,

            orders: {
                orderBy: {
                    createdAt: "desc",
                },
            },
        },

        orderBy: {
            createdAt:
                sort === "oldest"
                    ? "asc"
                    : "desc",
        },

        skip : (page - 1) * limit,

        take: limit,
    });

    return {
        customers,
        totalCustomers,
        totalPages: Math.ceil(totalCustomers / limit),
        currentPage : page,
    };
}

export async function getCustomerById(id: number) {
    return prisma.customer.findUnique({
        where: {
            id,
        },

        include: {
            user: true,

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
            user: true,
            orders: true,
        },

        orderBy: {
            createdAt: "desc",
        },
    });
}