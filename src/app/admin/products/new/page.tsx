import { getCategories } from "@/lib/product/queries";
import ProductForm from "@/components/admin/products/ProductForm";

export default async function NewProductPage() {
    const categories = await getCategories();

    return (
        <main>
            <div className="mb-8">
                <h1 className="text-4xl font-bold">
                    Add Product
                </h1>

                <p className="mt-2 text-gray-600">
                    Create a new product.
                </p>
            </div>

            <ProductForm categories={categories} />
        </main>
    );
}