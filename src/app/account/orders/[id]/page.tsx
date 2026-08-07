import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Circle } from "lucide-react";

import ReorderButton from "@/components/account/ReorderButton";
import PrintInvoiceButton from "@/components/admin/order/PrintInvoiceButton";
import Invoice from "@/components/shared/Invoice";

import "./print.css";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function OrderDetailsPage({
    params,
}: Props) {
    const session = await auth();

    if (!session?.user?.email) {
        redirect("/login");
    }

    const { id } = await params;

    const order = await prisma.order.findFirst({
        where: {
            id: Number(id),
            customer: {
                email: session.user.email,
            },
        },
        include: {
            customer: true,
            items: {
                include: {
                    product: {
                        include: {
                            images: true,
                        },
                    },
                },
            },
        },
    });

    if (!order) {
        notFound();
    }

    const steps = [
        {
            status: "PENDING",
            label: "Pending",
        },
        {
            status: "CONFIRMED",
            label: "Confirmed",
        },
        {
            status: "PROCESSING",
            label: "Processing",
        },
        {
            status: "SHIPPED",
            label: "Out For Delivery",
        },
        {
            status: "DELIVERED",
            label: "Delivered",
        },
    ];

    const currentStep = steps.findIndex(
        (step) => step.status === order.status
    );

    return (
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">

            {/* Page Header */}
            <div className="print-hidden">
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div className="min-w-0">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                            Order Details
                        </h1>

                        <p className="mt-2 break-all text-sm text-gray-500 sm:text-base">
                            Order #{order.orderNumber}
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

                        <Link
                            href="/account/orders"
                            className="rounded-xl border px-5 py-3 text-center text-sm font-semibold transition hover:bg-gray-100 sm:px-6"
                        >
                            Back to Orders
                        </Link>

                        <ReorderButton items={order.items} />

                        <PrintInvoiceButton />

                    </div>
                </div>

                {/* Order Details */}
                <div className="grid gap-8 lg:grid-cols-3">

                    {/* LEFT */}
                    <div className="space-y-6 lg:col-span-2">

                        {/* Ordered Items */}
                        <div className="rounded-3xl border bg-white p-5 shadow-sm sm:p-6">

                            <h2 className="mb-5 text-xl font-bold">
                                Ordered Items
                            </h2>

                            <div className="space-y-5">

                                {order.items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex flex-col gap-3 border-b pb-4 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                                    >
                                        <div className="min-w-0">
                                            <h3 className="truncate font-semibold">
                                                {item.product.name}
                                            </h3>

                                            <p className="mt-1 text-sm text-gray-500">
                                                Quantity: {item.quantity}
                                            </p>
                                        </div>

                                        <div className="shrink-0 text-left sm:text-right">
                                            <p className="font-semibold text-gray-900">
                                                BD{" "}
                                                {(
                                                    item.price *
                                                    item.quantity
                                                ).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                        {/* Shipping Address */}
                        <div className="rounded-3xl border bg-white p-5 shadow-sm sm:p-6">

                            <h2 className="mb-5 text-xl font-bold">
                                Shipping Address
                            </h2>

                            <div className="space-y-2 text-sm text-gray-600 sm:text-base">

                                <p className="font-semibold text-gray-900">
                                    {order.customer.fullName}
                                </p>

                                <p>
                                    {order.customer.phone}
                                </p>

                                {order.customer.email && (
                                    <p>
                                        {order.customer.email}
                                    </p>
                                )}

                                <p className="pt-2">
                                    Block {order.customer.block},
                                    {" "}Road {order.customer.road},
                                    {" "}Building {order.customer.building}
                                </p>

                                {order.customer.flat && (
                                    <p>
                                        Flat: {order.customer.flat}
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

                    {/* RIGHT */}
                    <div className="h-fit rounded-3xl border bg-white p-5 shadow-sm sm:p-6">

                        <h2 className="mb-6 text-2xl font-bold">
                            Summary
                        </h2>

                        <div className="space-y-4 text-sm sm:text-base">

                            <div className="flex items-center justify-between gap-4">
                                <span className="text-gray-500">
                                    Status
                                </span>

                                <span className="font-semibold">
                                    {order.status}
                                </span>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <span className="text-gray-500">
                                    Payment
                                </span>

                                <span>
                                    {order.paymentMethod}
                                </span>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <span className="text-gray-500">
                                    Subtotal
                                </span>

                                <span>
                                    BD {order.total.toFixed(2)}
                                </span>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <span className="text-gray-500">
                                    Delivery
                                </span>

                                <span>
                                    BD {order.delivery.toFixed(2)}
                                </span>
                            </div>

                            <hr />

                            <div className="flex items-center justify-between gap-4 text-lg font-bold sm:text-xl">
                                <span>
                                    Total
                                </span>

                                <span className="text-green-700">
                                    BD{" "}
                                    {(
                                        order.total +
                                        order.delivery
                                    ).toFixed(2)}
                                </span>
                            </div>

                            <hr className="my-6" />

                            {/* Order Progress */}
                            <h3 className="mb-5 text-lg font-bold">
                                Order Progress
                            </h3>

                            <div className="space-y-4">

                                {steps.map((step, index) => {

                                    const completed =
                                        currentStep >= 0 &&
                                        index <= currentStep;

                                    return (
                                        <div
                                            key={step.status}
                                            className="flex items-center gap-3"
                                        >
                                            {completed ? (
                                                <CheckCircle2
                                                    size={20}
                                                    className="shrink-0 text-green-600"
                                                />
                                            ) : (
                                                <Circle
                                                    size={20}
                                                    className="shrink-0 text-gray-300"
                                                />
                                            )}

                                            <span
                                                className={
                                                    completed
                                                        ? "font-semibold text-green-700"
                                                        : "text-gray-500"
                                                }
                                            >
                                                {step.label}
                                            </span>
                                        </div>
                                    );
                                })}

                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Shared Invoice */}
            <div className="invoice-print-area">
                <Invoice order={order} />
            </div>

        </main>
    );
}