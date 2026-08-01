"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { getOrderForReorder } from "@/actions/reorder";
import { useCartStore } from "@/store/cartStore";

interface Props {
    orderId: number;
}

export default function ReorderButton({
    orderId,
}: Props) {
    const router = useRouter();

    const clearCart = useCartStore((s) => s.clearCart);
    const addToCart = useCartStore((s) => s.addToCart);

    const [loading, startTransition] = useTransition();

    return (
        <button
            disabled={loading}
            onClick={() =>
                startTransition(async () => {
                    const result = await getOrderForReorder(orderId);

                    if (!result.success) {
                        alert(result.message);
                        return;
                    }

                    clearCart();
                    if (!result.success || !result.items) return;

                    result.items.forEach((item) => {
                        addToCart(
                            {
                                id: item.product.id,
                                name: item.product.name,
                                image:
                                    item.product.images[0]?.url ??
                                    "/placeholder.png",
                                price: item.price,
                            },
                            item.quantity
                        );
                    });

                    router.push("/cart");
                })
            }
            className="rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 disabled:opacity-50"
        >
            {loading ? "Loading..." : "Reorder"}
        </button>
    );
}