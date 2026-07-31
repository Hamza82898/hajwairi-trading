"use client";

import { Truck, ShieldCheck, BadgeDollarSign, Headphones, } from "lucide-react";

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
        <section className="py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                <div className="mb-10 text-center sm:mb-12 lg:mb-14">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-green-700 sm:tracking-[4px]">
                        Why Choose Us
                    </p>

                    <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">
                        Why Choose Hajwairi Trading?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                        We deliver premium Pakistani fruits and vegetables
                        across Bahrain with fast delivery and affordable prices.
                    </p>
                </div>

                {/*Cards*/}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key = {index}
                                className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl sm:p-6 lg:rounded-3xl lg:p-8 lg:hover:-translate-y-2"
                            >
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition duration-300 group-hover:rotate-6 group-hover:scale-110 sm:h-16 sm:w-16">
                                    <Icon 
                                        size={30}
                                        className="sm:h-[34px] sm:w-[34px]"
                                    />
                                </div>
                                <h3 className="mb-3 text-lg font-bold text-gray-900 sm:text-xl">
                                    {feature.title}
                                </h3>

                                <p className="text-sm leading-7 text-gray-500 sm:text-base">
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