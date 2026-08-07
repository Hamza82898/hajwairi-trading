import { ShoppingBag, Clock3, CheckCircle2, Wallet } from "lucide-react";

interface Props {
    totalOrders: number;
    completedOrders: number;
    pendingOrders: number;
    totalSpent: number;
}

export default function DashboardStats({
    totalOrders,
    completedOrders,
    pendingOrders,
    totalSpent,
}: Props) {
    const cards = [
        {
            title: "Total Orders",
            value: totalOrders,
            icon: ShoppingBag,
            color: "bg-blue-100 text-blue-700",
        },
        {
            title: "Pending Orders",
            value: pendingOrders,
            icon: Clock3,
            color: "bg-yellow-100 text-yellow-700",
        },
        {
            title: "Completed",
            value: completedOrders,
            icon: CheckCircle2,
            color: "bg-green-100 text-green-700",
        },
        {
            title: "Total Spent",
            value: `BD ${totalSpent.toFixed(2)}`,
            icon: Wallet,
            color: "bg-purple-100 text-purple-700",
        },
    ];

    return (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {cards.map((card) => {
                const Icon = card.icon;
                return (
                    <div
                        key={card.title}
                        className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">
                                    {card.title}
                                </p>
                                <h2 className="mt-3 break-words text-2xl font-bold text-gray-900 sm:text-3xl">
                                    {card.value}
                                </h2>
                            </div>
                            <div
                                className={`rounded-xl p-3 ${card.color}`}
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