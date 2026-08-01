import Link from "next/link";
import { FunnelX, ShoppingCart } from "lucide-react";

export default function EmptyCard() {
    return (
        <div className="flex flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-24">
            <ShoppingCart 
                size={64}
                className="text-gray-300 sm:h-20 sm:w-20"
            />

            <h2 className="mt-6 text-2xl font-bold sm:text-3xl">
                Your Cart is Empty
            </h2>

            <p className="mt-3 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
                Add fresh products to your shopping cart.
            </p>

            <Link
                href = "/shop"
                className="mt-8 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 sm:px-8 sm:py-4"
            >  
                Continue Shopping
            </Link>

        </div>
    );
}