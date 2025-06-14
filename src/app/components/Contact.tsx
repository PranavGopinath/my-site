import { Button } from "@nextui-org/react";
import { Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div
      id="contact"
      className="px-4 sm:px-8 md:px-16 lg:px-40 pb-20 sm:pb-32 md:pb-40 pt-32 sm:pt-48 md:pt-60 w-full relative flex flex-col items-start justify-start"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl relative z-20 text-white">
        Looking to Collaborate?
      </h1>
      <div className="pointer-events-auto z-50 mt-4 sm:mt-6 cursor-pointer items-center text-white flex flex-row">
            <Button
        as="a"
        href="mailto:p3gopina@uwaterloo.ca"
        target="_blank"
        rel="noopener noreferrer"
        color="secondary"
          className="border-2 rounded-sm flex flex-row items-center gap-2 hover:border-[#33AFFF] hover:text-[#33AFFF] text-sm sm:text-base px-3 py-2"
      >
        Let&apos;s touch base
          <Send className="ml-1 w-4 h-4 sm:w-5 sm:h-5 hover:text-[#33AFFF]" />
      </Button>
      </div>
    </div>
  );
};
