import { z } from "zod";

export const reviewSchema = z.object({
    customerName: z
        .string()
        .trim()
        .min(2, "Customer name must be at least 2 characters")
        .max(100, "Customer name is too long"),

    city: z
        .string()
        .trim()
        .min(2, "City is required")
        .max(100),

    productId: z
        .number({
            error: "Please select a product",
        })
        .positive("Please select a product"),

    rating: z
        .number()
        .min(1, "Minimum rating is 1")
        .max(5, "Maximum rating is 5"),

    review: z
        .string()
        .trim()
        .min(10, "Review must be at least 10 characters")
        .max(1000, "Review is too long"),

    displayOrder: z.number(),

    featured: z.boolean(),

    approved: z.boolean(),
});

export type ReviewSchema = z.infer<typeof reviewSchema>;