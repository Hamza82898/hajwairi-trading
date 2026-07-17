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
        <div className="flex items-center gap-3">

            <label className="font-medium">
                Sort By:
            </label>

            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="rounded-lg border px-4 py-2 outline-none focus:border-green-700"
            >

                <option value="default">Default</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
                <option value="rating">Best Rated</option>

            </select>

        </div>
    );
}