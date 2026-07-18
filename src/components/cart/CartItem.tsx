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
        <div className="flex items-center gap-6 rounded-2xl border bg-white p-5 shadow-sm">

            {/*Image*/}

            <div className="relative h-28 w-28 overflow-hidden rounded-xl bg-gray-100">

                <Image 
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>

            {/*Product Info*/}

            <div className="flex-1">
                <h2 className="text-xl font-semibold">
                    {name}
                </h2>

                <p className="mt-2 text-lg font-bold text-green-700">
                    {price.toFixed(2)} BD
                </p>
            </div>

            {/*Quantity*/}

            <div className="flex items-center overflow-hidden rounded-xl border">

                <button
                    onClick={() => decreaseQuantity(id)}
                    className="p-3 hover:bg-gray-100"
                >
                    <Minus size={18} />
                </button>

                <span className="min-w-14 border-x px-5 py-3 text-center font-semibold">
                    {quantity}
                </span>

                <button
                    onClick={() => increaseQuantity(id)}
                    className="p-3 hover:bg-gray-100"
                >
                    <Plus size={18} />
                </button>

            </div>

            {/*Total*/}

            <div className="w-28 text-right">

                <p className="text-xl font-bold">
                    {(price * quantity).toFixed(2)} BD
                </p>

            </div>

            {/*Remove*/}

            <button
                onClick={() => removeFromCart(id)}
                className="rounded-lg p-3 text-red-600 transition hover:bg-red-50"
            >
                <Trash2 size={20} />
            </button>

        </div>
    );
}