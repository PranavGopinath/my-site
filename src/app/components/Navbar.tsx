"use client";
import {useEffect, useState} from 'react'
import {cn} from '@/lib/utils'

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
          padding: 8px;
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
          background-color: white;
          transition: all 0.3s ease-in-out;
          transform: translateX(-50%);
        }

        .nav-item:hover::after {
          width: 100%;
          left: 0;
          transform: translateX(0%);
        }
      `}</style>
      <div
        className={cn(
          "sticky top-0 z-50 h-16 w-full text-white",
          didScroll
            ? "bg-gradient-to-br from-transparent to-black backdrop-blur transition"
            : "bg-transparent"
        )}
      >
        <div className="w-full max-w-7xl mx-auto h-full flex items-center justify-between px-2 sm:px-4">
          <div className="flex items-center -ml-2">
            <img
              src="../favicon.ico"
              className="h-8 cursor-pointer"
              onClick={() => scrollToSection("home")}
              alt="Logo"
            />
          </div>
          <nav className="flex items-center space-x-4 sm:space-x-6">
            <div className="nav-item">
              <span onClick={() => scrollToSection("about")} className="text-sm sm:text-base">About</span>
            </div>
            <div className="nav-item">
              <span onClick={() => scrollToSection("experience")} className="text-sm sm:text-base">
                Experience
              </span>
            </div>
            <div className="nav-item">
              <span onClick={() => scrollToSection("projects")} className="text-sm sm:text-base">Projects</span>
            </div>
            <div className="nav-item">
              <span onClick={() => scrollToSection("contact")} className="text-sm sm:text-base">Contact</span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
