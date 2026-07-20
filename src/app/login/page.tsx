import LoginForm from "@/components/auth/LoginForm";


export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-green-700">
                        Hajwairi Trading
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Admin Login
                    </p>
                </div>

                <LoginForm />

            </div>
        </div>
    );
}