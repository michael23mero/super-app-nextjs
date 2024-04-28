import { prisma } from "@/res/config/prisma";
import { NextResponse as response } from "next/server";

export async function GET (request, {params}) {
    try {
        const data = await prisma.collectionpost.findUnique({
            where: {
                id: params.postId
            }
        })
        return response.json(data)
    } catch (err) {
        return response.json({msg: err.message})
    }
}

export async function PUT (request, {params}) {
    try {
        const data = await request.json()
        await prisma.collectionpost.update({
            where: {
                id: params.postId
            }, data: data
        })
        return response.json({msg: 'Post updated successfully'})
    } catch (err) {
        return response.json({msg: err.message})
    }
}

export async function DELETE (request, {params}) {
    try {
        const post = await prisma.collectionpost.delete({
            where: {
                id: params.postId
            }
        })
        return response.json({msg: 'Post deleted successfully'})
    } catch (err) {
        return response.json({msg: err.message})
    }
}