import Breadcrumb from "@/components/ui/Breadcrumb";
import ShopClient from "@/components/shop/ShopClient";
import { getProducts } from "@/lib/products";
import { prisma } from "@/lib/prisma";

export default async function ShopPage() {
    const products = await getProducts();

    const categories = await prisma.category.findMany({
        orderBy: {
            name: "asc",
        },
    });

    return (
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
            <Breadcrumb 
                items = {[
                    {
                        label: "Home",
                        href: "/",
                    },
                    {
                        label: "Shop",
                    },
                ]}
            />

            <div className="mb-8 sm:mb-10">
                <h1 className="text-3xl font-bold sm:text-4xl">
                    Shop
                </h1>

                <p className="mt-2 text-sm text-gray-600 sm:text-base">
                    Fresh fruits, vegetables, dry items and grocery products.
                </p>
            </div>

            <ShopClient 
                products={products}
                categories={categories}
            />

        </main>
    )
}