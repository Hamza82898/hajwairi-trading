import { Prisma } from "@prisma/client";
import { Calendar, CreditCard, Receipt } from "lucide-react";
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
        <div className="rounded-2xl border bg-white p-4 shadow-sm sm:p-6 lg:p-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl font-bold sm:text-2xl">
                    Order Information
                </h2>

                <div className="print-hide w-full sm:w-auto">
                    <PrintInvoiceButton />
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <p className="mb-1 text-sm text-gray-500">
                        Order Number
                    </p>

                    <p className="flex items-center gap-2 break-all font-semibold">
                        <Receipt size={18} />
                        #{order.orderNumber}
                    </p>
                </div>

                <div>
                    <p className="mb-1 text-sm text-gray-500">
                        Order Date
                    </p>

                    <p className="flex items-center gap-2 font-semibold">
                        <Calendar 
                            size={18}
                            className="mt-0.5 shrink-0"
                        />
                        <span>
                            {new Date(order.createdAt).toLocaleString()}
                        </span>
                    </p>
                </div>

                <div>
                    <p className="mb-1 text-sm text-gray-500">
                        Payment Method
                    </p>

                    <p className="flex items-center gap-2 font-semibold capitalize break-words">
                        <CreditCard 
                            size={18}
                            className="shrink-0" 
                        />
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
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                    <span className="text-lg font-bold sm:text-xl">
                        Grand Total
                    </span>

                    <span className="text-2xl font-bold text-green-700 sm:text-3xl">
                        BD {grandTotal.toFixed(2)}
                    </span>

                </div>
            </div>
        </div>
    );
}