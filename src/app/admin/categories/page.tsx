import Link from "next/link";

import { getCategories } from "@/lib/category/queries";
import CategoryTable from "@/components/admin/category/CategoryTable";


export default async function CategoriesPage() {
    const categories = await getCategories();

    return (
        <main>
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold">
                        Categories
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Manage all categories
                    </p>
                </div>

                <Link
                    href="/admin/categories/new"
                    className="rounded-lg bg-green-700 px-5 py-3 text-white hover:bg-green-800"
                >
                    + Add Category
                </Link>
            </div>

            {categories.length === 0 ? (
                <div className="rounded-xl border bg-white p-12 text-center shadow">
                    <h2 className="text-xl font-semibold">
                        No Categories Found
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Create your first category.
                    </p>

                    <Link
                        href="/admin/categories/new"
                        className="mt-6 inline-block rounded-lg bg-green-700 px-5 py-3 text-white"
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