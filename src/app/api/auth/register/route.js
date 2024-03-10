import { NextResponse as response } from "next/server";
import { connection } from "@/config/mongodb";
import bcrypt from "bcryptjs";
import User from "@/models/user";

export async function POST(request) {
    try {
        await connection()

        const data = await request.json()
    
        const existe = await User.findOne({ email: data.email })
        
        if (existe) return response.json({msg: 'User already exists'}, { status: 400 })

        const pass = await bcrypt.hash(data.password, 12)
    
        const user = new User({email: data.email, password: pass})
        const userSave = await user.save()
    
        return response.json({msg: `User saved successfully`,userSave}, { status: 200 })
    } catch (err) {
        return response.json({msg: err.message}, { status: 500 })
    }
}