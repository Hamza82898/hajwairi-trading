import { getCategories } from "@/lib/product/queries";
import ProductForm from "@/components/admin/products/ProductForm";

export default async function NewProductPage() {
    const categories = await getCategories();

    return (
        <main>
            <div className="mb-6 sm:mb-8">
                <h1 className="text-3xl font-bold sm:text-4xl">
                    Add Product
                </h1>

                <p className="mt-2 text-sm text-gray-600 sm:text-base">
                    Create a new product.
                </p>
            </div>

            <ProductForm categories={categories} />
        </main>
    );
}