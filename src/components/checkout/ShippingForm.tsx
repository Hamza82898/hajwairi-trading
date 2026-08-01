"use client"

import { useFormContext } from "react-hook-form";
import { CheckoutFormData } from "@/lib/validations/checkout";

export default function ShippingForm() {
    const {
        register,
        formState: { errors },        
    } = useFormContext<CheckoutFormData>();




    return (
        <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
            <h2 className="mb-5 text-xl font-bold sm:mb-6 sm:text-2xl">
                Shipping Information
            </h2>

            <div className="grid gap-5 md:grid-cols-2 md:gap-6">

                {/*Full Name*/}

                <div>
                    <label className="mb-2 block text-sm font-medium sm:text-base">
                        Full Name
                    </label>

                    <input 
                        type="text"
                        placeholder="Enter your full name"
                        readOnly
                        {...register("fullName")}
                        className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-green-700 sm:text-base"
                    />

                    {errors.fullName && (
                        <p className="mt-1 text-xs text-red-600 sm:text-sm">
                            {errors.fullName.message}
                        </p>
                    )}
                </div>

                {/*Phone*/}

                <div>
                    <label className="mb-2 block text-sm font-medium sm:text-base">
                        Phone Number
                    </label>

                    <input 
                        type="tel"
                        placeholder="+973 3XXXXXXX"
                        {...register("phone")}
                        className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-green-700 sm:text-base"
                    />

                    {errors.phone && (
                        <p className="mt-1 text-xs text-red-600 sm:text-sm">
                            {errors.phone.message}
                        </p>
                    )}
                </div>
                <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium sm:text-base">
                        Email
                    </label>

                    <input 
                        type="email"
                        placeholder="example@gmail.com"
                        autoComplete="email"
                        readOnly
                        {...register("email")}
                        className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-green-700 sm:text-base"
                    />
                </div>

            </div>

            {/*Area*/}

            <div className="mt-6">

                <label className="mb-2 block text-sm font-medium sm:text-base">
                    Delivery Area
                </label>

                <select
                    {...register("area")}
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-green-700 sm:text-base"
                >
                    <option value="">Select Area</option>
                    <option>Manama</option>
                    <option>Muharraq</option>
                    <option>Riffa</option>
                    <option>Isa Town</option>
                    <option>Hamad Town</option>
                    <option>Saar</option>
                    <option>Budaiya</option>
                    <option>Juffair</option>
                    <option>Amwaj</option>
                    <option>Sanad</option>

                </select>

                {errors.area && (
                    <p className="mt-1 text-xs text-red-600 sm:text-sm">
                        {errors.area.message}
                    </p>
                )}

            </div>

            {/*Address*/}

            <div className="mt-6 grid gap-5 md:grid-cols-2 md:gap-6">
                <div>
                    <label className="mb-2 block text-sm font-medium sm:text-base">
                        Block
                    </label>

                    <input 
                        type="text"
                        placeholder="Block"
                        {...register("block")}
                        className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-green-700 sm:text-base"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium sm:text-base">
                        Road
                    </label>

                    <input 
                        type="text"
                        placeholder="Road"
                        {...register("road")}
                        className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-green-700 sm:text-base"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium sm:text-base">
                        Building
                    </label>

                    <input 
                        type="text"
                        placeholder="Building"
                        {...register("building")}
                        className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-green-700 sm:text-base"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium sm:text-base">
                        Flat / Apartment
                    </label>

                    <input 
                        type="text"
                        placeholder="Flat"
                        {...register("flat")}
                        className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-green-700 sm:text-base"
                    />
                </div>
            </div>

            {/*Landmark*/}

            <div className="mt-6">
                <label className="mb-2 block text-sm font-medium sm:text-base">
                    Landmark (Optional)
                </label>

                <input 
                    type="text"
                    placeholder="Nearby Landmark"
                    {...register("landmark")}
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-green-700 sm:text-base"
                />

            </div>

            <div className="mt-6">
                <label className="mb-2 block text-sm font-medium sm:text-base">
                    Delivery Notes
                </label>

                <textarea 
                    rows={4}
                    placeholder="Leave at reception, call before delivery..."
                    {...register("notes")}
                    className="w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-green-700 sm:text-base"
                />
            </div>

        </div>
    );
}