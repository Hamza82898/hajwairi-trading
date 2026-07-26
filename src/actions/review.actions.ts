"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { reviewSchema } from "@/lib/validations/review";

export async function createReview(formData: unknown) {
    const validated = reviewSchema.safeParse(formData);

    if (!validated.success) {
        return {
            success: false,
            message: "Validation failed.",
            errors: validated.error.flatten().fieldErrors,
        };
    }

    try {
        await prisma.review.create({
            data: {
                customerName: validated.data.customerName,
                city: validated.data.city,
                review: validated.data.review,
                rating: validated.data.rating,
                featured: validated.data.featured,
                approved: validated.data.approved,
                displayOrder: validated.data.displayOrder,

                product: {
                    connect: {
                        id: validated.data.productId,
                    },
                },
            },
        });

        revalidatePath("/admin/reviews");
        revalidatePath("/");

        return {
            success: true,
            message: "Review created successfully.",
        };
    } catch (error) {
        console.error("Create Review Error:", error);

        return {
            success: false,
            message: "Something went wrong while saving the review.",
        };
    }
}