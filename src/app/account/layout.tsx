import { ReactNode } from "react";
import AccountSidebar from "@/components/account/AccountSidebar";

interface Props {
    children: ReactNode;
}

export default function AccountLayout({
    children,
}: Props) {
    return (
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">

            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    My Account
                </h1>
                <p className="mt-2 text-sm text-gray-500 sm:text-base">
                    Manage your profile, orders and account settings.
                </p>
            </div>

            

            <div className="grid gap-6 lg:grid-cols-4 lg:gap-8">

                <aside className="lg:col-span-1">
                    <AccountSidebar />
                </aside>

                <section className="lg:col-span-3">
                    {children}
                </section>

            </div>

        </main>
    );
}