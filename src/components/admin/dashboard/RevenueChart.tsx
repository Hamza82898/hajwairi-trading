"use client";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

interface Props {
    data: {
        createdAt: Date;
        total: number;
    }[];
}

export default function RevenueChart({
    data,
}: Props) {
    const chartData = data.map((item) => ({
        day: new Date(item.createdAt).toLocaleDateString("en-US", {
            weekday: "short",
        }),
        revenue: item.total,
    }));

    const totalRevenue = chartData.reduce(
        (sum, item) => sum + item.revenue,
        0
    );

    return (
        <div className="rounded-3xl border bg-white p-6 shadow">
            <div className="mb-8 flex items-center justify-between">

                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                        Revenue
                    </p>

                    <h2 className="mt-2 text-4xl font-extrabold">
                        BD {totalRevenue.toFixed(2)}
                    </h2>

                    <p className="mt-2 text-sm text-green-600">
                        Last 7 Days
                    </p>           
                </div>
            </div>

            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                        <defs>
                            <linearGradient
                                id="revenueGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop 
                                    offset="5%"
                                    stopColor="#16a34a"
                                    stopOpacity={0.35}
                                />

                                <stop 
                                    offset="95%"
                                    stopColor="#16a34a"
                                    stopOpacity={0}
                                />

                            </linearGradient>
                        </defs>
                        <CartesianGrid 
                            strokeDasharray="3 3"
                            vertical={false}
                        />
                        <XAxis 
                            dataKey="day"
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis 
                            tickLine={false}
                            axisLine={false}
                        />
                        <Tooltip 
                            contentStyle={{
                                borderRadius: "12px",
                                border: "none",
                                boxShadow:
                                    "0 8px 25px rgba(0,0,0,.12",
                            }}
                            formatter={(value) => [
                                `BD ${value}`,
                                "Revenue",
                            ]}
                        />
                        <Area 
                            type="monotone"
                            dataKey="revenue"
                            stroke="#16a34a"
                            strokeWidth={4}
                            fill="url(#revenueGradient)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}