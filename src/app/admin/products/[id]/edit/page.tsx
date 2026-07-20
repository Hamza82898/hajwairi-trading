import { notFound } from "next/navigation";
import { getCategories, getProductById } from "@/lib/product/queries";
import ProductForm from "@/components/admin/products/ProductForm";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditProductPage({
    params,
}: Props) {
    const { id } = await params;

    const product = await getProductById(Number(id));

    if (!product) {
        notFound();
    }

    const categories = await getCategories();

    return (
        <main>
            <div className="mb-8">
                <h1 className="text-4xl font-bold">
                    Edit Product
                </h1>
            </div>

            <ProductForm 
                categories={categories}
                product={product}
            />
        </main>
    );
}