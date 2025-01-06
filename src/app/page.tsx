import {Hero} from "./components/Hero";
import {About} from "./components/About";
import {Projects} from './components/Projects'
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";
import { FloatingNav } from "./components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import {Navbar } from "./components/Navbar"
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

export default function Home() {

  return (
    <div className="bg-black relative flex justify-center items-center flex-col overflow-auto px-5">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <ShootingStars />
      <StarsBackground />
      
    </div>
  );
}