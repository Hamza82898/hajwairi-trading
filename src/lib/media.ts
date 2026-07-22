import { prisma } from "@/lib/prisma"; 
import { success } from "zod";

interface SaveMediaInput {
    id: number;
    type: "product" | "category";
    imageUrl: string;
}

export async function saveMedia({
    id,
    type,
    imageUrl,
}: SaveMediaInput) {

    console.log("LIB MEDIA")
    console.log({
        id,
        type,
        imageUrl,
    });

    switch (type) {
        case "product": {
            const existingPrimary = await prisma.productImage.findFirst({
                where: {
                    productId: id,
                    isPrimary: true,
                },
            });

            await prisma.productImage.create({
                data: {
                    productId: id,
                    url: imageUrl,
                    isPrimary: !existingPrimary,
                },
            });

            return {
                success: true,
            }
        }

        case "category": {

            console.log("Updating Category:", id);
            console.log("Image:", imageUrl);

            const updated = await prisma.category.update({
                where: {
                    id,
                },
                data: {
                    image: imageUrl,
                },
            });

            console.log(updated);
            return {
                success: true,
            };
        }

        default:
            return {
                success: false,
                message: "Invalid media type."
            };
    }
}