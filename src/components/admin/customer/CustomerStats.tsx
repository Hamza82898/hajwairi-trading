import { Prisma } from "@prisma/client";

type CustomerType = Prisma.CustomerGetPayload<{
    include: {
        orders: true;
    };
}>;

interface Props {
    customer: CustomerType;
}

export default function CustomerStats({
    customer,
}: Props) {
    const totalSpent = customer.orders.reduce(
        (sum, order) => sum + order.total,
        0
    );

    return (
        <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-6 text-2xl font-semibold">
                Statistics
            </h2>

            <div className="space-y-6">
                <div>
                    <p className="text-sm text-gray-500">
                        Total Orders
                    </p>

                    <p className="text-3xl font-bold">
                        {customer.orders.length}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Total Spending
                    </p>

                    <p className="text-3xl font-bold text-green-700">
                        BD {totalSpent.toFixed(2)}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Joined
                    </p>

                    <p className="font-medium">
                        {customer.createdAt.toLocaleDateString()}
                    </p>
                </div>
            </div>

        </div>
    );
}