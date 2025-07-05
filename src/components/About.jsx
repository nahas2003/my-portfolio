import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-900">
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm <span className="font-semibold text-white">Muhammed Nahas N</span>, a B.Tech Computer Science student at the College of Engineering Perumon.
          I'm passionate about building meaningful tech solutions, with a strong focus on real-world impact through leadership roles in <span className="font-semibold">NSS, CSI, and BIS</span>.
          My technical interests include web development and augmented reality, and I enjoy combining these with social initiatives like Rudhiram and tech tools like the APJAKTU NSS Report Generator.
        </p>
      </div>
    </section>
  );
};

export default About;
