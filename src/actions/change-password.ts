"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { hashPassword, verifyPassword } from "@/lib/password";
import { changePasswordSchema } from "@/lib/validations/change-password";
import { revalidatePath } from "next/cache";

export async function changePassword(formData: FormData) {
    const session = await auth();

    if (!session?.user?.email) {
        return {
            success: false,
            message: "Unauthorized.",
        };
    }

    const parsed = changePasswordSchema.safeParse({
        currentPassword: formData.get("currentPassword"),
        newPassword: formData.get("newPassword"),
        confirmPassword: formData.get("confirmPassword"),
    });

    if (!parsed.success) {
        return {
            success: false,
            message: parsed.error.issues[0].message,
        };
    }

    const {
        currentPassword,
        newPassword,
    } = parsed.data;

    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email,
        },
    });

    if (!user) {
        return {
            success: false,
            message: "User not found.",
        };
    }

    const validPassword = await verifyPassword(
        currentPassword,
        user.password
    );

    if (!validPassword) {
        return {
            success: false,
            message: "Current password is incorrect.",
        };
    }

    const hashedPassword = await hashPassword(
        newPassword
    );

    await prisma.user.update({
        where: {
            id: user.id,
        },
        data: {
            password: hashedPassword,
        },
    });

    revalidatePath("/account/change-password");

    return {
        success: true,
        message: "Password updated successfully.",
    };
}