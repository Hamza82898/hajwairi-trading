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
            className="space-y-6 rounded-2xl border bg-white p-8 shadow-sm"
        >

            <div className="grid gap-6 md:grid-cols-2">

                <div>
                    <label className="mb-2 block font-medium">
                        Full Name
                    </label>

                    <input
                        name="fullName"
                        defaultValue={user.customer.fullName}
                        className="w-full rounded-xl border p-3"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Phone
                    </label>

                    <input
                        name="phone"
                        defaultValue={user.customer.phone}
                        className="w-full rounded-xl border p-3"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Email
                    </label>

                    <input
                        name="email"
                        defaultValue={user.customer.email ?? ""}
                        className="w-full rounded-xl border p-3"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Area
                    </label>

                    <input
                        name="area"
                        defaultValue={user.customer.area}
                        className="w-full rounded-xl border p-3"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Block
                    </label>

                    <input
                        name="block"
                        defaultValue={user.customer.block}
                        className="w-full rounded-xl border p-3"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Road
                    </label>

                    <input
                        name="road"
                        defaultValue={user.customer.road}
                        className="w-full rounded-xl border p-3"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Building
                    </label>

                    <input
                        name="building"
                        defaultValue={user.customer.building}
                        className="w-full rounded-xl border p-3"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Flat
                    </label>

                    <input
                        name="flat"
                        defaultValue={user.customer.flat}
                        className="w-full rounded-xl border p-3"
                    />
                </div>

            </div>

            <div>
                <label className="mb-2 block font-medium">
                    Landmark
                </label>

                <input
                    name="landmark"
                    defaultValue={user.customer.landmark ?? ""}
                    className="w-full rounded-xl border p-3"
                />
            </div>

            <div>
                <label className="mb-2 block font-medium">
                    Notes
                </label>

                <textarea
                    name="notes"
                    rows={4}
                    defaultValue={user.customer.notes ?? ""}
                    className="w-full rounded-xl border p-3"
                />
            </div>

            <button
                type="submit"
                className="rounded-xl bg-green-700 px-8 py-3 font-semibold text-white hover:bg-green-800"
            >
                Save Changes
            </button>

        </form>
    );
}