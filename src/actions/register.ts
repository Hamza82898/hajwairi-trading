"use server";

import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/password";
import { registerSchema } from "@/lib/validations/register";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export type RegisterState = {
    success: boolean;
    message: string;
};

export async function registerAction(
    prevState: RegisterState,
    formData: FormData
): Promise<RegisterState> {

    const validated = registerSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
    });

    if (!validated.success) {
        return {
            success: false,
            message: validated.error.issues[0].message,
        };
    }

    const { name, email, password } = validated.data;

    try {

        const existingUser = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (existingUser) {
            return {
                success: false,
                message: "Email already registered.",
            };
        }

        const hashedPassword = await hashPassword(password);

        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        await signIn("credentials", {
            email,
            password,
            redirectTo: "/",
        });

        return {
            success: true,
            message: "",
        };

    } catch (error) {

        if (error instanceof AuthError) {
            return {
                success: false,
                message: "Registration failed.",
            };
        }

        throw error;
    }
}