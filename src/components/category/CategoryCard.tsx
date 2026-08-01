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
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl lg:rounded-3xl lg:hover:-translate-y-2"
        >
            {/* Image */}

            <div className="relative h-36 overflow-hidden bg-gradient-to-br from-green-50 to-orange-50 sm:h-44 lg:h-56">

                <Image
                    src={category.image || "/placeholder.png"}
                    alt={category.name}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-110 sm:p-5 lg:p-6"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            </div>

            {/* Content */}

            <div className="flex items-center justify-between p-4 sm:p-5 lg:p-6">

                <div className="min-w-0">

                    <h3 className="truncate text-base font-bold text-gray-900 transition-colors group-hover:text-green-900 sm:text-lg lg:text-xl">
                        {category.name}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                        Explore Collection
                    </p>

                </div>

                <div className="ml-4 shrink-0 rounded-full bg-green-100 p-2 transition-all duration-300 group-hover:bg-green-900 sm:p-3">

                    <ArrowRight
                        size={16}
                        className="h-4 w-4 text-green-900 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white sm:h-5 sm:w-5"
                    />

                </div>

            </div>

        </Link>
    );
}