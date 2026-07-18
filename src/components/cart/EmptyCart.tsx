import Link from "next/link";
import { FunnelX, ShoppingCart } from "lucide-react";

export default function EmptyCard() {
    return (
        <div className="flex flex-col items-center py-24">
            <ShoppingCart 
                size={80}
                className="text-gary-300"
            />

            <h2 className="mt-6 text-3xl font-bold">
                Your Cart is Empry
            </h2>

            <p className="mt-3 text-gray-500">
                Add fresh products to your shopping cart.
            </p>

            <Link
                href = "/shop"
                className="mt-8 rounded-xl bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800"
            >  
                Continue Shopping
            </Link>

        </div>
    );
}