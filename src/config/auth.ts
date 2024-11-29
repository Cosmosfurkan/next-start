import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import db from "@/db";
import { env } from "@/env/server";

const options: NextAuthOptions = {
  pages: {
    signIn: "/",
  },
  adapter: DrizzleAdapter(db),
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
    async signIn() {
      // Check if user has an active subscription
      // This is a simplified example - you'll need to implement your own logic
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Redirect to payment page after sign in if needed
      if (url.startsWith(baseUrl)) {
        // You might want to check if the user needs to be redirected to payment
        // based on their subscription status
        return `${baseUrl}/payment`;
      }
      return url;
    },
  },
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

export default options;
