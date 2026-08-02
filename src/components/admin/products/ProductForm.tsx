"use client"

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createProduct, updateProduct } from "@/actions/product";
import type { ActionState } from "@/types/action-state";
import SaveProductButton from "./SaveProductButton";

interface Category {
    id: number;
    name: string;
}

interface Props {
    categories: Category[];
    product?: any;
}

const initialState: ActionState = {
    success: false,
    message: "",
}

export default function ProductForm({
    categories,
    product,
}: Props) {

    const router = useRouter();

    const [state, formAction] = useActionState(
        product
            ? updateProduct.bind(null, product.id)
            : createProduct,
        initialState
    );

    useEffect(() => {
        if (state.success) {
            router.push("/admin/products");
            router.refresh();
        }
    }, [state.success, router]);

    return (
        <form action={formAction} className="space-y-6">

            {state.message && (
                <div
                    className={`rounded-xl border p-4 text-sm ${
                        state.success
                            ? "border-green-300 bg-green-50 text-green-700"
                            : "border-red-300 bg-red-50 text-red-700" 
                    }`}
                >
                    {state.message}
                </div>
            )}

            <div className="grid gap-5 lg:grid-cols-2">
                <input 
                    name="name"
                    placeholder="Product Name"
                    className="w-full rounded-lg border p-3 transition focus:border-green-700 focus:outline-none"
                    required
                    defaultValue={product?.name}
                />

                {state.errors?.name && (
                    <p className="mt-1 text-sm text-red-600">
                        {state.errors.name[0]}
                    </p>
                )}

                <input 
                    name="slug"
                    placeholder="Slug"
                    className="w-full rounded-lg border p-3 transition focus:border-green-700 focus:outline-none"
                    required
                    defaultValue={product?.slug}
                />

                {state.errors?.slug && (
                    <p className="mt-1 text-sm text-red-600">
                        {state.errors.slug[0]}
                    </p>
                )}

                <input 
                    name="sku"
                    placeholder="SKU"
                    className="w-full rounded-lg border p-3 transition focus:border-green-700 focus:outline-none"
                    defaultValue={product?.sku ?? ""}
                />

                {state.errors?.sku && (
                    <p className="mt-1 text-sm text-red-600">
                        {state.errors.sku[0]}
                    </p>
                )}

                <input 
                    name="brand"
                    placeholder="Brand"
                    className="w-full rounded-lg border p-3 transition focus:border-green-700 focus:outline-none"
                    required
                    defaultValue={product?.brand}
                />

                <input 
                    name="origin"
                    placeholder="Origin"
                    className="w-full rounded-lg border p-3 transition focus:border-green-700 focus:outline-none"
                    required
                    defaultValue={product?.origin}
                />

                <input 
                    name="unit"
                    placeholder="Unit"
                    className="w-full rounded-lg border p-3 transition focus:border-green-700 focus:outline-none"
                    required
                    defaultValue={product?.unit}
                />

                <input 
                    name="oldPrice"
                    type="number"
                    step="0.01"
                    placeholder="Old Price"
                    className="w-full rounded-lg border p-3 transition focus:border-green-700 focus:outline-none"
                    required
                    defaultValue={product?.oldPrice}
                />

                {state.errors?.oldPrice && (
                    <p className="mt-1 text-sm text-red-600">
                        {state.errors.oldPrice[0]}
                    </p>
                )}

                <input 
                    name="newPrice"
                    type="number"
                    step="0.01"
                    placeholder="New Price"
                    className="w-full rounded-lg border p-3 transition focus:border-green-700 focus:outline-none"
                    required
                    defaultValue={product?.newPrice}
                />

                {state.errors?.newPrice && (
                    <p className="mt-1 text-sm text-red-600">
                        {state.errors.newPrice[0]}
                    </p>
                )}

                <input 
                    name="stock"
                    type="number"
                    placeholder="Stock"
                    className="w-full rounded-lg border p-3 transition focus:border-green-700 focus:outline-none"
                    required
                    defaultValue={product?.stock}
                />

                <input 
                    name="discount"
                    type="number"
                    placeholder="Discount %"
                    className="w-full rounded-lg border p-3 transition focus:border-green-700 focus:outline-none"
                    defaultValue={product?.discount}
                />

                <input 
                    name="badge"
                    placeholder="Badge"
                    className="w-full rounded-lg border p-3 transition focus:border-green-700 focus:outline-none"
                    defaultValue={product?.badge}
                />

                <select
                    name="categoryId"
                    className="w-full rounded-lg border p-3 transition focus:border-green-700 focus:outline-none"
                    required
                    defaultValue={product?.categoryId}
                >
                    <option value="">
                        Select Category
                    </option>

                    {categories.map((category) => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <textarea 
                name="description"
                placeholder="Description"
                rows={5}
                className="w-full rounded-lg border p-3 transition focus:border-green-700 focus:outline-none"
                required
                defaultValue={product?.description}
            />

            {state.errors?.description && (
                <p className="mt-1 text-sm text-red-600">
                    {state.errors.description[0]}
                </p>
            )}

            <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                <label className="flex items-center gap-2 rounded-lg border p-3">
                    <input 
                        type="checkbox"
                        name="featured"
                        defaultChecked={product?.featured}
                    />
                    Featured
                </label>

                <label className="flex items-center gap-2 rounded-lg border p-3">
                    <input 
                        type="checkbox"
                        name="isActive"
                        defaultChecked={product?.isActive ?? true}
                    />
                    Active
                </label>
            </div>

            <SaveProductButton />

        </form>
    );
}