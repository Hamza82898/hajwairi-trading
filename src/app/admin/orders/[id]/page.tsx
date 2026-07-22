import { notFound } from "next/navigation";
import { getOrderById } from "@/lib/order/queries";

import OrderInfo from "@/components/admin/order/OrderInfo";
import CustomerInfo from "@/components/admin/order/CustomerInfo";
import OrderItems from "@/components/admin/order/OrderItems";
import UpdateOrderStatus from "@/components/admin/order/UpdateOrderStatus";


interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function OrderDetailsPage({
    params,
}: Props) {
    const { id } = await params;

    const order = await getOrderById(Number(id));

    if (!order) {
        notFound();
    }

    return (
        <main className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold">
                    Order #{order.orderNumber}
                </h1>

                <p className="mt-2 text-gray-500">
                    Order Details
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                <div className="space-y-8 lg:col-span-2">
                    <OrderInfo order={order} />

                    <OrderItems order={order} />

                </div>

                <div className="space-y-8">

                    <CustomerInfo order={order} />

                    <UpdateOrderStatus order={order} />

                </div>

            </div>
        </main>
    );
}