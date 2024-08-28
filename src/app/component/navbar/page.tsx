"use client"
// app/component/navbar/page.tsx

import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSignIn = () => {
    setLoading(true);
    signIn("github").finally(() => setLoading(false));
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <nav className="bg-gradient-to-r from-teal-600 to-stone-500 p-4 fixed w-full top-0 left-0 shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">
            Home
          </Link>
          <Link href="/posts" className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">
            Posts
          </Link>
          <Link href="/component/about" className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">
            About
          </Link>
          <Link href="/component/contact" className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">
            Contact
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-teal-600 to-stone-500 py-4">
            <Link href="/" className="block text-white text-lg font-semibold hover:text-gray-200 transition duration-300 px-6 py-2">
              Home
            </Link>
            <Link href="/posts" className="block text-white text-lg font-semibold hover:text-gray-200 transition duration-300 px-6 py-2">
              Posts
            </Link>
            <Link href="/component/about" className="block text-white text-lg font-semibold hover:text-gray-200 transition duration-300 px-6 py-2">
              About
            </Link>
            <Link href="/component/contact" className="block text-white text-lg font-semibold hover:text-gray-200 transition duration-300 px-6 py-2">
              Contact
            </Link>
          </div>
        )}

        {/* Authentication */}
        <div>
          {!session ? (
            <Link href="/api/auth/signin" passHref>
              <button
                onClick={handleSignIn}
                disabled={loading}
                className={`flex items-center bg-gray-800 text-white px-6 py-2 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <FaGithub className="w-5 h-5 mr-2" />
                {loading ? "Signing in..." : "Sign in with GitHub"}
              </button>
            </Link>
          ) : (
            <button
              onClick={handleSignOut}
              className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition duration-300"
            >
              Sign out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

