import { ShieldCheck, Truck, Phone, Clock3 } from "lucide-react";

export default function ProductDelivery() {
    return (
        <div className="mt-8 rounded-2xl border bg-gray-50 p-5 sm:mt-10 sm:p-6">
            <div className="space-y-5 sm:space-y-6">

                {/*Delivery*/}

                <div className="flex items-start gap-3 sm:gap-4">
                    <div className="rounded-full bg-green-100 p-2.5 sm:p-3">
                        <Truck className="text-green-700" size={20} />
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold sm:text-base">
                            Fast Delivery
                        </h3>

                        <p className="text-xs text-gray-600 sm:text-sm">
                            Delivery available across Bahrain
                        </p>
                    </div>

                </div>

                {/*Quality*/}

                <div className="flex items-start gap-3 sm:gap-4">
                    <div className="rounded-full bg-green-100 p-2.5 sm:p-3">
                        <ShieldCheck className="text-green-700" size={20} />
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold sm:text-base">
                            Premium Quality
                        </h3>

                        <p className="text-xs text-gray-600 sm:text-sm">
                            Fresh and carefully selected products.
                        </p>
                    </div>

                </div>

                {/*Support*/}

                <div className="flex items-start gap-3 sm:gap-4">
                    <div className="rounded-full bg-green-100 p-2.5 sm:p-3">
                        <Phone className="text-green-700" size={20} />
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold sm:text-base">
                            Customer Support
                        </h3>

                        <p className="text-xs text-gray-600 sm:text-sm">
                            Whatsapp support available every day.
                        </p>
                    </div>

                </div>

                {/*Timings*/}
                
                <div className="flex items-start gap-3 sm:gap-4">
                    <div className="rounded-full bg-green-100 p-2.5 sm:p-3">
                        <Clock3 className="text-green-700" size={20} />
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold sm:text-base">
                            Delivery Time
                        </h3>

                        <p className="text-xs text-gray-600 sm:text-sm">
                           Usually delivered within 24 hours. 
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}