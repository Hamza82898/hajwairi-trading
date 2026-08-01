"use client"


interface CategoryFilterProps {
    categories: {
        id: number;
        name: string;
        slug: string;
    }[];
    selected: string;
    onSelect: (category: string) => void;
}

export default function CategoryFilter({
    categories,
    selected,
    onSelect,
}: CategoryFilterProps) {
    return (
        <div className="rounded-2xl border bg-white p-5 shadow-sm lg:p-6">
            <h2 className="mb-5 text-lg font-semibold lg:text-xl">
                Categories
            </h2>

            <div className="space-y-3">

                <button 
                    onClick={() => onSelect("")}
                    className={`w-full rounded-xl px-4 py-3 text-left font-medium transition ${
                        selected === ""
                        ? "bg-green-700 text-white"
                        : "border border-gray-200 hover:bg-gray-100"
                    }`}
                >
                    All Products
                </button>

                {categories.map((category) => (

                    <button
                        key = {category.id}
                        onClick = {() => onSelect(category.slug)}
                        className={`w-full rounded-xl px-4 py-3 text-left font-medium transition ${
                            selected === category.slug
                            ? "bg-green-700 text-white"
                            : "border border-gray-200 hover:bg-gray-100"
                        }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

        </div>
    );
}