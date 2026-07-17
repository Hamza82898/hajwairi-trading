"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
    images: string[];
    name: string;
}

export default function ProductGallery({
    images,
    name,
}: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div>
            {/*Main Page*/}

            <div className="relative h-[500px] overflow-hidden rounded-2xl border bg-white">

                <Image 
                    src={selectedImage}
                    alt={name}
                    fill
                    className="object-contain p-8 transition-transform duration-300 hover:scale-110"
                />
            </div>

            {/*Thumbnails*/}

            <div className="mt-5 grid grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className={`relative h-24 overflow-hidden rounded-xl border ${
                            selectedImage === image
                             ? "border-green-700"
                             : "border-gray-300"
                        }`}
                    >
                        <Image 
                            src={image}
                            alt={`${name}-${index}`}
                            fill
                            className="object-contain p-2"
                        />

                    </button>
                ))}

            </div>
        </div>
    );
}