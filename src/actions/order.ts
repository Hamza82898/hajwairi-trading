"use server"

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { OrderStatus } from "@prisma/client";
import { PlaceOrderInput } from "@/types/order";
import { ActionState } from "@/types/action-state";



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

export async function placeOrder(
    data: PlaceOrderInput
): Promise<ActionState> {
    try {

        const { customer, cart } = data;

        const fullAddress = [
            customer.area,
            `Block ${customer.block}`,
            `Road ${customer.road}`,
            `Building ${customer.building}`,
            customer.flat ? `Flat ${customer.flat}` : "",
        ]
            .filter(Boolean)
            .join(", ");
        
        if (cart.length === 0) {
            return {
                success: false,
                message: "Your cart is empty.",
            };
        }

        const subtotal = cart.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );

        const delivery = subtotal > 20 ? 0 : 1.0;

        const total = subtotal;

        const orderNumber = `HTC-${Date.now()}`;

        let createdOrderId = 0;
        let createdOrderNumber = "";

        await prisma.$transaction(async (tx) => {

            // Find existing customer
            let existingCustomer = await tx.customer.findUnique({
                where: {
                    phone: customer.phone,
                },
            });

            let customerId: number;

            if (existingCustomer) {
                const updatedCustomer = await tx.customer.update({
                    where: {
                        id: existingCustomer.id,
                    },
                    data: {
                        fullName: customer.fullName,
                        phone: customer.phone,
                        email: customer.email,

                        area: customer.area,
                        block: customer.block,
                        road: customer.road,
                        building: customer.building,
                        flat: customer.flat,

                        landmark: customer.landmark,
                        notes: customer.notes,
                    },
                });

                customerId = updatedCustomer.id;
            } else {
                const newCustomer = await tx.customer.create({
                    data: {
                        fullName: customer.fullName,
                        phone: customer.phone,
                        email: customer.email,

                        area: customer.area,
                        block: customer.block,
                        road: customer.road,
                        building: customer.building,
                        flat: customer.flat,

                        landmark: customer.landmark,
                        notes: customer.notes,
                    },
                });

                customerId = newCustomer.id;
            }

            // Create Order
            const order = await tx.order.create({
                data: {
                    orderNumber,
                    customerId,
                    total,
                    delivery,
                    paymentMethod: customer.paymentMethod,
                    status: OrderStatus.PENDING,
                },
            });

            createdOrderId = order.id;
            createdOrderNumber = order.orderNumber;

            // Create Order Items
            await tx.orderItem.createMany({
                data: cart.map((item) => ({
                    orderId: order.id,
                    productId: item.productId,
                    quantity: item.quantity,
                    price: item.price,
                })),
            });

        });

        revalidatePath("/admin/orders");
        revalidatePath("/admin");

        return {
            success: true,
            message: "Order placed successfully.",
            orderId: createdOrderId,
            orderNumber: createdOrderNumber,
        };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: "Failed to place order.",
        };
    } 
}