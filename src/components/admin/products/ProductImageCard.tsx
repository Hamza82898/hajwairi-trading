"use client"

import Image from "next/image";
import { startTransition, useTransition } from "react";
import { deleteProductImage, setPrimaryImage  } from "@/actions/product-image";

interface Props {
    id: number;
    url: string;
    isPrimary: boolean;
    productId: number;
}

export default function ProductImageCard({
    id,
    url,
    isPrimary,
    productId,
}: Props) {
    const [pending, startTransition] = useTransition();
    return (
        <div className="overflow-hidden rounded-xl border bg-white shadow transition hover:shadow-lg">
            <div className="relative aspect-square">
                <Image 
                    src={url}
                    alt="Product"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="space-y-3 p-4">

                {isPrimary ? (
                    <span className="inline-block rounded-full bg-green-600 px-3 py-1 text-xs font-medium text-white">
                        ⭐ Primary Image
                    </span>
                ) : (
                    <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-xs">
                        Secondary Image
                    </span>
                )}

                <div className="flex gap-2">
                    <button
                        disabled={pending}
                        onClick={() => {
                            startTransition(async () => {
                                await setPrimaryImage(
                                    id,
                                    productId
                                );
                            });
                        }}
                        className="flex-1 rounded-lg bg-green-700 px-3 py-2 text-sm text-white disabled:opacity-50"
                    >
                        {pending ? "Saving..." : "Set Primary"}
                    </button>

                    <button
                        disabled={pending}
                        onClick={() => {
                            if (!confirm("Delete this image?")) {
                                return;
                            }

                            startTransition(async () => {
                                await deleteProductImage(
                                    id,
                                    productId
                                );
                            });
                        }}
                        className="flex-1 rounded-lg bg-red-600 px-3 py-2 text-sm text-white disabled:opacity-50"
                    >
                        {pending ? "Deleting..." : "Delete"}
                    </button>

                </div>

            </div>

        </div>
    );
}