import connectDB from "@/db/db";
import { User } from "@/model/user.model";
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    providers: [GitHub({ clientId: process.env.GIT_CLIENT_ID, clientSecret: process.env.GIT_CLIENT_SECRET })],
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account?.provider === "github") {
                connectDB();
                try {
                    const user = await User.findOne({ email: profile?.email });
                    if (!user) {
                        const newUser = new User({
                            username: profile?.login,
                            email: profile?.email,
                            img: profile?.avatar_url,

                        });

                        await newUser.save();
                    }

                } catch (error) {
                    console.log(error);
                    return false;
                }

            }
            return true;
        }

    }
})

