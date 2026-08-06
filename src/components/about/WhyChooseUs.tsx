import {
    ShieldCheck,
    Truck,
    Leaf,
    BadgeDollarSign,
    Headphones,
    ShoppingBasket,
} from "lucide-react";

const features = [
    {
        icon: Leaf,
        title: "Fresh Products",
        description:
            "Daily fresh fruits, vegetables, and groceries sourced from trusted suppliers.",
    },
    {
        icon: Truck,
        title: "Fast Delivery",
        description:
            "Reliable doorstep delivery across Bahrain with safe product handling.",
    },
    {
        icon: BadgeDollarSign,
        title: "Best Prices",
        description:
            "Competitive pricing with seasonal offers and great value for every order.",
    },
    {
        icon: ShieldCheck,
        title: "Quality Guaranteed",
        description:
            "Every product is carefully inspected before reaching our customers.",
    },
    {
        icon: Headphones,
        title: "Customer Support",
        description:
            "Friendly support team ready to assist you with orders and inquiries.",
    },
    {
        icon: ShoppingBasket,
        title: "Wide Product Range",
        description:
            "From fresh produce to groceries and daily essentials, everything in one place.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-3xl text-center">

                    <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                        Why Choose Us
                    </span>

                    <h2 className="mt-5 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                        Everything You Need
                        <span className="block text-green-700">
                            In One Trusted Store
                        </span>
                    </h2>

                    <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                        We focus on quality, affordability, and customer
                        satisfaction to make grocery shopping easier and more
                        reliable for families across Bahrain.
                    </p>

                </div>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition group-hover:bg-green-700 group-hover:text-white">
                                    <Icon size={30} />
                                </div>

                                <h3 className="mt-6 text-xl font-bold text-gray-900">
                                    {feature.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-gray-600">
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