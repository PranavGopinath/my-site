import {Hero} from "./components/Hero";

export default function Home() {
  return (
    <div className="bg-black-100 relative flex justify-center items-center flex-col overflow-auto px-5">
      <Hero />
    </div>
  );
}