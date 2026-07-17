import { ShieldCheck, Truck, Phone, Clock3 } from "lucide-react";

export default function ProductDelivery() {
    return (
        <div className="mt-10 rounded-2xl border bg-gray-50 p-6">
            <div className="space-y-6">

                {/*Delivery*/}

                <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100 p-3">
                        <Truck className="text-green-700" size={22} />
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Fast Delivery
                        </h3>

                        <p className="text-sm text-gray-600">
                            Delivery available across Bahrain
                        </p>
                    </div>

                </div>

                {/*Quality*/}

                <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100 p-3">
                        <ShieldCheck className="text-green-700" size={22} />
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Premium Quality
                        </h3>

                        <p className="text-sm text-gray-600">
                            Fresh and carefully selected products.
                        </p>
                    </div>

                </div>

                {/*Support*/}

                <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100 p-3">
                        <Phone className="text-green-700" size={22} />
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Customer Support
                        </h3>

                        <p className="text-sm text-gray-600">
                            Whatsapp support available every day.
                        </p>
                    </div>

                </div>

                {/*Timings*/}
                
                <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100 p-3">
                        <Clock3 className="text-green-700" size={22} />
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Delivery Time
                        </h3>

                        <p className="text-sm text-gray-600">
                           Usually delivered within 24 hours. 
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}