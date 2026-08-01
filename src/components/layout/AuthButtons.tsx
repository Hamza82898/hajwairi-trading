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
        <>
            {/*Desktop*/}

            <Link
                href="/login"
                className="hidden items-center gap-2 rounded-full bg-green-900 px-6 py-3 font-semibold text-white transition hover:bg-green-800 lg:flex"
            >
                <User size={18} />
                Login
            </Link>

            {/*Mobile*/}

            <Link
                href="/login"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-900 px-5 py-3 font-semibold text-white transition hover:bg-green-800 lg:hidden"
            >
                <User size={18} />
                Login
            </Link>
        </>
    );
}