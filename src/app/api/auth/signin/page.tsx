"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { FaGithub } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const SignInPage = () => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      await signIn("github");
      // Optionally redirect or show a success message
      router.push('/'); // Redirect to homepage or another page
    } catch (err) {
      setError("Failed to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    setLoading(true);
    setError(null);
    try {
      await signOut();
      // Optionally redirect or show a success message
      router.push('/'); // Redirect to homepage or another page
    } catch (err) {
      setError("Failed to sign out. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-black">
      <div className="bg-white p-8 m-12 rounded-lg shadow-lg w-full max-w-sm ring-1 ring-gray-200">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-900">Sign In</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {!session ? (
          <>
            <button
              onClick={handleSignIn}
              disabled={loading || status === "loading"}
              className={`flex items-center bg-gradient-to-r from-green-400 to-blue-500 text-white w-full py-4 rounded-lg shadow hover:from-green-500 hover:to-blue-600 transition duration-300 ${loading || status === "loading" ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <FaGithub className="ml-6 text-xl" />
              {loading || status === "loading" ? 'Signing in...' : 'Sign in with GitHub'}
            </button>
          </>
        ) : (
          <>
            <p className="text-center mb-4 text-gray-700">Signed in as {session.user?.email}</p>
            <button
              onClick={handleSignOut}
              disabled={loading}
              className={`bg-gradient-to-r from-red-500 to-pink-500 text-white w-full py-3 rounded-lg shadow hover:from-red-600 hover:to-pink-600 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Signing out...' : 'Sign out'}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SignInPage;
