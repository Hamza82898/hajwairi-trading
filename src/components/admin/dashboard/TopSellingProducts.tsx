import Link from "next/link";
import { Trophy, TrendingUp } from "lucide-react";



interface Product {
    productId: number;
    name: string;
    slug: string;
    stock: number;
    quantity: number;
}

interface Props {
    products: Product[];
}

export default function TopSellingProducts({
    products,
}: Props) {
    return (
        <div className="rounded-3xl border bg-white p-4 shadow-sm sm:p-6">

            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 sm:text-sm">
                        Best Sellers
                    </p>

                    <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                        Top Selling Products
                    </h2>
                </div>

                <div className="self-start rounded-2xl bg-yellow-100 p-3 sm:self-auto">
                    <Trophy 
                        size={28}
                        className="text-yellow-600"
                    />
                </div>
            </div>

            {products.length === 0 ? (
                <div className="rounded-xl bg-gray-50 p-8 text-center text-gray-500">
                    No sales yet.
                </div>

            ) : (
                <div className="space-y-4">

                    {products.map((product, index) => (
                        <div
                            key={product.productId}
                            className="flex flex-col gap-4 rounded-2xl border p-4 transition hover:bg-gray-50 sm:flex-row sm:items-center sm:justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                                    
                                    #{index + 1}
                                    
                                </div>
                                <div>
                                    <Link
                                        href={`/admin/products/${product.productId}`}
                                        className="block break-words font-semibold transition hover:text-green-700"
                                    >
                                        {product.name}
                                    </Link>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Stock: {product.stock}
                                    </p>
                                </div>
                            </div>

                            <div className="text-left sm:text-right">
                                <div className="flex items-center gap-2 text-green-600 sm:justify-end">
                                    <TrendingUp size={18} />

                                    <span className="text-lg font-bold">
                                        {product.quantity}
                                    </span>
                                </div>

                                <p className="mt-1 text-xs text-gray-500">
                                    Sold
                                </p>

                            </div>
                        </div>
                    ))}

                </div>

            )}

        </div>
    );
}