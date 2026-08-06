export default function MapSection() {
    return (
        <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                        Find Us
                    </span>
                    <h2 className="mt-5 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Visit Our Location
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                        You can visit our location or use Google Maps
                        for easy navigation across Bahrain.
                    </p>
                </div>
                <div className="overflow-hidden rounded-3xl border bg-white shadow-xl">
                    <div className="aspect-[16/9] w-full">
                        <iframe 
                            title="Hajwairi Trading Company Location"
                            src="https://www.google.com/maps?q=Bahrain&output=embed"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            className="h-full w-full border-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}