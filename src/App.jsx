
import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Section1,Section2 } from './compoents/Home';
import {Section3} from './compoents/Section3';
import {StartTrading} from './compoents/StartTrading';
function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ["Home", "Markets", "Features", "Start Trading"];

  const handleScroll = (e) => {
    const scrollPosition = e.target.scrollTop;
    const sectionHeight = window.innerHeight;
    const newSection = Math.round(scrollPosition / sectionHeight);
    setCurrentSection(newSection);
  };

  const scrollToSection = (index) => {
    const sectionHeight = window.innerHeight;
    document.querySelector('.scroll-container').scrollTo({
      top: index * sectionHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen">
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm text-white flex justify-between items-center px-4 py-4">
        <div className="text-xl font-bold">TradingView</div>
        
        <ul className="hidden md:flex space-x-6">
          {sections.map((section, index) => (
            <li
              key={index}
              onClick={() => scrollToSection(index)}
              className={`cursor-pointer transition-colors duration-300 hover:text-blue-400 ${
                currentSection === index ? "text-blue-500" : "text-gray-300"
              }`}
            >
              {section}
            </li>
          ))}
        </ul>

        <div className="md:hidden relative group">
          <button className="p-2">
            <div className="space-y-2">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
          
          <ul className="absolute right-0 top-full mt-2 py-2 w-48 bg-black/90 backdrop-blur-sm rounded-lg hidden group-hover:block">
            {sections.map((section, index) => (
              <li
                key={index}
                onClick={() => scrollToSection(index)}
                className={`px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-blue-500/20 ${
                  currentSection === index ? "text-blue-500" : "text-gray-300"
                }`}
              >
                {section}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="scroll-container h-screen overflow-y-scroll snap-y snap-mandatory" onScroll={handleScroll}>
        <section className="h-screen snap-start">
          <Section1 />
        </section>
        
        <section className="h-screen snap-start">
          <Section2 />
        </section>
        
        <section className="h-screen snap-start flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
        
          <Section3/>
        </section>
        
        <section className="h-screen snap-start flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
          {/* <h2 className="text-4xl text-white font-bold">Start Trading</h2> */}
          <StartTrading />
        </section>
      </div>
    </div>
  );
}

export default App

