"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function getOrderForReorder(orderId: number) {
    const session = await auth();

    if (!session?.user?.email) {
        return {
            success: false,
            message: "Unauthorized",
        };
    }

    const order = await prisma.order.findFirst({
        where: {
            id: orderId,
            customer: {
                email: session.user.email,
            },
        },
        include: {
            items: {
                include: {
                    product: {
                        include: {
                            images: true,
                        },
                    },
                },
            },
        },
    });

    if (!order) {
        return {
            success: false,
            message: "Order not found",
        };
    }

    return {
        success: true,
        items: order.items,
    };
}