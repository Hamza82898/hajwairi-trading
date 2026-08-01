import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function MyOrdersPage() {
    const session = await auth();

    if (!session?.user?.email) {
        redirect("/login");
    }

    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email,
        },
        include: {
            customer: {
                include: {
                    orders: {
                        orderBy: {
                            createdAt: "desc",
                        },
                        include: {
                            items: {
                                include: {
                                    product: true,
                                },
                            },
                        },
                    },
                },
            },
        },
    });

    const orders = user?.customer?.orders ?? [];

    return (
        <>
            {orders.length === 0 ? (

                <div className="rounded-2xl border bg-white p-6 text-center shadow-sm sm:p-8">
                    <p className="text-sm text-gray-500 sm:text-base">
                        You haven't placed any orders yet.
                    </p>
                </div>

            ) : (

                <div className="space-y-5 sm:space-y-6">

                    {orders.map((order) => (

                        <div
                            key={order.id}
                            className="rounded-2xl border bg-white p-4 shadow-sm sm:p-6"
                        >

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                                <div className="min-w-0">
                                    <h2 className="truncate text-lg font-bold sm:text-xl">
                                        {order.orderNumber}
                                    </h2>

                                    <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                                        {new Date(order.createdAt).toLocaleString()}
                                    </p>
                                </div>

                                <div className="sm:text-right">

                                    <p className="text-lg font-bold text-green-700 sm:text-xl">
                                        BD {order.total.toFixed(2)}
                                    </p>

                                    <span className="mt-2 inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                                        {order.status}
                                    </span>

                                </div>

                            </div>

                            <div className="mt-5 divide-y">

                                {order.items.map((item) => (

                                    <div
                                        key={item.id}
                                        className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between"
                                    >

                                        <div className="min-w-0">
                                            <p className="truncate font-medium">
                                                {item.product.name}
                                            </p>

                                            <p className="text-sm text-gray-500">
                                                Qty: {item.quantity}
                                            </p>
                                        </div>

                                        <p className="font-semibold text-green-700">
                                            BD {(item.price * item.quantity).toFixed(2)}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            )}
        </>
    );
}