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
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
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
                        <div className="p-5 sm:p-6">
                            <div className="flex items-start justify-between gap-4">
                                <div className="min-w-0 flex-1">
                                    <p className="text-xs font-medium uppercase tracking-wider text-gray-500 sm:text-sm">
                                        {card.title}
                                    </p>

                                    <h2 className="mt-3 break-words text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl">
                                        {card.value}
                                    </h2>
                                </div>

                                <div
                                    className={`shrink-0 rounded-2xl bg-gradient-to-br ${card.gradient} p-3 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 sm:p-4`}
                                >
                                    <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-2 text-green-600">
                                    <TrendingUp className="h-4 w-4" />

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