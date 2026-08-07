import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import DashboardHeader from "@/components/account/DashboardHeader";
import DashboardStats from "@/components/account/DashboardStats";
import RecentOrders from "@/components/account/RecentOrders";

export default async function AccountPage() {
    const session = await auth();

    if (!session?.user?.email) {
        redirect("/login");
    }

    const customer = await prisma.customer.findFirst({
        where: {
            email: session.user.email,
        },
        include: {
            orders: {
                orderBy: {
                    createdAt: "desc",
                },
                take: 5,
            },
        },
    });
    if (!customer) {
        redirect("/");
    }
    const totalOrders = customer.orders.length;
    const completedOrders = customer.orders.filter(
        (order) => order.status === "DELIVERED"
    ).length;
    const pendingOrders = customer.orders.filter(
        (order) =>
            order.status === "PENDING" ||
            order.status === "PROCESSING" ||
            order.status === "CONFIRMED"
    ).length;
    const totalSpent = customer.orders.reduce(
        (sum, order) => sum + Number(order.total) + Number(order.delivery),
        0
    );

    return (
        <div className="space-y-8">
            <DashboardHeader customer={customer} />
            <DashboardStats 
                totalOrders = {totalOrders}
                completedOrders = {completedOrders}
                pendingOrders = {pendingOrders}
                totalSpent = {totalSpent}
            />
            <RecentOrders orders={customer.orders} />
        </div>
    );
}