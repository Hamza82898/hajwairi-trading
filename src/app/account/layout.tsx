import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AccountSidebar from "@/components/account/AccountSidebar";

interface Props {
    children: React.ReactNode;
}

export default async function AccountLayout({
    children,
}: Props) {
    const session = await auth();

    if (!session?.user) {
        redirect("/login");
    }
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8 lg:flex-row">
                    <aside className="w-full lg:w-72 lg:flex-shrink-0">
                        <AccountSidebar />
                    </aside>
                    <main>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}