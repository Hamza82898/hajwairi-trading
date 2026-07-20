"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addProductImage(
    productId: number,
    imageUrl: string,
) {
    const existingPrimary = await prisma.productImage.findFirst({
        where: {
            productId,
            isPrimary: true,
        },
    });

    await prisma.productImage.create({
        data: {
            productId,
            url: imageUrl,
            isPrimary: !existingPrimary,
        },
    });

    revalidatePath(`/admin/products/${productId}/edit`);
}