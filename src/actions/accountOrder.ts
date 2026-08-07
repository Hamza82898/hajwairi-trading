"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { OrderStatus } from "@prisma/client";

export async function cancelOwnOrder(orderId: number) {
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
    });

    if (!order) {
        return {
            success: false,
            message: "Order not found.",
        };
    }

    if (
        order.status !== OrderStatus.PENDING &&
        order.status !== OrderStatus.CONFIRMED
    ) {
        return {
            success: false,
            message:
                "This order can no longer be cancelled.",
        };
    }

    await prisma.order.update({
        where: {
            id: order.id,
        },
        data: {
            status: OrderStatus.CANCELLED,
        },
    });

    return {
        success: true,
        message: "Order cancelled successfully.",
    };
}