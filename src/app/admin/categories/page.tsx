import Link from "next/link";

import { getCategories } from "@/lib/category/queries";
import CategoryTable from "@/components/admin/category/CategoryTable";


export default async function CategoriesPage() {
    const categories = await getCategories();

    return (
        <main>
            <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold sm:text-4xl">
                        Categories
                    </h1>

                    <p className="mt-2 text-sm text-gray-600 sm:text-base">
                        Manage all categories
                    </p>
                </div>

                <Link
                    href="/admin/categories/new"
                    className="w-full rounded-lg bg-green-700 px-5 py-3 text-center font-medium text-white transition hover:bg-green-800 sm:w-auto"
                >
                    + Add Category
                </Link>
            </div>

            {categories.length === 0 ? (
                <div className="rounded-xl border bg-white px-6 py-10 text-center shadow sm:p-12">
                    <h2 className="text-xl font-semibold sm:text-2xl">
                        No Categories Found
                    </h2>

                    <p className="mt-2 text-sm text-gray-500 sm:text-base">
                        Create your first category.
                    </p>

                    <Link
                        href="/admin/categories/new"
                        className="mt-6 inline-block rounded-lg bg-green-700 px-6 py-3 font-medium text-white transition hover:bg-green-800"
                    >
                        Add Category
                    </Link>
                </div>
            ) : (
                <CategoryTable categories={categories} />
            )}
        </main>
    );
}