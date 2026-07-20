import { notFound } from "next/navigation";
import { getCategories, getProductById } from "@/lib/product/queries";
import ProductForm from "@/components/admin/products/ProductForm";
import ImageUploader from "@/components/admin/products/ImageUploader";
import ProductImageGallery from "@/components/admin/products/ProductImageGallery";
import { getProductImages } from "@/lib/product/image-queries";




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

    const images = await getProductImages(product.id);

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

            <div className="mt-10">
                <h2 className="mb-4 text-2xl font-semibold">
                    Product Images
                </h2>

                <ImageUploader productId={product.id} />

                <div className="mt-8">
                    <ProductImageGallery images={images} />
                </div>
            </div>
        </main>
    );
}