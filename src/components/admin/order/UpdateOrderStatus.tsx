"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { OrderStatus, Prisma } from "@prisma/client";
import { updateOrderStatus } from "@/actions/order";
import DeleteOrderButton from "./DeleteOrderButton";
import OrderStatusBadge from "./OrderStatusBadge";



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

export default function UpdateOrderStatus({
    order,
}: Props) {
    const router = useRouter();

    const[status, setStatus] = useState<OrderStatus>(order.status);

    const [pending, startTransition] = useTransition();

    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);

    async function handleUpdate() {
        startTransition(async () => {
            const result = await updateOrderStatus(
                order.id,
                status
            );

            if (result.success) {
                setSuccess(true);
                setMessage(result.message);

                router.refresh();
            } else {
                setSuccess(false);
                setMessage(result.message);
            }
        });
    }

    return (
        <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-6 text-2xl font-semibold">
                Update Status
            </h2>
            <div className="mb-5 rounded-lg bg-gray-50 p-4">
                <p className="mb-2 text-sm text-gray-500">
                    Current Status
                </p>

                <OrderStatusBadge 
                    status={status}
                />
            </div>

            {message && (
                <div 
                    className={`mb-5 rounded-xl border p-3 text-sm ${
                        success
                            ? "border-green-300 bg-green-50 text-green-700"
                            : "border-red-300 bg-red-50 text-red-700"
                    }`}
                >
                    {message}
                </div>
            )}

            <select
                value={status}
                onChange={(e) => 
                    setStatus(e.target.value as OrderStatus)
                }
                className="w-full rounded-lg border p-3 transition focus:border-green-700 focus:outline-none"
            >
                {Object.values(OrderStatus).map((item) => (
                    <option
                        key={item}
                        value={item}
                    >
                        {item}
                    </option>
                ))}
            </select>

            <button
                onClick={handleUpdate}
                disabled={pending}
                className="mt-5 w-full rounded-lg bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800 hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
                {pending
                    ? "Updating..."
                    : "Update Status"
                }
            </button>

            {(order.status === OrderStatus.PENDING ||
                order.status === OrderStatus.CANCELLED) && (
                    <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-5">
                        <h3 className="mb-3 text-sm font-semibold text-red-700">
                            Danger Zone
                        </h3>

                        <DeleteOrderButton orderId={order.id} />
                    </div>
            )}
        </div>
    );
}