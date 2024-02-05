import { prisma } from "@/config/prisma";
import { NextResponse as response } from "next/server";

export async function GET() {
    try {
        const data = await prisma.collectionpost.findMany()
        return response.json(data)
    } catch (err) {
        return response.json({msg: err.message})
    }
}

export async function POST(request) {
    try {
        const data = await request.json()
        const post = await prisma.collectionpost.create({
            data: data
        })
        return response.json(post)
    } catch (err) {
        return response.json({msg: err.message})
    }
}