import { Button } from "@nextui-org/react";
import { Send } from 'lucide-react';
export const Contact = () => {
  return (
    <div
      id="contact"
      className="px-40 pb-40 pt-60 w-full relative flex flex-col items-start justify-start"
    >
      <h1 className="text-4xl relative z-20 text-white">
        Looking to Collaborate?
      </h1>
      <div className="pointer-events-auto z-50 mt-6 cursor-pointer items-center text-white flex flex-row">
            <Button
        as="a"
        href="mailto:p3gopina@uwaterloo.ca"
        target="_blank"
        rel="noopener noreferrer"
        color="secondary"
        className="border-2 rounded-sm flex flex-row items-center hover:border-[#33AFFF] hover:text-[#33AFFF]"
      >
        Let&apos;s touch base
        <Send className="ml-2 hover:text-[#33AFFF]" />
      </Button>

      </div>
      
    </div>
  );
};
