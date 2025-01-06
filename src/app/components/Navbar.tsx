"use client";
export const Navbar = () => {
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
          padding: 10px;
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
      <div className="bg-transparent text-white top-0 z-50 h-20 w-screen important sticky flex flex-row items-center justify-center">
        <div className="flex grow-0 w-1/12 justify-center">
          <img
            src="../favicon.ico"
            className="h-10"
            onClick={() => scrollToSection("home")}
          ></img>
        </div>
        <div className="flex flex-row grow items-center justify-evenly">
          <div className="nav-item">
            <span onClick={() => scrollToSection("about")}>About</span>
          </div>
          <div className="nav-item">
            <span onClick={() => scrollToSection("experience")}>
              Experience
            </span>
          </div>
          <div className="nav-item">
            <span onClick={() => scrollToSection("projects")}>Projects</span>
          </div>
          <div className="nav-item">
            <span onClick={() => scrollToSection("contact")}>Contact</span>
          </div>
        </div>
      </div>
    </>
  );
};
