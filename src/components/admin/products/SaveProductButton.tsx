"use client"

import { useFormStatus } from "react-dom";

export default function SaveProductButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-green-800 hover:shadow-md active:scale-[0.98] sm:w-auto sm:text-base disabled:cursor-not-allowed disabled:opacity-60"
        >
            {pending ? (
                <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Saving...
                </span>
            ) : (
                "Save Product"
            )}
        </button>
    );

}