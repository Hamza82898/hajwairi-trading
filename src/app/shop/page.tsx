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
        <main className="mx-auto max-w-7xl px-6 py-10">
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

            <div className="mb-10">
                <h1 className="text-4xl font-bold">
                    Shop
                </h1>

                <p className="mt-2 text-gray-600">
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