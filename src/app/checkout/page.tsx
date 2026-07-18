"use client"

import ShippingForm from "@/components/checkout/ShippingForm";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import OrderSummary from "@/components/checkout/OrderSummary";
import CheckoutFormProvider from "@/components/checkout/CheckoutFormProvider";


export default function CheckoutPage() {
    return (
        <main className="mx-auto max-w-7xl px-6 py-10">

            <h1 className="mb-10 text-4xl font-bold">
                Checkout
            </h1>

            <CheckoutFormProvider>

                <div className="grid gap-10 lg:grid-cols-3">

                    {/*Left*/}

                    <div className="space-y-8 lg:col-span-2">
                
                        <ShippingForm />

                        <PaymentMethod />
                
                    
                </div>

                {/*Right*/}

                <div>
                    <OrderSummary />
                </div>

                </div>
            </CheckoutFormProvider>

        </main>
    );
}