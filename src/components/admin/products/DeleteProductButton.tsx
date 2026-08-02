"use client"

import { useTransition } from "react";
import { deleteProduct } from "@/actions/product";

interface Props {
    id: number;
}

export default function DeleteProductButton({
    id,
}: Props) {
    const [pending, startTransition] = useTransition();

    function handleDelete() {
        const confirmed = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmed) return;

        startTransition(async() => {
            await deleteProduct(id);
        });
    }

    return (
        <button
            onClick={handleDelete}
            disabled={pending}
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 hover:shadow-md active:scale-[0.98]"
        >
            {pending ? "Deleting..." : "Delete"}
        </button>
    )
}