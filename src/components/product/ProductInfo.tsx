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
            <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
                {product.badge}
            </span>

            <h1 className="mt-5 text-4xl font-bold">
                {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: product.rating}).map((_, index) => (
                    <Star 
                        key = {index}
                        size = {18}
                        className = "fill-yellow-400 text-yellow-400"
                    />
                ))}

                <span className="ml-2 text-sm text-gray-500">
                    ({product.reviews} Reviews)
                </span>

            </div>

            <p className="mt-4 text-gray-600">
                <strong>Category:</strong> {product.category.name}
            </p>

            <p className="mt-2 text-gray-600">
                <strong>Brand:</strong> {product.brand}
            </p>

            <p className="mt-2 text-gray-600">
                <strong>Origin:</strong> {product.origin}
            </p>

            <p className="mt-2 text-gray-600">
                <strong>Unit:</strong> {product.unit}
            </p>

            <div className="mt-6 flex items-center gap-4">
                <span className="text-3xl font-bold text-green-700">
                    {product.newPrice.toFixed(2)} BD
                </span>

                <span className="text-xl text-gray-400 line-through">
                    {product.oldPrice.toFixed(2)} BD
                </span>
            </div>

            <div className="mt-6 flex items-center gap-2 text-green-700">
                <CheckCircle2 size={20} />

                <span>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
            </div>

            <p className="mt-8 leading-9 text-gray-600">
                {product.description}
            </p>
        </div>
    );
}