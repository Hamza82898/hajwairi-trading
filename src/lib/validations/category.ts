import { z } from "zod";

export const categorySchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, "Category name must be at least 3 characters.")
        .max(50, "Category name cannot exceed 50 characters."),

    slug: z
        .string()
        .trim()
        .min(3, "Slug must be at least 3 characters.")
        .max(60, "Slug cannot exceed 60 characters."),

    image: z.string().optional(),
    isActive: z.boolean().optional(),
    sortOrder: z.coerce.number().min(0),
});

export type CategoryInput = z.infer<typeof categorySchema>;