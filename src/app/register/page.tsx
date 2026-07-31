"use client";

import Link from "next/link";
import { useActionState } from "react";
import { registerAction } from "@/actions/register";


const initialState = {
    success: false,
    message: "",
};

export default function RegisterPage() {
    const [state, formAction, pending] = useActionState(
        registerAction,
        initialState
    );

    return (
        <main className="mx-auto flex min-h-[85vh] max-w-lg items-center justify-center px-6">
            <div className="w-full rounded-2xl border bg-white p-8 shadow">
                <h1 className="text-center text-4xl font-bold">
                    Create Account
                </h1>

                <p className="mt-2 text-center text-gray-500">
                    Register to continue shopping.
                </p>

                {state.message && (
                    <div
                        className={`mt-6 rounded-lg p-4 text-sm ${
                            state.success
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700" 
                        }`}
                    >
                        {state.message}
                    </div>
                )}

                <form
                    action={formAction}
                    className="mt-8 space-y-5"
                >
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Full Name
                        </label>

                        <input 
                            type="text"
                            name="name"
                            required
                            className="w-full rounded-xl border p-3 outline-none focus:border-green-600"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Email
                        </label>

                        <input 
                            type="email"
                            name="email"
                            required
                            className="w-full rounded-xl border p-3 outline-none focus:border-green-600"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Password
                        </label>

                        <input 
                            type="password"
                            name="password"
                            required
                            className="w-full rounded-xl border p-3 outline-none focus:border-green-600"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Confirm Password
                        </label>

                        <input 
                            type="password"
                            name="confirmPassword"
                            required
                            className="w-full rounded-xl border p-3 outline-none focus:border-green-600"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={pending}
                        className="w-full rounded-xl bg-green-700 py-3 font-semibold text-white hover:bg-green-800 disabled:opacity-50"
                    >
                        {pending
                            ? "Creating Account..."
                            : "Create Acoount"}
                    </button>

                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?

                    <Link
                        href="/login"
                        className="ml-2 font-semibold text-green-700 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>

        </main>
    );
}