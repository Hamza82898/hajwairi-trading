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
        <div className="flex flex-wrap gap-6">

            {features.map((feature) => {
                const Icon = feature.icon;

                return (
                    <div
                        key={feature.title}
                        className="flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-sm"
                    >
                        <div className="rounded-full bg-green-100 p-2">

                            <Icon 
                                size={18}
                                className="text-green-900"
                            />

                        </div>

                        <span className="font-medium text-gray-700">
                            {feature.title}
                        </span>
                    </div>
                );
            })}

        </div>
    );
}