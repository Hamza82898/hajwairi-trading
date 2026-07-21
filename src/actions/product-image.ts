"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { ActionState } from "@/types/action-state";

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

export async function setPrimaryImage(
    imageId: number,
    productId: number
): Promise<ActionState> {
    try {
        await prisma.productImage.updateMany({
            where: {
                productId,
            },
            data: {
                isPrimary: false,
            },
        });

        await prisma.productImage.update({
            where: {
                id: imageId,
            },
         data: {
                isPrimary: true,
            },
        });

        revalidatePath(`/admin/products/${productId}/edit`);

        return {
            success: true,
            message: "Primary image updated.",
        };
    } catch {
        return {
            success: false,
            message: "Failed to update image.",
        };
    }
}

export async function deleteProductImage(
    imageId: number,
    productId: number
): Promise<ActionState> {

    try {
        await prisma.productImage.delete({
            where: {
                id: imageId,
            },
        });

        revalidatePath(`/admin/products/${productId}/edit`);

        return {
            success: true,
            message: "Image deleted.",
        };
    } catch {
        return {
            success: false,
            message: "Delete failed.",
        };
    }
}