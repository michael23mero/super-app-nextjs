import { prisma } from "@/res/config/prisma";

import { NextResponse as response } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
    try {

        const data = await request.json()
    
        const existe = await prisma.collectionuser.findFirst({
            where: { email: data.email }
        })
        
        if (existe) return response.json({msg: 'User already exists'}, { status: 400 })

        const pass = await bcrypt.hash(data.password, 10)

        const user = await prisma.collectionuser.create({
            data: {
                email: data.email, password: pass
            }
        })
        return response.json({msg: `User saved successfully`,user}, { status: 200 })
    } catch (err) {
        return response.json({msg: err.message}, { status: 500 })
    }
}