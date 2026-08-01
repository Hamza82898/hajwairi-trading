import Link from "next/link";

interface CartSummaryProps {
    subtotal: number;
}

export default function CartSummary({
    subtotal,
}: CartSummaryProps) {
    const total = subtotal;

    return (
        <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-28">
            <h2 className="mb-5 text-xl font-bold sm:mb-6 sm:text-2xl">
                Order Summary
            </h2>

            <div className="space-y-4">
                <div className="flex items-center justify-between text-sm sm:text-base">
                    <span>Subtotal</span>
                    <span>{subtotal.toFixed(2)} BD</span>
                </div>


                <hr />

                <div className="flex items-center justify-between text-lg font-bold sm:text-xl">
                    <span>Total</span>
                    <span>{total.toFixed(2)} BD</span>
                </div>

            </div>

            

            <Link
                href = "/checkout"
                className="mt-6 block w-full rounded-xl bg-green-700 py-3 text-center font-semibold text-white transition hover:bg-green-800 sm:mt-8 sm:py-4"
            >
                Proceed to Checkout
            </Link>

        </div>
    );
}