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
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
            <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />

            <span className="whitespace-nowrap">
                {pending ? "Deleting..." : "Delete Order"}
            </span>

        </button>
    );
}