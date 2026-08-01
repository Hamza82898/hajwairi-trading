"use client"

interface SortProductsProps {
    value: string;
    onChange: (value: string) => void;
}

export default function SortProducts({
    value,
    onChange,
}: SortProductsProps) {
    return (
        <div className="flex items-center justify-between gap-3 sm:justify-end">

            <label className="text-sm font-medium whitespace-nowrap">
                Sort By:
            </label>

            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-green-700 sm:w-64"
            >

                <option value="default">Default</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
                <option value="rating">Best Rated</option>

            </select>

        </div>
    );
}