import { Globe, Leaf, Truck, Users } from "lucide-react";

const features = [
    {
        icon: Leaf,
        title: "Fresh Quality",
        description: "We carefully source premium fruits, vegetables, and groceries to ensure freshness every day.",
    },
    {
        icon: Truck,
        title: "Reliable Delivery",
        description: "Fast and secure delivery across Bahrain with a customer-first approach.",
    },
    {
        icon: Users,
        title: "Customer Satisfaction",
        description: "Building long-term relationships through quality products and trusted service.",
    },
    {
        icon: Globe,
        title: "Imported Products",
        description: "Fresh imported products from trusted suppliers around the world.",
    },
];

export default function OurStory() {
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-14 lg:grid-cols-2">
                    <div>
                        <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                            Our Story
                        </span>
                        <h2 className="mt-6 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Serving Bahrain with
                            <span className="block text-green-700">
                                Freshness & Trust
                            </span>
                        </h2>
                        <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                            Hajwairi Trading Company is committed to delivering
                            premium-quality fruits, vegetables, groceries,
                            and daily essentials throughout Bahrain.
                        </p>
                        <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                            Our mission is simple: provide fresh products,
                            fair prices, and exceptional customer service.
                            Every order is handled with care to ensure customers
                            receive only the best quality.
                        </p>
                        <div className="mt-10 grid grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-green-50 p-6">
                                <h3 className="text-4xl font-bold text-green-700">
                                    100%
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    Fresh Products
                                </p>
                            </div>
                            <div className="rounded-2xl bg-orange-50 p-6">
                                <h3 className="text-4xl font-bold text-orange-600">
                                    Fast
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    Delivery
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="mt-6 text-xl font-bold text-gray-900">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-7 text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}