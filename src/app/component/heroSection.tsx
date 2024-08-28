// app/component/heroSection.tsx

import Link from 'next/link';

const HeroSection = () => {
  return (
    <header className="pt-28 py-20 mb-8 relative animate-gradient-x">
      <div className="max-w-screen-lg mx-auto text-center px-4 sm:px-8 relative z-10">
        <h1 className="text-6xl font-extrabold mb-6 leading-tight drop-shadow-glow">
          Welcome to 
          <span className="block text-6xl text-violet-400 animate-pulse">My Blog Platform</span>
        </h1>
        <p className="text-2xl mb-6 text-stone-300">
          A place where I share insightful thoughts and compelling stories with the world.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/component/about" className="inline-block bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-pink-400 animate-glow">
            Learn More
          </Link>
          <Link href="/component/contact" className="inline-block bg-white text-cyan-700 font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-purple-400">
            Contact Me
          </Link>
        </div>
      </div>
      {/* Decorative Geometric Shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 z-0">
        <div className="w-32 h-32 bg-yellow-500 rounded-full absolute top-10 left-10 animate-bounce"></div>
        <div className="w-24 h-24 bg-rose-500 rounded-full absolute top-20 right-20 animate-ping"></div>
        <div className="w-16 h-16 bg-lime-800 rounded-full absolute bottom-20 left-20 animate-pulse"></div>
      </div>
    </header>
  );
};

export default HeroSection;
