import { ArrowRight, BadgePercent, Clock3 } from "lucide-react";
import Link from "next/link";

export default function SpecialOffer() {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-green-700 via-green-600 to-orange-500 p-10 text-white shadow-2xl">
                    <div className="grid items-center gap-10 lg:grid-cols-2">

                        {/* Left Side */}

                        <div>
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
                                <BadgePercent size={18} />

                                <span className="font-medium">
                                    Limited Time Offer
                                </span>

                            </div>

                            <h2 className="text-5xl font-bold leading-tight">
                                Fresh Fruits at Amazing Prices
                            </h2>

                            <p className="mt-6 max-w-xl text-lg text-green-100">
                                Order premium quality fruits, vegetables and grocery products
                                delivered anywhere in Bahrain.
                            </p>
                            
                            <div className="mt-8 flex items-center gap-3">
                                <Clock3 />

                                <span>
                                    Offer Ends Soon
                                </span>

                            </div>

                            <Link
                                href= "/shop"
                                className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-green-700 transition hover:scale-105"
                            >
                                Shop Now

                                <ArrowRight size={20} />
                            </Link>

                        </div>
                        {/* Right Side */}
                            <div className="hidden items-center justify-center lg:flex">
                                <div className="rounded-full bg-white/10 p-16 backdrop-blur-md">

                                    <BadgePercent size={140} strokeWidth={1.5} />

                                </div>

                            </div>

                    </div>

                </div>

            </div>

        </section>
    )
}