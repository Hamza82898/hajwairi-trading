import Link from "next/link";
import Image from "next/image";

import { getCategories } from "@/lib/category/queries";
import DeleteCategoryButton from "@/components/admin/category/DeleteCategoryButton";

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
            ): (
                <div className="overflow-hidden rounded-xl bg-white shadow">
                    <table className="min-w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-5 py-4 text-left">
                                    Image
                                </th>

                                <th className="px-5 py-4 text-left">
                                    Name
                                </th>

                                <th className="px-5 py-4 text-left">
                                    Slug
                                </th>

                                <th className="px-5 py-4 text-left">
                                    Products
                                </th>

                                <th className="px-5 py-4 text-left">
                                    Sort
                                </th>

                                <th className="px-5 py-4 text-left">
                                    Status
                                </th>

                                <th className="px-5 py-4 text-right">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {categories.map((category) => (
                                <tr
                                    key={category.id}
                                    className="border-t"
                                >
                                    <td className="px-5 py-4">
                                        {category.image ? (
                                            <Image 
                                                src={category.image}
                                                alt={category.name}
                                                width={60}
                                                height={60}
                                                className="rounded-lg object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-500">
                                                No Image
                                            </div>
                                        )}
                                    </td>

                                    <td className="px-5 py-4 font-semibold">
                                        {category.name}
                                    </td>

                                    <td className="px-5 py-4">
                                        {category.slug}
                                    </td>

                                    <td className="px-5 py-4">
                                        {category._count.products}
                                    </td>

                                    <td className="px-5 py-4">
                                        {category.sortOrder}
                                    </td>

                                    <td className="px-5 py-4">
                                        {category.isActive ? (
                                            <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                                                Active
                                            </span>
                                        ) : (
                                            <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">
                                                Inactive
                                            </span>
                                        )}
                                    </td>

                                    <td className="px-5 py-4">
                                        <div className="flex justify-end gap-3">
                                            <Link
                                                href={`/admin/categories/${category.id}/edit`}
                                                className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                                            >
                                                Edit
                                            </Link>

                                            <DeleteCategoryButton 
                                                id = {category.id}
                                            />

                                        </div>

                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>
            )}
        </main>
    );
} 