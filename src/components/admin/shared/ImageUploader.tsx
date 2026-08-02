"use client"

import { DragEvent, useRef, useState } from "react";
import imageCompression from "browser-image-compression";
import { useRouter } from "next/navigation";



interface Props {
    entityId: number;
    type: "product" | "category";
    onUploaded?: () => void;

    multiple?: boolean;
}

export default function ImageUploader({
    entityId,
    type,
    onUploaded,
    multiple = true,
}: Props) {
    const inputRef = useRef<HTMLInputElement>(null);

    const router = useRouter();

    const [uploading, setUploading] = useState(false);
    const [dragging, setDragging] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const [progress, setProgress] = useState(0);
    const [totalFiles, setTotalFiles] = useState(0);

    const [error, setError] = useState("");

    const [success, setSuccess] = useState("");

    function validateFiles(files: File[]) {
        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "image/webp"
        ];

        if (multiple) {
            if (files.length > 10) {
                return "Maximum 10 images allowed.";
            }
        } else {
            if (files.length > 1) {
                return "Only one image is allowed."
            }
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
        setError("");
        setSuccess("");
        
        console.log("UPLOAD STARTED")
        console.log(files);

        console.log("Entity ID:", entityId);
        console.log("Type:", type);
        
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

                    console.log("Sending to API:", {
                        id: entityId,
                        type,
                        imageUrl: data.url,
                    });

                    const saveResponse = await fetch("/api/image", {
                        method: "POST",
                        headers:{
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            id: entityId,
                            type,
                            imageUrl: data.url,
                            publicId: data.publicId,
                        }),
                    });

                    const saveData = await saveResponse.json();
                    console.log("API Response:", saveData);

                    if (!saveResponse.ok || !saveData.success) {
                        throw new Error(saveData.message ?? "Failed to save image.");
                    }
                    setProgress((prev) => prev + 1);
            })
        );
            setSelectedFiles([]);
            setError("");
            setSuccess("Image uploaded successfully.");

            if (inputRef.current) {
                inputRef.current.value = "";
            }

            onUploaded?.();
            router.refresh();
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
            className={`rounded-xl border-2 border-dashed p-5 text-center transition-all sm:p-8 lg:p-10 ${
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
                multiple={multiple}
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
                <p className="text-base font-semibold sm:text-lg">
                    Drag & Drop Images Here
                </p>

                {error && (
                    <div className="mt-3 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="mt-3 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-700">
                        {success}
                    </div>
                )}

                <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                    or click the button below
                </p>
            </div>

            {selectedFiles.length > 0 && (
                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {selectedFiles.map((file, index) => (
                        <div
                            key={index}
                            className="rounded-lg border bg-white p-3 shadow transition hover:shadow-md"
                        >
                            <img 
                                src={URL.createObjectURL(file)}
                                alt=""
                                onError={(e) => {
                                    console.log("IMAGE ERROR", e);
                                }}
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
                                disabled={uploading}
                                onClick={() => 
                                    setSelectedFiles((prev) =>
                                        prev.filter((_, i) => i !== index)
                                    )
                                }
                                className="mt-3 w-full rounded-lg bg-red-600 py-2 text-sm text-white hover:bg-red-700"
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                </div>
            )}

            {uploading && (
                <div className="mb-6">
                    <div className="mb-2 flex flex-col gap-1 text-sm sm:flex-row sm:justify-between">
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
                className="w-full rounded-lg bg-green-700 px-5 py-3 text-white hover:bg-green-800 sm:w-auto disabled:cursor-not-allowed disabled:opacity-60"
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