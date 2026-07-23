import { auth } from "@/auth";
import { redirect } from "next/navigation";
import {
    getDashboardStats,
    getLatestOrders,
    getLatestCustomers,
} from "@/lib/dashboard/queries";
import StatsCards from "@/components/admin/dashboard/StatsCards";
import LatestOrders from "@/components/admin/dashboard/LatestOrders";
import LatestCustomers from "@/components/admin/dashboard/LatestCustomers";

export default async function AdminPage() {
    const session = await auth();

    if (!session) {
        redirect("/login");
    }

    const stats = await getDashboardStats();
    const latestOrders = await getLatestOrders();
    const latestCustomers = await getLatestCustomers();

    return (
        <main className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold">
                    Dashboard
                </h1>

                <p className="mt-2 text-gray-600">
                    Welcome back,{""}
                    <strong>{session.user?.name}</strong>
                </p>
            </div>

            <StatsCards stats={stats} />

            <div className="grid gap-8 lg:grid-cols-2">
                <LatestOrders orders={latestOrders} />

                <LatestCustomers customers={latestCustomers} />

            </div>

        </main>
    );
}