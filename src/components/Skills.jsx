import React from 'react';

const Skills = () => {
  const skillGroups = {
    Languages: ['Java', 'Python', 'C'],
    'Web & Frameworks': ['HTML', 'CSS', 'Flask'],
    'AR & CV': ['Unity', 'Vuforia', 'ARCore', 'ARKit', 'MediaPipe'],
    Tools: ['Git', 'VS Code', 'MySQL', 'LaTeX'],
    Design: ['Figma', 'Canva', 'Photoshop (Basics)'],
    OS: ['Windows', 'Linux'],
  };

  return (
    <section id="skills" className="px-6 py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {Object.entries(skillGroups).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-2">{category}</h3>
              <ul className="text-gray-300 list-disc list-inside space-y-1">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
