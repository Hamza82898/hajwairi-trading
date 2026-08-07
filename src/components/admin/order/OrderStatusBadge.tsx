import { OrderStatus } from "@prisma/client";
import clsx from "clsx";
import {
    Clock3,
    CheckCircle2,
    LoaderCircle,
    Truck,
    PackageCheck,
    XCircle,
} from "lucide-react";

interface Props {
    status: OrderStatus;
}

const statusLabels: Record<OrderStatus, string> = {
    PENDING: "Pending",
    CONFIRMED: "Confirmed",
    PROCESSING: "Processing",
    SHIPPED: "Shipped",
    DELIVERED: "Delivered",
    CANCELLED: "Cancelled",
};

const statusStyles: Record<OrderStatus, string> = {
    PENDING: "bg-yellow-100 text-yellow-700 ring-yellow-200",
    CONFIRMED: "bg-blue-100 text-blue-700 ring-blue-200",
    PROCESSING: "bg-purple-100 text-purple-700 ring-purple-200",
    SHIPPED: "bg-indigo-100 text-indigo-700 ring-indigo-200",
    DELIVERED: "bg-green-100 text-green-700 ring-green-200",
    CANCELLED: "bg-red-100 text-red-700 ring-red-200",
};

function StatusIcon({ status }: { status: OrderStatus }) {
    const iconClass = "h-3.5 w-3.5 sm:h-4 sm:w-4";

    switch (status) {
        case "PENDING":
            return <Clock3 className={iconClass} />;

        case "CONFIRMED":
            return <CheckCircle2 className={iconClass} />;

        case "PROCESSING":
            return (
                <LoaderCircle
                    className={`${iconClass} animate-spin`}
                />
            );

        case "SHIPPED":
            return <Truck className={iconClass} />;

        case "DELIVERED":
            return <PackageCheck className={iconClass} />;

        case "CANCELLED":
            return <XCircle className={iconClass} />;

        default:
            return null;
    }
}

export default function OrderStatusBadge({
    status,
}: Props) {
    return (
        <span
            className={clsx(
                "inline-flex max-w-full items-center gap-1.5",
                "rounded-full px-2.5 py-1",
                "text-xs font-semibold sm:px-3 sm:py-1.5 sm:text-sm",
                "ring-1 ring-inset",
                "whitespace-nowrap",
                statusStyles[status]
            )}
        >
            <StatusIcon status={status} />

            <span>
                {statusLabels[status]}
            </span>
        </span>
    );
}