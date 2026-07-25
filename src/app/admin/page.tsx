import { auth } from "@/auth";
import { redirect } from "next/navigation";
import {
    getDashboardStats,
    getLatestOrders,
    getLatestCustomers,
} from "@/lib/dashboard/queries";
import { getDashboardAnalytics } from "@/lib/dashboard/analytics";
import StatsCards from "@/components/admin/dashboard/StatsCards";
import LatestOrders from "@/components/admin/dashboard/LatestOrders";
import LatestCustomers from "@/components/admin/dashboard/LatestCustomers";
import RevenueChart from "@/components/admin/dashboard/RevenueChart";
import OrderStatusChart from "@/components/admin/dashboard/OrderStatusChart";
import TopSellingProducts from "@/components/admin/dashboard/TopSellingProducts";
import LowStockProducts from "@/components/admin/dashboard/LowStockProducts";
import RecentActivity from "@/components/admin/dashboard/RecentActivity";
import MonthlyRevenueChart from "@/components/admin/dashboard/MonthlyRevenueChart";




export default async function AdminPage() {
    const session = await auth();

    if (!session) {
        redirect("/login");
    }

    const [
        stats,
        latestOrders,
        latestCustomers,
        analytics,
    ] = await Promise.all([
        getDashboardStats(),
        getLatestOrders(),
        getLatestCustomers(),
        getDashboardAnalytics(),
    ]);

    return (
        <main className="space-y-10">

            <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 p-8 text-white shadow-xl">
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                    <div>
                        <p className="text-sm uppercase tracking-widest text-green-100">
                            Hajwairi Trading Company
                        </p>

                        <h1 className="mt-3 text-5xl font-extrabold">
                            Admin Dashboard
                        </h1>

                        <p className="mt-4 text-green-100">
                            Welcome back,
                            <span className="ml-2 font-bold">
                                {session.user?.name}
                            </span>
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                        <p className="text-sm text-green-100">
                            Today's Overview
                        </p>

                        <h2 className="mt-2 text-4xl font-bold">
                            BD {stats.totalRevenue.toFixed(2)}
                        </h2>

                        <p className="mt-2 text-green-100">
                            Total Revenue
                        </p>

                    </div>

                </div>

            </div>

            <StatsCards stats={stats} />

            <div className="grid gap-8 xl:grid-cols-2">

                <RevenueChart 
                    data={analytics.revenue7Days}
                />

                <OrderStatusChart 
                    data={analytics.orderStatus}
                />
            </div>

            <div className="grid gap-8 xl:grid-cols-2">

                <LatestOrders 
                    orders={latestOrders}
                />

                <LatestCustomers 
                    customers={latestCustomers}
                />
            </div>

            <div className="grid gap-8 xl:grid-cols-2">
                <TopSellingProducts 
                    products={analytics.topProducts}
                />

                <LowStockProducts 
                    products={analytics.lowStockProducts}
                />

            </div>

            <RecentActivity 
                orders={analytics.latestOrders}
            />

            <MonthlyRevenueChart 
                data={analytics.monthlyRevenue}
            />

        </main>
    );
}