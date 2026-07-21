"use client"

import { DragEvent, useRef, useState } from "react";
import imageCompression from "browser-image-compression";


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
    const [dragging, setDragging] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const [progress, setProgress] = useState(0);
    const [totalFiles, setTotalFiles] = useState(0);

    const [error, setError] = useState("");

    function validateFiles(files: File[]) {
        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "image/webp"
        ];

        if (files.length > 10) {
            return "Maximum 10 images allowed.";
        }

        for (const file of files) {
            if (!allowedTypes.includes(file.type)) {
                return `${file.name} is not a valid image.`;
            }

            if (file.size > 5 * 1024 * 1024) {
                return `${file.name} exceeds 5MB.`;
            }
        }
        return "";
    }

    async function compressImages(files : File[]) {
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1200,
            useWebWorker: true,
        };

        return Promise.all(
            files.map((file) => imageCompression(file, options))
        );
    }

    async function upload(files: File[]) {
        setUploading(true);
        setProgress(0);
        setTotalFiles(files.length);

        try {
            await Promise.all(
                files.map(async (file) => {
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
                    });
                    setProgress((prev) => prev + 1);
            })
        );
            setSelectedFiles([]);
            onUploaded?.();
            setError("");

            if (inputRef.current) {
                inputRef.current.value = "";
            }
        } catch (error) {
            console.error(error);
            
            setError(
                error instanceof Error
                    ? error.message
                    : "Image upload failed."
            );
        } finally {
            setUploading(false);
        }
    }      
    
    async function handleDrop(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();

        setDragging(false);

        const files = Array.from(e.dataTransfer.files);
        const validation = validateFiles(files);

        if (validation) {
            setError(validation);
            return;
        }
        setError("");
        const compressed = await compressImages(files);
        setSelectedFiles(compressed);
    }
    

    return (
        <div
            onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            className={`rounded-xl border-2 border-dashed p-10 text-center transition-all ${
                dragging
                    ? "border-green-700 bg-green-50"
                    : "border-gray-300"
            }`}
        >

            <input 
                ref={inputRef}
                hidden
                type="file"
                accept="image/*"
                multiple
                onChange={async (e) => {
                    const files = Array.from(e.target.files ?? []);
                    const validation = validateFiles(files);

                    if (validation) {
                        setError(validation);
                        return;
                    }
                    setError("");
                    const compressed = await compressImages(files);
                    setSelectedFiles(compressed);
                }}
            />

            <div className="mb-6">
                <p className="text-lg font-semibold">
                    Drag & Drop Images Here
                </p>

                {error && (
                    <div className="mt-3 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                        {error}
                    </div>
                )}

                <p className="mt-2 text-sm text-gray-500">
                    or click the button below
                </p>
            </div>

            {selectedFiles.length > 0 && (
                <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                    {selectedFiles.map((file, index) => (
                        <div
                            key={index}
                            className="rounded-lg border bg-white p-3 shadow"
                        >
                            <img 
                                src={URL.createObjectURL(file)}
                                alt=""
                                className="mb-3 aspect-square w-full rounded-lg object-cover"
                            />

                            <p className="truncate text-sm font-medium">
                                {file.name}
                            </p>

                            <p className="text-xs text-gray-500">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                            </p>

                            <button
                                type="button"
                                onClick={() => 
                                    setSelectedFiles((prev) =>
                                        prev.filter((_, i) => i !== index)
                                    )
                                }
                                className="mt-3 w-full rounded bg-red-600 py-2 text-sm text-white"
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                </div>
            )}

            {uploading && (
                <div className="mb-6">
                    <div className="mb-2 flex justify-between text-sm">
                        <span>Uploading Images....</span>

                        <span>
                            {progress}/{totalFiles}
                        </span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-gray-200">
                        <div 
                            className="h-full bg-green-600 transition-all duration-300"
                            style={{
                                width: `${(progress / totalFiles) * 100}%`,
                            }}
                        />
                    </div>

                </div>

            )}

            <button
                type="button"
                disabled= {uploading}
                onClick={() => {
                    if (selectedFiles.length > 0) {
                        upload(selectedFiles)
                    } else {
                        inputRef.current?.click();
                    }
                }}
                className="rounded-lg bg-green-700 px-5 py-3 text-white hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
                {uploading
                    ? "Uploading..."
                    : selectedFiles.length > 0
                        ? "Start Upload"
                        : "Select Images"    
                }
            </button>

        </div>
    );
}