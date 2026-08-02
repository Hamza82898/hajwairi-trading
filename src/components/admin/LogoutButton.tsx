"use client"

import { signOut } from "next-auth/react";


export default function LogoutButton() {
    return (
        <button
            onClick={() =>
                signOut({
                    callbackUrl: "/login",
                })
            }
            className="w-full rounded-lg bg-red-600 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-red-700 hover:shadow-md active:scale-[0.98] sm:text-base"
        >
            Logout
        </button>
    );
}