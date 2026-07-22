"use client"

import { useActionState } from "react"
import { createCategory, updateCategory } from "@/actions/category";
import type { ActionState } from "@/types/action-state";

interface Props {
    category?: {
        id: number;
        name: string;
        slug: string;
        image?: string | null;
        isActive: boolean;
        sortOrder: number;
    };
}

const initialState: ActionState = {
    success: false,
    message: "",
};

export default function CategoryForm({
    category,
}: Props) {
    const action = category
        ? updateCategory.bind(null, category.id)
        : createCategory;

    const [state, formAction, pending] = useActionState(
        action,
        initialState
    );

    return (
        <form
            action={formAction}
            className="space-y-6"
        >
            {state.message && (
                <div
                    className={`rounded-lg p-4 text-sm ${
                        state.success
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"                        
                    }`}
                >
                    {state.message}
                </div>
            )}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label className="mb-2 block font-medium">
                        Category Name
                    </label>

                    <input 
                        name="name"
                        defaultValue={category?.name}
                        className="w-full rounded-lg border p-3"
                        required
                    />

                    {state.errors?.name && (
                        <p className="mt-1 text-sm text-red-600">
                            {state.errors.name[0]}
                        </p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Slug
                    </label>

                    <input 
                    name="slug"
                    defaultValue={category?.slug}
                    className="w-full rounded-lg border p-3"
                    required
                    />

                    {state.errors?.slug && (
                        <p className="mt-1 text-sm text-red-600">
                            {state.errors.slug[0]}
                        </p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Sort Order
                    </label>

                    <input 
                        type="number"
                        name="sortOrder"
                        defaultValue={category?.sortOrder ?? 0}
                        className="w-full rounded-lg border p-3"
                    />

                    {state.errors?.sortOrder && (
                        <p className="mt-1 text-sm text-red-600">
                            {state.errors.sortOrder[0]}
                        </p>
                    )}
                </div>

                <div className="flex items-center gap-3 pt-8">
                    <input 
                        id="isActive"
                        type="checkbox"
                        name="isActive"
                        defaultChecked={category?.isActive ?? true}
                    />

                    <label htmlFor="isActive">
                        Active Category
                    </label>
                </div>
            </div>

            <input 
                type="hidden"
                name="image"
                defaultValue={category?.image ?? ""}
            />

            <button
                type="submit"
                disabled={pending}
                className="rounded-lg bg-green-700 px-6 py-3 text-white hover:bg-green-800 disabled:opacity-60"
            >
                {pending 
                    ? "Saving..."
                    : category
                        ? "Update Category"
                        : "Create Category"}
            </button>
        </form>
    );
}