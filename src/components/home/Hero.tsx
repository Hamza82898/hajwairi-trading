import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-green-50 to-orange-50">

            {/* Background Blur */}

            <div className="absolute left-0 top-0 h-52 w-52 rounded-full bg-green-200/40 blur-3xl sm:h-72 sm:w-72" />

            <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-orange-200/40 blur-3xl sm:h-80 sm:w-80" />

            {/* Main Content */}

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-24">

                <HeroContent />

                <HeroImage />

            </div>

        </section>
    );
}