import Link from "next/link";
import { Prisma } from "@prisma/client"

type CustomerWithOrders = Prisma.CustomerGetPayload<{
    include: {
        user: true;
        orders: true;
    };
}>;

interface Props {
    customers: CustomerWithOrders[];
}

export default function CustomersTable({
    customers,
}: Props) {
    return (
        <div className="overflow-hidden rounded-xl bg-white shadow">

            <table className="min-w-full">

                <thead className="border-b bg-gray-50">

                    <tr>
                        <th className="px-6 py-4 text-left">
                            Customer
                        </th>

                        <th className="px-6 py-4 text-left">
                            Phone
                        </th>

                        <th className="px-6 py-4 text-left">
                            Email
                        </th>

                        <th className="px-6 py-4 text-center">
                            Type
                        </th>

                        <th className="px-6 py-4 text-center">
                            Orders
                        </th>

                        <th className="px-6 py-4 text-right">
                            Total Spent
                        </th>

                        <th className="px-6 py-4 text-center">
                            Last Order
                        </th>

                        <th className="px-6 py-4 text-center">
                            Joined
                        </th>

                        <th className="px-6 py-4 text-center">
                            Actions
                        </th>
                    </tr>

                </thead>

                <tbody>
                    {customers.map((customer) => {
                        const totalSpent = customer.orders.reduce(
                            (sum, order) => sum + order.total,
                            0
                        );

                        const lastOrder =
                            customer.orders.length > 0
                                ? customer.orders[0]
                                : null;

                        return (
                            <tr
                                key={customer.id}
                                className="border-b hover:bg-gray-50"
                            >
                                <td className="px-6 py-5">
                                    <div className="font-semibold">
                                        {customer.fullName}
                                    </div>

                                    <div className="text-sm text-gray-500"> 
                                        {customer.area}
                                    </div>
                                    
                                </td>

                                <td className="px-6 py-5">
                                    {customer.phone}
                                </td>

                                <td className="px-6 py-5">
                                    {customer.email ?? "-"}
                                </td>

                                <td className="px-6 py-5 text-center">
                                    {customer.user ? (
                                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                            Registered
                                        </span>
                                    ) : (
                                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                                            Guest
                                        </span>
                                    )}
                                </td>

                                <td className="px-6 py-5 text-center">
                                    {customer.orders.length}
                                </td>

                                <td className="px-6 py-5 text-right font-medium">
                                    BD {totalSpent.toFixed(2)}
                                </td>

                                <td className="px-6 py-5 text-center">
                                    {lastOrder
                                        ? new Date(
                                            lastOrder.createdAt
                                        ).toLocaleDateString()
                                        : "-"}
                                </td>

                                <td className="px-6 py-5 text-center">
                                    {new Date(
                                        customer.createdAt
                                    ).toLocaleDateString()}
                                </td>

                                <td className="px-6 py-5 text-center">
                                    <Link
                                        href={`/admin/customers/${customer.id}`}
                                        className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                                    >
                                        View
                                    </Link>
                                </td>

                            </tr>
                        );
                    })}
                </tbody>

            </table>

        </div>
    );
}