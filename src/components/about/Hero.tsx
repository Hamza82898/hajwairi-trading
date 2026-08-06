import Link from "next/link";
import { ChevronRight, FunnelX, Leaf, ShoppingBag } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-green-100 via-white to-orange-100">
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />
            <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-24">
                <div className="max-w-2xl">
                    <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                        <Link
                            href="/"
                            className="transition hover:text-green-700"
                        >
                            Home
                        </Link>
                        <ChevronRight size={16} />
                        <span className="font-medium text-green-700">
                            About Us
                        </span>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-5 py-2 text-sm font-semibold text-green-700 shadow-sm">
                        <Leaf size={16} />
                        Trusted Grocery Partner in Bahrain
                    </span>
                    <h1 className="mt-8 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        Fresh Products
                        <span className="block text-green-700">
                            Delivered With Care
                        </span>
                    </h1>
                    <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                        Hajwairi Trading Company proudly supplies premium
                        quality fruits, vegetables, groceries, and daily
                        essentials across Bahrain. We are committed to freshness,
                        affordability, and fast delivery that families can trust.
                    </p>
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="/shop"
                            className="inline-flex items-center justify-center rounded-xl bg-green-700 px-8 py-4 text-base font-semibold text-white transition hover:bg-green-800"
                        >
                            <ShoppingBag className="mt-2 h-5 w-5" />
                            Shop Now
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-xl border border-green-700 px-8 py-4 text-base font-semibold text-green-700 transition hover:bg-green-50"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className="w-full max-w-md lg:max-w-lg">
                    <div className="rounded-3xl border border-white/50 bg-white/90 p-8 shadow-2xl backdrop-blur">
                        <h3 className="text-2xl font-bold text-gray-900">
                            Why Customers Trust Us
                        </h3>
                        <div className="mt-8 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                                    🌿
                                </div>
                                <div>
                                    <h4 className="font-semibold">
                                        Fresh Daily Stock
                                    </h4>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Carefully selected fresh fruits and vegetables.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
                                    🚚
                                </div>
                                <div>
                                    <h4 className="font-semibold">
                                        Fast Delivery
                                    </h4>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Reliable delivery service across Bahrain.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                                    ⭐
                                </div>
                                <div>
                                    <h4 className="font-semibold">
                                        Premium Quality
                                    </h4>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Quality products at competitive prices.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 grid grid-cols-2 gap-4">
                            <div className="rounded-2xl bg-green-50 p-5 text-center">
                                <p className="text-3xl font-bold text-green-700">
                                    100%
                                </p>
                                <p className="mt-2 text-sm text-gray-600">
                                    Fresh Products
                                </p>
                            </div>
                            <div className="rounded-2xl bg-orange-50 p-5 text-center">
                                <p className="text-3xl font-bold text-orange-600">
                                    Fast
                                </p>
                                <p className="mt-2 text-sm text-gray-600">
                                    Delivery 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}