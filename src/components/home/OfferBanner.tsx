"use client";

import Link from "next/link";
import { ArrowRight, BadgePercent, Clock3, Truck, Gift, Sparkles } from "lucide-react";

export default function OfferBanner() {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Main Offer */}

                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-700 via-green-600 to-green-500 p-10 text-white shadow-2xl lg:col-span-2">

                        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

                        <div className="relative z-10">

                            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
                                <BadgePercent size={18} />
                                Mega Sale Offer
                            </div>

                            <h2 className="mt-6 max-w-xl text-5xl font-extrabold leading-tight">
                                Fresh Pakistani Fruits Delivered Across Bahrain
                            </h2>

                            <p className="mt-5 max-w-xl text-lg text-green-100">
                                Premium Chaunsa Mangoes, Jamun, Fresh Vegetables and Daily Grocery
                                items at unbeatable prices.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">

                                <div className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">
                                    <Truck size={18} />
                                    Free Delivery*
                                </div>

                                <div className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">
                                    <Clock3 size={18} />
                                    Limited Time Offer
                                </div>

                            </div>

                            <Link
                                href="/shop"
                                className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-green-700 transition duration-300 hover:scale-105"
                            >
                                Shop Now
                                <ArrowRight size={20} />
                            </Link>

                        </div>

                    </div>

                    {/* Side Card */}

                    <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 p-8 text-white shadow-2xl">

                        <div className="flex h-full flex-col justify-between">

                            <div>

                                <Sparkles size={42} />

                                <h3 className="mt-5 text-3xl font-bold">
                                    Extra Savings
                                </h3>

                                <p className="mt-4 text-orange-100">
                                    Buy more & save more on selected products.
                                </p>

                            </div>

                            <div className="mt-10 rounded-2xl bg-white/20 p-5 backdrop-blur">

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