import Link from "next/link";
import { Prisma } from "@prisma/client";
import OrderStatusBadge from "../order/OrderStatusBadge";



type CustomerType = Prisma.CustomerGetPayload<{
    include: {
        orders: {
            include: {
                items: {
                    include: {
                        product: true,
                    };
                };
            };
        };
    };
}>;

interface Props {
    customer: CustomerType;
}

export default function CustomerOrders({
    customer,
}: Props) {
    return (
        <div className="rounded-2xl bg-white p-4 shadow sm:p-6">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <h2 className="text-xl font-bold sm:text-2xl">
                    Order History
                </h2>

                <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 sm:text-sm">
                    {customer.orders.length} Orders
                </span>
            </div>

            {customer.orders.length === 0 ? (
                <div className="rounded-xl border border-dashed p-10 text-center">
                    <p className="text-gray-500">
                        This customer has not placed any orders yet.
                    </p>
                </div>
            ) : (
                <div className="overflow-x-auto rounded-xl">

                    <table className="min-w-[760px] w-full">

                        <thead className="border-b bg-gray-500">
                            <tr>

                                <th className="px-4 py-3 text-left">
                                    Order #
                                </th>

                                <th className="px-4 py-3 text-left">
                                    Date
                                </th>

                                <th className="px-4 py-3 text-center">
                                    Items
                                </th>

                                <th className="px-4 py-3 text-right">
                                    Total
                                </th>

                                <th className="px-4 py-3 text-center">
                                    Status
                                </th>

                                <th className="px-4 py-3 text-center">
                                    Action
                                </th>

                            </tr>
                        </thead>

                        <tbody>
                            {customer.orders.map((order) => (
                                <tr
                                    key={order.id}
                                    className="border-b hover:bg-gray-50"
                                >
                                    <td className="px-4 py-4 font-semibold">
                                        #{order.orderNumber}
                                    </td>

                                    <td className="px-4 py-4">
                                        {new Date(
                                            order.createdAt
                                        ).toLocaleDateString()}
                                    </td>

                                    <td className="px-4 py-4 text-center">
                                        {order.items.length}
                                    </td>

                                    <td className="px-4 py-4 text-right font-semibold">
                                        BD {order.total.toFixed(2)}
                                    </td>

                                    <td className="px-4 py-4 text-center">
                                        <OrderStatusBadge 
                                            status={order.status}
                                        />
                                    </td>

                                    <td className="px-4 py-4 text-center">
                                        <Link
                                            href={`/admin/orders/${order.id}`}
                                            className="whitespace-nowrap rounded-lg bg-blue-600 px-3 py-2 text-sm text-white transition hover:bg-blue-700"
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