"use client"

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function CartPage() {
    const cart = useCartStore((state) => state.cart);

    if (cart.length === 0) {
        return (
            <main className="mx-auto flex max-w-5xl flex-col items-center py-24">

                <ShoppingCart 
                    size={80}
                    className="text-gray-300"
                />

                <h1 className="mt-6 text-3xl font-bold">
                    Your Cart is Empty
                </h1>

                <p className="mt-3 text-gray-500">
                    Add some fresh product to your cart.
                </p>

                <Link
                    href = "/shop"
                    className="mt-8 rounded-xl bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800"
                >
                    Continue Shopping
                </Link>

            </main>
        );
    }

    return (
        <main className="mx-auto max-w-7xl px-6 py-10">
            <h1 className="mb-10 text-4xl font-bold">
                Shopping Cart
            </h1>

            <p>
                Cart UI will be build in the next step
            </p>

        </main>
    );
}