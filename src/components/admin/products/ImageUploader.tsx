"use client"

import { useRef, useState } from "react";

interface Props {
    productId: number;
    onUploaded?: () => void;
}

export default function ImageUploader({
    productId,
    onUploaded,
}: Props) {
    const inputRef = useRef<HTMLInputElement>(null);

    const [uploading, setUploading] = useState(false);

    async function upload(file: File) {
        setUploading(true);

        try {
            const formData = new FormData();

            formData.append("file", file);

            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            await fetch("/api/product-image", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    productId,
                    imageUrl: data.url,
                }),
            }),

            onUploaded?.();
        } catch (error) {
            console.error(error);

            alert("Image upload failed.");
        } finally {
            setUploading(false);
        }
    }

    return (
        <div className="rounded-xl border-2 border-dashed p-8 text-center">

            <input 
                ref={inputRef}
                hidden
                type="file"
                accept="image*/"
                onChange={(e) => {
                    const file = e.target.files?.[0];

                    if (file) {
                        upload(file);
                    }
                }}
            />

            <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="rounded-lg bg-green-700 px-5 py-3 text-white"
            >
                {uploading
                    ? "Uploading..."
                    : "Upload Image"}
            </button>

        </div>
    );
}