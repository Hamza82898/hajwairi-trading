import {
    Phone,
    Truck,
    Clock3,
    MapPin,
} from "lucide-react";

export default function TopBar() {
    return (
        <div className="bg-green-900 text-white">

            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">

                {/* Left */}

                <div className="hidden items-center gap-5 lg:flex">

                    <div className="flex items-center gap-2">
                        <Truck size={15} />
                        <span>
                            Free Delivery on Selected Areas
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Clock3 size={15} />
                        <span>
                            8:00 AM - 10:00 PM
                        </span>
                    </div>

                </div>

                {/* Mobile / Tablet */}

                <div className="flex items-center justify-between sm:w-full lg:w-auto lg:justify-end lg:gap-6">

                    <div className="flex items-center gap-2">
                        <Phone size={15} />

                        <a
                            href="tel:+97339032710"
                            className="font-medium hover:underline"
                        >
                            +973 3903 2710
                        </a>
                    </div>

                    <div className="flex items-center gap-2">
                        <MapPin size={15} />
                        <span>Bahrain</span>
                    </div>

                </div>

            </div>

        </div>
    );
}