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
        <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="mb-6 text-2xl font-bold">
                Monthly Revenue
            </h2>

            <div className="h-96">

                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar 
                            dataKey="revenue"
                            radius={[8, 8, 0, 0]}
                            fill="#15803d"
                        />
                    </BarChart>
                </ResponsiveContainer>

            </div>
        </div>
    );
}