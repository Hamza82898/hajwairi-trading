import { notFound } from "next/navigation";
import { getOrderById } from "@/lib/order/queries";

import OrderInfo from "@/components/admin/order/OrderInfo";
import CustomerInfo from "@/components/admin/order/CustomerInfo";
import OrderItems from "@/components/admin/order/OrderItems";
import UpdateOrderStatus from "@/components/admin/order/UpdateOrderStatus";
import OrderTimeline from "@/components/admin/order/OrderTimeline";
import "./print.css"


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
        <main className="space-y-6 lg:space-y-8">
            <div>
                <h1 className="break-all text-2xl font-bold sm:text-3xl lg:text-4xl">
                    Order #{order.orderNumber}
                </h1>

                <p className="mt-2 text-sm text-gray-500 sm:text-base">
                    Order Details
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                <div className="space-y-6 lg:col-span-2 lg:space-y-8">
                    <OrderInfo order={order} />

                    <OrderItems order={order} />

                </div>

                <div className="space-y-6 lg:space-y-8">

                    <CustomerInfo order={order} />

                    <OrderTimeline 
                        status={order.status}
                    />

                    <UpdateOrderStatus order={order} />

                </div>

            </div>
        </main>
    );
}