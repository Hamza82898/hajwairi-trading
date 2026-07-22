"use client";

import Image from "next/image";
import Link from "next/link";
import DeleteCategoryButton from "./DeleteCategoryButton";

interface Category {
    id: number;
    name: string;
    slug: string;
    image: string | null;
    sortOrder: number;
    isActive: boolean;
    _count: {
        products: number;
    };
}

interface Props {
    categories: Category[];
}

export default function CategoryTable({
    categories,
}: Props) {
    return (
        <div className="overflow-hidden rounded-xl bg-white shadow">
            <table className="min-w-full">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-5 py-4 text-left">Image</th>
                        <th className="px-5 py-4 text-left">Name</th>
                        <th className="px-5 py-4 text-left">Slug</th>
                        <th className="px-5 py-4 text-left">Products</th>
                        <th className="px-5 py-4 text-left">Sort</th>
                        <th className="px-5 py-4 text-left">Status</th>
                        <th className="px-5 py-4 text-right">Actions</th>
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
    );
}