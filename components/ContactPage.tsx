import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import XIcon from './icons/XIcon';
import MailIcon from './icons/MailIcon';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Get In Touch
        </h2>

        {/* Copy */}
        <p className="text-gray-400 leading-relaxed mb-10">
          If you want to discuss a project, collaboration, or just exchange ideas
          about systems and technology, feel free to reach out. I read every
          message and reply when it makes sense.
        </p>

        {/* Primary CTA */}
        <a
          href={`mailto:${SOCIAL_LINKS.email}`}
          className="inline-flex items-center gap-3 bg-white text-black
                     font-medium px-6 py-3 rounded-full
                     hover:bg-gray-200 transition-colors duration-300"
        >
          <MailIcon className="w-5 h-5" />
          Say Hello
        </a>

        {/* Divider */}
        <div className="mt-12 mb-6 text-xs uppercase tracking-wider text-gray-600">
          Or find me here
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-7 h-7" />
          </a>

          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-7 h-7" />
          </a>

          {SOCIAL_LINKS.x && (
            <a
              href={SOCIAL_LINKS.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="X"
            >
              <XIcon className="w-7 h-7" />
            </a>
          )}
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
