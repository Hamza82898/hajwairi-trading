import Hero from "@/components/about/Hero";
import OurStory from "@/components/about/OurStory";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Statistics from "@/components/about/Statistics";
import MissionVision from "@/components/about/MissionVision";
import CTA from "@/components/about/CTA";


export const metadata = {
    title: "About Us | Hajwairi Trading Company",
    description: "Learn more about Hajwairi Trading Company Bahrain.",
};

export default function AboutPage() {
    return (
        <main className="bg-white">
            <Hero />
            <OurStory />
            <WhyChooseUs />
            <Statistics />
            <MissionVision />
            <CTA />
        </main>
    );
}