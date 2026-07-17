import ProductCard from "@/components/product/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { featuredProducts } from "@/utils/featuredProducts";

export default function FeaturedProducts() {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7x1 px-6">
                <SectionTitle 
                    title = "Featured Products"
                    subtitle = "Fresh products specially selected for our customers."
                />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {featuredProducts.map((product) => (
                        <ProductCard 
                            key = {product.id}
                            id={product.id}
                            slug = {product.slug}
                            name = {product.name}
                            image = {product.images[0]}
                            oldPrice = {product.oldPrice}
                            newPrice = {product.newPrice}
                            badge = {product.badge}
                            unit={product.unit}
                            rating={product.rating}
                            inStock={product.inStock}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}