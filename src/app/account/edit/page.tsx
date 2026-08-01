import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { updateProfile } from "@/actions/profile";

export default async function EditProfilePage() {
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

    if (!user || !user.customer) {
        redirect("/account");
    }

    return (
        <form
            action={async (formData) => {
                "use server";
                await updateProfile(formData);
            }}
            className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6 lg:p-8"
        >
            <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
                Edit Profile
            </h2>

            <div className="grid gap-5 md:grid-cols-2 md:gap-6">

                <div>
                    <label className="mb-2 block text-sm font-medium sm:text-base">
                        Full Name
                    </label>

                    <input
                        name="fullName"
                        defaultValue={user.customer.fullName}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-200 sm:text-base"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium sm:text-base">
                        Phone
                    </label>

                    <input
                        name="phone"
                        defaultValue={user.customer.phone}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-200 sm:text-base"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium sm:text-base">
                        Email
                    </label>

                    <input
                        name="email"
                        defaultValue={user.customer.email ?? ""}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-200 sm:text-base"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium sm:text-base">
                        Area
                    </label>

                    <input
                        name="area"
                        defaultValue={user.customer.area}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-200 sm:text-base"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium sm:text-base">
                        Block
                    </label>

                    <input
                        name="block"
                        defaultValue={user.customer.block}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-200 sm:text-base"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium sm:text-base">
                        Road
                    </label>

                    <input
                        name="road"
                        defaultValue={user.customer.road}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-200 sm:text-base"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium sm:text-base">
                        Building
                    </label>

                    <input
                        name="building"
                        defaultValue={user.customer.building}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-200 sm:text-base"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium sm:text-base">
                        Flat
                    </label>

                    <input
                        name="flat"
                        defaultValue={user.customer.flat}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-200 sm:text-base"
                    />
                </div>

            </div>

            <div className="mt-6">
                <label className="mb-2 block text-sm font-medium sm:text-base">
                    Landmark
                </label>

                <input
                    name="landmark"
                    defaultValue={user.customer.landmark ?? ""}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-200 sm:text-base"
                />
            </div>

            <div className="mt-6">
                <label className="mb-2 block text-sm font-medium sm:text-base">
                    Notes
                </label>

                <textarea
                    name="notes"
                    rows={4}
                    defaultValue={user.customer.notes ?? ""}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-200 sm:text-base"
                />
            </div>

            <button
                type="submit"
                className="mt-8 w-full rounded-xl bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800 sm:w-auto sm:px-8"
            >
                Save Changes
            </button>

        </form>
    );
}