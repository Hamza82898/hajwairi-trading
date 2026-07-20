"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import ProductCard from "@/components/product/ProductCard";
import ProductSearch from "@/components/search/ProductSearch";
import CategoryFilter from "@/components/shop/CategoryFilter";
import SortProducts from "@/components/shop/SortProducts";

interface ShopClientProps {
  products: any[];
  categories: any[];
}

export default function ShopClient({
  products,
  categories,
}: ShopClientProps) {
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

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase());

      const matchesCategory =
        selectedCategory === "" ||
        product.category.slug === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, query, selectedCategory]);

  const sortedProducts = [...filteredProducts];

  switch (sortBy) {
    case "low-high":
      sortedProducts.sort((a, b) => a.newPrice - b.newPrice);
      break;

    case "high-low":
      sortedProducts.sort((a, b) => b.newPrice - a.newPrice);
      break;

    case "rating":
      sortedProducts.sort((a, b) => b.rating - a.rating);
      break;
  }

  return (
    <div className="grid gap-8 lg:grid-cols-4">
      <div>
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      <div className="lg:col-span-3">
        <div className="mb-10">
          <ProductSearch
            value={query}
            onChange={setQuery}
          />
        </div>

        <div className="mb-8 flex justify-end">
          <SortProducts
            value={sortBy}
            onChange={setSortBy}
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              slug={product.slug}
              name={product.name}
              image={
                product.images.find((img: any) => img.isPrimary)?.url ??
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

        {sortedProducts.length === 0 && (
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
  );
}