"use client"

import { categories } from "@/data/categories";

interface CategoryFilterProps {
    selected: string;
    onSelect: (category: string) => void;
}

export default function CategoryFilter({
    selected,
    onSelect,
}: CategoryFilterProps) {
    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold">
                Categories
            </h2>

            <button 
                onClick={() => onSelect("")}
                className={`mb-3 block w-full rounded-lg px-4 py-2 text-left transition ${
                    selected === ""
                    ? "bg-green-700 text-white"
                    : "hover:bg-gray-100"
                }`}
            >
                All Products
            </button>

            {categories.map((category) => (

                <button
                    key = {category.id}
                    onClick = {() => onSelect(category.name)}
                    className={`mb-3 block w-full rounded-lg px-4 py-2 text-left transition ${
                        selected === category.name
                        ? "bg-green-700 text-white"
                        : "hover:bg-gray-100"
                    }`}
                >
                    {category.name}
                </button>
            ))}

        </div>
    );
}