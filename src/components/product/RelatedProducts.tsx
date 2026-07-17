import { futimesSync } from "fs";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

interface RelatedProductsProps {
    currentProduct: Product;
    products: Product[];
}

export default function RelatedProducts({
    currentProduct,
    products,
}: RelatedProductsProps) {
    const relatedProducts = products
        .filter(
            (product) =>
                product.category === currentProduct.category &&
            product.id !== currentProduct.id
        )
        .slice(0, 4);
    
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
                        image = {product.images[0]}
                        oldPrice = {product.oldPrice}
                        newPrice = {product.newPrice}
                        badge = {product.badge}
                        unit = {product.unit}
                        rating = {product.rating}
                        inStock = {product.inStock}
                    />
                ))}

            </div>

        </section>
    );
}