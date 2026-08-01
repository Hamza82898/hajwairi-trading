"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Package,
    User,
    Lock,
} from "lucide-react";

const links = [
    {
        href: "/account",
        label: "Dashboard",
        icon: LayoutDashboard,
    },
    {
        href: "/my-orders",
        label: "My Orders",
        icon: Package,
    },
    {
        href: "/account/edit",
        label: "Edit Profile",
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
        <aside className="rounded-2xl border bg-white p-4 shadow-sm sm:p-5">

            <h2 className="mb-5 text-lg font-bold sm:mb-6 sm:text-xl">
                My Account
            </h2>

            <nav className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:gap-2">

                {links.map((link) => {
                    const Icon = link.icon;

                    const active = pathname === link.href;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-medium transition sm:justify-start sm:px-4 sm:text-base ${
                                active
                                    ? "bg-green-700 text-white shadow-md"
                                    : "text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            <Icon className="h-5 w-5 shrink-0" />
                            <span className="truncate">
                                {link.label}
                            </span>
                        </Link>
                    );
                })}

            </nav>

        </aside>
    );
}