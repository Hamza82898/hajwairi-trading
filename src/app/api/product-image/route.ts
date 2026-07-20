import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { success } from "zod";

export async function POST(req: NextRequest) {
    try {
        const { productId, imageUrl } = await req.json();

        if (!productId || !imageUrl) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Missing data.",
                },
                {
                    status: 400,
                }
            );
        }

        const existingPrimary = await prisma.productImage.findFirst({
            where: {
                productId,
                isPrimary: true,
            },
        });

        const image = await prisma.productImage.create({
            data:{
                productId,
                url: imageUrl,
                isPrimary: !existingPrimary,
            },
        });

        return NextResponse.json({
            success: true,
            image,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: "Database error,",
            },
            {
                status: 500,
            }
        );
    }
}