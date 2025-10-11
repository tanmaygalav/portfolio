
import React from 'react';
import { SKILLS } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4 tracking-tighter">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            I am Tanmay Galav, a passionate and driven Bachelor of Technology student at VIT Chennai, specializing in Electronics and Communication Engineering. My curiosity extends beyond my core curriculum into the dynamic world of software development.
          </p>
          <p className="text-gray-300 leading-relaxed">
            With a strong foundation in the MERN stack, Java, and Python, I enjoy building robust and scalable applications. I'm constantly exploring new technologies and sharpening my problem-solving skills through Data Structures and Algorithms. I thrive in collaborative environments and am always eager to take on new challenges.
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-6 tracking-tighter">My Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {SKILLS.map((skill, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 p-4 rounded-lg hover:border-white/50 transition-all duration-300">
                <h4 className="font-semibold text-white">{skill.name}</h4>
                <p className="text-sm text-gray-400">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
