import { ReactNode } from "react";
import AccountSidebar from "@/components/account/AccountSidebar";

interface Props {
    children: ReactNode;
}

export default function AccountLayout({
    children,
}: Props) {
    return (
        <main className="mx-auto max-w-7xl px-6 py-10">

            <h1 className="mb-8 text-4xl font-bold">
                My Account
            </h1>

            <div className="grid gap-8 lg:grid-cols-4">

                <div>
                    <AccountSidebar />
                </div>

                <div className="lg:col-span-3">
                    {children}
                </div>

            </div>

        </main>
    );
}