import Link from "next/link";
import { PhoneCall, MessageCircle } from "lucide-react";

export default function ContactCTA() {
    return (
        <section className="bg-green-800 py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
                <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
                    Need Immediate Assistance?
                </span>
                <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                    We're Always Ready To Help You
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-green-100 sm:text-lg"> 
                    Whether you want to place an order, ask about product
                    availability, or need delivery information, our team is
                    available to assist you.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="tel:+97339032710"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-green-700 transition hover:bg-gray-100 sm:w-auto"
                    >
                        <PhoneCall size={20} />
                        Call Now
                    </Link>
                    <Link
                        href="https://wa.me/97339032710"
                        target="_blank"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-green-700 sm:w-auto"
                    >
                    <MessageCircle size={20} />
                        WhatsApp Us
                    </Link>
                </div>
            </div>
        </section>
    );
}