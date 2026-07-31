"use client"

import { useFormContext } from "react-hook-form";
import { CheckoutFormData } from "@/lib/validations/checkout";

export default function ShippingForm() {
    const {
        register,
        formState: { errors },        
    } = useFormContext<CheckoutFormData>();




    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold">
                Shipping Information
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

                {/*Full Name*/}

                <div>
                    <label className="mb-2 block font-medium">
                        Full Name
                    </label>

                    <input 
                        type="text"
                        placeholder="Enter your full name"
                        readOnly
                        {...register("fullName")}
                        className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-green-700"
                    />

                    {errors.fullName && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.fullName.message}
                        </p>
                    )}
                </div>

                {/*Phone*/}

                <div>
                    <label className="mb-2 block font-medium">
                        Phone Number
                    </label>

                    <input 
                        type="tel"
                        placeholder="+973 3XXXXXXX"
                        {...register("phone")}
                        className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-green-700"
                    />

                    {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.phone.message}
                        </p>
                    )}
                </div>
                <div>
                    <label className="mb-2 block font-medium">
                        Email
                    </label>

                    <input 
                        type="email"
                        placeholder="example@gmail.com"
                        autoComplete="email"
                        readOnly
                        {...register("email")}
                        className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-green-700"
                    />
                </div>

            </div>

            {/*Area*/}

            <div className="mt-6">

                <label className="mb-2 block font-medium">
                    Delivery Area
                </label>

                <select
                    {...register("area")}
                    className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-green-700"
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
                    <p className="mt-1 text-sm text-red-600">
                        {errors.area.message}
                    </p>
                )}

            </div>

            {/*Address*/}

            <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                    <label className="mb-2 block font-medium">
                        Block
                    </label>

                    <input 
                        type="text"
                        placeholder="Block"
                        {...register("block")}
                        className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-green-700"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Road
                    </label>

                    <input 
                        type="text"
                        placeholder="Road"
                        {...register("road")}
                        className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-green-700"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Building
                    </label>

                    <input 
                        type="text"
                        placeholder="Building"
                        {...register("building")}
                        className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-green-700"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Flat / Apartment
                    </label>

                    <input 
                        type="text"
                        placeholder="Flat"
                        {...register("flat")}
                        className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-green-700"
                    />
                </div>
            </div>

            {/*Landmark*/}

            <div className="mt-6">
                <label className="mb-2 block font-medium">
                    Landmark (Optional)
                </label>

                <input 
                    type="text"
                    placeholder="Nearby Landmark"
                    {...register("landmark")}
                    className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-green-700"
                />

            </div>

            <div className="mt-6">
                <label className="mb-2 block font-medium">
                    Delivery Notes
                </label>

                <textarea 
                    rows={4}
                    placeholder="Leave at reception, call before delivery..."
                    {...register("notes")}
                    className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-green-700"
                />
            </div>

        </div>
    );
}