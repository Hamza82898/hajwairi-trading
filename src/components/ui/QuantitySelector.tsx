"use client";

import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
    quantity: number;
    onDecrease: () => void;
    onIncrease: () => void;
}

export default function QuantitySelector({
    quantity,
    onDecrease,
    onIncrease,
}: QuantitySelectorProps) {
    return (
        <div className="mt-8 flex w-fit items-center overflow-hidden rounded-xl border">

            <button
                onClick={onDecrease}
                className="p-3 transition hover:bg-gray-100"
            >
                <Minus size={18} />
            </button>

            <span className="min-w-16 border-x px-6 py-3 text-center font-semibold">
                {quantity}
            </span>

            <button
                onClick={onIncrease}
                className="p-3 transition hover:bg-gray-100"
            >
                <Plus size={18} />
            </button>

        </div>
    );
}