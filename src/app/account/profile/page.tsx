import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
    const session = await auth();

    if (!session?.user?.email) {
        redirect("/login");
    }

    const customer = await prisma.customer.findUnique({
        where: {
            userId: Number(session.user.id),
        },
    });

    if (!customer) {
        redirect("/");
    }

    return (
        <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8 lg:px-6 lg:py-10">

            <div className="mb-8">
                <h1 className="text-3xl font-bold sm:text-4xl">
                    My Profile
                </h1>

                <p className="mt-2 text-gray-500">
                    Your saved account information.
                </p>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm">

                <div className="grid gap-6 md:grid-cols-2">

                    <div>
                        <p className="text-sm text-gray-500">
                            Full Name
                        </p>

                        <h2 className="mt-1 text-lg font-semibold">
                            {customer.fullName}
                        </h2>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Email
                        </p>

                        <h2 className="mt-1 text-lg font-semibold">
                            {customer.email}
                        </h2>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Phone
                        </p>

                        <h2 className="mt-1 text-lg font-semibold">
                            {customer.phone}
                        </h2>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Delivery Area
                        </p>

                        <h2 className="mt-1 text-lg font-semibold">
                            {customer.area}
                        </h2>
                    </div>

                    <div className="md:col-span-2">
                        <p className="text-sm text-gray-500">
                            Address
                        </p>

                        <h2 className="mt-1 text-lg font-semibold">
                            Block {customer.block}, Road {customer.road}, Building {customer.building}
                        </h2>

                        {customer.flat && (
                            <p className="mt-1 text-gray-600">
                                Flat: {customer.flat}
                            </p>
                        )}

                        {customer.landmark && (
                            <p className="mt-1 text-gray-600">
                                Landmark: {customer.landmark}
                            </p>
                        )}
                    </div>

                </div>

            </div>

        </main>
    );
}