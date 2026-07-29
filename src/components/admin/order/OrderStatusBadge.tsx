import { OrderStatus } from "@prisma/client";
import clsx from "clsx";

interface Props {
    status: OrderStatus;
}

export default function OrderStatusBadge({
    status,
}: Props) {
    return (
        <span
            className={clsx(
                "rounded-full px-3 py-1 text-sm font-semibold",

                status === "PENDING" &&
                    "bg-yellow-100 text-yellow-700",

                status === "CONFIRMED" &&
                    "bg-blue-100 text-blue-700",

                status === "PROCESSING" &&
                    "bg-purple-100 text-purple-700",

                status === "SHIPPED" &&
                    "bg-indigo-100 text-indigo-700",

                status === "DELIVERED" &&
                    "bg-green-100 text-green-700",

                status === "CANCELLED" &&
                    "bg-red-100 text-red-700"
            )}
        >
            {status}
        </span>
    );
}