"use client"

import Link from "next/link"
import { Prisma } from "@prisma/client";
import DeleteOrderButton from "./DeleteOrderButton";
import OrderStatusBadge from "./OrderStatusBadge";


type OrderWithRelations = Prisma.OrderGetPayload<{
    include: {
        customer: true;
        items: {
            include: {
                product: true;
            };
        };
    };
}>;

interface Props {
    orders: OrderWithRelations[];
}

function formatPaymentMethod(value: string) {
    return value
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function OrdersTable({
    orders,
}: Props) {
   
    return (
        <div className="overflow-x-auto rounded-xl bg-white shadow">
            <table className="min-w-full">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-5 py-4 text-left">
                            Order
                        </th>

                        <th className="px-5 py-4 text-left">
                            Customer
                        </th>

                        <th className="px-5 py-4 text-left">
                            Phone
                        </th>

                        <th className="px-5 py-4 text-right">
                            Total
                        </th>

                        <th className="px-5 py-4 text-right">
                            Delivery
                        </th>

                        <th className="px-5 py-4 text-left">
                            Payment
                        </th>

                        <th className="px-5 py-4 text-center">
                            Status
                        </th>

                        <th className="px-5 py-4 text-center">
                            Date
                        </th>

                        <th className="px-5 py-4 text-right">
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {orders.map((order) => (
                        <tr
                            key={order.id}
                            className="border-t transition hover:bg-gray-50"
                        >
                            <td className="px-5 py-4 font-semibold">
                                #{order.orderNumber}
                            </td>

                            <td className="px-5 py-4">
                                {order.customer.fullName}
                            </td>

                            <td className="px-5 py-4">
                                {order.customer.phone}
                            </td>

                            <td className="px-5 py-4 text-right font-medium">
                                BD {order.total.toFixed(2)}
                            </td>

                            <td className="px-5 py-4 text-right">
                                BD {order.delivery.toFixed(2)}
                            </td>

                            <td className="px-5 py-4">
                                {formatPaymentMethod(order.paymentMethod)}
                            </td>

                            <td className="px-5 py-4 text-center">
                                <OrderStatusBadge 
                                    status={order.status}
                                />
                            </td>

                            <td className="px-5 py-4 text-center">
                                {new Date(order.createdAt).toLocaleDateString()}
                            </td>

                            <td className="px-5 py-4">
                                <div className="flex justify-end gap-2">
                                    <Link
                                        href={`/admin/orders/${order.id}`}
                                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                                    >
                                        View
                                    </Link>
                                    {(order.status === "PENDING" ||
                                        order.status === "CANCELLED") && (
                                            <DeleteOrderButton orderId={order.id} /> 
                                    )}
                                </div>
                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    );
}