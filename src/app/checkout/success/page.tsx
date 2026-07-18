"use client"

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function CheckoutSuccessPage() {
    return (
        <main className="mx-auto flex min-h-[80vh] max-w-3xl items-center justify-center px-6 py-16">
            <div className="w-full rounded-3xl border bg-white p-10 text-center shadow-lg">

                <CheckCircle2 
                    size={90}
                    className="mx-auto text-green-600"
                />

                <h1 className="mt-6 text-4xl font-bold">
                    Order Placed Successfully!
                </h1>

                <p className="mt-4 text-lg text-gray-600">
                    Thank you for shopping with Hajwairi Trading.
                </p>

                <p className="mt-2 text-gray-500">
                    We have received your order and will contact you shortly to confirm delivery.
                </p>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

                    <Link
                        href="/"
                        className="rounded-xl bg-green-700 px-8 py-3 font-semibold text-white transition hover:bg-green-800"
                    >
                        Back to Home
                    </Link>

                    <Link
                        href="/shop"
                        className="rounded-xl border px-8 py-3 font-semibold transition hover:bg-gray-100"
                    > 
                        Continue Shopping
                    </Link>

                </div>

            </div>

        </main>
    );
}