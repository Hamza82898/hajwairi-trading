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

    const [isPending, startTransition] = useTransition();

    const handleDelete = () => {
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
        });
    };

    return (
        <button
            type="button"
            onClick={handleDelete}
            disabled={isPending}
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 disabled:opacity-50"
        >
            <span className="flex items-center gap-2">
                <Trash2 size={16} />
                {isPending ? "Deleting..." : "Delete"}
            </span>

        </button>
    );
}