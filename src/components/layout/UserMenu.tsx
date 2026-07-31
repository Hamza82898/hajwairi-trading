"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { User, Package, LogOut, ChevronDown } from "lucide-react";
import { useState } from "react";

interface Props {
    user: {
        name?: string | null;
        email?: string | null;
    };
}

export default function UserMenu({ user }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative hidden md:block">

            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-3 rounded-full border bg-white px-4 py-2 shadow-sm hover:bg-gray-50"
            >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700 text-white">
                    <User size={18} />
                </div>

                <div className="text-left">
                    <p className="text-sm font-semibold">
                        {user.name}
                    </p>

                    <p className="text-xs text-gray-500">
                        {user.email}
                    </p>
                </div>

                <ChevronDown size={18} />
            </button>

            {open && (
                <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border bg-white shadow-xl">

                    <Link
                        href="/account"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-5 py-4 hover:bg-gray-300"
                    >
                        <User size={18} />
                        My Account
                    </Link>

                    <Link
                        href="/my-orders"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-5 py-4 hover:bg-gray-300"
                    >
                        <Package size={18} />
                        My Orders
                    </Link>

                    <button
                        onClick={() => signOut()}
                        className="flex w-full items-center gap-3 px-5 py-4 text-left text-red-600 hover:bg-red-100"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>

                </div>
            )}

        </div>
    );
}