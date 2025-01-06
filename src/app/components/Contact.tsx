import Link from "next/link"
import Button from "next/button"
export const Contact = () => {
    return (
      <div id="contact" className="px-40 pb-40 pt-20 w-full relative flex flex-col items-start justify-start">
        <h1 className="text-4xl relative z-20 text-white">Looking to Collaborate?</h1>
        <Link href="mailto:p3gopina@uwaterloo.ca" passHref>
              <Button className="mt-6">Let's touch base</Button>
            </Link>
      </div>
      
    );
  };