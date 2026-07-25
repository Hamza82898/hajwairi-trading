import Image from "next/image";
import {
    Star,
    Truck,
    Percent,
} from "lucide-react";

export default function HeroImage() {
    return (
        <div className="relative flex items-center justify-center">

            {/* Background Glow */}

            <div className="absolute inset-0 rounded-[50px] bg-gradient-to-br from-green-100 via-white to-orange-100 blur-3xl" />

            {/* Main Card */}

            <div className="relative flex h-[620px] w-full items-center justify-center rounded-[40px] bg-gradient-to-br from-green-50 via-white to-orange-50 shadow-2xl">

                {/* Main Fruits Image */}

                <Image
                    src="/products/fruits/hero-fruits.png"
                    alt="Fresh Fruits"
                    width={900}
                    height={900}
                    priority
                    className="relative z-10 w-[95%] max-w-[650px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition duration-500 hover:scale-105"
                />

                {/* Offer Badge */}

                <div className="absolute right-6 top-8 rounded-3xl bg-white p-5 shadow-xl">

                    <div className="flex items-center gap-2">

                        <Percent
                            size={18}
                            className="text-orange-500"
                        />

                        <span className="text-xs font-bold uppercase tracking-wider text-orange-500">
                            Limited Offer
                        </span>

                    </div>

                    <h2 className="mt-2 text-4xl font-black text-orange-500">
                        35%
                    </h2>

                    <p className="font-semibold text-gray-600">
                        OFF
                    </p>

                </div>

                {/* Free Delivery */}

                <div className="absolute left-6 top-24 rounded-2xl bg-white px-5 py-4 shadow-xl">

                    <div className="flex items-center gap-3">

                        <div className="rounded-full bg-green-100 p-3">

                            <Truck
                                size={22}
                                className="text-green-900"
                            />

                        </div>

                        <div>

                            <p className="text-xs text-gray-500">
                                Free Delivery
                            </p>

                            <h3 className="font-bold text-green-900">
                                Selected Areas
                            </h3>

                        </div>

                    </div>

                </div>

                {/* Rating */}

                <div className="absolute bottom-8 right-10 rounded-2xl bg-white px-6 py-4 shadow-xl">

                    <div className="flex items-center gap-2">

                        <Star
                            size={20}
                            fill="#FACC15"
                            className="text-yellow-400"
                        />

                        <span className="font-bold">
                            4.9/5
                        </span>

                    </div>

                    <p className="mt-1 text-sm text-gray-500">
                        Customer Rating
                    </p>

                </div>

                {/* Premium Badge */}

                <div className="absolute bottom-10 left-8 rounded-full bg-green-900 px-6 py-3 text-white shadow-xl">

                    Premium Fresh Fruits

                </div>

            </div>

        </div>
    );
}