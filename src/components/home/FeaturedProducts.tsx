import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ProductCard from "@/components/product/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { getFeaturedProducts } from "@/lib/products";

export default async function FeaturedProducts() {
    const products = await getFeaturedProducts();

    return (
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 lg:py-24">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="mb-8 flex flex-col gap-6 sm:mb-10 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">

                    <SectionTitle
                        title="Featured Products"
                        subtitle="Fresh arrivals hand-picked for our customers."
                    />

                    <Link
                        href="/shop"
                        className="hidden items-center gap-2 rounded-full border border-green-900 px-6 py-3 font-semibold text-green-900 transition hover:bg-green-900 hover:text-white lg:flex"
                    >
                        View All
                        <ArrowRight size={18} />
                    </Link>

                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 xl:gap-8">

                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            slug={product.slug}
                            name={product.name}
                            image={
                                product.images.find((img) => img.isPrimary)?.url ??
                                product.images[0]?.url ??
                                "/placeholder.png"
                            }
                            oldPrice={product.oldPrice}
                            newPrice={product.newPrice}
                            badge={product.badge ?? ""}
                            unit={product.unit}
                            rating={product.rating}
                            inStock={product.inStock}
                        />
                    ))}

                </div>

                {/* Mobile View All */}

                <div className="mt-8 flex justify-center lg:hidden">

                    <Link
                        href="/shop"
                        className="flex items-center gap-2 rounded-full bg-green-900 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
                    >
                        View All
                        <ArrowRight size={18} />
                    </Link>

                </div>

            </div>

        </section>
    );
}