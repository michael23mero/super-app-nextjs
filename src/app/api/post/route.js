import { prisma } from "@/res/config/prisma";
import { NextResponse as response } from "next/server";

import { supabaseClient } from "@/res/config/supabase";

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
        const data = await request.formData()
        
        const file = data.get('image')
        const bytes = await file.arrayBuffer()

        const upload = await supabaseClient.storage.from('react-file').upload('file'+Date.now(), Buffer.from(bytes))
        const urlimg = 'https://ehjwfhdshwjdzhwezdsj.supabase.co/storage/v1/object/public/'+upload.data.fullPath

        const post = await prisma.collectionpost.create({
            data: {
                title: data.get('title'), 
                description: data.get('description'),
                image: urlimg
            }
        })
        return response.json({msg: 'Post added successfully', post})
    } catch (err) {
        return response.json({msg: err.message})
    }
}