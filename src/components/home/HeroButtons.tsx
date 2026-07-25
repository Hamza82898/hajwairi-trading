import Link from "next/link";

export default function HeroButtons() {
    return (
        <div className="flex flex-wrap gap-4">

            <Link
                href="/shop"
                className="rounded-full bg-green-900 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-xl"
            >
                Shop Now
            </Link>

            <Link
                href="/offers"
                className="rounded-full border-2 border-green-900 px-8 py-4 font-semibold text-green-900 transition-all duration-300 hover:bg-green-900 hover:text-white"
            >
                View Offers
            </Link>

        </div>
    );
}