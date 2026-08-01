"use client"

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

interface CartItemProps {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

export default function CartItem({
    id,
    name,
    image,
    price,
    quantity,
}: CartItemProps) {
    const {
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCartStore();

    return (
        <div className="group flex flex-col gap-5 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row sm:items-center sm:gap-6 sm:p-6">

            {/*Image*/}

            <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-orange-50 sm:mx-0 sm:h-32 sm:w-32">

                <Image 
                    src={image}
                    alt={name}
                    fill
                    className="object-contain p-3 transition duration-300 group-hover:scale-105"
                />
            </div>

            {/*Product Info*/}

            <div className="flex-1 text-center sm:text-left">
                <h2 className="text-lg font-bold text-gray-900 transition group-hover:text-green-700 sm:text-xl">
                    {name}
                </h2>

                <p className="mt-2 text-lg font-bold text-green-700">
                    {price.toFixed(2)} BD
                </p>
            </div>

            {/* <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    In Stock
                </span>

                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                    Free Delivery
                </span>
            </div> */}

            {/*Quantity*/}

            <div className="mx-auto flex items-center rounded-2xl border border-gray-200 bg-gray-50 sm:mx-0">

                <button
                    onClick={() => decreaseQuantity(id)}
                    className="p-3 transition hover:bg-white hover:text-green-700"
                >
                    <Minus size={18} />
                </button>

                <span className="min-w-14 border-x bg-white px-5 py-3 text-center font-bold">
                    {quantity}
                </span>

                <button
                    onClick={() => increaseQuantity(id)}
                    className="p-3 transition hover:bg-white hover:text-green-700"
                >
                    <Plus size={18} />
                </button>

            </div>

            {/*Total*/}

            <div className="w-full text-center sm:w-36 sm:text-right">

                <p className="text-xl font-black text-green-700 sm:text-2xl">
                    {(price * quantity).toFixed(2)} BD
                </p>

            </div>

            {/*Remove*/}

            <button
                onClick={() => removeFromCart(id)}
                className="mx-auto rounded-xl p-3 text-gray-400 transition hover:bg-red-50 hover:text-red-600 sm:mx-0"
            >
                <Trash2 size={20} />
            </button>

        </div>
    );
}