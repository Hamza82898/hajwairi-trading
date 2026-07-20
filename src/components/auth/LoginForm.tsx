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
        <form action={formAction} className="space-y-5">
            <div>
                <label className="mb-2 block text-sm font-medium">
                    Email
                </label>

                <input
                    name="email" 
                    type="email"
                    placeholder="admin@hajwairi.com"
                    className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-700"
                    required
                />
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    Password
                </label>

                <input 
                    name="password"
                    type="password"
                    placeholder="********"
                    className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-700"
                    required
                />
            </div>

            {state.message && (
                <div className="rounded-lg bg-red-100 p-3 text-sm text-red-700">
                    {state.message}
                </div>
            )}

            <LoginButton />

        </form>
    );
}