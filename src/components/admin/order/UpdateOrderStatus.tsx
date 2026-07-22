"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { OrderStatus, Prisma } from "@prisma/client";
import { updateOrderStatus } from "@/actions/order";

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

    async function handleUpdate() {
        startTransition(async () => {
            const result = await updateOrderStatus(
                order.id,
                status
            );

            if (result.success) {
                setMessage("Order status updated successfully.");

                router.refresh();
            } else {
                setMessage(result.message);
            }
        });
    }

    return (
        <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-6 text-2xl font-semibold">
                Update Status
            </h2>

            {message && (
                <div className="mb-5 rounded-lg bg-green-100 p-3 text-sm text-green-700">
                    {message}
                </div>
            )}

            <select
                value={status}
                onChange={(e) => 
                    setStatus(e.target.value as OrderStatus)
                }
                className="w-full rounded-lg border p-3"
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
                className="mt-5 w-full rounded-lg bg-green-700 py-3 font-medium text-white hover:bg-green-800 disabled:opacity-60"
            >
                {pending
                    ? "Updating..."
                    : "Update Status"
                }
            </button>
        </div>
    );
}