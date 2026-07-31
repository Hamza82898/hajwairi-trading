
import { auth } from "@/auth";
import { redirect } from "next/navigation";


import ShippingForm from "@/components/checkout/ShippingForm";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import OrderSummary from "@/components/checkout/OrderSummary";
import CheckoutFormProvider from "@/components/checkout/CheckoutFormProvider";


export default async function CheckoutPage() {

    const session = await auth();

    if (!session) {
        redirect("/login");
    }

    return (
        <main className="mx-auto max-w-7xl px-6 py-10">

            <div className="mb-10 flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700 font-bold text-white">
                        1
                    </div>

                    <span className="font-semibold text-green-700">
                        Cart
                    </span>
                </div>

                <div className="h-1 w-16 rounded bg-green-700" />
                <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700 font-bold text-white"> 
                        2
                    </div>

                    <span className="font-semibold text-green-700">
                        Checkout
                    </span>
                </div>

                <div className="h-1 w-16 rounded bg-gray-300" />
                <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 font-bold text-gray-700">
                        3
                    </div>

                    <span className="text-gray-500">
                        Complete
                    </span>
                </div>
            </div>

            {/*Page heading*/}
            
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900">
                    Secure Checkout
                </h1>

                <p className="mt-2 text-gray-500">
                    Complete your order by providing your delivery details
                </p>
            </div>

            <CheckoutFormProvider
                session={session}
            >

                <div className="grid gap-10 lg:grid-cols-3">

                    {/*Left*/}

                    <div className="space-y-8 lg:col-span-2">
                
                        <ShippingForm />

                        <PaymentMethod />
                
                    
                    </div>

                    {/*Right*/}
 
                    <div className="lg:sticky lg:top-28 lg:self-start">
                        <OrderSummary />
                    </div>

                </div>
            </CheckoutFormProvider>

        </main>
    );
}