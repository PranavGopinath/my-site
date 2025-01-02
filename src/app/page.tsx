import {Hero} from "./components/Hero";
import {About} from "./components/About";
import {Projects} from './components/Projects'
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";

export default function Home() {
  return (
    <div className="bg-black relative flex justify-center items-center flex-col overflow-auto px-5">
      <Hero />
      <About />
      <Projects />
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}