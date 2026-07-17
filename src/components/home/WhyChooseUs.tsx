interface Feature {
    title: string;
    description: string;
    icon: string; 
}

const features: Feature[] = [
    {
        title: "Permium Quality",
        description: "Fresh fruits and vegetables imported from trusted suppliers.",
        icon: "🥭",
    },
    {
        title: "Fast Delivery",
        description: "Quick delivery across Bahrain with safe packaging.",
        icon: "🚚",
    },
    {
        title: "Best Prices",
        description: "Affordable prices with regular special offers.",
        icon: "💰",
    },
    {
        title: "Customer Support",
        description: "Friendly support through Whatsapp and phone.",
        icon: "📞",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold">
                        Why Choose Hajwairi Trading?
                    </h2>

                    <p className="mt-4 text-gray-600">
                        We deliver quality, freshness and excellent customer service.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <div
                             key = {feature.title}
                            className="rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="mb-5 text-5xl">
                                {feature.icon}
                            </div>

                            <h3 className="mb-3 text-xl font-semibold">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                            
                    ))}

                </div>

            </div>

        </section>
    );
}