"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { useCartStore } from "@/store/cartStore";


interface ProductCardProps {
    id: number;
    slug: string;
    name: string;
    image: string;
    oldPrice: number;
    newPrice: number;
    badge: string;
    unit: string;
    rating: number;
    inStock: boolean;
}

export default function ProductCard({
    id,
    slug,
    name,
    image,
    oldPrice,
    newPrice,
    badge,
    unit,
}: ProductCardProps) {
    const { addToCart } = useCartStore();

    const discount = 
        oldPrice > 0
            ? Math.round(((oldPrice - newPrice) / oldPrice) * 100)
            : 0;

    return (
        <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:rounded-3xl">

            <Link href={`/products/${slug}`}>

                {/* Image */}

                <div className="relative flex h-44 items-center justify-center overflow-hidden bg-white sm:h-52 lg:h-[240px]">

                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width:768px)100vw,33vw"
                        className="object-contain p-4 transition duration-500 group-hover:scale-105"
                    />

                    {/* Discount */}

                    {discount > 0 && (
                        <span className="absolute left-3 top-3 rounded-full bg-red-500 px-2 py-1 text-[10px] font-bold text-white shadow-lg sm:left-4 sm:top-4 sm:px-3 sm:text-[11px]">
                            {discount}% OFF
                        </span>
                    )}

                    {/* Wishlist */}

                    <button
                        type="button"
                        aria-label="Add to wishlist"
                        onClick={(e) => e.preventDefault()}
                        className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:scale-110 hover:bg-red-500 hover:text-white sm:right-5 sm:top-5 sm:h-10 sm:w-10"
                    >
                        <Heart size={16} />
                    </button>

                    {/* Quick View */}

                    <button
                        type="button"
                        className="absolute right-3 top-13 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110 hover:bg-green-700 hover:text-white sm:right-4 sm:top-16 sm:h-10 sm:w-10"
                    >
                        <Eye size={16} />
                    </button>

                    <div className="absolute inset-0 bg-black/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                </div>

            </Link>

            {/*Product  Info*/}

            <div className="space-y-3 p-4 pb-20 sm:p-5 sm:pb-24">

                <Link href={`/products/${slug}`}>
                    <h3 className="line-clamp-2 min-h-[44px] text-base font-semibold text-gray-900 transition group-hover:text-green-700 sm:min-h-[52px] sm:text-lg">
                        {name}
                    </h3>
                </Link>

                <div className="flex flex-wrap items-center gap-2">

                    <span className="rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-medium text-green-700 sm:px-3 sm:text-xs">
                        {unit}
                    </span>

                    {badge && (
                        <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[11px] font-medium text-orange-600 sm:px-3 sm:text-xs">
                            {badge}
                        </span>
                    )}

                </div>

                {/*Price*/}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

                    <div>

                        <p className="text-2xl font-bold text-green-800 sm:text-3xl">
                            BD {newPrice.toFixed(2)}
                        </p>

                        {oldPrice > newPrice && (
                            <p className="text-sm text-gray-400 line-through">
                                BD {oldPrice.toFixed(2)}
                            </p>
                        )}

                    </div>

                    {oldPrice > newPrice && (
                        <span className="w-fit rounded-full bg-green-100 px-3 py-1 text-[11px] font-semibold text-green-700 sm:text-xs">
                            Save {(oldPrice - newPrice).toFixed(2)} BD
                        </span>
                    )}

                </div>

            </div>

            {/*Hover Add to Cart*/}
            <div className="absolute bottom-0 left-0 right-0 translate-y-0 px-4 pb-4 opacity-100 transition-all duration-300 sm:px-5 sm:pb-5 lg:translate-y-10 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">

                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();

                        addToCart({
                            id,
                            name,
                            image,
                            price: newPrice,
                        });
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-green-700 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-800 sm:gap-3 sm:py-3.5 sm:text-base"
                >
                    <ShoppingCart size={18} />
                    Add to Cart
                </button>

            </div>

        </div>
    );
}