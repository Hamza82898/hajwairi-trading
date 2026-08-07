import { Customer } from "@prisma/client";

interface Props {
    customer: Customer;
}

export default function DashboardHeader({
    customer,
}: Props) {
    return (
        <div className="rounded-3xl bg-green-700 p-8 text-white">
            <p className="text-green-100">
                Welcome Back
            </p>
            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
                {customer.fullName}
            </h1>
            <p className="mt-4 max-w-2xl text-green-100">
                Managa your orders, profile and account information from your dashboard.
            </p>
        </div>
    );
}