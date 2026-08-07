import Link from "next/link";
import { Order } from "@prisma/client";
import OrderStatusBadge from "@/components/admin/order/OrderStatusBadge";

interface Props {
    orders: Order[];
}

export default function RecentOrders({
    orders,
}: Props) {
    return (
        <div className="rounded-3xl border bg-white shadow-sm">
            <div className="flex flex-col gap-4 border-b p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-2xl font-bold">
                        Recent Orders
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                        Your latest purchases
                    </p>
                </div>
                <Link
                    href="/account/orders"
                    className="rounded-xl bg-green-700 px-5 py-2 text-center text-sm font-medium text-white transition hover:bg-green-800"
                >
                    View All
                </Link>
            </div>
            {orders.length === 0 ? (
                <div className="p-12 text-center">
                    <h3 className="text-lg font-semibold text-gray-700">
                        No Orders Yet
                    </h3>
                    <p className="mt-2 text-gray-500">
                        You haven't placed any orders yet.
                    </p>
                    <Link
                        href="/shop"
                        className="mt-6 inline-block rounded-xl bg-green-700 px-6 py-3 font-medium text-white transition hover:bg-green-800"
                    >
                        Start Shopping
                    </Link>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Order
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Date
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Total
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Status
                                </th>
                                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr
                                    key={order.id}
                                    className="border-t transition hover:bg-gray-50"
                                >
                                    <td className="px-6 py-5 font-semibold whitespace-nowrap">
                                        #{order.orderNumber}
                                    </td>
                                    <td className="px-6 py-5 whitespace-nowrap">
                                        {new Date(order.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-5 whitespace-nowrap font-semibold">
                                        BD {(Number(order.total) + Number(order.delivery)).toFixed(2)}
                                    </td>
                                    <td className="px-6 py-5 whitespace-nowrap">
                                        <OrderStatusBadge 
                                            status={order.status}
                                        />
                                    </td>
                                    <td className="px-6 py-5 text-right whitespace-nowrap">
                                        <Link
                                            href={`/account/orders/${order.id}`}
                                            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                                        >
                                            View
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}