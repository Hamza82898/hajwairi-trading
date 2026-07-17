"use client"

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import ProductSearch from "@/components/search/ProductSearch";
import searchProducts from "@/utils/searchProducts";

export default function ShopPage() {
    const [query, setQuery] = useState("");

    const filteredProducts = searchProducts(products, query);

    return (
        <main className="mx-auto max-w-7xl px-6 py-10">

            {/*Heading*/}

            <div className="mb-10">
                <h1 className="text-4xl font-bold">
                    Shop
                </h1>

                <p className="mt-2 text-gray-600">
                    Fresh fruits, vegetables, dry items and grocery products.
                </p>
            </div>

            {/*Search*/}

            <div className="mb-10">
                <ProductSearch 
                    value = {query}
                    onChange = {setQuery}
                />
            </div>

            {/*Products*/}

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {filteredProducts.map((product) => (

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

            {/*Empty State*/}
            
            {filteredProducts.length === 0 && (
                <div className="py-20 text-center">
                    <h2 className="text-2xl font-semibold">
                        No Products Found
                    </h2>

                    <p className="mt-2 text-gray-500"> 
                        Try searching with another keyword.
                    </p>

                </div>
            )}

        </main>
    );
}