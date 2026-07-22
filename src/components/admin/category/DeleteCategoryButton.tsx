"use client"

import { useTransition } from "react";
import { deleteCategory } from "@/actions/category";

interface Props {
    id: number;
}

export default function DeleteCategoryButton({
    id,
}: Props) {
    const [pending, startTransition] = useTransition();

    function handleDelete() {
        if (!confirm("Delete this category?")) return;

        startTransition(async () => {
            const result = await deleteCategory(id);

            alert(result.message);

            if (result.success) {
                location.reload();
            }
        });
    }

    return (
        <button
            onClick={handleDelete}
            disabled={pending}
            className="rounded bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700 disabled:opacity-60"
        >
            {pending ? "Deleting..." : "Delete"}
        </button>
    );
}