import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AccountPage() {
    const session = await auth();

    if (!session?.user?.email) {
        redirect("/login");
    }

    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email,
        },
        include: {
            customer: true,
        },
    });

    if (!user) {
        redirect("/");
    }

    return (
        <div className="grid gap-8 lg:grid-cols-2">

            {/* Personal Information */}

            <div className="rounded-2xl border bg-white p-6 shadow-sm">

                <h2 className="mb-6 text-2xl font-bold">
                    Personal Information
                </h2>

                <div className="space-y-4">

                    <div>
                        <p className="text-sm text-gray-500">
                            Name
                        </p>

                        <p className="font-semibold">
                            {user.name}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Email
                        </p>

                        <p className="font-semibold">
                            {user.email}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Phone
                        </p>

                        <p className="font-semibold">
                            {user.customer?.phone ?? "-"}
                        </p>
                    </div>

                </div>

            </div>

            {/* Quick Actions */}

            <div className="rounded-2xl border bg-white p-6 shadow-sm">

                <h2 className="mb-6 text-2xl font-bold">
                    Quick Actions
                </h2>

                <div className="space-y-4">

                    <Link
                        href="/my-orders"
                        className="block rounded-xl border p-4 transition hover:bg-green-50"
                    >
                        My Orders
                    </Link>

                    <Link
                        href="/account/edit"
                        className="block rounded-xl border p-4 transition hover:bg-green-50"
                    >
                        Edit Profile
                    </Link>

                </div>

            </div>

        </div>
    );
}