"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RotateCcw } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

interface Item {
    product: {
        id: number;
        name: string;
        slug: string;
        newPrice: number;
        images?: {
            url: string;
        }[];
    };

    quantity: number;
}

interface Props {
    items: Item[];
}

export default function ReorderButton({
    items,
}: Props) {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const addToCart = useCartStore(
        (state) => state.addToCart
    );

    function handleReorder() {
        if (items.length === 0) {
            return;
        }

        setLoading(true);

        items.forEach((item) => {
            addToCart(
                {
                    id: item.product.id,
                    name: item.product.name,
                    price: item.product.newPrice,
                    image:
                        item.product.images?.[0]?.url ??
                        "",
                },
                item.quantity
            );
        });

        router.push("/cart");
    }

    return (
        <button
            type="button"
            onClick={handleReorder}
            disabled={loading || items.length === 0}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
            <RotateCcw
                size={18}
                className={loading ? "animate-spin" : ""}
            />

            <span>
                {loading ? "Adding..." : "Reorder"}
            </span>
        </button>
    );
}