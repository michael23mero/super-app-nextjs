import { connection } from "@/config/mongodb";
import User from "@/models/user";
import { compare } from "bcryptjs";

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({

    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email", type: "text", placeholder: "Email"
                },
                password: {
                    label: "Password", type: "password", placeholder: "Password"
                }
            },
            async authorize(credentials, req) {
                await connection()
                
                const userFound = await User.findOne({ email: credentials.email }).select('+password')
                if(!userFound) throw new Error('Invalid credentials')

                const passwordMatch = await compare(credentials.password, userFound.password)
                if(!passwordMatch) throw new Error('Invalid credentials')

                return userFound
            }
        })
    ],
    callbacks: {
        jwt({token, user}) {
            if(user) token.user = user
            return token
        },
        session({ session, token }) {
            session.user = token.user
            return session
        }
    },
    pages: {
        signIn: "/login"
    }
})

export { handler as GET, handler as POST }