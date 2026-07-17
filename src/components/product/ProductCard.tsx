"use client"

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { Heart, ShoppingCart, Star, CheckCircle2, } from "lucide-react"


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

    const discount = Math.round(
        ((oldPrice - newPrice) / oldPrice) * 100
    );


    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duraion-300 hover:translate-y-1 hover:shadow-xl">

            <Link href={`/products/${slug}`}>
                <div className="relative h-64 overflow-hidden bg-gray-100">

                    <Image 
                        src = {image}
                        alt = {name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width:768px)100vw,25vw"
                    />

                    {/*Badge*/}

                    <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                        {badge}
                    </span>

                    {/*Discount*/}

                    <span className="absolute left-3 bottom-3 rounded-full bg-green-700 px-3 py-1 text-xs font-semibold text-white">
                        {discount}% OFF
                    </span>

                    {/*Wishlist*/}

                    <button className="absolute right-3 top-3 rounded-full bg-white p-2 shadow-md transition hover:bg-red-500 hover:text-white">
                        <Heart size={18} />
                    </button>
                </div>    
            </Link>

            <div className="space-y-3 p-5">

                <Link href={`/products/${slug}`}>
                    <h3 className="line-clamp-2 text-lg font-semibold transition hover:text-green-700">
                        {name}
                    </h3>
                </Link>

                <p className="text-sm text-gray-500">
                    Pack Size: {unit}
                </p>

                {/*Rating*/}

                <div className="flex items-center gap-1">

                    {Array.from({ length: rating}).map((_, index) => (
                        <Star 
                            key = {index}
                            size = {16}
                            className="fill-yellow-400 text-yellow-400"
                        />
                    ))}

                    <span className="ml-2 text-sm text-gray-500">
                        ({rating}.0)
                    </span>
                </div>

                {/*Stock*/}

                <div className="flex items-center gap-2 text-sm">

                    <CheckCircle2 
                        size = {18}
                        className={
                            inStock
                                ? "text-green-700"
                                : "text-red-600"   
                        }
                    />

                    <span 
                        className={
                            inStock
                                ? "text-green-700"
                                : "text-red-600"   
                        }
                    >
                        {inStock ? "In Stock" : "Out of Stock"}
                    </span>
                </div>

                {/*Price*/}

                <div className="flex items-end gap-2">

                    <span className="text-2xl font-bold text-green-700">
                        {newPrice.toFixed(2)} BD
                    </span>

                    <span className="text-sm text-gray-400 line-through">
                        {oldPrice.toFixed(2)} BD
                    </span>
                </div>

                {/*Button*/}

                <button 
                    onClick={(e) => {
                        e.preventDefault();

                        addToCart({
                            id,
                            name,
                            image,
                            price: newPrice,
                        });
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800"
                />

            </div>
        </div>
    );
}