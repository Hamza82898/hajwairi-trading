import Link from "next/link";
import { User } from "lucide-react";
import { auth } from "@/auth";
import UserMenu from "./UserMenu";



export default async function AuthButtons() {
    const session = await auth();

    if (session?.user) {
        return <UserMenu user={session.user} />;
    }

    return (
        <Link
            href="/login"
            className="hidden items-center gap-2 rounded-full bg-green-900 px-6 py-3 font-semibold text-white transition hover:bg-green-800 md:flex"
        >
            <User size={18} />
            Login
        </Link>
    );
}