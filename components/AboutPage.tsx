
import React from 'react';
import { SKILLS } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center mt-20">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4 tracking-tighter">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Tanmay Galav — ECE student at VIT Chennai.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            I build hardware-software systems using Java, Python, MERN, and ESP32.
          </p>
          <p className="text-gray-300 leading-relaxed">
            My focus is on logic, system design, and real-world constraints. I work on IoT, digital systems, and backend-driven applications while strengthening my foundations in data structures and algorithms.
            
          </p>
          <p className="text-blue-300 leading-relaxed mb-4">
            Less noise. More signal.
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
