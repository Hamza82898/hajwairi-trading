import Image from "next/image";

interface ProductImage {
    id: number;
    url: string;
    isPrimary: boolean;
}

interface Props {
    images: ProductImage[];
}

export default function ProductImageGallery({
    images,
}: Props) {
    if (images.length === 0) {
        return (
            <div className="rounded-lg border-dashed p-8 text-center text-gray-500">
                No images uploaded yet.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {images.map((image) => (
                <div
                    key={image.id}
                    className="overflow-hidden rounded-xl border bg-white shadow"
                >
                    <div className="relative aspect-square">
                        <Image 
                            src={image.url}
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="p-3">
                        {image.isPrimary ? (
                            <span className="rounded bg-green-600 px-3 py-1 text-xs text-white">
                                Primary
                            </span>
                        ) : (
                            <span className="rounded bg-gray-200 px-3 py-1 text-xs">
                                Image
                            </span>
                        )}
                    </div>
                </div>

            ))}

        </div>
    );
}