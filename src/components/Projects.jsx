import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-20 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        {/* Project 1 */}
        <div className="mb-10 text-left">
          <h3 className="text-2xl font-semibold">APJAKTU NSS Report Generator</h3>
          <p className="text-gray-300 mt-2">
            A web app to generate NSS activity reports in the official APJAKTU format. Built with Flask and a responsive UI to help student coordinators easily produce university-ready documents.
          </p>
          <div className="mt-4 space-x-4">
            <a href="https://ktu-nss-report-generator.onrender.com" target="_blank" className="text-blue-400 hover:underline">
              Live Demo
            </a>
            <a href="https://github.com/nahas2003/ktu-nss-report-generator-public" target="_blank" className="text-blue-400 hover:underline">
              GitHub
            </a>
          </div>
        </div>

        {/* Project 2 Placeholder */}
        <div className="mb-10 text-left">
          <h3 className="text-2xl font-semibold">[Project 2 Coming Soon]</h3>
          <p className="text-gray-300 mt-2 italic">
            Another exciting project will be added here soon. Stay tuned!
          </p>
        </div>

        {/* Project 3 */}
        <div className="text-left">
          <h3 className="text-2xl font-semibold">Lyrics Website – Pro Mallu Lyrics</h3>
          <p className="text-gray-300 mt-2">
            A simple lyrics blog designed using Blogger, optimized with SEO techniques and layout customization to engage Malayalam music lovers.
          </p>
          <div className="mt-4">
            <a href="https://promallulyrics.blogspot.com" target="_blank" className="text-blue-400 hover:underline">
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
