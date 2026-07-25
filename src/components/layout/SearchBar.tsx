"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <div className="relative">

            <Search 
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input 
                type="text"
                placeholder="Search fruits, vegetables, grocery...."
                className="w-full rounded-full border border-gray-200 bg-gray-50 py-3 pl-12 pr-5 text-sm transition focus:border-green-900 focus:bg-white focus:outline-none focus:ring-4 focus:ring-green-100"
            />

        </div>
    );
}