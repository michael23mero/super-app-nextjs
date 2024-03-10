import mongoose from "mongoose";

if(!process.env.DATABASE_URL) throw new Error('Database URL must be specified')

export const connection = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log('Connected to MongoDB')
    } catch (err) {
        console.log(err)
    }
}