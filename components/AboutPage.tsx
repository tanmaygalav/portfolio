import React from 'react';
import { SKILLS } from '../constants';

const levelStyles: Record<string, string> = {
  Advanced: 'border-white/40',
  Intermediate: 'border-gray-600',
  Beginner: 'border-gray-800',
};

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* LEFT — ABOUT */}
        <div className="flex flex-col justify-center max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            I’m Tanmay Galav, an Electronics and Communication Engineering student
            at VIT Chennai who builds systems that span hardware and software.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            My work ranges from full-stack web applications to embedded and
            digital systems using Java, Python, ESP32, and modern web
            technologies.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            I care deeply about logic, system design, and real-world constraints.
            I prefer understanding how things work end-to-end over shipping
            surface-level features.
          </p>

          <span className="text-sm text-blue-400 tracking-wide">
            Less noise. More signal.
          </span>
        </div>

        {/* RIGHT — SKILLS */}
        <div>
          <h3 className="text-3xl font-bold mb-10 tracking-tight text-white">
            Skills
          </h3>

          <div className="grid grid-cols-2 gap-5">
            {SKILLS.map((skill, index) => (
              <div
                key={index}
                className={`
                  rounded-xl p-4 transition-all duration-300
                  hover:-translate-y-1 hover:border-white/50
                  ${levelStyles[skill.level] ?? 'border-gray-800'}
                  ${
                    skill.level === 'Advanced'
                      ? 'bg-black/80'
                      : 'bg-black/60'
                  }
                  border
                `}
              >
                <h4 className="font-medium mb-1 text-white">
                  {skill.name}
                </h4>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  {skill.level}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
