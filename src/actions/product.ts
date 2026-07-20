"use server"

import { prisma } from "@/lib/prisma";
import { productSchema} from "@/lib/validations/product";
import { ActionState } from "@/types/action-state";
import { revalidatePath } from "next/cache";

export async function createProduct(
    prevState: ActionState,
    formData: FormData
): Promise<ActionState> {
    const parsed = productSchema.safeParse({
        name: formData.get("name"),
        slug: formData.get("slug"),
        description: formData.get("description"),

        sku: formData.get("sku"),

        oldPrice: formData.get("oldPrice"),
        newPrice: formData.get("newPrice"),

        unit: formData.get("unit"),
        brand: formData.get("brand"),
        origin: formData.get("origin"),

        stock: formData.get("stock"),

        categoryId: formData.get("categoryId"),

        featured: formData.get("featured") === "on",
        isActive: formData.get("isActive") === "on",

        badge: formData.get("badge"),

        discount: formData.get("discount"),
    });

    if (!parsed.success) {
        return {
            success: false,
            message: "Validation failed.",
            errors: parsed.error.flatten().fieldErrors,
        };
    }

    const data = parsed.data;

    const slugExists = await prisma.product.findUnique({
        where: {
            slug: data.slug,
        },
    });

    if (slugExists) {
        return {
            success: false,
            message: "Slug already exists."
        };
    }

    if (data.sku && data.sku.trim() !== "") {
        const skuExists = await prisma.product.findUnique({
            where: {
                sku: data.sku,
            },
        });

        if (skuExists) {
            return {
                success: false,
                message: "SKU already exists."
            };
        }
    }

    await prisma.product.create({
        data,
    });

    revalidatePath("/admin/products");

    return {
        success: true,
        message: "Product created successfully.",
    };
}

export async function updateProduct(
    id: number,
    prevState: ActionState,
    formData: FormData
): Promise<ActionState> {
    const parsed = productSchema.safeParse({
        name: formData.get("name"),
        slug: formData.get("slug"),
        description: formData.get("description"),

        sku: formData.get("sku"),

        oldPrice: formData.get("oldPrice"),
        newPrice: formData.get("newPrice"),

        unit: formData.get("unit"),
        brand: formData.get("brand"),
        origin: formData.get("origin"),

        stock: formData.get("stock"),

        categoryId: formData.get("categoryId"),

        featured: formData.get("featured") === "on",
        isActive: formData.get("isActive") === "on",

        badge: formData.get("badge"),

        discount: formData.get("discount"),
    });

    if (!parsed.success) {
        return {
            success: false,
            message: "Validation failed.",
            errors: parsed.error.flatten().fieldErrors,
        };
    }

    const data = parsed.data;

    const slugExists = await prisma.product.findFirst({
        where: {
            slug: data.slug,
            NOT: {
                id,
            },
        },
    });

    if (slugExists) {
        return {
            success: false,
            message: "Slug already exists."
        };
    }

    if (data.sku && data.sku.trim() !== "") {
        const skuExists = await prisma.product.findFirst({
            where: {
                sku: data.sku,
                NOT: {
                    id,
                },
            },
        });

        if (skuExists) {
            return {
                success: false,
                message: "SKU already exists.",
            };
        }
    }

    await prisma.product.update({
        where: {
            id,
        },
        data,
    });

    revalidatePath("/admin/products");

    return {
        success: true,
        message: "Product updated successfully.",
    }
}

export async function deleteProduct(
    id: number
): Promise<ActionState> {
    await prisma.product.delete({
        where: {
            id,
        },
    });

    revalidatePath("/admin/products");

    return {
        success: true, 
        message: "Product deleted successfully.",
    };
}