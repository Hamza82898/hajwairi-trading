import Link from "next/link";
import { Apple, Carrot, ShoppingBasket } from "lucide-react";

const categories = [
    {
        name: "Fruits",
        icon: Apple,
        href: "/shop?category=Fruits",
        color: "bg-green-100 text-green-700"
    },
    {
        name: "Vegetables",
        icon: Carrot,
        href: "/shop?category=Vegetables",
        color: "bg-orange-100 text-orange-700"
    },
    {
        name: "Grocery",
        icon: ShoppingBasket,
        href: "/shop?category=Grocery",
        color: "bg-blue-100 text-blue-700"
    },
];

export default function CategoriesPage() {
    return (
        <main className="mx-auto max-w-7xl px-6 py-12">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold">
                    Shop by Category
                </h1>

                <p className="mt-3 text-gray-600">
                    Browse fresh products by category.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {categories.map((category) => {
                    const Icon = category.icon;

                    return (
                        <Link 
                            key = {category.name}
                            href = {category.href}
                        >
                            <div className="group rounded-2xl border bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                                <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${category.color}`}>
                                    <Icon size={40} />
                                </div>

                                <h2 className="mt-6 text-center text-2xl font-bold group-hover:text-green-700">
                                    {category.name}
                                </h2>

                                <p className="mt-3 text-center text-gray-500">
                                    Browse premium {category.name.toLowerCase()}.
                                </p>

                            </div>
                        
                        </Link>
                    );
                })}

            </div>

        </main>
    );
}