import { prisma } from "@/lib/prisma";

export async function getProductImages(productId: number) {
    return prisma.productImage.findMany({
        where: {
            productId,
        },
        orderBy: {
            id: "asc",
        },
    });
}