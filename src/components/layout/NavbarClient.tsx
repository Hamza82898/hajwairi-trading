"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ShoppingCart,
    Menu,
    X,
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import TopBar from "./TopBar";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import { ReactNode, useState } from "react";



interface Props {
    children: ReactNode;
}

export default function NavbarClient({
    children,
}: Props) {
    const cart = useCartStore((state) => state.cart);

    const [mobileOpen, setMobileOpen] = useState(false);

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <>
            <TopBar />

            <header className="sticky top-0 z-50 border-b bg-white/95 shadow-sm backdrop-blur-lg">

                <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-6">

                    {/*Logo*/}

                    <Link
                        href="/"
                        className="flex min-w-0 items-center gap-3"
                    >
                        <Image 
                            src="/logo/logo.png"
                            alt="Hajwairi Trading"
                            width={90}
                            height={90}
                            priority
                            className="h-14 w-14 rounded-xl object-contain sm:h-16 sm:w-16 lg:h-20 lg:w-20"
                        />

                        <div className="min-w-0">
                            <h1 className="truncate text-lg font-extrabold tracking-tight text-green-900 sm:text-xl lg:text-2xl">
                                Hajwairi Trading
                            </h1>

                            <p className="hidden text-xs text-gray-500 sm:block">
                                Fresh Fruits + Vegetables
                            </p>
                        </div>
                    
                    </Link>

                    {/*Search*/}

                    <div className="hidden flex-1 px-6 lg:block">
                        <SearchBar />
                    </div>

                    {/*Right*/}

                    <div className="flex items-center gap-2 md:gap-3">

                        <Link
                            href="/cart"
                            className="relative rounded-full border border-gray-200 p-3 transition hover:border-green-900 hover:bg-green-50"
                        >
                            <ShoppingCart size={22} />

                            {totalItems > 0 && (
                                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                                    {totalItems}
                                </span>

                            )}
                        
                        </Link>

                        {/*Desktop Auth*/}
                        <div className="hidden lg:block">
                            {children}
                        </div>

                        {/*Mobile Menu*/}
                        <button
                            onClick={() => setMobileOpen(true)}
                            className="rounded-full border border-gray-200 p-3 transition hover:border-green-900 hover:bg-green-50 lg:hidden"
                        >
                            <Menu size={22} />
                        </button>

                    </div>

                </div>

                {/*Desktop Navigation*/}

                <div className="hidden border-t lg:block">
                    <div className="mx-auto flex max-w-7xl px-6 py-4">

                        <NavLinks />
                    </div>
                </div>

            </header>

            <div
                className={`fixed inset-0 z-[100] transition-all duration-300 lg:hidden ${
                    mobileOpen
                        ? "visible"
                        : "invisible" 
                }`}
            >
                {/*Backdrop*/}

                <div 
                    onClick={() => setMobileOpen(false)}
                    className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                        mobileOpen
                            ? "opacity-100"
                            : "opacity-0" 
                    }`}
                />

                {/*Drawer*/}
                <div
                    className={`absolute left-0 top-0 h-full w-[300px] bg-white shadow-xl transition-transform duration-300 ${
                        mobileOpen
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }`}
                >
                    <div className="flex items-center justify-between border-b p-5">
                        <h2 className="text-xl font-bold text-green-900">
                            Menu
                        </h2>

                        <button
                            onClick={() => setMobileOpen(false)}
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="p-5">
                        <SearchBar />

                        {/*Mobile Navigation*/}

                        <nav className="mt-8 flex flex-col">
                            <Link
                                href="/"
                                onClick={() => setMobileOpen(false)}
                                className="rounded-lg px-4 py-3 font-medium transition hover:bg-green-50 hover:text-green-700"
                            >
                                Home
                            </Link>

                            <Link
                                href="/shop"
                                onClick={() => setMobileOpen(false)}
                                className="rounded-lg px-4 py-3 font-medium transition hover:bg-green-50 hover:text-green-700"
                            >
                                Shop
                            </Link>

                            <Link
                                href="/categories"
                                onClick={() => setMobileOpen(false)}
                                className="rounded-lg px-4 py-3 font-medium transition hover:bg-green-50 hover:text-green-700"
                            >
                                Categories
                            </Link>

                            <Link
                                href="/offers"
                                onClick={() => setMobileOpen(false)}
                                className="rounded-lg px-4 py-3 font-medium transition hover:bg-green-50 hover:text-green-700"
                            >
                                Offers
                            </Link>

                            <Link
                                href="/about"
                                onClick={() => setMobileOpen(false)}
                                className="rounded-lg px-4 py-3 font-medium transition hover:bg-green-50 hover:text-green-700"
                            >
                                About
                            </Link>

                            <Link
                                href="/contact"
                                onClick={() => setMobileOpen(false)}
                                className="rounded-lg px-4 py-3 font-medium transition hover:bg-green-50 hover:text-green-700"
                            >
                                Contact
                            </Link>

                        </nav>

                        <div className="my-6 border-t" />

                        {/*Mobile Auth*/}
                        <div
                            onClick={() => setMobileOpen(false)}
                            className="flex flex-col gap-3"
                        >
                            {children}
                        </div>

                    </div>

                </div>

            </div>
        
        </>
    );
}