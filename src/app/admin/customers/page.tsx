import Link from "next/link";
import { getCustomers } from "@/lib/customer/queries";
import CustomersTable from "@/components/admin/customer/CustomersTable";

interface Props {
    searchParams: Promise<{
        search?: string;
        sort?: string;
        page?: string;
    }>;
}

export default async function CustomersPage({
    searchParams,
}: Props) {
    const params = await searchParams;

    const search = params.search ?? "";
    const sort = params.sort ?? "latest";
    const page = Number(params.page ?? "1");

    const {
        customers,
        currentPage,
        totalPages,
    } = await getCustomers(
        search,
        sort,
        page,
        10,
    );

    return (
        <main>
            {/*Header*/}

            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold">
                        Customers
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Manage all customers
                    </p>
                </div>
            </div>

            {/*Search*/}

            <form
                method="GET"
                className="mb-6 rounded-2xl border bg-white p-5 shadow-sm"
            >
                <div className="grid gap-4 lg:gird-cols-3">
                    <input 
                        type="text"
                        name="search"
                        defaultValue={search}
                        placeholder="Search name, phone or email"
                        className="rounded-xl border p-3"
                    />

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

            {/*Customer*/}

            {customers.length === 0 ? (
                <div className="rounded-xl border bg-white p-12 text-center shadow">
                    <h2 className="text-2xl font-semibold">
                        No Customers Found
                    </h2>

                    <p className="mt-3 text-gray-500">
                        Try changing your search.
                    </p>
                </div>
            ) : (
                <>
                    <CustomersTable customers={customers} />

                    <div className="mt-8 flex items-center justify-center gap-2">
                        {currentPage > 1 && (
                            <Link
                                href={`?search=${search}&sort=${sort}&page=${currentPage - 1}`}
                                className="rounded-lg border px-4 py-2 hover:bg-gray-100"
                            >
                                Previous
                            </Link>
                        )}

                        {Array.from(
                            { length: totalPages },
                            (_, i) => i + 1
                        ).map((pageNumber) => (
                            <Link
                                key={pageNumber}
                                href={`?search=${search}&sort=${sort}&page=${pageNumber}`}
                                className={`rounded-lg px-4 py-2 ${
                                    currentPage === pageNumber
                                        ? "bg-green-700 textwhite"
                                        : "border hover:bg-gray-100"
                                }`}
                            >
                                {pageNumber}
                            </Link>
                        ))}

                        {currentPage < totalPages && (
                            <Link
                                href={`?search=${search}&sort=${sort}&page=${currentPage + 1}`}
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