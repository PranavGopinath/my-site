"use client";
import {useEffect, useState} from 'react'
import {cn} from '@/lib/utils'
import Image from 'next/image'

export const Navbar = () => {
  const [didScroll, setDidScroll] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      setDidScroll(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToSection(sect: string): void {
    if (sect === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }
    const section = document.getElementById(sect);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <style jsx>{`
        .nav-item {
          position: relative;
          padding: 6px 2px;
          cursor: pointer;
        }

        .nav-item span {
          position: relative;
          z-index: 1;
        }

        .nav-item::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: #10b981;
          transition: all 0.3s ease-in-out;
          transform: translateX(-50%);
        }

        .nav-item:hover::after {
          width: 100%;
          left: 0;
          transform: translateX(0%);
        }
      `}</style>
      <div className="sticky top-0 z-50 h-16 w-full text-white">
        <div
          className={cn(
            "w-full max-w-2xl mx-auto h-full flex items-center justify-between px-4 sm:px-6 border-b transition-colors duration-300",
            didScroll
              ? "bg-black/75 backdrop-blur-md border-neutral-800"
              : "bg-transparent border-transparent"
          )}
        >
          <div className="flex items-center">
            <Image
              src="/favicon.ico"
              width={32}
              height={32}
              className="h-6 w-6 cursor-pointer"
              onClick={() => scrollToSection("home")}
              alt="Logo"
            />
          </div>
          <nav className="flex items-center gap-2.5 sm:gap-6">
            <div className="nav-item">
              <span onClick={() => scrollToSection("about")} className="text-sm">About</span>
            </div>
            <div className="nav-item">
              <span onClick={() => scrollToSection("experience")} className="text-sm">
                Experience
              </span>
            </div>
            <div className="nav-item">
              <span onClick={() => scrollToSection("projects")} className="text-sm">Projects</span>
            </div>
            <div className="nav-item">
              <span onClick={() => scrollToSection("contact")} className="text-sm">Contact</span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
