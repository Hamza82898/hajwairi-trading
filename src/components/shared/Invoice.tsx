import Image from "next/image";
import { Prisma } from "@prisma/client";

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

export default function Invoice({ order }: Props) {
    const grandTotal = order.total + order.delivery;

    return (
        <div
            id="invoice"
            className="
                mx-auto
                w-full
                max-w-5xl
                bg-white
                text-black
                print:max-w-none
                print:p-0
            "
        >
            {/* Invoice Content */}
            <div className="p-5 sm:p-8 lg:p-10">

                {/* Header */}
                <div className="flex flex-col gap-6 border-b pb-6 sm:flex-row sm:items-start sm:justify-between">

                    <div className="min-w-0">
                        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                            Hajwairi Trading Co. W.L.L
                        </h1>

                        <p className="mt-2 text-sm text-gray-500">
                            Bahrain
                        </p>
                    </div>

                    <div className="sm:text-right">
                        <h2 className="text-3xl font-extrabold tracking-wide sm:text-4xl">
                            INVOICE
                        </h2>

                        <p className="mt-2 text-sm font-semibold text-gray-700">
                            #{order.orderNumber}
                        </p>
                    </div>

                </div>

                {/* Customer + Order Information */}
                <div className="mt-8 grid gap-8 sm:grid-cols-2">

                    {/* Customer */}
                    <div>
                        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">
                            Bill To
                        </h3>

                        <div className="space-y-1 text-sm sm:text-base">

                            <p className="font-semibold">
                                {order.customer.fullName}
                            </p>

                            <p>
                                {order.customer.phone}
                            </p>

                            {order.customer.email && (
                                <p className="break-all">
                                    {order.customer.email}
                                </p>
                            )}

                            <div className="pt-2 text-gray-600">

                                <p>
                                    Block {order.customer.block},
                                    Road {order.customer.road},
                                </p>

                                <p>
                                    Building {order.customer.building}
                                </p>

                                {order.customer.flat && (
                                    <p>
                                        Flat {order.customer.flat}
                                    </p>
                                )}

                                <p>
                                    {order.customer.area}
                                </p>

                                {order.customer.landmark && (
                                    <p>
                                        Landmark: {order.customer.landmark}
                                    </p>
                                )}

                            </div>

                        </div>
                    </div>

                    {/* Order Information */}
                    <div className="sm:text-right">
                        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">
                            Order Information
                        </h3>

                        <div className="space-y-2 text-sm sm:text-base">

                            <p>
                                <span className="font-semibold">
                                    Date:
                                </span>{" "}
                                {new Date(
                                    order.createdAt
                                ).toLocaleString()}
                            </p>

                            <p>
                                <span className="font-semibold">
                                    Status:
                                </span>{" "}
                                {order.status}
                            </p>

                            <p>
                                <span className="font-semibold">
                                    Payment:
                                </span>{" "}
                                {order.paymentMethod}
                            </p>

                        </div>
                    </div>

                </div>

                {/* Products */}
                <div className="mt-10">

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[600px] border-collapse">

                            <thead>
                                <tr className="border-y bg-gray-50">

                                    <th className="px-3 py-3 text-left text-sm font-bold sm:px-4">
                                        Product
                                    </th>

                                    <th className="px-3 py-3 text-center text-sm font-bold sm:px-4">
                                        Qty
                                    </th>

                                    <th className="px-3 py-3 text-right text-sm font-bold sm:px-4">
                                        Unit Price
                                    </th>

                                    <th className="px-3 py-3 text-right text-sm font-bold sm:px-4">
                                        Total
                                    </th>

                                </tr>
                            </thead>

                            <tbody>

                                {order.items.map((item) => {

                                    const image =
                                        item.product.images.find(
                                            (img) => img.isPrimary
                                        )?.url ??
                                        item.product.images[0]?.url ??
                                        "/placeholder.png";

                                    const itemTotal =
                                        item.price * item.quantity;

                                    return (
                                        <tr
                                            key={item.id}
                                            className="border-b"
                                        >

                                            <td className="px-3 py-4 sm:px-4">

                                                <div className="flex items-center gap-3">

                                                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border bg-gray-50 sm:h-14 sm:w-14">

                                                        <Image
                                                            src={image}
                                                            alt={item.product.name}
                                                            fill
                                                            sizes="56px"
                                                            className="object-contain"
                                                        />

                                                    </div>

                                                    <div className="min-w-0">

                                                        <p className="font-semibold">
                                                            {item.product.name}
                                                        </p>

                                                        <p className="mt-1 text-xs text-gray-500">
                                                            {item.product.unit}
                                                        </p>

                                                    </div>

                                                </div>

                                            </td>

                                            <td className="px-3 py-4 text-center text-sm sm:px-4">
                                                {item.quantity}
                                            </td>

                                            <td className="px-3 py-4 text-right text-sm sm:px-4">
                                                BD{" "}
                                                {item.price.toFixed(2)}
                                            </td>

                                            <td className="px-3 py-4 text-right text-sm font-semibold sm:px-4">
                                                BD{" "}
                                                {itemTotal.toFixed(2)}
                                            </td>

                                        </tr>
                                    );
                                })}

                            </tbody>

                        </table>
                    </div>

                </div>

                {/* Totals */}
                <div className="mt-8 flex justify-end">

                    <div className="w-full max-w-sm space-y-3">

                        <div className="flex justify-between gap-6 text-sm sm:text-base">
                            <span className="text-gray-600">
                                Subtotal
                            </span>

                            <span className="font-medium">
                                BD {order.total.toFixed(2)}
                            </span>
                        </div>

                        <div className="flex justify-between gap-6 text-sm sm:text-base">
                            <span className="text-gray-600">
                                Delivery
                            </span>

                            <span className="font-medium">
                                BD {order.delivery.toFixed(2)}
                            </span>
                        </div>

                        <div className="border-t pt-4">

                            <div className="flex justify-between gap-6 text-xl font-extrabold sm:text-2xl">

                                <span>
                                    Grand Total
                                </span>

                                <span className="text-green-700">
                                    BD {grandTotal.toFixed(2)}
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Footer */}
                <div className="mt-14 border-t pt-8 text-center">

                    <h3 className="text-lg font-bold sm:text-xl">
                        Thank You For Shopping With Us
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                        Hajwairi Trading Co. W.L.L
                    </p>

                    <p className="text-sm text-gray-500">
                        Bahrain
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                        www.hajwairitrading.com
                    </p>

                    <p className="text-sm text-gray-500">
                        +973 3903 2710
                    </p>

                </div>

            </div>
        </div>
    );
}