import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Circle } from "lucide-react";
import ReorderButton from "@/components/account/ReorderButton";


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
                    product: true,
                },
            },
        },
    });

    if (!order) {
        notFound();
    }

    const steps = [
        "Pending",
        "Confirmed",
        "Processing",
        "Out For Delivery",
        "Delivered",
    ]

    const currentStep = steps.findIndex(
        (step) =>
            step.toLowerCase() === order.status.toLowerCase()
    );

    return (
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-6 lg:py-10">

            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>
                    <h1 className="text-3xl font-bold sm:text-4xl">
                        Order Details
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Order #{order.orderNumber}
                    </p>
                </div>

                <Link
                    href="/account/orders"
                    className="rounded-xl border px-6 py-3 text-center font-semibold hover:bg-gray-100"
                >
                    Back to Orders
                </Link>

                <ReorderButton orderId={order.id} />

            </div>

            <div className="grid gap-8 lg:grid-cols-3">

                {/* LEFT */}

                <div className="space-y-6 lg:col-span-2">

                    <div className="rounded-3xl border bg-white p-6 shadow-sm">

                        <h2 className="mb-5 text-xl font-bold">
                            Ordered Items
                        </h2>

                        <div className="space-y-5">

                            {order.items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col gap-3 border-b pb-4 sm:flex-row sm:items-center sm:justify-between"
                                >
                                    <div>
                                        <h3 className="font-semibold">
                                            {item.product.name}
                                        </h3>

                                        <p className="text-sm text-gray-500">
                                            Quantity: {item.quantity}
                                        </p>
                                    </div>

                                    <div className="text-left sm:text-right">
                                        <p className="font-semibold">
                                            BD {(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                    <div className="rounded-3xl border bg-white p-6 shadow-sm">

                        <h2 className="mb-5 text-xl font-bold">
                            Shipping Address
                        </h2>

                        <div className="space-y-2 text-gray-600">

                            <p>{order.customer.fullName}</p>

                            <p>{order.customer.phone}</p>

                            <p>
                                Block {order.customer.block},
                                Road {order.customer.road},
                                Building {order.customer.building}
                            </p>

                            {order.customer.flat && (
                                <p>
                                    Flat: {order.customer.flat}
                                </p>
                            )}

                            <p>{order.customer.area}</p>

                            {order.customer.landmark && (
                                <p>
                                    Landmark: {order.customer.landmark}
                                </p>
                            )}

                        </div>

                    </div>

                </div>

                {/* RIGHT */}

                <div className="rounded-3xl border bg-white p-6 shadow-sm h-fit">

                    <h2 className="mb-6 text-2xl font-bold">
                        Summary
                    </h2>

                    <div className="space-y-4">

                        <div className="flex justify-between">
                            <span>Status</span>
                            <span className="font-semibold">
                                {order.status}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span>Payment</span>
                            <span>
                                {order.paymentMethod}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>
                                BD {order.total.toFixed(2)}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span>Delivery</span>
                            <span>
                                BD {order.delivery.toFixed(2)}
                            </span>
                        </div>

                        <hr />

                        <div className="flex justify-between text-xl font-bold">

                            <span>Total</span>

                            <span>
                                BD {(order.total + order.delivery).toFixed(2)}
                            </span>

                        </div>

                        <hr className="my-6" />
                        <h3 className="mb-5 text-lg font-bold">
                            Order Progress
                        </h3>

                        <div className="space-y-4">
                            {steps.map((step, index) => {
                                const completed = index <= currentStep;

                                return (
                                    <div
                                        key={step}
                                        className="flex items-center gap-3"
                                    >
                                        {completed ? (
                                            <CheckCircle2 
                                                size={20}
                                                className="text-green-600"
                                            />
                                        ) : (
                                            <Circle
                                                size={20}
                                                className="text-gray-300"
                                            />
                                        )}

                                        <span
                                            className={
                                                completed
                                                    ? "font-semibold text-green-700"
                                                    : "text-gray-500"   
                                            }
                                        >
                                            {step}
                                        </span>  

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
}