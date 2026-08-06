import Hero from "@/components/contact/Hero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import BusinessHours from "@/components/contact/BusinessHours";
import MapSection from "@/components/contact/MapSection";
import CTA from "@/components/contact/CTA";

export const metadata = {
    title: "Contact Us | Hajwairi Trading Company",
    description:
        "Get in touch with Hajwairi Trading Company Bahrain. Contact us for fresh fruits, vegetables, groceries, delivery, and customer support.",
};

export default function ContactPage() {
    return (
        <main className="bg-white">

            <Hero />

            <ContactInfo />

            <ContactForm />

            <BusinessHours />

            <MapSection />

            <CTA />

        </main>
    );
}