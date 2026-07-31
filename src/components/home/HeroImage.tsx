import Image from "next/image";
import { Percent, Star, Truck } from "lucide-react";

export default function HeroImage() {
    return (
        <div className="relative w-full">

            {/* Glow */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-green-100/70 via-white to-orange-100/70 blur-3xl" />

            {/* Hero Card */}
            <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-green-50 via-white to-orange-50 shadow-2xl h-[430px] sm:h-[540px] md:h-[650px] lg:h-[740px] xl:h-[790px]">

                {/* Image */}
                <div className="absolute inset-0 flex items-end justify-center">

                    <Image
                        src="/products/fruits/hero-fruits.png"
                        alt="Fresh Fruits"
                        width={1500}
                        height={1100}
                        priority
                        className="
                            pointer-events-none
                            select-none
                            h-auto
                            w-[96%]
                            sm:w-[90%]
                            md:w-[88%]
                            lg:w-[92%]
                            xl:w-[96%]
                            object-contain
                            drop-shadow-[0_45px_35px_rgba(0,0,0,.18)]
                            transition-all
                            duration-500
                            hover:scale-[1.03]
                        "
                    />

                </div>

                {/* Delivery */}

                <div className="absolute left-[4%] top-[6%] z-30 rounded-3xl bg-white/95 backdrop-blur-md shadow-xl px-3 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5">

                    <div className="flex items-center gap-3">

                        <div className="rounded-full bg-green-100 p-3 lg:p-4">

                            <Truck className="h-5 w-5 lg:h-6 lg:w-6 text-green-700" />

                        </div>

                        <div>

                            <p className="text-[10px] sm:text-xs lg:text-sm text-gray-500">
                                Free Delivery
                            </p>

                            <h3 className="text-xs sm:text-base lg:text-xl font-bold text-green-900">
                                Selected Areas
                            </h3>

                        </div>

                    </div>

                </div>

                {/* Offer */}

                <div className="absolute right-[4%] top-[5%] z-30 rounded-3xl bg-white/95 backdrop-blur-md shadow-xl px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">

                    <div className="mb-2 flex items-center gap-2">

                        <Percent className="h-4 w-4 text-orange-500" />

                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-orange-500">
                            Limited Offer
                        </span>

                    </div>

                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-orange-500 leading-none">
                        35%
                    </h2>

                    <p className="mt-2 text-sm sm:text-base lg:text-xl font-bold text-gray-700">
                        OFF
                    </p>

                </div>

                {/* Premium */}

                <div className="absolute left-[5%] bottom-[8%] z-30 rounded-full bg-green-900 px-5 py-3 sm:px-7 sm:py-4 lg:px-10 lg:py-5 shadow-xl">

                    <p className="text-xs sm:text-base lg:text-xl font-semibold text-white whitespace-nowrap">
                        Premium Fresh Fruits
                    </p>

                </div>

                {/* Rating */}

                <div className="absolute right-[5%] bottom-[8%] z-30 rounded-3xl bg-white/95 backdrop-blur-md shadow-xl px-4 py-4 sm:px-6 sm:py-5">

                    <div className="flex items-center gap-2">

                        <Star
                            className="h-5 w-5 text-yellow-400"
                            fill="#FACC15"
                        />

                        <span className="text-lg sm:text-2xl lg:text-3xl font-bold">
                            4.9
                        </span>

                    </div>

                    <p className="mt-2 text-[10px] sm:text-sm lg:text-base text-gray-500">
                        Customer Rating
                    </p>

                </div>

            </div>

        </div>
    );
}