"use client";

import { Search } from "lucide-react";

interface ProductSearchProps {
    value: string;
    onChange: (value: string) => void;
}

export default function ProductSearch({
    value,
    onChange,
}: ProductSearchProps) {
    return (
        <div className="relative w-full">

            <Search
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            />

            <input
                type="text"
                placeholder="Search products..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    py-3
                    pl-12
                    pr-4
                    text-sm
                    text-gray-700
                    placeholder:text-gray-400
                    outline-none
                    transition-all
                    duration-200
                    focus:border-green-700
                    focus:ring-2
                    focus:ring-green-200
                    sm:py-3.5
                    sm:text-base
                "
            />

        </div>
    );
}