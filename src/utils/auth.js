import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
export const { handlers, auth, signIn, signOut } = NextAuth({ providers: [GitHub({ clientId: process.env.GIT_CLIENT_ID, clientSecret: process.env.GIT_CLIENT_SECRET })] })

