"use client"

import { useEffect, useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import ProductSearch from "@/components/search/ProductSearch";
import searchProducts from "@/utils/searchProducts";
import CategoryFilter from "@/components/shop/CategoryFilter";
import SortProducts from "@/components/shop/SortProducts";
import { useSearchParams } from "next/navigation";



export default function ShopPage() {
    const [query, setQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortBy, setSortBy] = useState("default");
    const searchParams = useSearchParams();

    useEffect(() => {
        const category = searchParams.get("category");

        if (category) {
            setSelectedCategory(category);
        }
    }, [searchParams]);

    const filteredProducts = searchProducts(products, query).filter(
        (product) =>
            selectedCategory === "" ||
        product.category === selectedCategory
    );

    const sortedProducts = [...filteredProducts];

    switch (sortBy) {
        case "low-high":
            sortedProducts.sort((a,b) => a.newPrice - b.newPrice);
            break;

        case "high-low":
            sortedProducts.sort((a,b) => b.newPrice - a.newPrice);
            break;

        case "rating":
            sortedProducts.sort((a,b) => b.rating - a.rating);
            break;
    }

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

            <div className="grid gap-8 lg:grid-cols-4">

                {/*SideBar*/}

                <div>
                    <CategoryFilter 
                        selected={selectedCategory}
                        onSelect={setSelectedCategory}
                    />
                </div>

                {/*Products*/}

                <div className="lg:col-span-3">

                    {/*Search*/}

                    <div className="mb-10">
                        <ProductSearch 
                            value={query}
                            onChange={setQuery}
                        />
                    </div>

                    <div className="mb-8 flex justify-end">
                        <SortProducts 
                            value= {sortBy}
                            onChange={setSortBy}
                        />
                    </div>

                    {/*Product Grid*/}

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                        {sortedProducts.map((product) => (
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
                                Try another category or search keyword.
                            </p>

                        </div>
                    )}

                </div>

            </div>
        </main>
    );
}