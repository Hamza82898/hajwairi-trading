import { Prisma } from "@prisma/client";

type CustomerType = Prisma.CustomerGetPayload<{
    include: {
        user: true;
        orders: true;
    };
}>;

interface Props {
    customer: CustomerType;
}

export default function CustomerStats({
    customer,
}: Props) {

    const totalOrders = customer.orders.length;

    const totalSpent = customer.orders.reduce(
        (sum, order) => sum + order.total,
        0
    );

    const averageOrder =
        totalOrders > 0
            ? totalSpent / totalOrders
            : 0;
    
    const firstOrders =
        totalOrders > 0
            ? customer.orders[customer.orders.length - 1]
            : null;

    const lastOrder =
        totalOrders > 0
            ? customer.orders[0]
            : null;

    return (
        <div className="rounded-2xl bg-white p-4 shadow sm:p-6">
            <h2 className="mb-6 text-xl font-bold sm:text-2xl">
                Statistics
            </h2>

            <div className="space-y-6">
                <div className="rounded-xl bg-gray-50 p-4 text-center">
                    <p className="text-sm text-gray-500">
                        Total Orders
                    </p>

                    <p className="mt-1 text-2xl font-bold sm:text-3xl">
                        {totalOrders}
                    </p>
                </div>

                <div className="rounded-xl bg-green-50 p-4 text-center">
                    <p className="text-sm text-gray-500">
                        Total Spending
                    </p>

                    <p className="mt-1 text-2xl font-bold text-green-700 sm:text-3xl">
                        BD {totalSpent.toFixed(2)}
                    </p>
                </div>

                <div className="rounded-xl bg-blue-50 p-4 text-center">
                    <p className="text-sm text-gray-500">
                        Average Order
                    </p>

                    <p className="mt-1 text-xl font-bold text-blue-700 sm:text-2xl">
                        BD {averageOrder.toFixed(2)}
                    </p>
                </div>

                <hr />

                <div>
                    <p className="text-sm text-gray-500">
                        First Order
                    </p>

                    <p className="font-semibold">
                        {firstOrders
                            ? new Date(firstOrders.createdAt).toLocaleDateString()
                            : "-"}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Last Order
                    </p>

                    <p className="font-semibold">
                        {lastOrder
                            ? new Date(lastOrder.createdAt).toLocaleDateString()
                            : "-"}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Customer Since
                    </p>

                    <p className="font-semibold">
                        {new Date(customer.createdAt).toLocaleDateString()}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Account Type
                    </p>

                    {customer.user ? (
                        <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 sm:text-sm">
                            Registered
                        </span>
                    ) : (
                        <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 sm:text-sm">
                            Guest
                        </span>
                    )}
                </div>
            </div>

        </div>
    );
}