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
        <section className="pb-12 sm:pb-16 lg:pb-20">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">

                    {cards.map((card) => {
                        const Icon = card.icon;

                        return (
                            <Link
                                key={card.title}
                                href="/shop"
                                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:rounded-3xl lg:hover:-translate-y-2"
                            >

                                <div className={`h-full bg-gradient-to-br ${card.bg} p-5 sm:p-6 lg:p-8`}>

                                    <div className="flex items-center justify-between">

                                        <div
                                            className={`rounded-2xl bg-white p-3 shadow-md sm:p-4 ${card.iconColor}`}
                                        >
                                            <Icon size={28} className="sm:h-[34px] sm:w-[34px]" />
                                        </div>

                                        <ArrowRight
                                            size={20}
                                            className="text-gray-400 transition group-hover:translate-x-2"
                                        />

                                    </div>

                                    <h3 className="mt-6 text-xl font-bold text-gray-900 sm:mt-8 sm:text-2xl">
                                        {card.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-gray-500 sm:text-base">
                                        {card.subtitle}
                                    </p>

                                    <div className="mt-6 sm:mt-8">

                                        <p className="text-2xl font-black text-green-900 sm:text-3xl">
                                            {card.price}
                                        </p>

                                        {card.oldPrice && (
                                            <p className="text-sm text-gray-400 line-through">
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