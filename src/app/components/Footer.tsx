import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { Mail } from 'lucide-react';
export const Footer = () => {
  return (
    <div className="flex justify-start items-center w-full px-36">
      <div className="flex-grow flex gap-6 ml-4 grow">
      <p className="text-white">Pranav Gopinath</p>

          <a
            href="https://www.linkedin.com/in/pranav-gopinath-3a4769256/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 transform hover:scale-110"
          >
            <FaLinkedin className="text-lg text-white" />
          </a>
          <a
            href="https://www.github.com/PranavGopinath"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 transform hover:scale-110"
          >
            <FaGithub className="text-lg text-white" />
          </a>
        </div>
        <div className="text-white">
        <a
            href="mailto:p3gopina@uwaterloo.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 transform hover:scale-110"
          >
          <Button size="sm" color="secondary" className="px-2 py-1 border-2 rounded-sm flex flex-row items-center">
          <Mail className="text-sm"/>p3gopina@uwaterloo.ca
          </Button>

        </a>
        </div>
    </div>
  );
};
