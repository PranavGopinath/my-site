"use client"
import {useEffect, useState} from 'react'
import {Hero} from "./components/Hero";
import {About} from "./components/About";
import {Projects} from './components/Projects'
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";
import {Navbar } from "./components/Navbar"
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import {Footer } from './components/Footer'
import './components/Loading.css'

export default function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    function handleLoad() {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
    handleLoad()
}, []);
  if (loading){
    return (<div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="loader"></div>
      </div>)

  }
  return (
    <div className="bg-black min-h-screen relative">
      <ShootingStars />
      <StarsBackground />
      <Navbar />
      <div className="flex flex-col items-center relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}