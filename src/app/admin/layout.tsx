import { auth } from "@/auth";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/admin/LogoutButton";
import { Toaster } from "sonner";


export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session) {
        redirect("/login");
    }

    if (session.user.role !== "ADMIN") {
        redirect("/");
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex">

                {/*Side bar*/}

                <aside className="w-64 bg-green-700 p-6 text-white">
                    <h2 className="mb-10 text-2xl font-bold">
                        Hajwairi Admin
                    </h2>

                    <nav className="space-y-4">
                        <a
                            href="/admin"
                            className="block rounded-lg px-4 py-2 hover:bg-green-800"
                        >
                            Dashboard
                        </a>

                        <a
                            href="/admin/products"
                            className="block rounded-lg px-4 py-2 hover:bg-green-800"
                        >
                            Products
                        </a>

                        <a
                            href="/admin/categories"
                            className="block rounded-lg px-4 py-2 hover:bg-green-800"
                        >
                            Categories    
                        </a>

                        <a
                            href="/admin/orders"
                            className="block rounded-lg px-4 py-2 hover:bg-green-800"
                        >
                            Orders
                        </a>

                        <a
                            href="/admin/customers"
                            className="block rounded-lg px-4 py-2 hover:bg-green-800"
                        >
                            Customers    
                        </a>

                        <a
                            href="/admin/reviews"
                            className="block rounded-lg px-4 py-2 hover:bg-green-800"
                        >
                            Reviews
                        </a> 

                    </nav>

                    <div className="mt-auto border-t border-green-600 pt-6">
                        <LogoutButton />
                    </div>

                </aside>

                {/*Main*/}

                <main className="flex-1 p-8">
                    {children}
                    <Toaster
                        position="top-right"
                        richColors
                        closeButton
                    />
                </main>

            </div>

        </div>
    );
}