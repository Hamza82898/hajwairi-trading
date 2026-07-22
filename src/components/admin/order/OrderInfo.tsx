import { Prisma } from "@prisma/client";

type OrderWithRelations = Prisma.OrderGetPayload<{
    include: {
        customer: true;
        items: {
            include: {
                product: {
                    include: {
                        images: true;
                    };
                };
            };
        };
    };
}>;

interface Props {
    order: OrderWithRelations;
}

export default function OrderInfo({
    order,
}: Props) {
    const grandTotal = order.total + order.delivery;

    return (
        <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-6 text-2xl font-semibold">
                Order Information
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
                <div>
                    <p className="text-sm text-gray-500">
                        Order Number
                    </p>

                    <p className="font-semibold">
                        #{order.orderNumber}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Order Date
                    </p>

                    <p className="font-semibold">
                        {new Date(order.createdAt).toLocaleString()}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Payment Method
                    </p>

                    <p className="font-semibold">
                        {order.paymentMethod}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Status
                    </p>

                    <p className="font-semibold">
                        {order.status}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Subtotal
                    </p>

                    <p className="font-semibold">
                        BD {order.total.toFixed(2)}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Delivery Charges
                    </p>

                    <p className="font-semibold">
                        BD {order.delivery.toFixed(2)}
                    </p>
                </div>

            </div>

            <div className="mt-8 border-t pt-5">
                <div className="flex items-center justify-between">

                    <span className="text-lg font-semibold">
                        Grand Total
                    </span>

                    <span className="text-2xl font-bold text-green-700">
                        BD {grandTotal.toFixed(2)}
                    </span>

                </div>
            </div>
        </div>
    );
}