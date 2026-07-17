"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function QuantitySelector() {
    const [quantity, setQuantity] = useState(1);

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increase = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className="mt-8 flex w-fit items-center overflow-hidden rounded-xl border">

            <button 
                onClick={decrease}
                className="p-3 transition hover:bg-gray-100"
            >
                <Minus size={18} />
            </button>

            <span className="min-w-16 border-x px-6 py-3 text-center font-semibold">
                {quantity}
            </span>

            <button 
                onClick={increase}
                className="p-3 transition hover:bg-gray-100"
            >
                <Plus size={18} />
            </button>

        </div>
    );
}