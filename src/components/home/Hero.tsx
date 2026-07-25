import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-green-50 to-orange-50">

            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orage-200/40 blur-3xl" />
            <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2">

                <HeroContent />

                <HeroImage />

            </div>

        </section>
    );
}