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
        <div className="rounded-2xl border bg-white p-4 sm:p-6 shadow-sm">
            {/* Header */}
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl sm:text-2xl font-bold">
                    Latest Orders
                </h2>

                <Link
                    href="/admin/orders"
                    className="w-fit text-sm font-medium text-green-700 hover:underline"
                >
                    View All
                </Link>
            </div>

            {/* Table */}
            <div className="-mx-4 overflow-x-auto sm:mx-0">
                <table className="min-w-[700px] w-full">
                    <thead className="border-b">
                        <tr className="text-left text-sm text-gray-500">
                            <th className="px-4 pb-3 font-semibold">
                                Order
                            </th>

                            <th className="px-4 pb-3 font-semibold">
                                Customer
                            </th>

                            <th className="px-4 pb-3 font-semibold">
                                Total
                            </th>

                            <th className="px-4 pb-3 font-semibold">
                                Status
                            </th>

                            <th className="px-4 pb-3 text-right font-semibold">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="px-4 py-8 text-center text-gray-500"
                                >
                                    No orders found.
                                </td>
                            </tr>
                        ) : (
                            orders.map((order) => (
                                <tr
                                    key={order.id}
                                    className="border-b last:border-none hover:bg-gray-50 transition"
                                >
                                    <td className="px-4 py-4 font-semibold whitespace-nowrap">
                                        #{order.orderNumber}
                                    </td>

                                    <td className="px-4 py-4 whitespace-nowrap">
                                        {order.customer.fullName}
                                    </td>

                                    <td className="px-4 py-4 whitespace-nowrap">
                                        BD {order.total.toFixed(2)}
                                    </td>

                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                                            {order.status}
                                        </span>
                                    </td>

                                    <td className="px-4 py-4 text-right whitespace-nowrap">
                                        <Link
                                            href={`/admin/orders/${order.id}`}
                                            className="inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
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