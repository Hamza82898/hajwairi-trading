"use client";

import { useEffect, useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
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
  const [showFilters, setShowFilters] = useState(false);

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
    <>
      <div className="grid gap-8 lg:grid-cols-4">
        <aside className="hidden lg:block">
          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onSelect={(value) => {
              setSelectedCategory(value);
              setShowFilters(false);
            }}
          />
        </aside>

        {/*Products*/}
        

        <section className="lg:col-span-3">
          <div className="mb-5 flex gap-3 lg:hidden">
            <button
              onClick={() => setShowFilters(true)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-green-700 bg-white py-3 font-semibold text-green-700 shadow-sm"
            >
              <SlidersHorizontal size={18} />
              Filters
            </button>

            <div className="flex-1">
              <SortProducts 
                value={sortBy}
                onChange={setSortBy}
              />
            </div>
          </div>
          <div className="space-y-4 mb-8">
            <ProductSearch
              value={query}
              onChange={setQuery}
            />

            <div className="hidden justify-end lg:flex">
              <SortProducts
                value={sortBy}
                onChange={setSortBy}
              />
            </div>
          </div>

          

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
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
        </section>
      </div>

      {/*Mobile Drawer*/}

      {showFilters && (
        <div className="fixed inset-0 z-[999] bg-black/40 lg:hidden">
          <div className="absolute left-0 top-0 h-full w-80 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b p-5">
              <h2 className="text-xl font-bold">
                Filters
              </h2>
              <button
                onClick={() => setShowFilters(false)}
              >
                <X size={24} />
              </button>
            
            </div>

            <div className="p-5">
              <CategoryFilter 
                categories={categories}
                selected={selectedCategory}
                onSelect={(value) => {
                  setSelectedCategory(value);
                  setShowFilters(false); 
                }}
              />
            </div>
          
          </div>
        </div>
      )}
    </>
  );
}