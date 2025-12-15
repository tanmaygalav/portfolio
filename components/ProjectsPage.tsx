import React from 'react';
import { PROJECTS } from '../constants';

const ProjectsPage: React.FC = () => {
  // Highlighted projects first
  const sortedProjects = [...PROJECTS].sort(
    (a, b) => Number(!!b.highlight) - Number(!!a.highlight)
  );

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight">
          Projects
        </h2>

        {/* Philosophy line */}
        <p className="text-center text-gray-400 mb-14 max-w-2xl mx-auto text-sm">
          A selection of systems I’ve built—spanning hardware, software, and the
          space between.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {sortedProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group rounded-xl p-6 flex flex-col bg-black border transition-all duration-300
                ${
                  project.highlight
                    ? 'border-white/40 hover:border-white hover:-translate-y-2'
                    : 'border-gray-800 hover:border-white/30 hover:-translate-y-1'
                }`}
            >
              {/* Top accent for highlighted projects */}
              {project.highlight && (
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-white/40 to-transparent" />
              )}

              {/* Header */}
              <div className="mb-3 flex items-start justify-between">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-gray-600">
                  {project.type}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Hover hint */}
              <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity mb-4">
                View project →
              </span>

              {/* Tags */}
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
