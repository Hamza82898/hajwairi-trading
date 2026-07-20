"use client"

import { deleteProduct } from "@/actions/product";

interface Props {
    id: number;
}

export default function DeleteProductButton({
    id,
}: Props) {
    async function handleDelete() {
        const confirmed = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmed) return;

        await deleteProduct(id);
    }

    return (
        <button
            onClick={handleDelete}
            className="rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700"
        >
            Delete
        </button>
    )
}