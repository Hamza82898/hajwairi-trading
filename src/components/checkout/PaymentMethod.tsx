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
        <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">
                Payment Method
            </h2>

            <div className="space-y-4">

                {/*Cash*/}

                <label className="flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition hover:border-green-700">

                    <input 
                        type="radio"
                        value="cash"
                        {...register("paymentMethod")}
                    />

                    <Banknote className="text-green-700" />

                    <div>
                        <h3 className="font-semibold">
                            Cash on Delivery
                        </h3>

                        <p className="text-sm text-gray-500">
                            Pay when your order arrives.
                        </p>
                    </div>

                </label>

                {/*Benefit Pay*/}

                <label className="flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition hover:border-green-700">

                    <input 
                        type="radio"
                        value="benefitpay"
                        {...register("paymentMethod")}
                    />

                    <Smartphone className="text-blue-600" />

                    <div>
                        <h3 className="font-semibold">
                            BenefitPay
                        </h3>

                        <p className="text-sm text-gray-500">
                            Pay securely using BenefitPay.
                        </p>
                    </div>
                </label>

                {/*Card*/}

                <label className="flex cursor-not-allowed items-center gap-4 rounded-xl border bg-gray-50 p-4 opacity-60">
                    <input 
                        type="radio"
                        disabled
                    />

                    <CreditCard />

                    <div>
                        <h3 className="font-semibold">
                            Credit / Debit Card
                        </h3>

                        <p className="text-sm text-gray-500"> 
                            Coming Soon
                        </p>
                    </div>
                </label>

            </div>

            {errors.paymentMethod && (
                <p className="mt-4 text-sm text-red-600">
                    {errors.paymentMethod.message}
                </p>
            )}

        </div>
    );
}