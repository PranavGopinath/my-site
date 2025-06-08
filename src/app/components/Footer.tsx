import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full px-4 sm:px-8 md:px-16 lg:px-36 py-4 sm:py-6 gap-4 sm:gap-0">
      <div className="flex items-center gap-4 sm:gap-6">
        <p className="text-white text-sm sm:text-base">Pranav Gopinath</p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/pranav-gopinath-3a4769256/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 transform hover:scale-110"
          >
            <FaLinkedin className="text-base sm:text-lg text-white hover:text-[#33AFFF]" />
          </a>
          <a
            href="https://www.github.com/PranavGopinath"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 transform hover:scale-110"
          >
            <FaGithub className="text-base sm:text-lg text-white hover:text-[#33AFFF]" />
          </a>
        </div>
        </div>
        <div className="text-white">
        <a
            href="mailto:p3gopina@uwaterloo.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 transform hover:scale-105"
          >
          <Button 
            size="sm" 
            color="secondary" 
            className="px-2 py-1 border-2 hover:border-[#33AFFF] rounded-sm flex flex-row items-center gap-2 hover:text-[#33AFFF] text-sm sm:text-base"
          >
            <Mail className="text-sm sm:text-base hover:text-[#33AFFF]"/>
            <span className="hidden sm:inline">p3gopina@uwaterloo.ca</span>
            <span className="sm:hidden">Email</span>
          </Button>
        </a>
        </div>
    </div>
  );
};
