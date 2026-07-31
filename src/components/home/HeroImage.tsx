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

            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-green-100 via-white to-orange-100 blur-3xl" />

            {/* Main Card */}

            <div className="relative flex min-h-[380px] w-full items-center justify-center overflow-hidden rounded-[30px] bg-gradient-to-br from-green-50 via-white to-orange-50 p-6 shadow-2xl sm:min-h-[500px] lg:h-[620px] lg:rounded-[40px] lg:p-0">

                {/* Main Image */}

                <Image
                    src="/products/fruits/hero-fruits.png"
                    alt="Fresh Fruits"
                    width={900}
                    height={900}
                    priority
                    className="relative z-10 mx-auto h-auto w-full max-w-[260px] translate-y-6 object-contain transition duration-500 hover:scale-105 sm:max-w-[420px] sm:translate-y-8 lg:max-w-[650px] lg:translate-y-10"
                />

                {/* Offer */}

                <div className="absolute right-3 top-3 rounded-2xl bg-white p-3 shadow-xl sm:right-6 sm:top-6 sm:p-5">

                    <div className="flex items-center gap-2">

                        <Percent
                            size={16}
                            className="text-orange-500"
                        />

                        <span className="hidden text-xs font-bold uppercase tracking-wider text-orange-500 sm:block">
                            Limited Offer
                        </span>

                    </div>

                    <h2 className="mt-1 text-2xl font-black text-orange-500 sm:mt-2 sm:text-4xl">
                        35%
                    </h2>

                    <p className="text-xs font-semibold text-gray-600 sm:text-base">
                        OFF
                    </p>

                </div>

                {/* Delivery */}

                <div className="absolute left-3 top-16 rounded-xl bg-white px-3 py-2 shadow-xl sm:left-6 sm:top-24 sm:rounded-2xl sm:px-5 sm:py-4">

                    <div className="flex items-center gap-2 sm:gap-3">

                        <div className="rounded-full bg-green-100 p-2 sm:p-3">

                            <Truck
                                size={18}
                                className="text-green-900"
                            />

                        </div>

                        <div>

                            <p className="hidden text-xs text-gray-500 sm:block">
                                Free Delivery
                            </p>

                            <h3 className="text-xs font-bold text-green-900 sm:text-base">
                                Selected Areas
                            </h3>

                        </div>

                    </div>

                </div>

                {/* Rating */}

                <div className="absolute bottom-4 right-3 rounded-xl bg-white px-3 py-2 shadow-xl sm:bottom-8 sm:right-8 sm:rounded-2xl sm:px-6 sm:py-4">

                    <div className="flex items-center gap-2">

                        <Star
                            size={18}
                            fill="#FACC15"
                            className="text-yellow-400"
                        />

                        <span className="font-bold">
                            4.9
                        </span>

                    </div>

                    <p className="hidden text-sm text-gray-500 sm:block">
                        Customer Rating
                    </p>

                </div>

                {/* Premium */}

                <div className="absolute bottom-4 left-3 rounded-full bg-green-900 px-3 py-2 text-xs font-medium text-white shadow-xl sm:bottom-8 sm:left-8 sm:px-6 sm:py-3 sm:text-base">

                    Premium Fresh Fruits

                </div>

            </div>

        </div>
    );
}