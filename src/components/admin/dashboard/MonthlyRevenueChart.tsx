"use client";


import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

interface Props {
    data: {
        createdAt: Date;
        total: number;
    }[];
}

export default function MonthlyRevenueChart({
    data,
}: Props) {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const revenue = Array(12).fill(0);

    data.forEach((item) => {
        const month = new Date(item.createdAt).getMonth();
        revenue[month] += item.total;
    });

    const chartData = months.map((month, index) => ({
        month,
        revenue: revenue[index],
    }));

    return (
        <div className="rounded-2xl bg-white p-4 shadow sm:p-6">
            <div className="mb-5 sm:mb-6">
                <h2 className="text-xl font-bold sm:text-2xl">
                    Monthly Revenue
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Revenue overview for the current year
                </p>
            </div>

            <div className="h-64 sm:h-80 lg:h-96">

                <ResponsiveContainer width="100%" height="100%">
                    <BarChart 
                        data={chartData}
                        margin={{
                            top: 10,
                            right: 10,
                            left: -20,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid 
                            strokeDasharray="3 3" 
                            vertical={false}                            
                        />
                        <XAxis 
                            dataKey="month" 
                            tick={{ fontSize: 12 }}
                            tickLine={false}
                            axisLine={false}    
                        />
                        <YAxis 
                            tick={{ fontSize: 12 }}
                            tickLine={false}
                            axisLine={false}
                            width={45}
                        />
                        <Tooltip 
                            formatter={(value) => [
                                `BD ${Number(value).toFixed(2)}`,
                                "Revenue",
                            ]}
                            contentStyle={{
                                borderRadius: "12px",
                                border: "none",
                                boxShadow:
                                    "0 8px 25px rgba(0,0,0,.12)",
                            }}
                        />
                        <Bar 
                            dataKey="revenue"
                            radius={[8, 8, 0, 0]}
                            fill="#15803d"
                            maxBarSize={40}
                        />
                    </BarChart>
                </ResponsiveContainer>

            </div>
        </div>
    );
}