import { prisma } from "@/lib/prisma";

export async function getOrders(
    search?: string,
    status?: string,
    sort?: string,
    page = 1,
    limit = 10,
) {
    const where: any = {
        AND: [
            search
                ? {
                      OR: [
                          {
                              orderNumber: {
                                  contains: search,
                                  mode: "insensitive" as const,
                              },
                          },
                          {
                              customer: {
                                  fullName: {
                                      contains: search,
                                      mode: "insensitive" as const,
                                  },
                              },
                          },
                          {
                              customer: {
                                  phone: {
                                      contains: search,
                                  },
                              },
                          },
                          {
                              customer: {
                                  email: {
                                      contains: search,
                                      mode: "insensitive" as const,
                                  },
                              },
                          },
                      ],
                  }
                : {},

            status
                ? {
                      status: status as any,
                  }
                : {},
        ],
    };

    const totalOrders = await prisma.order.count({
        where,
    });

    const orders = await prisma.order.findMany({
        where,

        include: {
            customer: true,

            items: {
                include: {
                    product: true,
                },
            },
        },

        orderBy: {
            createdAt:
                sort === "oldest"
                    ? "asc"
                    : "desc",
        },

        skip: (page - 1) * limit,

        take: limit,
    });

    return {
        orders,
        totalOrders,
        totalPages: Math.ceil(totalOrders / limit),
        currentPage: page,
    };
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