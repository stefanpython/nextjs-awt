import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

interface JWT {
  id: string;
}

interface NextAuth {
  user: {
    id: string;
    email: string;
    name?: string | null;
    image?: string | null;
  };
}

// Extend the default NextAuth User type to include the `id`
declare module "next-auth" {
  interface User {
    id: string;
    name?: string | null;
    email: string;
    image?: string | null;
  }

  interface Session {
    user: {
      id: string;
      name?: string | null;
      email: string;
      image?: string | null;
    };
  }
}
