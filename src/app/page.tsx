import {Hero} from "./components/Hero";
import {About} from "./components/About";


export default function Home() {
  return (
    <div className="bg-black relative flex justify-center items-center flex-col overflow-auto px-5">
      <Hero />
      <About />
    </div>
  );
}