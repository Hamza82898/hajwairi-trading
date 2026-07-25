"use client";

import { Truck, ShieldCheck, BadgeDollarSign, Headphones, Icon } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Premium Quality",
        description: "Fresh fruits imported directly from trusted farms."
    },
    {
        icon: Truck,
        title: "Fast Delivery",
        description: "Quick delivery across Bahrain with secure packaging.",
    },
    {
        icon: BadgeDollarSign,
        title: "Best Prices",
        description: "Affordable prices with regular discounts and offers.",
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        description: "Friendly customer support on WhatsApp and phone."
    },
];




export default function WhyChooseUs() {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">
                
                <div className="mb-14 text-center">
                    <p className="mb-2 font-semibold uppercase tracking-[4px] text-green-700">
                        Why Choose Us
                    </p>

                    <h2 className="text-4xl font-black text-gray-900">
                        Why Choose Hajwairi Trading?
                    </h2>

                    <p>
                        We deliver premium Pakistani fruits and vegetables
                        across Bahrain with fast delivery and affordable prices.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key = {index}
                                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-2xl"
                            >
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                                    <Icon size={34} />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-gray-900">
                                    {feature.title}
                                </h3>

                                <p className="leading-7 text-gray-500">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}