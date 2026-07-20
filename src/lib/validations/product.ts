import { z } from "zod";

export const productSchema = z.object({
    name: z.string().min(3, "Product name is required"),
    slug: z
        .string()
        .trim()
        .min(3, "Slug must be at least 3 characters"),
    description: z.string().min(10, "Description is required"),

    sku: z.string().trim().optional().or(z.literal("")),

    oldPrice: z.coerce.number().min(0),
    newPrice: z.coerce.number().min(0),

    unit: z.string().min(1),
    brand: z.string().min(1),
    origin: z.string().min(1),

    stock: z.coerce.number().min(0),

    categoryId: z.coerce.number(),

    featured: z.boolean().optional(),
    isActive: z.boolean().optional(),

    badge: z.string().optional(),

    discount: z.coerce.number().optional(),
});

export type ProductInput = z.infer<typeof productSchema>;