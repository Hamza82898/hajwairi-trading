"use server"

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { OrderStatus } from "@prisma/client";

export async function updateOrderStatus(
    id: number,
    status: OrderStatus
) {
    try {
        const order = await prisma.order.findUnique({
            where: {
                id,
            },
        });

        if (!order) {
            return {
                success: false,
                message: "Order not found.",
            };
        }

        await prisma.order.update({
            where: {
                id,
            },
            data: {
                status,
            },
        });

        revalidatePath("/admin/orders");
        revalidatePath(`/admin/orders/${id}`);

        return {
            success: true,
            message: "Order status updated successfully.",
        };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: "Failed to update order status.",
        };
    }
}

export async function deleteOrder(orderId: number) {
    try {
        const order = await prisma.order.findUnique({
            where: {
                id: orderId,
            },
        });

        if (!order) {
            return {
                success: false,
                message: "Order not found.",
            };
        }

        await prisma.order.delete({
            where: {
                id: orderId,
            },
        });

        revalidatePath("/admin/orders");

        return {
            success: true,
            message: "Order deleted successfully.",
        };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: "Failed to delete order.",
        };
    }
}