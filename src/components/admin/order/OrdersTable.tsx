"use client"

import Link from "next/link"
import { Prisma, OrderStatus } from "@prisma/client";
import DeleteOrderButton from "./DeleteOrderButton";


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

export default function OrdersTable({
    orders,
}: Props) {
    function statusColor(status: OrderStatus) {
        switch (status) {

            case "PENDING":
                return "bg-yellow-100 text-yellow-700";

            case "CONFIRMED":
                return "bg-blue-100 text-blue-700";

            case "PROCESSING":
                return "bg-purple-100 text-purple-700";

            case "SHIPPED":
                return "bg-indigo-100 text-indigo-700";

            case "DELIVERED":
                return "bg-green-100 text-green-700";

            case "CANCELLED":
                return "bg-red-100 text-red-700";

            default:
                return "bg-gray-100 text-gray-700";
        }
    }

    return (
        <div className="overflow-hidden rounded-xl bg-white shadow">
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

                        <th className="px-5 py-4 text-left">
                            Total
                        </th>

                        <th className="px-5 py-4 text-left">
                            Delivery
                        </th>

                        <th className="px-5 py-4 text-left">
                            Payment
                        </th>

                        <th className="px-5 py-4 text-left">
                            Status
                        </th>

                        <th className="px-5 py-4 text-left">
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
                            className="border-t"
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

                            <td className="px-5 py-4">
                                BD {order.total.toFixed(2)}
                            </td>

                            <td className="px-5 py-4">
                                BD {order.delivery.toFixed(2)}
                            </td>

                            <td className="px-5 py-4">
                                {order.paymentMethod
                                    .replace("-", " ")
                                    .replace(/\b\w/g, (c:string) => c.toUpperCase())}
                            </td>

                            <td className="px-5 py-4">
                                <span
                                    className={`rounded-full px-3 py-1 text-sm ${statusColor(order.status)}`}
                                >
                                    {order.status}
                                </span>
                            </td>

                            <td className="px-5 py-4">
                                {new Date(order.createdAt).toLocaleDateString()}
                            </td>

                            <td className="px-5 py-4">
                                <div className="flex justify-end gap-2">
                                    <Link
                                        href={`/admin/orders/${order.id}`}
                                        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
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