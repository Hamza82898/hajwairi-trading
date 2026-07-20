import { getProducts } from "@/lib/product/queries";
import Link from "next/link";
import DeleteProductButton from "@/components/admin/products/DeleteProductButton";

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <main>
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold">
                        Products
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Manage all products.
                    </p>
                </div>

                <Link
                    href = "/admin/products/new"
                    className="rounded-lg bg-green-700 px-5 py-3 text-white"
                >
                    + Add Product
                </Link>

            </div>

            <div className="overflow-hidden rounded-xl bg-white shadow">
                <table className="min-w-full">

                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-5 py-4 text-left">
                                Product
                            </th>

                            <th className="px-5 py-4 text-left">
                                SKU
                            </th>

                            <th className="px-5 py-4 text-left">
                                Category
                            </th>

                            <th className="px-5 py-4 text-left">
                                Price
                            </th>

                            <th className="px-5 py-4 text-left">
                                Stock
                            </th>

                            <th className="px-5 py-4 text-left">
                                Status
                            </th>

                            <th className="px-5 py-4 text-left">
                                Actions
                            </th>
                        </tr>

                    </thead>

                    <tbody>
                        {products.map((product) => (
                            <tr
                                key={product.id}
                                className="border-t"
                            >
                                <td className="px-5 py-4">
                                    <div className="font-semibold">
                                        {product.name}
                                    </div>
                                </td>

                                <td className="px-5 py-4">
                                    {product.sku ?? "-"}
                                </td>

                                <td className="px-5 py-4">
                                    {product.category.name}
                                </td>

                                <td className="px-5 py-4">
                                    {product.newPrice.toFixed(2)} BD
                                </td>

                                <td className="px-5 py-4">
                                    {product.stock}
                                </td>

                                <td className="px-5 py-4">
                                    {product.isActive ? (
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
                                    <div className="flex gap-2">
                                        <Link
                                            href={`/admin/products/${product.id}/edit`}
                                            className="rounded bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
                                        >
                                            Edit
                                        </Link>

                                        <DeleteProductButton 
                                            id = {product.id}
                                        />
                                    </div>
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
        </main>
    );
}