import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .email("Please enter a valid email address")
        .trim(),

    password: z
        .string()
        .min(6, "Password must be al least 6 characters"),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const registerSchema = z
    .object({
        name: z
            .string()
            .min(3, "Name must be at least 3 characters"),

        email: z
            .string()
            .email("Please enter a valid email")
            .trim(),

        password: z
            .string()
            .min(6, "Password must be at least 6 characters"),

        confirmPassword: z
            .string()
            .min(6, "Confirm password is required"),
    })
    .refine(
        (data) => data.password === data.confirmPassword,
        {
            message: "Password do not match",
            path: ["confirmPassword"],
        }
    );

export type RegisterInput = z.infer<
    typeof registerSchema
>;