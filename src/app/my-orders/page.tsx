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

                <div className="rounded-xl border bg-white p-8 text-center shadow-sm">
                    <p className="text-gray-500">
                        You haven't placed any orders yet.
                    </p>
                </div>

            ) : (

                <div className="space-y-6">

                    {orders.map((order) => (

                        <div
                            key={order.id}
                            className="rounded-2xl border bg-white p-6 shadow-sm"
                        >

                            <div className="flex items-center justify-between">

                                <div>
                                    <h2 className="text-lg font-bold">
                                        {order.orderNumber}
                                    </h2>

                                    <p className="text-sm text-gray-500">
                                        {new Date(order.createdAt).toLocaleString()}
                                    </p>
                                </div>

                                <div className="text-right">

                                    <p className="font-bold text-green-700">
                                        BD {order.total.toFixed(2)}
                                    </p>

                                    <span className="mt-2 inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                                        {order.status}
                                    </span>

                                </div>

                            </div>

                            <div className="mt-6 space-y-3">

                                {order.items.map((item) => (

                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between border-b pb-3"
                                    >

                                        <div>
                                            <p className="font-medium">
                                                {item.product.name}
                                            </p>

                                            <p className="text-sm text-gray-500">
                                                Qty: {item.quantity}
                                            </p>
                                        </div>

                                        <p className="font-semibold">
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