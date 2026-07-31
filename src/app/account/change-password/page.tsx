import { changePassword } from "@/actions/change-password";

export default function ChangePasswordPage() {
    return (
        <div className="rounded-2xl border bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">
                Change Password
            </h2>

            <form
                action={async (formData) => {
                        "use server";
                    await changePassword(formData);
                }}
                className="space-y-6"
            >

                <div>
                    <label className="mb-2 block font-medium">
                        Current Password
                    </label>

                    <input
                        type="password"
                        name="currentPassword"
                        required
                        className="w-full rounded-xl border p-3"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        New Password
                    </label>

                    <input
                        type="password"
                        name="newPassword"
                        required
                        className="w-full rounded-xl border p-3"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Confirm New Password
                    </label>

                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        className="w-full rounded-xl border p-3"
                    />
                </div>

                <button
                    type="submit"
                    className="rounded-xl bg-green-700 px-8 py-3 font-semibold text-white transition hover:bg-green-800"
                >
                    Update Password
                </button>

            </form>

        </div>
    );
}