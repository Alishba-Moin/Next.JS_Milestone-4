// app/component/about/page.tsx

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-3xl mx-auto p-8 bg-white border border-teal-600 rounded-lg shadow-lg mt-24">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">About Us</h1>
        <p className="text-xl text-gray-700 mb-6">
          Welcome to our blog platform! We are passionate about sharing insightful thoughts and compelling stories with the world. Our mission is to provide a space where readers can discover engaging content and authors can express their creativity.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
        <p className="text-lg text-gray-600 mb-6">
          Founded with a vision to create a dynamic and engaging blogging platform, we strive to connect readers and writers through high-quality content. Our team is dedicated to continuously improving and expanding our platform to offer a seamless and enjoyable user experience.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Connect with Us</h2>
        <div className="flex justify-center gap-4 mb-6">
          <Link href="https://github.com/Alishba-Moin" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition">
            <FaGithub className="w-8 h-8" />
          </Link>
          <Link href="https://www.linkedin.com/in/alishba-moin/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition">
            <FaLinkedin className="w-8 h-8" />
          </Link>
        </div>
        <div className="text-center">
          <Link href="/" className="inline-block bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-teal-700 transition">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
