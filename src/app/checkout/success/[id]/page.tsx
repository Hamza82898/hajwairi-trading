import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import PrintInvoiceButton from "@/components/checkout/PrintInvoiceButton";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function CheckoutSuccessPage({
    params,
}: Props) {
    const { id } = await params;

    const order = await prisma.order.findUnique({
        where: {
            id: Number(id),
        },
        include: {
            customer: true,
        },
    });

    if (!order) {
        notFound();
    }

    return (
        <main className="mx-auto flex min-h-[80vh] max-w-3xl items-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
            <div className="w-full rounded-2xl border bg-white p-6 text-center shadow-lg sm:rounded-3xl sm:p-8 lg:p-10">

                <CheckCircle2 
                    size={70}
                    className="mx-auto text-green-600 sm:h-20 sm:w-20"
                />

                <h1 className="mt-6 text-3xl font-bold sm:text-4xl">
                    Order Placed Successfully!
                </h1>

                <p className="mt-4 text-base text-gray-600 sm:text-lg">
                    Thank you for shopping with Hajwairi Trading.
                </p>

                <div className="mt-8 rounded-2xl bg-gray-50 p-4 text-left sm:p-6">
                    <p>
                        <strong>Order Number:</strong>{" "}
                        {order.orderNumber}
                    </p>

                    <p className="mt-2">
                        <strong>Customer:</strong>{" "}
                        {order.customer.fullName}
                    </p>

                    <p className="mt-2">
                        <strong>Phone:</strong>{" "}
                        {order.customer.phone}
                    </p>

                    <p className="mt-2">
                        <strong>Total:</strong>{" "}
                        {(order.total + order.delivery).toFixed(2)} BD
                    </p>

                    <p className="mt-2">
                        <strong>Status:</strong>{" "}
                        <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                            {order.status}
                        </span>
                        
                    </p>
                </div>

                <hr className="my-5" />

                <div className="rounded-xl bg-green-50 p-4 text-sm sm:text-base">
                    <h3 className="font-semibold text-green-700">
                        Estimated Delivery
                    </h3>

                    <p className="mt-2 text-gray-600">
                        Your order will be delivered within{" "}
                        <strong>24 hours</strong>{" "}
                        after confirmation.
                    </p>
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Link
                        href="/"
                        className="w-full rounded-xl bg-green-700 px-8 py-3 text-center font-semibold text-white hover:bg-green-800 sm:w-auto"
                    >
                        Back to Home
                    </Link>

                    <Link
                        href="/shop"
                        className="w-full rounded-xl border px-8 py-3 text-center font-semibold hover:bg-gray-100 sm:w-auto"
                    >
                        Continue Shopping
                    </Link>

                    <PrintInvoiceButton />
                </div>

                <div className="mt-8 rounded-xl border bg-gray-50 p-4 sm:p-5">
                    <h3 className="font-semibold">
                        Need Help?
                    </h3>

                    <p className="mt-2 text-gray-600">
                        Contact our support team on WhatsApp.
                    </p>

                    <a
                        href="https://wa.me/97339032710"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block w-full rounded-xl bg-green-600 px-6 py-3 text-center font-semibold text-white hover:bg-green-700 sm:w-auto"
                    >
                        WhatsApp Support
                    </a>
                </div>

            </div>
        </main>
    );
}