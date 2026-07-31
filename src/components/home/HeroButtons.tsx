import Link from "next/link";

export default function HeroButtons() {
    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">

            <Link
                href="/shop"
                className="rounded-full bg-green-900 px-6 py-3 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-800 sm:px-8 sm:py-4"
            >
                Shop Now
            </Link>

            <Link
                href="/offers"
                className="rounded-full border-2 border-green-900 px-6 py-3 text-center font-semibold text-green-900 transition-all duration-300 hover:bg-green-900 hover:text-white sm:px-8 sm:py-4"
            >
                View Offers
            </Link>

        </div>
    );
}