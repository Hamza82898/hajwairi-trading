import OrdersTable from "@/components/admin/order/OrdersTable";
import { getOrders } from "@/lib/order/queries";
import Link from "next/link";


interface Props {
    searchParams: Promise<{
        search?: string;
        status?: string;
        sort?: string;
        page?: string;
    }>;
}

export default async function OrdersPage({
    searchParams,
}: Props) {

    const params = await searchParams;

    const search = params.search ?? "";
    const status = params.status ?? "";
    const sort = params.sort ?? "latest";

    const page = Number(params.page ?? "1");

    const {
        orders,
        totalPages,
        currentPage,
    } = await getOrders(
        search,
        status,
        sort,
        page,
        10,
    );

    return (
        <main>

            {/* Header */}

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

            {/* Filters */}

            <form
                method="GET"
                className="mb-6 rounded-2xl border bg-white p-5 shadow-sm"
            >

                <div className="grid gap-4 lg:grid-cols-4">

                    <input
                        type="text"
                        name="search"
                        defaultValue={search}
                        placeholder="Order #, Customer, Phone, Email"
                        className="rounded-xl border p-3"
                    />

                    <select
                        name="status"
                        defaultValue={status}
                        className="rounded-xl border p-3"
                    >
                        <option value="">
                            All Status
                        </option>

                        <option value="PENDING">
                            Pending
                        </option>

                        <option value="CONFIRMED">
                            Confirmed
                        </option>

                        <option value="PROCESSING">
                            Processing
                        </option>

                        <option value="SHIPPED">
                            Shipped
                        </option>

                        <option value="DELIVERED">
                            Delivered
                        </option>

                        <option value="CANCELLED">
                            Cancelled
                        </option>

                    </select>

                    <select
                        name="sort"
                        defaultValue={sort}
                        className="rounded-xl border p-3"
                    >
                        <option value="latest">
                            Latest First
                        </option>

                        <option value="oldest">
                            Oldest First
                        </option>

                    </select>

                    <button
                        type="submit"
                        className="rounded-xl bg-green-700 font-semibold text-white hover:bg-green-800"
                    >
                        Apply Filters
                    </button>

                </div>

            </form>

            {/* Orders */}

            {orders.length === 0 ? (

                <div className="rounded-xl border bg-white p-12 text-center shadow">
                    <h2 className="text-xl font-semibold">
                        No Orders Found
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Try changing search or filters.
                    </p>
                </div>

            ) : (

                <>
                    <OrdersTable orders={orders} />

                    <div className="mt-8 flex items-center justify-center gap-2">

                        {currentPage > 1 && (
                            <Link
                                href={`?search=${search}&status=${status}&sort=${sort}&page=${currentPage - 1}`}
                                className="rounded-lg border px-4 py-2 hover:bg-gray-100"
                            >
                                Previous
                            </Link>
                        )}

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                            <Link
                                key={pageNumber}
                                href={`?search=${search}&status=${status}&sort=${sort}&page=${pageNumber}`}
                                className={`rounded-lg px-4 py-2 ${
                                    currentPage === pageNumber
                                        ? "bg-green-700 text-white"
                                        : "border hover:bg-gray-100"
                                }`}
                            >
                                {pageNumber}
                            </Link>
                        ))}

                        {currentPage < totalPages && (
                            <Link
                                href={`?search=${search}&status=${status}&sort=${sort}&page=${currentPage + 1}`}
                                className="rounded-lg border px-4 py-2 hover:bg-gray-100"
                            >
                                Next
                            </Link>
                        )}

                    </div>
                </>

            )}

        </main>
    );
}