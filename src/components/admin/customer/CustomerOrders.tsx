import Link from "next/link";
import { Prisma } from "@prisma/client";

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
        <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-6 text-2xl font-semibold">
                Order History
            </h2>

            {customer.orders.length === 0 ? (
                <p className="text-gray-500">
                    No orders found.
                </p>
            ) : (
                <table className="min-w-full">

                    <thead>
                        <tr className="border-b text-left">

                            <th className="pb-4">
                                Order
                            </th>

                            <th className="pb-4">
                                Date
                            </th>

                            <th className="pb-4">
                                Status
                            </th>

                            <th className="pb-4 text-right">
                                Total
                            </th>

                            <th className="pb-4 text-center">
                                Action
                            </th>

                        </tr>
                    </thead>

                    <tbody>
                        {customer.orders.map((order) => (
                            <tr
                                key={order.id}
                                className="border-b"
                            >
                                <td className="py-4">
                                    {order.orderNumber}
                                </td>

                                <td className="py-4">
                                    {order.createdAt.toLocaleDateString()}
                                </td>

                                <td className="py-4">
                                    {order.status}
                                </td>

                                <td className="py-4 text-right">
                                    BD {order.total.toFixed(2)}
                                </td>

                                <td className="py-4 text-center">
                                    <Link
                                        href={`/admin/orders/${order.id}`}
                                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                                    >
                                        View
                                    </Link>
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            )}

        </div>
    );
}