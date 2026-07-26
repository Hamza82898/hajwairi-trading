import { prisma } from "@/lib/prisma";

export async function getReviews() {
    return prisma.review.findMany({
        include: {
            product: true,
        },
        orderBy: [
            {
                displayOrder: "asc",
            },
            {
                createdAt: "desc",
            },
        ],
    });
}

export async function getProductsForReview() {
    return prisma.product.findMany({
        where: {
            isActive: true,
        },
        orderBy: {
            name: "asc",
        },
        select: {
            id: true,
            name: true,
        },
    });
}