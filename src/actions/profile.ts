"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { profileSchema } from "@/lib/validations/profile";
import { revalidatePath } from "next/cache";

export async function updateProfile(formData: FormData) {
    const session = await auth();

    if (!session?.user?.email) {
        return {
            success: false,
            message: "Unauthorized.",
        };
    }

    const validated = profileSchema.safeParse({
        fullName: formData.get("fullName"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        area: formData.get("area"),
        block: formData.get("block"),
        road: formData.get("road"),
        building: formData.get("building"),
        flat: formData.get("flat"),
        landmark: formData.get("landmark"),
        notes: formData.get("notes"),
    });

    if (!validated.success) {
        return {
            success: false,
            message: validated.error.issues[0].message,
        };
    }

    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email,
        },
        include: {
            customer: true,
        },
    });

    if (!user?.customer) {
        return {
            success: false,
            message: "Customer not found.",
        };
    }

    await prisma.user.update({
        where: {
            id: user.id,
        },
        data: {
            name: validated.data.fullName,
        },
    });

    await prisma.customer.update({
        where: {
            id: user.customer.id,
        },
        data: validated.data,
    });

    revalidatePath("/account");

    return {
        success: true,
        message: "Profile updated successfully.",
    };
}