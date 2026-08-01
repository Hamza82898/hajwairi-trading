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

            <div className="relative h-[320px] overflow-hidden rounded-2xl border bg-white sm:h-[420px] lg:h-[500px]" >

                <Image 
                    src={selectedImage}
                    alt={name}
                    fill
                    className="object-contain p-4 transition-transform duration-300 hover:scale-110 sm:p-6 lg:p-8"
                />
            </div>

            {/*Thumbnails*/}

            <div className="mt-4 grid grid-cols-4 gap-2 sm:mt-5 sm:gap-4">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className={`relative h-16 overflow-hidden rounded-xl border sm:h-20 lg:h-24 ${
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