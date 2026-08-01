"use client"

import { CreditCard, Banknote, Smartphone } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { CheckoutFormData } from "@/lib/validations/checkout";



export default function PaymentMethod() {
    const {
        register,
        formState: { errors },
    } = useFormContext<CheckoutFormData>();

    return (
        <div className="mt-8 rounded-2xl border bg-white p-5 shadow-sm sm:p-6">

            <h2 className="mb-5 text-xl font-bold sm:mb-6 sm:text-2xl">
                Payment Method
            </h2>

            <div className="space-y-4">

                {/*Cash*/}

                <label className="flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition hover:border-green-700 sm:items-center sm:gap-4">

                    <input 
                        type="radio"
                        value="cash"
                        {...register("paymentMethod")}
                    />

                    <Banknote className="h-5 w-5 shrink-0 text-green-700 sm:h-6 sm:w-6" />

                    <div>
                        <h3 className="text-sm font-semibold sm:text-base">
                            Cash on Delivery
                        </h3>

                        <p className="text-xs text-gray-500 sm:text-sm">
                            Pay when your order arrives.
                        </p>
                    </div>

                </label>

                {/*Benefit Pay*/}

                <label className="flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition hover:border-green-700 sm:items-center sm:gap-4">

                    <input 
                        type="radio"
                        value="benefitpay"
                        {...register("paymentMethod")}
                    />

                    <Smartphone className="h-5 w-5 shrink-0 text-blue-600 sm:h-6 sm:w-6" />

                    <div>
                        <h3 className="text-sm font-semibold sm:text-base">
                            BenefitPay
                        </h3>

                        <p className="text-xs text-gray-500 sm:text-sm">
                            Pay securely using BenefitPay.
                        </p>
                    </div>
                </label>

                {/*Card*/}

                <label className="flex cursor-not-allowed items-start gap-3 rounded-xl border bg-gray-50 p-4 opacity-60 sm:items-center sm:gap-4">
                    <input 
                        type="radio"
                        disabled
                    />

                    <CreditCard className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />

                    <div>
                        <h3 className="text-sm font-semibold sm:text-base">
                            Credit / Debit Card
                        </h3>

                        <p className="text-xs text-gray-500 sm:text-sm"> 
                            Coming Soon
                        </p>
                    </div>
                </label>

            </div>

            {errors.paymentMethod && (
                <p className="mt-4 text-xs text-red-600 sm:text-sm">
                    {errors.paymentMethod.message}
                </p>
            )}

        </div>
    );
}