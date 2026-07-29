import { Prisma } from "@prisma/client";
import { Calendar, CreditCard, Printer, Receipt } from "lucide-react";
import PrintInvoiceButton from "./PrintInvoiceButton";
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



export default function OrderInfo({
    order,
}: Props) {
    const grandTotal = order.total + order.delivery;

    return (
        <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                    Order Information
                </h2>

                <div className="print-hide">
                    <PrintInvoiceButton />
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <p className="mb-1 text-sm text-gray-500">
                        Order Number
                    </p>

                    <p className="flex items-center gap-2 font-semibold">
                        <Receipt size={18} />
                        #{order.orderNumber}
                    </p>
                </div>

                <div>
                    <p className="mb-1 text-sm text-gray-500">
                        Order Date
                    </p>

                    <p className="flex items-center gap-2 font-semibold">
                        <Calendar size={18} />
                        {new Date(order.createdAt).toLocaleString()}
                    </p>
                </div>

                <div>
                    <p className="mb-1 text-sm text-gray-500">
                        Payment Method
                    </p>

                    <p className="flex items-center gap-2 font-semibold capitalize">
                        <CreditCard size={18} />
                        {order.paymentMethod}
                    </p>
                </div>

                <div>
                    <p className="mb-1 text-sm text-gray-500">
                        Order Status
                    </p>

                    <OrderStatusBadge 
                        status={order.status}
                    />
                </div>

                <div>
                    <p className="mb-1 text-sm text-gray-500">
                        Subtotal
                    </p>

                    <p className="font-semibold">
                        BD {order.total.toFixed(2)}
                    </p>
                </div>

                <div>
                    <p className="mb-1 text-sm text-gray-500">
                        Delivery Charges
                    </p>

                    <p className="font-semibold">
                        BD {order.delivery.toFixed(2)}
                    </p>
                </div>

            </div>

            <div className="mt-8 border-t pt-6">
                <div className="flex items-center justify-between">

                    <span className="text-xl font-bold">
                        Grand Total
                    </span>

                    <span className="text-3xl font-bold text-green-700">
                        BD {grandTotal.toFixed(2)}
                    </span>

                </div>
            </div>
        </div>
    );
}