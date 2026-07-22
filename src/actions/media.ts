"use server"

import { saveMedia as saveMediaToDB } from "@/lib/media";
import { revalidatePath } from "next/cache";
import { success } from "zod";

interface SaveMediaInput {
    id: number;
    type: "product" | "category";
    imageUrl: string;
}


export async function saveMedia(data: SaveMediaInput) {
    try {
        await saveMediaToDB(data);

        if (data.type === "product") {
            revalidatePath(`/admin/products/${data.id}/edit`);
        } else {
            revalidatePath(`/admin/categories/${data.id}/edit`);
        }

        return {
            success: true,
        };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: "Failed to save media."
        };
    }
}