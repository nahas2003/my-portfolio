import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-20 bg-gray-950 text-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="text-gray-300 mb-8">
          Feel free to reach out for collaborations, opportunities, or just a tech chat!
        </p>
        <div className="space-y-4 text-lg">
          <p>
            📧 <a href="mailto:muhammednahas2003@gmail.com" className="text-blue-400 hover:underline">muhammednahas2003@gmail.com</a>
          </p>
          <p>
            🔗 <a href="https://www.linkedin.com/in/muhammed-nahas-n" target="_blank" className="text-blue-400 hover:underline">LinkedIn</a>
          </p>
          <p>
            💻 <a href="https://github.com/nahas2003" target="_blank" className="text-blue-400 hover:underline">GitHub</a>
          </p>
          <p>
            📱 +91 9645547850
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
