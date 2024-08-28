// app/api/auth/[...nextauth]/authOptions.ts

import GithubProvider from 'next-auth/providers/github';
import { NextAuthOptions } from 'next-auth';

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

if (!githubId || !githubSecret) {
  throw new Error('Missing GitHub OAuth credentials in environment variables.');
}

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin', 
  },
};
