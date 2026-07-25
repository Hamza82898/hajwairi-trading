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
        <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <Link href={`/products/${slug}`}>

                {/*Image*/}
                <div className="relative flex h-[240px] items-center justify-center overflow-hidden bg-white">
                    <Image 
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width:768px)100vw,33vw"
                    />

                    {/*Discount*/}

                    {discount > 0 && (
                        <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-[11px] font-bold text-white shadow-lg">
                            {discount}% OFF
                        </span>
                    )}

                    
                    {/*Wishlist*/}

                    <button
                        type="button"
                        aria-label="Add to wishlist"
                        onClick={(e) => e.preventDefault()}
                        className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-red-500 hover:text-white"
                    >
                        <Heart 
                            size={18} 
                            className="transition-colors duration-300"
                        />
                    </button>

                    {/*Quick View*/}
                    <button
                        type="button"
                        className="absolute right-4 top-16 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110 hover:bg-green-700 hover:text-white"
                    >
                        <Eye size={18} />
                    </button>

                    {/*Hover Overlay*/}

                    <div className="absolute inset-0 bg-black/5 opacity-0 transition duration-500 group-hover:opacity-100" />
                </div>
                
            </Link>

            {/*Product  Info*/}

            <div className="space-y-3 p-5 pb-24">
                <Link href={`/products/${slug}`}>
                    <h3 className="line-clamp-2 min-h-[52px] text-lg font-semibold text-gray-900 transition group:hover:text-green-700" >
                        {name}
                    </h3>
                </Link>

                <div className="flex items-center gap-2">
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                        {unit}
                    </span>

                    {badge && (
                        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
                            {badge}
                        </span>
                    )}
                </div>

                {/*Price*/}
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-3xl font-bold text-green-800">
                            BD {newPrice.toFixed(2)}
                        </p>

                        {oldPrice > newPrice && (
                            <p className="text-sm text-gray-400 line-through">
                                BD {oldPrice.toFixed(2)}
                            </p>
                        )}

                    </div>

                    {oldPrice > newPrice && (
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                            Save {(oldPrice - newPrice).toFixed(2)} BD
                        </span>
                    )}
                </div>

            </div>

            {/*Hover Add to Cart*/}
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 opacity-0 translate-y-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
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
                        className="flex w-full items-center justify-center gap-3 rounded-full bg-green-700 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-800"
                    >
                        <ShoppingCart size={20} />
                        Add to Cart
                    </button>
            </div>

        </div>
    );
}