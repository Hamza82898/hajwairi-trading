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
            {/*Mobile Header*/}
            <div className="border-b bg-green-700 p-4 text-white lg:hidden">
                <h2 className="text-xl font-bold">
                    Hajwairi Admin
                </h2>
            </div>
            
            <div className="flex flex-col lg:flex-row">

                {/*Side bar*/}

                <aside className="w-full bg-green-700 text-white lg:min-h-screen lg:w-64 lg:p-6">
                    <h2 className="mb-10 hidden text-2xl font-bold lg:block">
                        Hajwairi Admin
                    </h2>

                    <nav className="flex gap-2 overflow-x-auto px-4 py-4 lg:block lg:space-y-4 lg:px-0 lg:py-0">
                        <a
                            href="/admin"
                            className="whitespace-nowrap rounded-lg bg-green-800 px-4 py-2 hover:bg-green-900 lg:block"
                        >
                            Dashboard
                        </a>

                        <a
                            href="/admin/products"
                            className="whitespace-nowrap rounded-lg bg-green-800 px-4 py-2 hover:bg-green-900 lg:block"
                        >
                            Products
                        </a>

                        <a
                            href="/admin/categories"
                            className="whitespace-nowrap rounded-lg bg-green-800 px-4 py-2 hover:bg-green-900 lg:block"
                        >
                            Categories    
                        </a>

                        <a
                            href="/admin/orders"
                            className="whitespace-nowrap rounded-lg bg-green-800 px-4 py-2 hover:bg-green-900 lg:block"
                        >
                            Orders
                        </a>

                        <a
                            href="/admin/customers"
                            className="whitespace-nowrap rounded-lg bg-green-800 px-4 py-2 hover:bg-green-900 lg:block"
                        >
                            Customers    
                        </a>

                        <a
                            href="/admin/reviews"
                            className="whitespace-nowrap rounded-lg bg-green-800 px-4 py-2 hover:bg-green-900 lg:block"
                        >
                            Reviews
                        </a> 

                    </nav>

                    <div className="border-t border-green-600 p-4 lg:mt-10 lg:p-0 lg:pt-6">
                        <LogoutButton />
                    </div>

                </aside>

                {/*Main*/}

                <main className="flex-1 p-4 sm:p-6 lg:p-8">
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