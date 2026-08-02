import { Prisma } from "@prisma/client";

type LatestCustomersType = Prisma.CustomerGetPayload<{
    include: {
        orders: true;
    };
}>;

interface Props {
    customers: LatestCustomersType[];
}

export default function LatestCustomers({
    customers,
}: Props) {
    return (
        <div className="rounded-2xl border bg-white p-4 sm:p-6 shadow-sm">
            {/* Header */}
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl sm:text-2xl font-bold">
                    Latest Customers
                </h2>

                <span className="text-sm text-gray-500">
                    Last 5 Customers
                </span>
            </div>

            {/* Table */}
            <div className="-mx-4 overflow-x-auto sm:mx-0">
                <table className="min-w-[650px] w-full">
                    <thead className="border-b">
                        <tr className="text-left text-sm text-gray-500">
                            <th className="px-4 pb-3 font-semibold">
                                Customer
                            </th>

                            <th className="px-4 pb-3 font-semibold">
                                Phone
                            </th>

                            <th className="px-4 pb-3 font-semibold">
                                Area
                            </th>

                            <th className="px-4 pb-3 text-center font-semibold">
                                Orders
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {customers.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="px-4 py-8 text-center text-gray-500"
                                >
                                    No customers found.
                                </td>
                            </tr>
                        ) : (
                            customers.map((customer) => (
                                <tr
                                    key={customer.id}
                                    className="border-b last:border-none transition hover:bg-gray-50"
                                >
                                    <td className="px-4 py-4 font-semibold whitespace-nowrap">
                                        {customer.fullName}
                                    </td>

                                    <td className="px-4 py-4 whitespace-nowrap">
                                        {customer.phone}
                                    </td>

                                    <td className="px-4 py-4 whitespace-nowrap">
                                        {customer.area}
                                    </td>

                                    <td className="px-4 py-4 text-center whitespace-nowrap">
                                        <span className="inline-flex items-center justify-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
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