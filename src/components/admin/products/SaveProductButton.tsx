"use client"

import { useFormStatus } from "react-dom";

export default function SaveProductButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="rounded-lg bg-green-700 px-6 py-3 text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
            {pending ? "Saving..." : "Save Product"}
        </button>
    );

}