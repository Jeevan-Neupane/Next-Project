import NextAuth from "next-auth";
import { authConfig } from "./utils/auth.config.js";

export default NextAuth(authConfig).auth;


export const config = {
    matcher: ["/((?!api|static|.*\\..*|_next).*)"],
  };
  