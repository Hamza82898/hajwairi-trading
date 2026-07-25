import {
    DollarSign,
    ShoppingCart,
    Clock3,
    Users,
    Package,
    FolderTree,
    TrendingUp,
} from "lucide-react";

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
            gradient: "from-green-500 to-green-700",
            badge: "+12%",
        },
        {
            title: "Orders",
            value: stats.totalOrders,
            icon: ShoppingCart,
            gradient: "from-blue-500 to-blue-700",
            badge: "+8%",
        },
        {
            title: "Pending",
            value: stats.pendingOrders,
            icon: Clock3,
            gradient: "from-yellow-400 to-yellow-600",
            badge: "Live"
        },
        {
            title: "Customers",
            value: stats.totalCustomers,
            icon: Users,
            gradient: "from-purple-500 to-purple-700",
            badge: "+5%",
        },
        {
            title: "Products",
            value: stats.totalProducts,
            icon: Package,
            gradient: "from-orange-500 to-orange-700",
            badge: "Stock"
        },
        {
            title: "Categories",
            value: stats.totalCategories,
            icon: FolderTree,
            gradient: "from-pink-500 to-pink-700",
            badge: "Active",
        },
    ];

    return (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {cards.map((card) => {
                const Icon = card.icon;

                return (
                    <div
                        key={card.title}
                        className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                    >
                        <div 
                            className={`h-2 bg-gradient-to-r ${card.gradient}`} 
                        />
                        <div className="p-6">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
                                        {card.title}
                                    </p>

                                    <h2 className="mt-3 text-4xl font-extrabold text-gray-900">
                                        {card.value}
                                    </h2>
                                </div>

                                <div
                                    className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-4 text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                                >
                                    <Icon size={30} />
                                </div>
                            </div>

                            <div className="mt-8 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-green-600">
                                    <TrendingUp size={18} />

                                    <span className="text-sm font-semibold">
                                        {card.badge}
                                    </span>
                                </div>

                                <span className="text-xs text-gray-400">
                                    Updated just now
                                </span>
                            </div>
                        </div>
                        
                    </div>
                );
            })}
        </div>
    );
}