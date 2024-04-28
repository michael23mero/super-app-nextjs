import { prisma } from "@/res/config/prisma";

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcrypt";
import { cookies } from "next/headers";

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

                const user = await prisma.collectionuser.findFirst({
                    where: { email: credentials.email }
                })

                if(!user) throw new Error('Invalid credentials')

                const compare = await bcrypt.compare(credentials.password, user.password)
                if(!compare) throw new Error('Invalid credentials')

                return  user
            }
        })
    ],
    callbacks: {
        jwt({token, user}) {
            if(user) token.user = user
            return token
        },
        session({ session, token }) {
            const accessToken = cookies().get('next-auth.session-token').value
            session.user = token.user
            session.token = accessToken
            return session
        }

        
    },
    pages: {
        signIn: "/login"
    }
})

export { handler as GET, handler as POST }