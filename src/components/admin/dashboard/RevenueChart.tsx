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
        <div className="rounded-2xl border bg-white p-4 shadow sm:rounded-3xl sm:p-6">
            <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">

                <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 sm:text-sm">
                        Revenue
                    </p>

                    <h2 className="mt-2 break-all text-2xl font-extrabold sm:text-3xl lg:text-4xl">
                        BD {totalRevenue.toFixed(2)}
                    </h2>

                    <p className="mt-2 text-xs text-green-600 sm:text-sm">
                        Last 7 Days
                    </p>           
                </div>
            </div>

            <div className="h-64 sm:h-72 lg:h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart 
                        data={chartData}
                        margin={{
                            top: 10,
                            right: 10,
                            left: -20,
                            bottom: 0,
                        }}
                    >
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
                            tick={{ fontSize: 12}}
                        />
                        <YAxis 
                            tickLine={false}
                            axisLine={false}
                            tick={{ fontSize: 12 }}
                            width={40}
                        />
                        <Tooltip 
                            contentStyle={{
                                borderRadius: "12px",
                                border: "none",
                                boxShadow:
                                    "0 8px 25px rgba(0,0,0,.12",
                            }}
                            formatter={(value) => [
                                `BD ${Number(value).toFixed(2)}`,
                                "Revenue",
                            ]}
                        />
                        <Area 
                            type="monotone"
                            dataKey="revenue"
                            stroke="#16a34a"
                            strokeWidth={3}
                            fill="url(#revenueGradient)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}