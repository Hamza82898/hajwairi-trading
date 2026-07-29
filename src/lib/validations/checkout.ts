import { z } from "zod";

export const checkoutSchema = z.object({
    fullName: z
        .string()
        .min(3, "Full name must be at least 3 characters"),

    phone: z
        .string()
        .min(8, "Enter a valid Bahrain phone number"),

    email: z.string().email("Invalid email address").or(z.literal("")),
        

    area: z
        .string()
        .min(1, "Please select a delivery area"),

    block: z
        .string()
        .min(1, "Block is required"),

    road: z
        .string()
        .min(1, "Road is required"),

    building: z
        .string()
        .min(1, "Building is required"),

    flat: z
        .string()
        .min(1, "Flat is required"),

    landmark: z
        .string()
        .optional(),

    paymentMethod: z.enum([
        "cash",
        "benefitpay",
    ]),

    notes: z
        .string()
        .max(300, "Maximum 300 characters")
        .optional(),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;