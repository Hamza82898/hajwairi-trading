"use client"

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
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

            <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
                <div className="mx-auto flex max-w-7xl items-center gap-8 px-6 py-5">

                    {/*Logo*/}

                    <Link
                        href = "/"
                        className="text-3xl font-bold text-green-700"
                    >
                        Hajwairi Trading
                    </Link>

                    {/*Search*/}

                    <div className="flex-1">
                        <SearchBar />
                    </div>

                    {/*Right side*/}

                    <div className="flex items-center gap-4">

                        {/*Cart*/}

                        <Link
                            href = "/cart"
                            className="relative rounded-xl border p-3 transition hover:bg-gray-100"
                        >
                            <ShoppingCart size={24} />
                            {totalItems > 0 && (
                                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                                    {totalItems}
                                </span>
                            )}
                        </Link>

                        {/*Login*/}

                        <button className="rounded-lg bg-orange-500 px-6 py-2 text-white transition hover:bg-orange-600">
                            Login
                        </button>

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