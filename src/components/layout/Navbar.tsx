import NavbarClient from "./NavbarClient";
import AuthButtons from "./AuthButtons";
import { Session } from "next-auth";

interface Props {
    session: Session | null;
}

export default function Navbar({session}: Props) {
    return (
        <NavbarClient session={session}>
            <AuthButtons />
        </NavbarClient>
    );
}