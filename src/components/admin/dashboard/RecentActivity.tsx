import Link from "next/link";
import {
    ShoppingCart,
    Clock3,
    CheckCircle2,
    Truck,
    XCircle,
} from "lucide-react";
import { Prisma, OrderStatus } from "@prisma/client";

type LatestOrder = Prisma.OrderGetPayload<{
    include: {
        customer: true;
    };
}>;

interface Props {
    orders: LatestOrder[];
}

const statusIcon = {
    PENDING: <Clock3 className="h-5 w-5 text-yellow-500" />,
    CONFIRMED: <CheckCircle2 className="h-5 w-5 text-blue-500" />,
    PROCESSING: <ShoppingCart className="h-5 w-5 text-purple-500" />,
    SHIPPED: <Truck className="h-5 w-5 text-cyan-500" />,
    DELIVERED: <CheckCircle2 className="h-5 w-5 text-green-600" />,
    CANCELLED: <XCircle className="h-5 w-5 text-red-500" /> 
};

const statusBadge = {
    PENDING: "bg-yellow-100 text-yellow-700",
    CONFIRMED: "bg-blue-100 text-blue-700",
    PROCESSING: "bg-purple-100 text-purple-700",
    SHIPPED: "bg-cyan-100 text-cyan-700",
    DELIVERED: "bg-green-100 text-green-700",
    CANCELLED: "bg-red-100 text-red-700",
};

export default function RecentActivity({
    orders,
}: Props) {
    return (
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                        Activity
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        Recent Orders
                    </h2>
                </div>

                <div className="rounded-xl bg-green-100 px-3 py-2 text-sm font-semibold text-green-700">
                    {orders.length} Recent
                </div>
            </div>

            
            {orders.length === 0 ? (
                <div className="rounded-xl bg-gray-50 p-8 text-center text-gray-500">
                    No recent activity.
                </div>
            ) : (
                <div className="space-y-5">
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            className="flex items-start justify-between rounded-xl border p-4 hover:bg-gray-50"
                        >
                            <div className="flex items-center gap-4">
                                <div className="rounded-full bg-gray-100 p-3">
                                    {statusIcon[order.status]}
                                </div>
                                <div>
                                    <Link
                                        href={`/admin/orders/${order.id}`}
                                        className="text-green-700 hover:underline"
                                    >
                                        #{order.orderNumber}
                                    </Link>

                                    <p className="mt-1 text-sm text-gray-500">
                                        {order.customer.fullName}
                                    </p>

                                    <p className="text-xs text-gray-400">
                                        {order.createdAt.toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                            <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                    statusBadge[order.status]
                                }`}
                            >
                                {order.status}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
