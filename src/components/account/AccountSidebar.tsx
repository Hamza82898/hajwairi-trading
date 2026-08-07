"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShoppingBag, User, Lock, LogOut } from "lucide-react";
import clsx from "clsx";
import { signOut } from "next-auth/react";

const links = [
    {
        href: "/account",
        label: "Dashboard",
        icon: LayoutDashboard,
    },
    {
        href: "/account/orders",
        label: "My Orders",
        icon: ShoppingBag,
    },
    {
        href: "/account/profile",
        label: "Profile",
        icon: User,
    },
    {
        href: "/account/change-password",
        label: "Change Password",
        icon: Lock,
    },
];

export default function AccountSidebar() {
    const pathname = usePathname();

    return (
        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
            <div className="border-b p-6">
                <h2 className="text-2xl font-bold">
                    My Account
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                    Manage your account
                </p>
            </div>
            <nav className="p-3">
                {links.map((link) => {
                    const Icon = link.icon;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={clsx(
                                "mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition",
                                pathname === link.href
                                    ? "bg-green-700 text-white"
                                    : "text-gray-700 hover:bg-gray-100"  
                            )}
                        >
                            <Icon size={20} />
                            {link.label}
                        </Link>
                    );
                })}
                <button
                    onClick={() =>
                        signOut({
                            callbackUrl: "/",
                        })
                    }
                    className="mt-4 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-600 transition hover:bg-red-50"
                >
                    <LogOut size={20} />
                    Logout
                </button>
            </nav>
        </div>
    );
}