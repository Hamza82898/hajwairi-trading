import { PhoneCall } from "lucide-react";

export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-green-900 via-green-800 to-emerald-600">

            <div className="mx-auto flex min-h-[320px] max-w-7xl items-center px-4 py-20 text-center sm:px-6 lg:px-8">

                <div className="mx-auto max-w-3xl">

                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
                        <PhoneCall
                            size={38}
                            className="text-white"
                        />
                    </div>

                    <h1 className="mt-8 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                        Contact Us
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-green-100">
                        We'd love to hear from you.
                        Whether you have questions, need assistance,
                        or want to place an order,
                        our team is always ready to help.
                    </p>

                </div>

            </div>

        </section>
    );
}