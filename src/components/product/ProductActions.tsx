"use client"

import QuantitySelector from "@/components/ui/QuantitySelector";
import { Heart, ShoppingCart } from "lucide-react"

export default function ProductActions() {
    return (
        <div className="mt-8">

            <QuantitySelector />

            <div className="mt-6 flex gap-4">

                <button className="flex-1 rounded-xl bg-green-700 px-6 py-4 font-semibold text-white transition hover:bg-green-800">

                    <div className="flex items-center justify-center gap-2">
                        <ShoppingCart size={20} />
                        <span>Add to Cart</span>
                    </div>
                </button>

                <button className="rounded-xl border p-4 transition hover:bg-gray-100">
                    <Heart size={22} />
                </button>
            </div>
        </div>
    );
}