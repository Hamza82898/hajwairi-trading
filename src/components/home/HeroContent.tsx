import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroFeatures from "./HeroFeatures";
import HeroStats from "./HeroStats";

export default function HeroContent() {
    return (
        <div className="space-y-6 text-center lg:space-y-8 lg:text-left lg:pr-6">

            <HeroBadge />

            {/* Heading */}

            <div className="space-y-4 lg:space-y-5">

                <h1 className="text-3xl font-black leading-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl">

                    Fresh

                    <span className="block text-green-900">
                        Groceries
                    </span>

                    <span className="block">

                        Delivered

                        <span className="block text-orange-500 sm:inline sm:ml-3">
                            Across Bahrain
                        </span>

                    </span>

                </h1>

                <p className="mx-auto max-w-2xl px-2 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:mx-0">

                    Discover premium Pakistani fruits, fresh vegetables,
                    beverages, snacks and daily grocery essentials from
                    Hajwairi Trading Co. W.L.L. with fast, reliable delivery
                    across Bahrain.

                </p>

            </div>

            <HeroButtons />
            <div className="flex justify-center lg:justify-start">
                <HeroFeatures />
            </div>

            <div className="flex justify-center lg:justify-start">
                <HeroStats />
            </div>


        </div>
    );
}