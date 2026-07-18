import { z } from "zod";

export const checkoutSchema = z.object({
    fullName: z
        .string()
        .min(3, "Full name must be at least 3 characters"),

    phone: z
        .string()
        .regex(
            /^(\+973)?\s?[3-9]\d{7}$/,
            "Enter a valid Bahrain phone number"
        ),

    area: z
        .string()
        .min(1, "Please select a delivery area"),

    address: z
        .string()
        .min(10, "Address must be at least 10 characters"),

    landmark: z.string().optional(),

    paymentMethod: z.enum([
        "cash",
        "benefitpay",
    ]),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;