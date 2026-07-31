import Image from "next/image";
import { Star, Truck, Percent } from "lucide-react";

export default function HeroImage() {
    return (
        <div className="relative w-full">

            {/* Background Glow */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-green-100 via-white to-orange-100 blur-3xl" />

            {/* Hero Card */}
            <div className="relative h-[420px] sm:h-[520px] md:h-[620px] lg:h-[720px] xl:h-[760px] overflow-hidden rounded-[40px] bg-gradient-to-br from-green-50 via-white to-orange-50 shadow-2xl">

                {/* Hero Image */}
                <div className="absolute inset-0 flex items-center justify-center">

                    <Image
                        src="/products/fruits/hero-fruits.png"
                        alt="Fresh Fruits"
                        fill
                        priority
                        className="
                            object-contain
                            object-bottom
                            scale-[0.9]
                            sm:scale-100
                            md:scale-105
                            lg:scale-110
                            xl:scale-[1.15]
                            transition-all
                            duration-500
                            hover:scale-[1.18]
                            drop-shadow-[0_35px_35px_rgba(0,0,0,0.18)]
                        "
                    />

                </div>

                {/* Delivery Card */}

                <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-30 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl px-3 py-3 sm:px-6 sm:py-5">

                    <div className="flex items-center gap-3">

                        <div className="rounded-full bg-green-100 p-3">

                            <Truck className="h-5 w-5 text-green-700" />

                        </div>

                        <div>

                            <p className="text-[11px] sm:text-sm text-gray-500">
                                Free Delivery
                            </p>

                            <h3 className="text-sm sm:text-lg font-bold text-green-900">
                                Selected Areas
                            </h3>

                        </div>

                    </div>

                </div>

                {/* Offer Card */}

                <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-30 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl px-4 py-4 sm:px-7 sm:py-6">

                    <div className="mb-2 flex items-center gap-2">

                        <Percent className="h-4 w-4 text-orange-500" />

                        <span className="text-[11px] sm:text-xs uppercase tracking-wider font-bold text-orange-500">
                            Limited Offer
                        </span>

                    </div>

                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-orange-500">
                        35%
                    </h2>

                    <p className="text-base sm:text-lg font-bold text-gray-700">
                        OFF
                    </p>

                </div>

                {/* Premium Button */}

                <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 z-30 rounded-full bg-green-900 px-5 py-3 sm:px-10 sm:py-4 text-sm sm:text-lg font-semibold text-white shadow-xl">

                    Premium Fresh Fruits

                </div>

                {/* Rating Card */}

                <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-30 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl px-4 py-3 sm:px-6 sm:py-5">

                    <div className="flex items-center gap-2">

                        <Star
                            className="h-5 w-5 text-yellow-400"
                            fill="#FACC15"
                        />

                        <span className="text-xl sm:text-3xl font-bold">
                            4.9
                        </span>

                    </div>

                    <p className="mt-1 text-xs sm:text-base text-gray-500">
                        Customer Rating
                    </p>

                </div>

            </div>

        </div>
    );
}