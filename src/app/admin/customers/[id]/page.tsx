import { notFound } from "next/navigation";
import { getCustomerById } from "@/lib/customer/queries";
import CustomerInfo from "@/components/admin/customer/CustomerInfo";
import CustomerOrders from "@/components/admin/customer/CustomerOrders";
import CustomerStats from "@/components/admin/customer/CustomerStats";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function CustomerDetailsPage({
    params,
}: Props) {
    const { id } = await params;

    const customer = await getCustomerById(Number(id));

    if (!customer) {
        notFound();
    }

    return (
        <main className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold">
                    {customer.fullName}
                </h1>

                <p className="mt-2 text-gray-500">
                    Customer Details
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                <div className="space-y-8 lg:col-span-2">

                    <CustomerOrders customer={customer} />

                </div>

                <div className="space-y-8">
                    <CustomerInfo customer={customer} />

                    <CustomerStats customer={customer} />
                </div>

            </div>
        </main>
    );
}