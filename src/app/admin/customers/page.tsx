import Link from "next/link";
import { getCustomers } from "@/lib/customer/queries";
import CustomersTable from "@/components/admin/customer/CustomersTable";

export default async function CustomersPage() {
    const customers = await getCustomers();

    return (
        <main>
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

            {customers.length === 0 ? (
                <div className="rounded-xl border bg-white p-12 text-center shadow">
                    <h2 className="text-2xl font-semibold">
                        No Customers Found
                    </h2>

                    <p className="mt-3 text-gray-500">
                        Customers will appear here after placing their first order.
                    </p>
                </div>
            ) : (
                <CustomersTable customers={customers} />
            )}
        </main>
    );
}