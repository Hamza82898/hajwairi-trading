import { Target, Eye } from "lucide-react";

export default function MissionVision() {
    return (
        <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="mx-auto mb-14 max-w-3xl text-center">

                    <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                        Our Purpose
                    </span>

                    <h2 className="mt-5 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                        Mission &
                        <span className="block text-green-700">
                            Vision
                        </span>
                    </h2>

                    <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                        We are committed to delivering quality products,
                        exceptional service, and creating long-term value for
                        every customer we serve.
                    </p>

                </div>

                <div className="grid gap-8 lg:grid-cols-2">

                    {/* Mission */}

                    <div className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white">
                            <Target size={30} />
                        </div>

                        <h3 className="mt-6 text-3xl font-bold text-gray-900">
                            Our Mission
                        </h3>

                        <p className="mt-6 leading-8 text-gray-600">
                            To provide fresh, high-quality fruits,
                            vegetables, groceries, and daily essentials at
                            competitive prices while delivering an excellent
                            shopping experience with reliable doorstep
                            delivery across Bahrain.
                        </p>

                    </div>

                    {/* Vision */}

                    <div className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white">
                            <Eye size={30} />
                        </div>

                        <h3 className="mt-6 text-3xl font-bold text-gray-900">
                            Our Vision
                        </h3>

                        <p className="mt-6 leading-8 text-gray-600">
                            To become Bahrain's most trusted grocery and fresh
                            food supplier by continuously improving product
                            quality, expanding our services, and building
                            lasting relationships with every customer.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}