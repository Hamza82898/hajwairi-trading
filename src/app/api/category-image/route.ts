import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";
import { success } from "zod";

export async function DELETE(req: NextRequest) {
    try {
        const { id } = await req.json();

        if (!id) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Category id required.",
                },
                {
                    status: 400,
                }
            );
        }

        const category = await prisma.category.findUnique({
            where:{
                id,
            },
        });

        if (!category) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Category not found.",
                },
                {
                    status: 400,
                }
            );
        }

        if (category.cloudinaryPublicId) {
            await cloudinary.uploader.destroy(
                category.cloudinaryPublicId
            );
        }

        await prisma.category.update({
            where: {
                id,
            },
            data: {
                image: null,
                cloudinaryPublicId: null,
            },
        });

        return NextResponse.json({
            success: true,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: "Delete failed.",
            },
            {
                status: 500,
            }
        );
    }
}