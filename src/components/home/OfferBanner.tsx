"use client";

import Link from "next/link";
import {
    ArrowRight,
    BadgePercent,
    Clock3,
    Truck,
    Gift,
    Sparkles,
} from "lucide-react";

export default function OfferBanner() {
    return (
        <section className="py-12 sm:py-16 lg:py-20">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">

                    {/* Main Offer */}

                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-700 via-green-900 to-green-500 p-6 text-white shadow-2xl sm:p-8 lg:col-span-2 lg:rounded-3xl lg:p-10">

                        <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-white/10 blur-3xl sm:h-72 sm:w-72" />

                        <div className="relative z-10">

                            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-2 text-xs font-semibold backdrop-blur sm:px-4 sm:text-sm">

                                <BadgePercent size={16} />

                                Mega Sale Offer

                            </div>

                            <h2 className="mt-5 max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl lg:mt-6 lg:text-5xl">

                                Fresh Pakistani Fruits Delivered Across Bahrain

                            </h2>

                            <p className="mt-4 max-w-xl text-base text-green-100 sm:text-lg">

                                Premium Chaunsa Mangoes, Jamun,
                                Fresh Vegetables and Daily Grocery
                                items at unbeatable prices.

                            </p>

                            <div className="mt-6 flex flex-wrap gap-3 lg:mt-8 lg:gap-4">

                                <div className="flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-sm backdrop-blur sm:px-4">

                                    <Truck size={18} />

                                    Free Delivery

                                </div>

                                <div className="flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-sm backdrop-blur sm:px-4">

                                    <Clock3 size={18} />

                                    Limited Time

                                </div>

                            </div>

                            <Link
                                href="/shop"
                                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-bold text-green-700 transition hover:scale-105 sm:px-8 sm:py-4 lg:mt-10"
                            >
                                Shop Now

                                <ArrowRight size={20} />

                            </Link>

                        </div>

                    </div>

                    {/* Side Card */}

                    <div className="rounded-2xl bg-gradient-to-br from-orange-400 to-red-700 p-6 text-white shadow-2xl sm:p-8 lg:rounded-3xl">

                        <div className="flex h-full flex-col justify-between">

                            <div>

                                <Sparkles size={36} />

                                <h3 className="mt-4 text-2xl font-bold sm:text-3xl">

                                    Extra Savings

                                </h3>

                                <p className="mt-3 text-orange-100">

                                    Buy more & save more on selected products.

                                </p>

                            </div>

                            <div className="mt-8 rounded-2xl bg-white/20 p-5 backdrop-blur">

                                <Gift className="mb-3" />

                                <p className="text-lg font-bold">

                                    Free Delivery

                                </p>

                                <p className="text-sm text-orange-100">

                                    Manama • Muharraq • Riffa

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}