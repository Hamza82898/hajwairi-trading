"use server";

import { prisma } from "@/lib/prisma";
import { categorySchema } from "@/lib/validations/category";
import { ActionState } from "@/types/action-state";
import { revalidatePath } from "next/cache";


function getCategoryData(formData: FormData) {
    return categorySchema.safeParse({
        name: formData.get("name"),
        slug: formData.get("slug"),
        image: formData.get("image"),
        isActive: formData.get("isActive") === "on",
        sortOrder: formData.get("sortOrder"),
    });
}

export async function createCategory(
    prevState: ActionState,
    formData: FormData
): Promise<ActionState> {
    const parsed = getCategoryData(formData);

    if (!parsed.success) {
        return {
            success: false,
            message: "Validation failed.",
            errors: parsed.error.flatten().fieldErrors,
        };
    }

    const data = parsed.data;

    const existingName = await prisma.category.findUnique({
        where: {
            name: data.name,
        },
    });

    if (existingName) {
        return {
            success: false,
            message: "Category name already exists.",
        };
    }

    const existingSlug = await prisma.category.findUnique({
        where: {
            slug: data.slug,
        },
    });

    if (existingSlug) {
        return {
            success: false,
            message: "Category slug already exists.",
        };
    }

    await prisma.category.create({
        data,
    });

    revalidatePath("/admin/categories");

    return {
        success: true,
        message: "Category created successfully.",
    };
}

export async function updateCategory(
    id: number,
    prev_state: ActionState,
    formData: FormData
): Promise<ActionState> {
    const parsed = getCategoryData(formData);

    if (!parsed.success) {
        return {
            success: false,
            message: "Validation failed.",
            errors: parsed.error.flatten().fieldErrors,
        };
    }

    const data = parsed.data;

    const existingName = await prisma.category.findFirst({
        where: {
            name: data.name,
            NOT: {
                id,
            },
        },
    });

    if (existingName) {
        return {
            success: false,
            message: "Category name already exists.",
        };
    }

    const existingSlug = await prisma.category.findFirst({
        where: {
            slug: data.slug,
            NOT: {
                id,
            },
        },
    });

    if (existingSlug) {
        return {
            success: false,
            message: "Category slug already exists.",
        };
    }

    await prisma.category.update({
        where: {
            id,
        },
        data,
    });

    revalidatePath("/admin/categories");
    revalidatePath(`/admin/categories/${id}/edit`);

    return {
        success: true,
        message: "Category updated successfully.",
    };
}

export async function deleteCategory(
    id: number
): Promise<ActionState> {
    const category = await prisma.category.findUnique({
        where: {
            id,
        },
        include: {
            _count:{
                select: {
                    products: true,
                },
            },
        },
    });

    if (!category) {
        return {
            success: false,
            message: "Category not found.",
        };
    }

    if (category._count.products > 0) {
        return {
            success: false,
            message: "Category contains products and cannot be deleted.",
        };
    }

    await prisma.category.delete({
        where: {
            id,
        },
    });

    revalidatePath("/admin/categories");

    return {
        success: true,
        message: "Category deleted successfully.",
    };
}