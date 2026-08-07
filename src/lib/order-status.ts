import { OrderStatus } from "@prisma/client";

export function getOrderStatusColor(status: OrderStatus) {
    switch (status) {
        case "PENDING":
            return "bg-yellow-100 text-yellow-700";

        case "CONFIRMED":
            return "bg-blue-100 text-blue-700";

        case "PROCESSING":
            return "bg-purple-100 text-purple-700";

        case "SHIPPED":
            return "bg-cyan-100 text-cyan-700";

        case "DELIVERED":
            return "bg-green-100 text-green-700";

        case "CANCELLED":
            return "bg-red-100 text-red-700";

        default:
            return "bg-gray-100 text-gray-700";
    }
}

export function getOrderStatusLabel(status: OrderStatus) {
    switch (status) {
        case "PENDING":
            return "Pending";

        case "CONFIRMED":
            return "Confirmed";

        case "PROCESSING":
            return "Processing";

        case "SHIPPED":
            return "Shipped";

        case "DELIVERED":
            return "Delivered";

        case "CANCELLED":
            return "Cancelled";

        default:
            return status;
    }
}