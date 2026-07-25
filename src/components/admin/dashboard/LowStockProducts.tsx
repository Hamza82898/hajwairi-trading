import Link from "next/link";
import { Product } from "@prisma/client";

interface Props {
    products: Product[];
}

export default function LowStockProducts({
    products,
}: Props) {
    return (
        <div className="rounded-2xl bg-white p-6 shadow">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                    Low Stock Products
                </h2>

                <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                    {products.length} Items
                </span>
            </div>

            {products.length === 0 ? (
                <p className="text-gray-500">
                    🎉 All products have sufficient stock.
                </p>
            ) : (
                <div className="space-y-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-50"
                        >
                            <div>
                                <Link
                                    href={`/admin/products/${product.id}`}
                                    className="font-semibold hover:text-green-700"
                                >
                                    {product.name}
                                </Link>

                                <p className="mt-1 text-sm text-gray-500">
                                    SKU: {product.sku ?? "N/A"}
                                </p>
                            </div>

                            <span
                                className={`rounded-full px-3 py-1 text-sm font-semibold ${
                                        product.stock <= 5
                                        ? "bg-red-100 text-red-700"
                                        : "bg-yellow-100 text-yellow-700"
                                }`}
                            >
                                {product.stock} Left
                            </span>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}