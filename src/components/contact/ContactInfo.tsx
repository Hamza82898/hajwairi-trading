import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactInfo() {
    const cards = [
        {
            icon: Phone,
            title: "Phone",
            value: "+973 3903 2710",
            description: "Call us anytime during business hours.",
        },
        {
            icon: Mail,
            title: "Email",
            value: "info@hajwairitrading.com",
            description: "Send us your questions anytime.",
        },
        {
            icon: MapPin,
            title: "Address",
            value: "Kingdom of Bahrain",
            description: "Fast delivery across Bahrain.",
        },
        {
            icon: MessageCircle,
            title: "WhatsApp",
            value: "+973 3903 2710",
            description: "Quick support & order placement.",
        },
    ];

    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="mx-auto mb-14 max-w-3xl text-center">

                    <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                        Contact Information
                    </span>

                    <h2 className="mt-5 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                        We're Always Ready
                        <span className="block text-green-700">
                            To Help You
                        </span>
                    </h2>

                    <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                        Reach out through any of the following channels.
                        Our team will respond as quickly as possible.
                    </p>

                </div>

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

                    {cards.map((card) => {
                        const Icon = card.icon;

                        return (
                            <div
                                key={card.title}
                                className="group rounded-3xl border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-600 hover:shadow-xl"
                            >
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white">
                                    <Icon size={30} />
                                </div>

                                <h3 className="mt-6 text-xl font-bold text-gray-900">
                                    {card.title}
                                </h3>

                                <p className="mt-4 font-semibold text-green-700 break-words">
                                    {card.value}
                                </p>

                                <p className="mt-4 text-sm leading-7 text-gray-600">
                                    {card.description}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}