"use client"

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { deleteOrder } from "@/actions/order";

interface Props {
    orderId: number;
}

export default function DeleteOrderButton({
    orderId,
}: Props) {
    const router = useRouter();

    const [pending, startTransition] = useTransition();

    function handleDelete() {
        const confirmed = window.confirm(
            "Are you sure you want to delete this order?\n\nThis action cannot be undone."
        );

        if (!confirmed) return;

        startTransition(async () => {
            const result = await deleteOrder(orderId);

            if (!result.success) {
                alert(result.message);
                return;
            }

            router.push("/admin/orders");
            router.refresh();
        });
    };

    return (
        <button
            type="button"
            onClick={handleDelete}
            disabled={pending}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
        >
            <Trash2 size={18} />

            {pending
                ? "Deleting..."
                : "Delete Order"
            }

        </button>
    );
}