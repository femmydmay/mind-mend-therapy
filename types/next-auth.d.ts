import { User as U } from "@/lib/types";
import NextAuth from "next-auth";
interface Us  {
  accessToken: string;
  refreshToken: string;
  user:U
}
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: Us
  }


  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User extends U {}
  /**
   * Usually contains information about the provider being used
   * and also extends `TokenSet`, which is different tokens returned by OAuth Providers.
   */
  interface Account {}
  /** The OAuth profile returned from your provider */
  interface Profile {}
}



