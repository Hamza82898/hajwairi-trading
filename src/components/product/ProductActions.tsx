"use client"

import QuantitySelector from "@/components/ui/QuantitySelector";
import { useState } from "react"
import { Heart, ShoppingCart } from "lucide-react"
import { useCartStore } from "@/store/cartStore";



interface ProductActionsProps {
    id: number;
    name: string;
    image: string;
    price: number;
}

export default function ProductActions({
    id,
    name,
    image,
    price,
}: ProductActionsProps) {
    
    const { addToCart } = useCartStore();

    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        setQuantity((prev) => prev + 1);
    };

    const decrease = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    return (
        <div className="mt-8">
            <QuantitySelector 
                quantity={quantity}
                onIncrease={increase}
                onDecrease={decrease}
            />

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">

                <button 
                    onClick = {() =>
                        addToCart(
                            {
                                id,
                                name,
                                image,
                                price,
                            },
                            quantity
                        )
                    }
                    className="flex-1 rounded-xl bg-green-700 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-green-800 sm:px-6 sm:py-4 sm:text-base"
                >
                    <div className="flex items-center justify-center gap-2">
                        <ShoppingCart size={20} />
                        <span>Add to Cart</span>
                    </div>
                </button>

                <button className="flex items-center justify-center rounded-xl border p-3 transition hover:bg-gray-100 sm:p-4">
                    <Heart size={22} />
                </button>

            </div>

        </div>
    );
}