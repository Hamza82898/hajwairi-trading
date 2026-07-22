import { prisma } from "@/lib/prisma";

export async function getCategories() {
    return prisma.category.findMany({
        include: {
            _count: {
                select:{
                    products: true,
                },
            },
        },
        orderBy: [
            {
                sortOrder: "asc",
            },
            {
                createdAt: "desc",
            },
        ],
    });
}

export async function getActiveCategories() {
    return prisma.category.findMany({
        where: {
            isActive: true,
        },
        orderBy: [
            {
                sortOrder: "asc",
            },
            {
                name: "asc",
            },
        ],
    });
}

export async function getCategoryById(id: number) {
    return prisma.category.findUnique({
        where: {
            id,
        },
        include: {
            _count: {
                select: {
                    products: true,
                },
            },
        },
    });
}