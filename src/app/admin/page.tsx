import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import DashboardCard from "@/components/admin/DashboardCard";

export default async function AdminPage() {
    const session = await auth();

    if (!session) {
        redirect("/login");
    }

    const [
        products,
        categories,
        customers,
        orders,
    ] = await Promise.all([
        prisma.product.count(),
        prisma.category.count(),
        prisma.customer.count(),
        prisma.order.count(),
    ]);

    return (
        <div>
            <h1 className="mb-8 text-4xl font-bold">
                Dashboard
            </h1>

            <p className="mb-10 text-gray-600">
                Welcome back,
                <strong>{session.user?.name}</strong>
            </p>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                <DashboardCard 
                    title="Products"
                    value={products}
                />

                <DashboardCard 
                    title="Categories"
                    value={categories}
                    color="bg-blue-600"
                />

                <DashboardCard 
                    title="Customers"
                    value={customers}
                    color="bg-orange-600"
                />

                <DashboardCard 
                    title="Orders"
                    value={orders}
                    color="bg-purple-600"
                />

            </div>
        </div>
    );
}