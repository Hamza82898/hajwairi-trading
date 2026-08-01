import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { PackageSearch } from "lucide-react";

export default async function MyOrdersPage() {
    const session = await auth();

    if (!session?.user?.email) {
        redirect("/login");
    }

    const orders = await prisma.order.findMany({
        where: {
            customer: {
                email: session.user.email,
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    const getStatusClasses = (status: string) => {
        switch (status.toLowerCase()) {
            case "delivered":
                return "bg-green-100 text-green-700";

            case "processing":
                return "bg-yellow-100 text-yellow-700";

            case "cancelled":
                return "bg-red-100 text-red-700";

            default:
                return "bg-blue-100 text-blue-700";
        }
    };

    return (
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-6 lg:py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    My Orders
                </h1>

                <p className="mt-2 text-sm text-gray-500 sm:text-base">
                    Track and manage all your previous orders.
                </p>
            </div>

            {orders.length === 0 ? (
                <div className="flex flex-col items-center rounded-3xl border bg-white px-6 py-20 text-center shadow-sm">
                    <PackageSearch
                        size={70}
                        className="text-gray-300"
                    />

                    <h2 className="mt-6 text-2xl font-bold">
                        No Orders Yet
                    </h2>

                    <p className="mt-3 max-w-md text-gray-500">
                        You haven't placed any order yet.
                        Start shopping to see your orders here.
                    </p>

                    <Link
                        href="/shop"
                        className="mt-8 rounded-xl bg-green-700 px-8 py-3 font-semibold text-white transition hover:bg-green-800"
                    >
                        Start Shopping
                    </Link>
                </div>
            ) : (
                <div className="space-y-5">
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            className="rounded-3xl border bg-white p-5 shadow-sm transition hover:shadow-lg"
                        >
                            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                                <div className="space-y-3">

                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Order Number
                                        </p>

                                        <h2 className="text-xl font-bold text-gray-900">
                                            {order.orderNumber}
                                        </h2>
                                    </div>

                                    <div className="flex flex-wrap gap-5 text-sm text-gray-600">

                                        <div>
                                            <span className="font-semibold">
                                                Date:
                                            </span>{" "}
                                            {new Date(
                                                order.createdAt
                                            ).toLocaleDateString()}
                                        </div>

                                        <div>
                                            <span className="font-semibold">
                                                Payment:
                                            </span>{" "}
                                            {order.paymentMethod}
                                        </div>

                                    </div>

                                </div>

                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                                    <div className="text-left sm:text-right">

                                        <p className="text-sm text-gray-500">
                                            Total
                                        </p>

                                        <h3 className="text-2xl font-bold text-green-700">
                                            BD{" "}
                                            {(
                                                order.total +
                                                order.delivery
                                            ).toFixed(2)}
                                        </h3>

                                    </div>

                                    <span
                                        className={`rounded-full px-4 py-2 text-sm font-semibold ${getStatusClasses(
                                            order.status
                                        )}`}
                                    >
                                        {order.status}
                                    </span>

                                    <Link
                                        href={`/checkout/orders/${order.id}`}
                                        className="rounded-xl border px-6 py-3 text-center font-semibold transition hover:bg-gray-100"
                                    >
                                        View Details
                                    </Link>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}