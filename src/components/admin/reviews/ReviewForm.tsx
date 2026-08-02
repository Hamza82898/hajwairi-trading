"use client";

import { Star } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reviewSchema, ReviewSchema } from "@/lib/validations/review";
import { createReview } from "@/actions/review.actions";
import { toast } from "sonner";



interface ProductOption {
    id: number;
    name: string;
}

interface ReviewFormProps {
    products: ProductOption[];
}




export default function ReviewForm({
    products,
}: ReviewFormProps) {

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ReviewSchema>({
        resolver: zodResolver(reviewSchema),

        defaultValues: {
            rating: 5,
            featured: true,
            approved: true,
            displayOrder: 0,
        },
    });

    const onSubmit = async (data: ReviewSchema) => {
        const result = await createReview(data);

        if (!result.success) {
            toast.error(result.message);

            return;
        }

        toast.success(result.message);

        reset({
            customerName: "",
            city: "",
            productId: undefined,
            review: "",
            rating: 5,
            featured: true,
            approved: true,
            displayOrder: 0,
        });
    };
    const rating = watch("rating");

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8 rounded-2xl bg-white p-4 shadow sm:p-6 lg:p-8"
        >

            {/*Customer*/}
            <div className="grid gap-6 lg:grid-cols-2">

                <div>
                    <label className="mb-2 block text-sm font-semibold">
                        Customer Name
                    </label>
                    

                    <input
                        {...register("customerName")} 
                        type="text"
                        autoComplete="name"
                        placeholder="Customer Name"
                        className={`w-full rounded-xl border px-4 py-3 outline-none transition
                            ${
                                errors.customerName
                                    ? "border-red-500 focus:border-red-500"
                                    : "focus:border-green-700"
                            }`}
                    />

                    {errors.customerName && (
                        <p className="mt-2 text-sm text-red-600">
                            {errors.customerName.message}
                        </p>
                    )}
                </div>
                <div>
                    <label className="mb-2 block text-sm font-semibold">
                        City
                    </label>
                    

                    <input
                        {...register("city")} 
                        type="text"
                        autoComplete="address-level2"
                        placeholder="Manama"
                        className={`w-full rounded-xl border px-4 py-3 outline-none transition
                            ${
                                errors.city
                                    ? "border-red-500 focus:border-red-500"
                                    : "focus:border-green-700"
                            }`}
                    />

                    {errors.city && (
                        <p className="mt-2 text-sm text-red-600">
                            {errors.city.message}
                        </p>
                    )}
                </div>

            </div>

            {/*Product*/}
            <div>
                <label className="mb-2 block text-sm font-semibold">
                    Product
                </label>

                <select
                    className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-green-700"
                    {...register("productId", {
                        valueAsNumber: true,
                    })}
                    defaultValue=""
                >
                    <option value="">
                        Select Product
                    </option>

                    {products.map((product) => (
                        <option
                            key={product.id}
                            value={product.id}
                        >
                            {product.name}
                        </option>
                    ))}
                </select>
                {errors.productId && (
                    <p className="mt-2 text-sm text-red-600">
                        {errors.productId.message}
                    </p>
                )}
            </div>

            {/*Rating*/}
            <div>
                <label className="mb-3 block text-sm font-semibold">
                    Rating
                </label>

                <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 5 }).map((_, index) => {
                        const value = index + 1;

                        return (
                            <button
                                key={value}
                                type="button"
                                onClick={() => setValue("rating", value, {
                                    shouldValidate: true,
                                    shouldDirty: true,
                                })}
                            >
                                <Star 
                                    size={32}
                                    className={
                                        value <= rating
                                            ? "fill-yellow-400 text-yellow-400"
                                            : "text-gray-300"   
                                    }
                                />

                                
                            </button>
                        );
                    })}
                </div>
                {errors.rating && (
                    <p className="mt-2 text-sm text-red-600">
                        {errors.rating.message}
                    </p>
                )}
            </div>

            {/*REviews*/}
            <div>
                <label className="mb-2 block text-sm font-semibold">
                    Review
                </label>

                <textarea
                    {...register("review")} 
                    rows={4}
                    placeholder="Write customer review..."
                    className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-green-700"
                />
                {errors.review && (
                    <p className="mt-2 text-sm text-red-600">
                        {errors.review.message}
                    </p>
                )}
            </div>

            {/*Setting*/}
            <div className="grid gap-6 lg:grid-cols-3">
                <div>
                    <label className="mb-2 block text-sm font-semibold">
                        Display Order
                    </label>

                    <input 
                        type="number"
                        {...register("displayOrder", {
                            valueAsNumber: true,
                        })}
                        className="w-full rounded-xl border px-4 py-3"
                    />
                </div>

                <label className="flex items-center gap-3">
                    <input 
                        type="checkbox"
                        {...register("featured")}
                        
                    />
                    Featured Review
                </label>

                <label className="flex items-center gap-3 rounded-xl border p-3">
                    <input 
                        type="checkbox"
                        {...register("approved")}
                        
                    />
                    Approved
                </label>

            </div>

            {/*Button*/}
            <div className="flex justify-stretch sm:justify-end">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-green-700 px-8 py-3 font-semibold text-white transition hover:bg-green-800 sm:w-auto disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isSubmitting ? (
                        <span className="flex items-center gap-2">
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            Saving...
                        </span>
                    ) : (
                        "Save Review"
                    )}
                </button>
            </div>
        </form>
    );
}