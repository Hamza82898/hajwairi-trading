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
        <main className="space-y-6">

            {/* Header */}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>
                    <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                        Orders
                    </h1>

                    <p className="mt-1 text-sm text-gray-600 sm:text-base">
                        Manage customer orders
                    </p>
                </div>

            </div>

            {/* Filters */}

            <form
                method="GET"
                className="rounded-2xl border bg-white p-4 shadow-sm sm:p-5"
            >

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

                    <input
                        type="text"
                        name="search"
                        defaultValue={search}
                        placeholder="Order #, Customer, Phone, Email"
                        className="w-full rounded-xl border p-3"
                    />

                    <select
                        name="status"
                        defaultValue={status}
                        className="w-full rounded-xl border p-3"
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
                        className="w-full rounded-xl border p-3"
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
                        className="w-full rounded-xl bg-green-700 p-3 font-semibold text-white transition hover:bg-green-800"
                    >
                        Apply Filters
                    </button>

                </div>

            </form>

            {/* Orders */}

            {orders.length === 0 ? (

                <div className="rounded-xl border bg-white p-8 text-center shadow sm:p-12">
                    <h2 className="text-xl font-semibold sm:text-2xl">
                        No Orders Found
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Try changing search or filters.
                    </p>
                </div>

            ) : (

                <>
                    <OrdersTable orders={orders} />

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-2">

                        {currentPage > 1 && (
                            <Link
                                href={`?search=${search}&status=${status}&sort=${sort}&page=${currentPage - 1}`}
                                className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-100"
                            >
                                Previous
                            </Link>
                        )}

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                            <Link
                                key={pageNumber}
                                href={`?search=${search}&status=${status}&sort=${sort}&page=${pageNumber}`}
                                className={`rounded-lg px-4 py-2 text-sm ${
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
                                className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-100"
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