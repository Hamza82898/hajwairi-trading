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
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">

            {/* Personal Information */}

            <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">

                <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
                    Personal Information
                </h2>

                <div className="space-y-5">

                    <div>
                        <p className="text-xs uppercase tracking-wide text-gray-500 sm:text-sm">
                            Name
                        </p>

                        <p className="mt-1 text-base font-semibold text-gray-900 sm:text-lg">
                            {user.name}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-wide text-gray-500 sm:text-sm">
                            Email
                        </p>

                        <p className="mt-1 break-all text-base font-semibold text-gray-900 sm:text-lg">
                            {user.email}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-wide text-gray-500 sm:text-sm">
                            Phone
                        </p>

                        <p className="mt-1 text-base font-semibold text-gray-900 sm:text-lg">
                            {user.customer?.phone ?? "-"}
                        </p>
                    </div>

                </div>

            </div>

            {/* Quick Actions */}

            <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">

                <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
                    Quick Actions
                </h2>

                <div className="space-y-4">

                    <Link
                        href="/my-orders"
                        className="
                            block
                            rounded-xl
                            border
                            border-gray-200
                            p-4
                            font-medium
                            transition-all
                            hover:border-green-200
                            hover:bg-green-50
                            hover:text-green-700
                        "
                    >
                        📦 My Orders
                    </Link>

                    <Link
                        href="/account/edit"
                        className="
                            block
                            rounded-xl
                            border
                            border-gray-200
                            p-4
                            font-medium
                            transition-all
                            hover:border-green-200
                            hover:bg-green-50
                            hover:text-green-700
                        "
                    >
                        ✏️ Edit Profile
                    </Link>

                    <Link
                        href="/account/change-password"
                        className="
                            block
                            rounded-xl
                            border
                            border-gray-200
                            p-4
                            font-medium
                            transition-all
                            hover:border-green-200
                            hover:bg-green-50
                            hover:text-green-700
                        "
                    >
                        🔒 Change Password
                    </Link>

                </div>

            </div>

        </div>
    );
}