"use client";

import Link from "next/link";
import { useActionState } from "react";
import { loginAction } from "@/actions/auth";

const initialState = {
    success: false,
    message: "",
};

export default function LoginPage() {
    const [state, formAction, pending] = useActionState(
        loginAction,
        initialState
    );

    return (
        <main className="mx-auto flex min-h-[85vh] max-w-md items-center justify-center px-4 py-10 sm:px-6">

            <div className="w-full rounded-2xl border bg-white p-6 shadow-lg sm:p-8">

                {/* Heading */}

                <h1 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                    Welcome Back
                </h1>

                <p className="mt-2 text-center text-sm text-gray-500 sm:text-base">
                    Login to your account.
                </p>

                {/* Message */}

                {state.message && (
                    <div
                        className={`mt-6 rounded-xl p-4 text-sm ${
                            state.success
                                ? "border border-green-200 bg-green-50 text-green-700"
                                : "border border-red-200 bg-red-50 text-red-700"
                        }`}
                    >
                        {state.message}
                    </div>
                )}

                {/* Form */}

                <form
                    action={formAction}
                    className="mt-8 space-y-5"
                >
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Enter your email"
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

                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="********"
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

                    {/* Options */}

                    <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">

                        <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            Remember Me
                        </label>

                        <button
                            type="button"
                            className="text-left font-medium text-green-700 hover:underline sm:text-right"
                        >
                            Forgot Password?
                        </button>

                    </div>

                    <button
                        type="submit"
                        disabled={pending}
                        className="
                            w-full
                            rounded-xl
                            bg-green-700
                            py-3
                            font-semibold
                            text-white
                            transition
                            hover:bg-green-800
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                        "
                    >
                        {pending ? "Signing In..." : "Login"}
                    </button>

                </form>

                {/* Register */}

                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?

                    <Link
                        href="/register"
                        className="ml-2 font-semibold text-green-700 hover:underline"
                    >
                        Register
                    </Link>
                </p>

            </div>

        </main>
    );
}