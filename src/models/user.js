import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: [ true, 'Email is required']
            // match: [] para expresiones regulares
        },

        password: {
            type: String,
            required: [ true, 'Password is required'],
            select: false, // la password no sera devuelta
        }
    },
    {
        versionKey: false
    }
)

export default models.User || model('User', UserSchema)