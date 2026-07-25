import Link from "next/link";
import {
    Truck,
    Apple,
    Grape,
    Clock3,
    ArrowRight,
} from "lucide-react";

const cards = [
    {
        title: "Chaunsa Mango",
        subtitle: "4 KG Premium Box",
        price: "BD 6.30",
        oldPrice: "BD 7.50",
        icon: Apple,
        bg: "from-orange-100 to-orange-50",
        iconColor: "text-orange-500",
    },
    {
        title: "Fresh Jamun",
        subtitle: "1 KG Fresh Pack",
        price: "BD 3.00",
        oldPrice: "BD 3.50",
        icon: Grape,
        bg: "from-purple-100 to-fuchsia-50",
        iconColor: "text-purple-600",
    },
    {
        title: "Free Delivery",
        subtitle: "Selected Areas",
        price: "Available",
        oldPrice: "",
        icon: Truck,
        bg: "from-green-100 to-green-50",
        iconColor: "text-green-700",
    },
    {
        title: "Limited Offer",
        subtitle: "Ending Soon",
        price: "Shop Now",
        oldPrice: "",
        icon: Clock3,
        bg: "from-red-100 to-red-50",
        iconColor: "text-red-600",
    },
];

export default function PromoCards() {
    return (
        <section className="pb-20">
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                    {cards.map((card) => {
                        const Icon = card.icon;

                        return (
                            <Link
                                key={card.title}
                                href="/shop"
                                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >

                                <div
                                    className={`bg-gradient-to-br ${card.bg} p-8`}
                                >

                                    <div className="flex items-center justify-between">

                                        <div
                                            className={`rounded-2xl bg-white p-4 shadow-md ${card.iconColor}`}
                                        >
                                            <Icon size={34} />
                                        </div>

                                        <ArrowRight
                                            size={20}
                                            className="text-gray-400 transition group-hover:translate-x-2"
                                        />

                                    </div>

                                    <h3 className="mt-8 text-2xl font-bold text-gray-900">
                                        {card.title}
                                    </h3>

                                    <p className="mt-2 text-gray-500">
                                        {card.subtitle}
                                    </p>

                                    <div className="mt-8">

                                        <p className="text-3xl font-black text-green-900">
                                            {card.price}
                                        </p>

                                        {card.oldPrice && (
                                            <p className="text-gray-400 line-through">
                                                {card.oldPrice}
                                            </p>
                                        )}

                                    </div>

                                </div>

                            </Link>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}