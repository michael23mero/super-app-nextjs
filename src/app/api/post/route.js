import { prisma } from "@/config/prisma";
import { NextResponse as response } from "next/server";

import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import { firebaseConfig } from '@/config/firebase';

initializeApp(firebaseConfig); const storage = getStorage()

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

        const storageRef = ref(storage, `archivos-next/${Date.now()}`)
        const metadata = { contentType: file.type };
        const snapshot = await uploadBytes(storageRef, Buffer.from(bytes), metadata)
        const url_public = await getDownloadURL(snapshot.ref)

        await prisma.collectionpost.create({
            data: {
                title: data.get('title'), 
                description: data.get('description'),
                image: url_public
            }
        })
        return response.json({msg: 'Post added successfully'})
    } catch (err) {
        return response.json({msg: err.message})
    }
}