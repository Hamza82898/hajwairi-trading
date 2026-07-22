import Link from "next/link";
import { getOrders } from "@/lib/order/queries";
import OrdersTable from "@/components/admin/order/OrdersTable";

export default async function OrdersPage() {
    const orders = await getOrders();

    return (
        <main>
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold">
                        Orders
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Manage customer orders
                    </p>
                </div>
            </div>

            {orders.length === 0 ? (
                <div className="rounded-xl border bg-white p-12 text-center shadow">
                    <h2 className="text-xl font-semibold">
                        No Orders Found
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Orders will appear here after customers place them.
                    </p>
                </div>
            ) : (
                <OrdersTable orders={orders} />
            )}
        </main>
    );
}