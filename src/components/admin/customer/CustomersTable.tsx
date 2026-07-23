import Link from "next/link";
import { Prisma } from "@prisma/client"

type CustomerWithOrders = Prisma.CustomerGetPayload<{
    include: {
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
                            Area
                        </th>

                        <th className="px-6 py-4 text-center">
                            Orders
                        </th>

                        <th className="px-6 py-4 text-right">
                            Total Spending
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

                        return (
                            <tr
                                key={customer.id}
                                className="border-b hover:bg-gray-50"
                            >
                                <td className="px-6 py-5 font-semibold">
                                    {customer.fullName}
                                </td>

                                <td className="px-6 py-5">
                                    {customer.phone}
                                </td>

                                <td className="px-6 py-5">
                                    {customer.area}
                                </td>

                                <td className="px-6 py-5 text-center">
                                    {customer.orders.length}
                                </td>

                                <td className="px-6 py-5 text-right font-medium">
                                    BD {totalSpent.toFixed(2)}
                                </td>

                                <td className="px-6 py-5 text-center">
                                    {customer.createdAt.toLocaleDateString()}
                                </td>

                                <td className="px-6 py-5 text-center">
                                    <Link
                                        href={`/admin/customers/${customer.id}`}
                                        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
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