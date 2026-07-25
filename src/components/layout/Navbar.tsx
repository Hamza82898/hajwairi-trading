"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ShoppingCart,
    User,
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import TopBar from "./TopBar";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";

export default function Navbar() {
    const cart = useCartStore((state) => state.cart);

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <>
            <TopBar />

            <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-lg shadow-sm">

                <div className="mx-auto flex max-w-7xl items-center gap-8 px-6 py-5">

                    {/*Logo*/}

                    <Link
                        href="/"
                        className="flex items-center gap-3"
                    >
                        <Image 
                            src="/logo/logo.png"
                            alt="Hajwairi Trading"
                            width={90}
                            height={90}
                            priority
                            className="h-20 w-20 rounded-xl object-contain"
                        />

                        <div>
                            <h1 className="text-2xl font-extrabold tracking-tight text-green-900">
                                Hajwairi Trading
                            </h1>

                            <p className="text-xs text-gray-500">
                                Fresh Fruits + Vegetables
                            </p>
                        </div>
                    
                    </Link>

                    {/*Search*/}

                    <div className="hidden flex-1 lg:block">
                        <SearchBar />
                    </div>

                    {/*Right*/}

                    <div className="flex items-center gap-3">

                        <Link
                            href="/cart"
                            className="relative rounded-full border border-gray-200 p-3 transition hover:border-green-900 hover:bg-green-50"
                        >
                            <ShoppingCart size={23} />

                            {totalItems > 0 && (
                                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                                    {totalItems}
                                </span>

                            )}
                        
                        </Link>

                        <Link
                            href="/login"
                            className="hidden items-center gap-2 rounded-full bg-green-900 px-6 py-3 font-semibold text-white transition hover:bg-green-800 md:flex"
                        >
                            <User size={18} />
                            Login
                        </Link>

                    </div>

                </div>

                <div className="border-t">
                    <div className="mx-auto flex max-w-7xl px-6 py-4">

                        <NavLinks />
                    </div>
                </div>

            </header>
        
        </>
    );
}