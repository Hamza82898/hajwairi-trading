import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTA() {
    return (
        <section className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
                        Start Shopping Today
                    </span>
                    <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                        Fresh Products.
                        <br />
                        Fast Delivery.
                        <br />
                        Trusted Services.
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-green-100 sm:text-lg">
                        Explore our wide range of fresh fruits, vegetables,
                        groceries, and daily essentials. Experience quality,
                        afforability, and fast delivery anywhere in Bahrain.
                    </p>
                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/shop"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-green-700 transition-all duration-300 hover:scale-105 hover:bg-gray-100"
                        >
                            Browse Products
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-green-700"
                        >
                            Contact Us
                            <PhoneCall size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}