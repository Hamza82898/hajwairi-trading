import Link from "next/link";
import { Apple, Carrot, ShoppingBasket } from "lucide-react";

const categories = [
    {
        name: "Fruits",
        icon: Apple,
        href: "/shop?category=Fruits",
        color: "bg-green-100 text-green-700",
    },
    {
        name: "Vegetables",
        icon: Carrot,
        href: "/shop?category=Vegetables",
        color: "bg-orange-100 text-orange-700",
    },
    {
        name: "Grocery",
        icon: ShoppingBasket,
        href: "/shop?category=Grocery",
        color: "bg-blue-100 text-blue-700",
    },
];

export default function CategoriesPage() {
    return (
        <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">

            {/* Heading */}

            <div className="mb-10 text-center sm:mb-12">

                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                    Shop by Category
                </h1>

                <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">
                    Browse fresh products by category and discover premium quality groceries delivered across Bahrain.
                </p>

            </div>

            {/* Categories */}

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

                {categories.map((category) => {
                    const Icon = category.icon;

                    return (
                        <Link
                            key={category.name}
                            href={category.href}
                            className="group"
                        >
                            <div
                                className="
                                    h-full
                                    rounded-2xl
                                    border
                                    border-gray-200
                                    bg-white
                                    p-6
                                    shadow-sm
                                    transition-all
                                    duration-300
                                    hover:-translate-y-2
                                    hover:border-green-200
                                    hover:shadow-xl
                                    sm:p-8
                                    lg:p-10
                                "
                            >

                                <div
                                    className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${category.color} transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20`}
                                >
                                    <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
                                </div>

                                <h2 className="mt-5 text-center text-xl font-bold text-gray-900 transition-colors group-hover:text-green-700 sm:mt-6 sm:text-2xl">
                                    {category.name}
                                </h2>

                                <p className="mt-3 text-center text-sm text-gray-500 sm:text-base">
                                    Browse premium{" "}
                                    {category.name.toLowerCase()}.
                                </p>

                            </div>
                        </Link>
                    );
                })}

            </div>

        </main>
    );
}