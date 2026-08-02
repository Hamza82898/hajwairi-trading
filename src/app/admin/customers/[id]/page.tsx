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
        <main className="space-y-6 lg:space-y-8">
            <div>
                <h1 className="break-words text-2xl font-bold sm:text-3xl lg:text-4xl">
                    {customer.fullName}
                </h1>

                <p className="mt-2 text-sm text-gray-500 sm:text-base">
                    Customer Details
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                <div className="order-2 space-y-6 lg:order-1 lg:col-span-2 lg:space-y-8">

                    <CustomerOrders customer={customer} />

                </div>

                <div className="order-1 space-y-6 lg:order-2 lg:space-y-8">
                    <CustomerInfo customer={customer} />

                    <CustomerStats customer={customer} />
                </div>

            </div>
        </main>
    );
}