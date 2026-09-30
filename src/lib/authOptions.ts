import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "./axios";
import { AxiosError } from "axios";
import type { Provider } from "next-auth/providers";

const providers: Provider[] = [
  CredentialsProvider({
    name: "Credentials",
    credentials: {
      email: {
        label: "Email",
        type: "email",
        placeholder: "jsmith@gmail.com",
      },
      password: { label: "Password", type: "password" },
      rememberMe: { label: "RememberMe", type: "checkbox" },
    },

    async authorize(credentials) {
      try {
        const res = await axios.post(
          "/api/auth/login", // Relative API call
          {
            email: credentials?.email,
            password: credentials?.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const user = res.data;
        const token = res.headers["set-cookie"] as string[] | undefined;

        const refresh = token && token[0]?.split("; ")[0]?.split("=")?.[1];

        if (user) {
          return {
            ...user,
            refreshToken: refresh || null,
            accessToken: res.data.accessToken,
          };
        } else {
          throw new Error("Invalid credentials");
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          console.error(
            "Authorize error:",
            error.response?.data || error.message
          );
          throw new Error(error.response?.data || error.message);
        }
        throw new Error("An unknown error occurred during authorization.");
      }
    },
  }),
];

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,

  pages: {
    signIn: "/login",
    error: "/login",
  },

  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        const email = profile?.email;

        try {
          await axios.post("/api/users/checkprofile", { email });
        } catch (err) {
          if (err instanceof AxiosError) {
            console.error("Error checking user profile:", err.response?.data);
          }
        }
      }
      return true;
    },

    // async session({ session, token }) {
    //   try {
    //     session.user = token as any ;
    //     return session;
    //   } catch (error) {
    //     console.error("Session Callback Error:", error);
    //     throw new Error("Session callback failed");
    //   }
    // },
  },
});
