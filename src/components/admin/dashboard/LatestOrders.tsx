import Link from "next/link";
import { Prisma } from "@prisma/client";

type LatestOrdersType = Prisma.OrderGetPayload<{
    include: {
        customer: true;
    };
}>;

interface Props {
    orders: LatestOrdersType[];
}

export default function LatestOrders({
    orders,
}: Props) {
    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                    Latest Orders
                </h2>

                <Link
                    href="/admin/orders"
                    className="text-sm font-medium text-green-700 hover:underline"
                >
                    View All
                </Link>
            </div>

            <div className="overflow-x-auto">

                <table className="min-w-full">
                    <thead className="border-b">

                        <tr className="text-left text-sm text-gray-500">
                            <th className="pb-3">Order</th>
                            <th className="pb-3">Customer</th>
                            <th className="pb-3">Total</th>
                            <th className="pb-3">Status</th>
                            <th className="pb-3 text-right">
                                Action
                            </th>
                        </tr>

                    </thead>

                    <tbody>
                        {orders.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="py-8 text-center text-gray-500"
                                >
                                    No orders found.
                                </td>
                            </tr>
                        ) : (
                            orders.map((order) => (
                                <tr
                                    key={order.id}
                                    className="border-b last:border-none"
                                >
                                    <td className="py-4 font-medium">
                                        {order.orderNumber}
                                    </td>

                                    <td className="py-4">
                                        {order.customer.fullName}
                                    </td>

                                    <td className="py-4">
                                        BD {order.total.toFixed(2)}
                                    </td>

                                    <td className="py-4">
                                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                                            {order.status}
                                        </span>
                                    </td>

                                    <td className="py-4 text-right">
                                        <Link
                                            href={`/admin/orders/${order.id}`}
                                            className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                                        >
                                            View
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}