import {
    Phone,
    Truck,
    Clock3,
    MapPin,
} from "lucide-react";

export default function TopBar() {
    return (
        <div className="bg-green-900 text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-sm">
                <div className="hidden items-center gap-6 md:flex">
                    <div className="flex items-center gap-2">

                        <Truck size={16} />

                        <span>
                            Free Delivery on Selected Areas
                        </span>

                    </div>

                    <div className="flex items-center gap-2">

                        <Clock3 size={16} />
                        <span>
                            8:00 AM - 10:00 PM
                        </span>
                    </div>

                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">

                        <Phone size={16} />

                        <span>
                            +973 3903 2710
                        </span>

                    </div>

                    <div className="flex items-center gap-2">
                        <MapPin size={16} />

                        <span>
                            Bahrain
                        </span>
                    </div>

                </div>

            </div>

        </div>
    );
}