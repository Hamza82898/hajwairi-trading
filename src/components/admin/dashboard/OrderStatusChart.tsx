"use client";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

interface Props {
    data: {
        status: string;
        count: number;
    }[];
}

const COLORS = [
    "#f59e0b", // Pending
    "#185dcc", // Confirmed
    "#4615b9", // Processing
    "#0890a8", // Shipped
    "#098b39", // Delivered
    "#bc1d1d", // Cancelled
];

export default function OrderStatusChart({
    data,
}: Props) {

    const totalOrders = data.reduce(
        (sum, item) => sum + item.count,
        0 
    );

    return (
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Order Status
                </p>

                <h2 className="mt-2 text-4xl font-extrabold">
                    {totalOrders}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    Total Orders
                </p>
            </div>

            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="count"
                            nameKey="status"
                            innerRadius={75}
                            outerRadius={110}
                            paddingAngle={4}
                            stroke="white"
                            strokeWidth={3}
                        >
                            {data.map((_, index) => (
                                <Cell 
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip 
                            formatter={(value) => [
                                value,
                                "Orders",
                            ]}
                            contentStyle={{
                                borderRadius: "12px",
                                border: "none",
                                boxShadow: 
                                "0 8px 25px rgba(0,0,0,,12)",  
                            }}
                        />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}