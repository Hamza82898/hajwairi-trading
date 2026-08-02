import Image from "next/image";
import ProductImageCard from "./ProductImageCard";

interface ProductImage {
    id: number;
    url: string;
    isPrimary: boolean;
}

interface Props {
    productId: number;
    images: ProductImage[];
}

export default function ProductImageGallery({
    productId,
    images,
}: Props) {
    if (images.length === 0) {
        return (
            <div className="rounded-xl border-2 border-dashed border-gray-300 p-8 text-center text-gray-500">
                No images uploaded yet.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {images.map((image) => (
                <ProductImageCard 
                    key = {image.id}
                    id = {image.id}
                    url = {image.url}
                    isPrimary = {image.isPrimary}
                    productId = {productId}
                />
            ))}

        </div>
    );
}