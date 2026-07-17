import { Button } from "@/components/ui"
import HeroButtons from "./HeroButtons";
import HeroFeatures from "./HeroFeatures";

export default function HeroContent() {
    return (
        <div className="space-y-6">
            
            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                Fresh Fruits & Daily Grocery
            </span>

            <h1 className="text-5x1 font-extrabold leading-tight text-gray-900">
                Freshness Delivered <br /> Across Bahrain
            </h1>

            <p className="max-w-xl text-lg text-gray-600">
                Shop premium quality fruits, vegetables, snacks, beverages and grocery
                from Hajwairi Trading Co. W.L.L. with fast and reliable delivery.
            </p>

            <div className="flex gap-4">
                <HeroButtons />
                <HeroFeatures />

            </div>

        </div>
    );
}