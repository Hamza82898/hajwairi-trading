import { Prisma } from "@prisma/client";

type LatestCustomersType = Prisma.CustomerGetPayload<{
    include: {
        orders: true,
    };
}>;

interface Props {
    customers: LatestCustomersType[];
}

export default function LatestCustomers({
    customers,
}: Props) {
    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                    Latest Customers
                </h2>

                <span className="text-sm text-gray-500">
                    Last 5 Customers
                </span>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full">

                    <thead className="border-b">

                        <tr className="text-left text-sm text-gray-500">

                            <th className="pb-3">
                                Customer
                            </th>

                            <th className="pb-3">
                                Phone
                            </th>

                            <th className="pb-3">
                                Area
                            </th>

                            <th className="pb-3 text-center">
                                Orders
                            </th>

                        </tr>

                    </thead>

                    <tbody>
                        {customers.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="py-8 text-center text-gray-500"
                                >
                                    No customers found.
                                </td>
                            </tr>
                        ) : (
                            customers.map((customer) => (
                                <tr
                                    key={customer.id}
                                    className="border-b last:border-none"
                                >
                                    <td className="py-4 font-medium">
                                        {customer.fullName}
                                    </td>

                                    <td className="py-4">
                                        {customer.phone}
                                    </td>

                                    <td className="py-4">
                                        {customer.area}
                                    </td>

                                    <td className="py-4 text-center">
                                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                            {customer.orders.length}
                                        </span>
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