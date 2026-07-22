import { NextRequest, NextResponse } from "next/server";
import { saveMedia } from "@/lib/media";
import { success } from "zod";

export async function POST(request: NextRequest) {
    try {

        console.log("API IMAGE HIT");

        const body = await request.json();

        const {
            id,
            type,
            imageUrl,
        } = body;

        if (!id || !type || !imageUrl) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Missing required fields."
                },
                {
                    status: 400,
                }
            );
        }

        if (
            type !== "product" &&
            type !== "category"
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid media type."
                },
                {
                    status: 400,
                }
            );
        }

        const result = await saveMedia({
            id: Number(id),
            type,
            imageUrl,
        });
        console.log("SAVE MEDIA RESULT:", result);
        return NextResponse.json(result);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: "Internal Server Error."
            },
            {
                status: 500,
            }
        );
    }
}