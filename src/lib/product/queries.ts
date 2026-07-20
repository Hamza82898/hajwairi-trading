import { prisma } from "@/lib/prisma";

export async function getProducts() {
    return prisma.product.findMany({
        include: {
            category: true,
            images: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
}

export async function getProductById(id: number) {
    return prisma.product.findUnique({
        where: {
            id,
        },
        include: {
            category: true,
            images: true,
        },
    });
}

export async function getCategories() {
    return prisma.category.findMany({
        orderBy: {
            name: "asc",
        },
    });
}