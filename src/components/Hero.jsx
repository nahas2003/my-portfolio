import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 bg-gray-900">
      <div>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Muhammed Nahas N
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto">
          B.Tech Computer Science student | NSS Volunteer Secretary | AR Enthusiast | Tech & Social Impact Leader
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="mailto:muhammednahas2003@gmail.com"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition"
          >
            Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/muhammed-nahas-n"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-semibold transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
