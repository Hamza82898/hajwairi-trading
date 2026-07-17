"use client"

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
        <div className="relative">

            <Search 
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input 
                type="text"
                placeholder="Search Products"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:border-green-700"
            />

        </div>
    );
}