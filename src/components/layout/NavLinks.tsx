import Link from "next/link";

export default function NavLinks() {
    return (
        <nav className="hidden items-center gap-8 lg:flex">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/offers">Offers</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>

        </nav>
    );
}