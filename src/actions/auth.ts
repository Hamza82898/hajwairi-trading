"use server"

import { signIn } from "@/auth";
import { loginSchema } from "@/lib/validations/auth";
import { AuthError } from "next-auth";

export type LoginState = {
    success: boolean;
    message: string;
};

export async function loginAction(
    prevState: LoginState,
    formData: FormData
): Promise<LoginState>  {
    const validated = loginSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    });

    if (!validated.success) {
        return {
            success: false,
            message: validated.error.issues[0].message,
        };
    }

    try {
        await signIn("credentials", {
            email: validated.data.email,
            password: validated.data.password,
            redirectTo: "/admin",
        });

        return {
            success: true,
            message: "",
        };
    } catch (error) {
        if (error instanceof AuthError) {
            return {
                success: false,
                message: "Invalid email or password.",
            };
        }
        
        throw error;
    }
}