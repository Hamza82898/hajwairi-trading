import Link from "next/link";

interface CartSummaryProps {
    subtotal: number;
}

export default function CartSummary({
    subtotal,
}: CartSummaryProps) {
    const total = subtotal;

    return (
        <div className="rounded-2xl border p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold">
                Order Summary
            </h2>

            <div className="space-y-4">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{subtotal.toFixed(2)} BD</span>
                </div>


                <hr />

                <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>{total.toFixed(2)} BD</span>
                </div>

            </div>

            

            <Link
                href = "/checkout"
                className="mt-8 block w-full rounded-xl bg-green-700 py-4 text-center font-semibold text-white transition hover:bg-green-800"
            >
                Proceed to Checkout
            </Link>

        </div>
    );
}