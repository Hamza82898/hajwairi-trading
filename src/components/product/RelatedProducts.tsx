
import ProductCard from "./ProductCard";
import { Product, Category, ProductImage } from "@prisma/client";

type ProductWithRelations = Product & {
    category: Category;
    images: ProductImage[];
};

interface RelatedProductsProps {
    products: ProductWithRelations[];
}

export default function RelatedProducts({
    products,
}: RelatedProductsProps) {
    const relatedProducts = products;
    
    if (relatedProducts.length === 0) {
        return null;
    }

    return (
        <section className="mt-20">
            <h2 className="mb-8 text-3xl font-bold">
                Related Products
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                {relatedProducts.map((product) => (
                    <ProductCard 
                        key = {product.id}
                        id = {product.id}
                        slug = {product.slug}
                        name = {product.name}
                        image = {product.images[0]?.url ?? "/placeholder.png"}
                        oldPrice = {product.oldPrice}
                        newPrice = {product.newPrice}
                        badge = {product.badge ?? ""}
                        unit = {product.unit}
                        rating = {product.rating}
                        inStock = {product.inStock}
                    />
                ))}

            </div>

        </section>
    );
}