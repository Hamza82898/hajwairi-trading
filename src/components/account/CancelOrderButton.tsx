"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { XCircle } from "lucide-react";

import { cancelOwnOrder } from "@/actions/accountOrder";

interface Props {
    orderId: number;
}

export default function CancelOrderButton({
    orderId,
}: Props) {
    const router = useRouter();

    const [pending, startTransition] =
        useTransition();

    function handleCancel() {
        if (
            !confirm(
                "Are you sure you want to cancel this order?"
            )
        ) {
            return;
        }

        startTransition(async () => {
            const result =
                await cancelOwnOrder(orderId);

            alert(result.message);

            if (result.success) {
                router.refresh();
            }
        });
    }

    return (
        <button
            onClick={handleCancel}
            disabled={pending}
            className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
        >
            <span className="flex items-center gap-2">
                <XCircle size={18} />
                {pending
                    ? "Cancelling..."
                    : "Cancel Order"}
            </span>
        </button>
    );
}