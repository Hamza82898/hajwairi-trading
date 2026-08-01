"use client"

import { useFormStatus } from "react-dom";

export default function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full rounded-xl bg-green-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-green-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:py-3.5 sm:text-base"
        > 
            {pending ? "Signing In..." : "Sign In"}
        </button>
    );
}