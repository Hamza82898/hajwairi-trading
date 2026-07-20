"use client"

import { useFormStatus } from "react-dom";

export default function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full rounded-lg bg-green-700 px-4 py-3 font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
        > 
            {pending ? "Signing In..." : "Sign In"}
        </button>
    );
}