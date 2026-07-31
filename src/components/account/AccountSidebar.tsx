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
        <aside className="rounded-2xl border bg-white p-5 shadow-sm">

            <h2 className="mb-6 text-xl font-bold">
                My Account
            </h2>

            <nav className="space-y-2">

                {links.map((link) => {
                    const Icon = link.icon;

                    const active = pathname === link.href;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                                active
                                    ? "bg-green-700 text-white"
                                    : "hover:bg-gray-100"
                            }`}
                        >
                            <Icon size={20} />
                            {link.label}
                        </Link>
                    );
                })}

            </nav>

        </aside>
    );
}