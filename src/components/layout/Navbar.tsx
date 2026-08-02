import NavbarClient from "./NavbarClient";
import AuthButtons from "./AuthButtons";
import { auth } from "@/auth";


export default async function Navbar() {
    const session = await auth();

    return (
        <NavbarClient session={session} >
            <AuthButtons />
        </NavbarClient>
    )
}