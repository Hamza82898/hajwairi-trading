
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
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-6 lg:py-10">

            <div className="mb-8 overflow-x-auto pb-2">
                <div className="mx-auto flex min-w-max items-center justify-center gap-3">
                    <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full text-sm sm:h-10 sm:w-10 sm:text-base bg-green-700 font-bold text-white">
                            1
                        </div>

                        <span className="text-sm font-semibold sm:text-base text-green-700">
                            Cart
                        </span>
                    </div>

                    <div className="h-1 w-10 rounded bg-green-700 sm:w-16" />
                    <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full text-sm sm:h-10 sm:w-10 sm:text-base bg-green-700 font-bold text-white"> 
                            2
                        </div>

                        <span className="text-sm font-semibold sm:text-base text-green-700">
                            Checkout
                        </span>
                    </div>

                    <div className="h-1 w-10 rounded bg-gray-300 sm:w-16" />
                    <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full text-sm sm:h-10 sm:w-10 sm:text-base bg-gray-300 font-bold text-gray-700">
                            3
                        </div>

                        <span className="text-sm text-green-500 sm:text-base">
                            Complete
                        </span>
                    </div>
                </div>
            </div>

            {/*Page heading*/}
            
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Secure Checkout
                </h1>

                <p className="mt-2 text-sm text-gray-500 sm:text-base">
                    Complete your order by providing your delivery details
                </p>
            </div>

            <CheckoutFormProvider
                session={session}
            >

                <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">

                    {/*Left*/}

                    <div className="space-y-6 lg:col-span-2 lg:space-y-8">
                
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