import { prisma } from "@/lib/prisma";

export async function getProducts() {
    return await prisma.product.findMany({
        include: {
            category: true,
            images: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
}


export async function getFeaturedProducts() {
    return prisma.product.findMany({
        where: {
            featured: true,
        },
        include: {
            category: true,
            images: true,
        },
    });
}

export async function getProductBySlug(slug: string) {
    return await prisma.product.findUnique({
        where: {
            slug,
        },        
        include: {
            category: true,
            images: true,
        },
        
    });
}

export async function getRelatedProducts(
    categoryId: number,
    productId: number
) {
    return prisma.product.findMany({
        where: {
            categoryId,
            NOT: {
                id: productId,
            },
        },
        include: {
            category: true,
            images: true,
        },
        take: 4,
    });
}