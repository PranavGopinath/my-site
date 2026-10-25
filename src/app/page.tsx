"use client"
import {useEffect, useState} from 'react'
import {Hero} from "./components/Hero";
import {About} from "./components/About";
import {Projects} from './components/Projects'
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
      <Navbar />
      <main className="mx-auto w-full max-w-2xl px-4 sm:px-6 flex flex-col relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}