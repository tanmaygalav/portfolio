
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import XIcon from './icons/XIcon';
import MailIcon from './icons/MailIcon';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center pt-16">
      <div className="max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Get In Touch</h2>
        <p className="text-gray-300 mb-8 leading-relaxed">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out. I'll do my best to get back to you!
        </p>
        <a 
          href={`mailto:${tanmaygalav@gmail.com}`} 
          className="inline-flex items-center gap-2 bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-300"
        >
          <MailIcon className="w-5 h-5" />
          Say Hello
        </a>
        <div className="mt-12 flex justify-center space-x-6">
          <a href={github.com/Vitiantanmay} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <GithubIcon className="w-8 h-8" />
          </a>
          <a href={linkedin.com/in/vitiantanmay/} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <LinkedinIcon className="w-8 h-8" />
          </a>
{/*           <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <XIcon className="w-8 h-8" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
