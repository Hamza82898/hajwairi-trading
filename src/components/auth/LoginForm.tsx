"use client"

import { useActionState } from "react";
import { loginAction, type LoginState } from "@/actions/auth";
import LoginButton from "./LoginButton";

const initialState: LoginState = {
    success: false,
    message: "",
}

export default function LoginForm() {

    const [state, formAction] = useActionState(
        loginAction,
        initialState
    );

    return (
        <form action={formAction} className="space-y-5 sm:space-y-6">
            <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 sm:text-base">
                    Email
                </label>

                <input
                    name="email" 
                    type="email"
                    placeholder="admin@hajwairi.com"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition-all focus:border-green-700 focus:ring-2 focus:ring-green-200 sm:text-base"
                    required
                />
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 sm:text-base">
                    Password
                </label>

                <input 
                    name="password"
                    type="password"
                    placeholder="********"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition-all focus:border-green-700 focus:ring-2 focus:ring-green-200 sm:text-base"
                    required
                />
            </div>

            {state.message && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700 sm:text-base">
                    {state.message}
                </div>
            )}

            <LoginButton />

        </form>
    );
}