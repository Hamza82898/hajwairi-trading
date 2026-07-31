import { Sparkles } from "lucide-react";

export default function HeroBadge() {
    return (
        <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 shadow-sm sm:px-5">

            <div className="rounded-full bg-green-900 p-1.5">

                <Sparkles
                    size={14}
                    className="text-white"
                />

            </div>

            <span className="text-xs font-semibold tracking-wide text-green-900 sm:text-sm">
                Fresh Imported Every Week
            </span>

        </div>
    );
}