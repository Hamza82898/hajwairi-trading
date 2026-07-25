"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Category } from "@prisma/client";



interface Props {
    category: Category;
}

export default function CategoryCard({
    category,
}: Props) {
    return (
        <Link
            href={`/shop?category=${category.slug}`}
            className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-green-200 hover:shadow-2xl"
        >
            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-green-50 to-orange-50">

                <Image 
                    src={category.image || "/placeholder.png"}
                    alt={category.name}
                    fill
                    className="object-contain p-6 transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

            </div>

            <div className="flex items-center justify-between p-6">

                <div>
                    <h3 className="text-xl font-bold text-gray-900 transition group-hover:text-green-900">
                        {category.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                        Explore Collection
                    </p>
                </div>

                <div className="rounded-full bg-green-100 p-3 transition-all duration-300 group-hover:bg-green-900">

                    <ArrowRight 
                        size={18}
                        className="text-green-900 transition group-hover:translate-x-1 group-hover:text-white"
                    />

                </div>

            </div>
        
        </Link>
    );
}