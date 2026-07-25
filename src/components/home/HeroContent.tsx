import HeroButtons from "./HeroButtons";
import HeroFeatures from "./HeroFeatures";
import HeroBadge from "./HeroBadge";
import HeroStats from "./HeroStats";


export default function HeroContent() {
    return (
        <div className="space-y-8">

            
            <HeroBadge />
            {/*Heading*/}
            <div className="space-y-5">
                <h1 className="text-5xl font-black leading-tight text-gray-900 lg:text-7xl ">
                    Fresh

                    <span className="block text-green-900">
                        Groceries
                    </span>

                    <span className="block">
                        Delivered
                        <span className="ml-3 text-orange-500">
                            Across Bahrain
                        </span>
                    </span>
                </h1>

                <p className="max-w-2xl text-lg leading-8 text-gray-600">

                    Discover premium Pakistani fruits, fresh vegetables,
                    beverages, snacks and daily grocery essentials from
                    Hajwairi Trading Co. W.L.L. with fast, reliable delivery
                    across Bahrain.

                </p>

            </div>

            <HeroButtons />

            <HeroFeatures />

            <HeroStats />            
            
        </div>
    );
}