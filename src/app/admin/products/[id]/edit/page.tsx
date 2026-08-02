import { notFound } from "next/navigation";
import { getCategories, getProductById } from "@/lib/product/queries";
import ProductForm from "@/components/admin/products/ProductForm";
import ImageUploader from "@/components/admin/shared/ImageUploader";
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
            <div className="mb-6 sm:mb-8">
                <h1 className="text-3xl font-bold sm:text-4xl">
                    Edit Product
                </h1>

                <p className="mt-2 text-sm text-gray-600 sm:text-base">
                    Update product information.
                </p>
            </div>

            <ProductForm 
                categories={categories}
                product={product}
            />

            <div className="mt-8 sm:mt-10">
                <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
                    Product Images
                </h2>

                <ImageUploader
                    entityId = {product.id}
                    type="product"
                    
                />

                <div className="mt-6 sm:mt-8">
                    <ProductImageGallery 
                        productId={product.id}
                        images={images} 
                    />
                </div>
            </div>
        </main>
    );
}