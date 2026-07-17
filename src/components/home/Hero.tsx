import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
    return (
        <section className="mx-auto grid max-w-7x1 grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2">
            <HeroContent />
            <HeroImage />

        </section>
    );
}