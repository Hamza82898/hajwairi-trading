"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
    categoryId: number;
}

export default function DeleteCategoryImageButton({
    categoryId,
}: Props) {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    async function handleDelete() {
        if (!confirm("Delete this image?")) return;

        setLoading(true);

        try {
            const response = await fetch("/api/category-image", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: categoryId,
                }),
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.message);
            }

            router.refresh();
        } catch (error) {
            alert(
                error instanceof Error
                    ? error.message
                    : "Delete failed."
            );
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <button
            type="button"
            onClick={handleDelete}
            disabled={loading}
            className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700 disabled:opacity-60"
        >
            {loading ? "Deleting..." : "Delete Image"}
        </button>
    );
}