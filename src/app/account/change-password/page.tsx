import { changePassword } from "@/actions/change-password";

export default function ChangePasswordPage() {
    return (
        <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6 lg:p-8">

            <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
                Change Password
            </h2>

            <form
                action={async (formData) => {
                    "use server";
                    await changePassword(formData);
                }}
                className="space-y-5 sm:space-y-6"
            >

                {/* Current Password */}

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 sm:text-base">
                        Current Password
                    </label>

                    <input
                        type="password"
                        name="currentPassword"
                        required
                        placeholder="Enter current password"
                        className="
                            w-full
                            rounded-xl
                            border
                            border-gray-300
                            px-4
                            py-3
                            text-sm
                            outline-none
                            transition-all
                            focus:border-green-700
                            focus:ring-2
                            focus:ring-green-200
                            sm:text-base
                        "
                    />
                </div>

                {/* New Password */}

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 sm:text-base">
                        New Password
                    </label>

                    <input
                        type="password"
                        name="newPassword"
                        required
                        placeholder="Enter new password"
                        className="
                            w-full
                            rounded-xl
                            border
                            border-gray-300
                            px-4
                            py-3
                            text-sm
                            outline-none
                            transition-all
                            focus:border-green-700
                            focus:ring-2
                            focus:ring-green-200
                            sm:text-base
                        "
                    />
                </div>

                {/* Confirm Password */}

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 sm:text-base">
                        Confirm New Password
                    </label>

                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        placeholder="Confirm new password"
                        className="
                            w-full
                            rounded-xl
                            border
                            border-gray-300
                            px-4
                            py-3
                            text-sm
                            outline-none
                            transition-all
                            focus:border-green-700
                            focus:ring-2
                            focus:ring-green-200
                            sm:text-base
                        "
                    />
                </div>

                {/* Button */}

                <button
                    type="submit"
                    className="
                        w-full
                        rounded-xl
                        bg-green-700
                        px-6
                        py-3
                        font-semibold
                        text-white
                        transition
                        hover:bg-green-800
                        sm:w-auto
                        sm:px-8
                    "
                >
                    Update Password
                </button>

            </form>

        </div>
    );
}