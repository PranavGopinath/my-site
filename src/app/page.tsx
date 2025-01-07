"use client"
import {useEffect, useState} from 'react'
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
import {Footer } from './components/Footer'
import './components/Loading.css'

export default function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    function handleLoad() {
      setTimeout(() => {
        setLoading(false);  // Delay setting loading to false by 1000ms
      }, 1000);
    }
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
}, []);
  if (loading){
    return (<div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="loader"></div>
      </div>)

  }
  return (
    <div className="bg-black relative flex justify-center items-center flex-col overflow-visible">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <ShootingStars />
      <StarsBackground />
      <Footer /> 
    </div>
  );
}