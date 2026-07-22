import { prisma } from "@/lib/prisma"; 
import cloudinary from "@/lib/cloudinary";
import { success } from "zod";



interface SaveMediaInput {
    id: number;
    type: "product" | "category";
    imageUrl: string;
    publicId?: string;
}

export async function saveMedia({
    id,
    type,
    imageUrl,
    publicId,
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
            const category = await prisma.category.findUnique({
                where: {
                    id,
                },
            });

            if (!category) {
                throw new Error("Category not found.");
            }

            // Delete previous Cloudinary image
            if (category.cloudinaryPublicId) {
                try {
                    await cloudinary.uploader.destroy(category.cloudinaryPublicId);
                } catch (error) {
                    console.error("Cloudinary delete failed:", error);
                }
            }

            await prisma.category.update({
                where: {
                    id,
                },
                data: {
                    image: imageUrl,
                    cloudinaryPublicId: publicId,
                },
            });

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