import {
    BadgeCheck,
    Truck,
    Leaf,
} from "lucide-react";

const features = [
    {
        icon: BadgeCheck,
        title: "Premium Quality",
    },
    {
        icon: Truck,
        title: "Same Day Delivery",
    },
    {
        icon: Leaf,
        title: "Fresh Everyday",
    },
];

export default function HeroFeatures() {
    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:gap-6">

            {features.map((feature) => {
                const Icon = feature.icon;

                return (
                    <div
                        key={feature.title}
                        className="flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-sm sm:px-5"
                    >
                        <div className="rounded-full bg-green-100 p-2">

                            <Icon 
                                size={18}
                                className="text-green-900"
                            />

                        </div>

                        <span className="text-sm font-medium text-gray-700 sm:text-base">
                            {feature.title}
                        </span>
                    </div>
                );
            })}

        </div>
    );
}