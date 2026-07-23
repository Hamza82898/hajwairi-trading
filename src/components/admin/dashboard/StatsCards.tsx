import {
    DollarSign,
    ShoppingCart,
    Clock3,
    Users,
    Package,
    FolderTree,
} from "lucide-react";
import { title } from "process";

interface Props {
    stats: {
        totalRevenue: number;
        totalOrders: number;
        pendingOrders: number;
        totalCustomers: number;
        totalProducts: number;
        totalCategories: number;
    };
}

export default function StatsCards({ stats }: Props) {
    const cards = [
        {
            title: "Revenue",
            value: `BD ${stats.totalRevenue.toFixed(2)}`,
            icon: DollarSign,
            color: "bg-green-600",
        },
        {
            title: "Orders",
            value: stats.totalOrders,
            icon: ShoppingCart,
            color: "bg-blue-600",
        },
        {
            title: "Pending",
            value: stats.pendingOrders,
            icon: Clock3,
            color: "bg-yellow-500"
        },
        {
            title: "Customers",
            value: stats.totalCustomers,
            icon: Users,
            color: "bg-purple-600",
        },
        {
            title: "Products",
            value: stats.totalProducts,
            icon: Package,
            color: "bg-orange-600",
        },
        {
            title: "Categories",
            value: stats.totalCategories,
            icon: FolderTree,
            color: "bg-pink-600",
        },
    ];

    return (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {cards.map((card) => {
                const Icon = card.icon;

                return (
                    <div
                        key={card.title}
                        className="rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500">
                                    {card.title}
                                </p>

                                <h2 className="mt-2 text-3xl font-bold">
                                    {card.value}
                                </h2>
                            </div>

                            <div
                                className={`${card.color} rounded-xl p-4 text-white`}
                            >
                                <Icon size={28} />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}