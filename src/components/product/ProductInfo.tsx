import { Star, CheckCircle2 } from "lucide-react";
// import { Product } from "@/types/product";
import { Product, Category, ProductImage } from "@prisma/client";

type ProductWithRelations = Product & {
    category: Category;
    images: ProductImage[]
};

interface ProductInfoProps {
    product: ProductWithRelations;
}

export default function ProductInfo({ product }: ProductInfoProps) {
    return (
        <div>
            <span className="inline-block rounded-full bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white sm:px-4 sm:py-2 sm:text-sm">
                {product.badge}
            </span>

            <h1 className="mt-4 text-2xl font-bold leading-tight sm:mt-5 sm:text-4xl">
                {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: product.rating}).map((_, index) => (
                    <Star 
                        key = {index}
                        size = {16}
                        className = "fill-yellow-400 text-yellow-400"
                    />
                ))}

                <span className="ml-2 text-xs text-gray-500 sm:text-sm">
                    (0 Reviews)
                </span>

            </div>

            <p className="mt-2 text-sm text-gray-600 sm:text-base">
                <strong>Category:</strong> {product.category.name}
            </p>

            <p className="mt-2 text-sm text-gray-600 sm:text-base">
                <strong>Brand:</strong> {product.brand}
            </p>

            <p className="mt-2 text-sm text-gray-600 sm:text-base">
                <strong>Origin:</strong> {product.origin}
            </p>

            <p className="mt-2 text-sm text-gray-600 sm:text-base">
                <strong>Unit:</strong> {product.unit}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="text-2xl font-bold text-green-700 sm:text-3xl">
                    {product.newPrice.toFixed(2)} BD
                </span>

                <span className="text-lg text-gray-400 line-through sm:text-xl">
                    {product.oldPrice.toFixed(2)} BD
                </span>
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-green-700 sm:mt-6 sm:text-base">
                <CheckCircle2 size={20} />

                <span>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
            </div>

            <p className="mt-6 text-sm leading-7 text-gray-600 sm:mt-8 sm:text-base sm:leading-9">
                {product.description}
            </p>
        </div>
    );
}