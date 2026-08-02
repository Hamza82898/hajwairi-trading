import Link from "next/link";
import { Product } from "@prisma/client";

interface Props {
    products: Product[];
}

export default function LowStockProducts({
    products,
}: Props) {
    return (
        <div className="rounded-2xl bg-white p-4 sm:p-6 shadow">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl sm:text-2xl font-bold">
                    Low Stock Products
                </h2>

                <span className="w-fit rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                    {products.length} Items
                </span>
            </div>

            {products.length === 0 ? (
                <div className="rounded-xl bg-gray-50 p-6 text-center text-gray-500">
                    🎉 All products have sufficient stock.
                </div>
            ) : (
                <div className="space-y-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="rounded-xl border p-4 transition hover:bg-gray-50"
                        >
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="min-w-0 flex-1">
                                    <Link
                                        href={`/admin/products/${product.id}`}
                                        className="font-semibold text-gray-900 hover:text-green-700 break-words"
                                    >
                                        {product.name}
                                    </Link>

                                    <p className="mt-1 text-sm text-gray-500 break-all">
                                        SKU: {product.sku ?? "N/A"}
                                    </p>
                                </div>
                                <div className="sm:text-right">
                                    <span
                                        className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                                                product.stock <= 5
                                                ? "bg-red-100 text-red-700"
                                                : "bg-yellow-100 text-yellow-700"
                                        }`}
                                    >
                                        {product.stock} Left
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}