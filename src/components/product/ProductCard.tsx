"use client"

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { Heart, ShoppingCart, Star, CheckCircle2, Award } from "lucide-react"


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
    inStock: boolean
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
    rating,
    inStock,
}: ProductCardProps) {
    const { addToCart } = useCartStore();

    const discount = 
        oldPrice > 0
            ? Math.round(((oldPrice - newPrice) / oldPrice) * 100)
            : 0;


    return (
        <div className="group relative overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:border-green-200 hover:shadow-2xl">

            <Link href={`/products/${slug}`}>
                <div className="relative h-[340px] overflow-hidden rounded-t-[28px] bg-gradient-to-br from-[#f5fff7] via-white to-[#fff8ef]">

                    <Image 
                        src = {image}
                        alt = {name}
                        fill
                        className="object-contain p-5 transition-all duration-700 group-hover:scale-105"
                        sizes="(max-width:768px)100vw,25vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                    {/*Discount*/}

                    {discount > 0 && (
                        <div className="absolute left-5 top-5 rounded-full bg-red-500 px-5 py-2 text-sm font-bold text-white shadow-xl">
                            {discount}% OFF
                        </div>
                    )}

                    {/*Badge*/}

                    {badge && (
                        <div className="absolute left-5 top-16 rounded-full bg-green-900 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                            {badge}
                        </div>
                    )}

                    {discount >= 20 && (
                        <div className="absolute -right-10 top-6 rotate-45 bg-orange-500 px-10 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                            BEST SELLER
                        </div>

                    )}

                    
                    {/*Wishlist*/}

                    <button 
                        type="button"
                        aria-label="Add to wishlist"
                        className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-red-500 hover:text-white"
                    >
                        <Heart size={18} />
                    </button>

                    

                    <button
                        type="button"
                        aria-label="Quick view"
                        className="absolute right-5 top-[78px] flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-green-900 hover:text-white"
                    >
                        👁
                    </button>
                </div>    
            </Link>

            <div className="space-y-4 p-6">

                <Link href={`/products/${slug}`}>
                    <h3 className="line-clamp-2 text-xl font-bold leading-7 text-gray-900 transition-all duration-300 group-hover:text-green-900">
                        {name}
                    </h3>
                </Link>

                <div className="inline-flex rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-900">
                    {unit}
                </div>

                <div className="flex flex-wrap gap-2">
                    <span className="inlin-flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-700">
                        <Award size={14} />
                        Premium Quality
                    </span>
                    <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                        Fresh Arrival
                    </span>
                </div>

                {/*Rating*/}

                <div className="flex items-center justify-between border-b border-gray-100 pb-4">

                    {Array.from({ length: Math.round(rating)}).map((_, index) => (
                        <Star 
                            key = {index}
                            size = {16}
                            className="fill-yellow-400 text-yellow-400"
                        />
                    ))}

                    <span className="rounded-full bg-yellow-50 px-3 py-1 text-sm font-semibold text-yellow-700">
                        {rating.toFixed(1)}
                    </span>
                </div>

                {/*Stock*/}

                <div className="flex items-center justify-between">

                    <div
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold ${
                            inStock
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-700" 
                        }`}
                    >
                        <CheckCircle2 size={16} />

                        {inStock ? "In Stock" : "Out of Stock"}
                    </div>

                    <div className="rounded-full bg-green-50 px-3 py-2 text-xs font-semibold text-green-900">
                        🚚 Free Delivery
                    </div>
                </div>

                {/*Price*/}

                <div className="flex items-center justify-between">
                    <div>

                        <p className="text-4xl font-black tracking-tight text-green-900">
                            BD {newPrice.toFixed(2)}
                        </p>

                        <p className="text-sm text-gray-400 line-through">
                            BD {oldPrice.toFixed(2)}
                        </p>
                    </div>
                    <div className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                        Save {(oldPrice - newPrice).toFixed(2)} BD
                    </div>
                </div>
                

                {/*Button*/}

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
                    className="group/cart mt-2 flex w-full items-center justify-center gap-3 rounded-full bg-green-900 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-2xl"
                >
                    <ShoppingCart 
                        size={20} 
                        className="transition-all duration-300 group-hover/cart:translate-x-1 group-hover/cart:scale-110"    
                    />
                    Add to Cart
                </button>

                <div className="flex items-center justify-between border-t pt-4 text-xs text-gray-500">
                    <span>🌿 Farm Fresh</span>
                    <span>🚚 Fast Delivery</span>
                    <span>🇧🇭 Bahrain</span>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-transparent transition-all duration-500 group-hover:ring-green-200" />

            </div>
        </div>
    );
}