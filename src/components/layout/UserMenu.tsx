"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import {
    User,
    Package,
    LogOut,
    ChevronDown,
} from "lucide-react";
import {
    useState,
    useEffect,
    useRef,
} from "react";

interface Props {
    user: {
        name?: string | null;
        email?: string | null;
    };
}

export default function UserMenu({ user }: Props) {
    const [open, setOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        }

        function handleEscape(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClick);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <div
            ref={menuRef}
            className="relative"
        >
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm transition hover:border-green-700 hover:bg-green-50"
            >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700 text-white">
                    <User size={18} />
                </div>

                <div className="hidden text-left lg:block">
                    <p className="max-w-[140px] truncate text-sm font-semibold">
                        {user.name}
                    </p>

                    <p className="max-w-[140px] truncate text-xs text-gray-500">
                        {user.email}
                    </p>
                </div>

                <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                    }`}
                />
            </button>

            <div
                className={`absolute right-0 mt-3 w-72 origin-top-right overflow-hidden rounded-2xl border bg-white shadow-2xl transition-all duration-200 ${
                    open
                        ? "visible scale-100 opacity-100"
                        : "invisible scale-95 opacity-0"
                }`}
            >
                <div className="border-b bg-gray-50 p-5">
                    <p className="truncate font-bold">
                        {user.name}
                    </p>

                    <p className="truncate text-sm text-gray-500">
                        {user.email}
                    </p>
                </div>

                <Link
                    href="/account"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-5 py-4 transition hover:bg-green-50"
                >
                    <User size={18} />
                    My Account
                </Link>

                <Link
                    href="/my-orders"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-5 py-4 transition hover:bg-green-50"
                >
                    <Package size={18} />
                    My Orders
                </Link>

                <button
                    onClick={() =>
                        signOut({
                            callbackUrl: "/",
                        })
                    }
                    className="flex w-full items-center gap-3 px-5 py-4 text-left text-red-600 transition hover:bg-red-50"
                >
                    <LogOut size={18} />
                    Logout
                </button>
            </div>
        </div>
    );
}