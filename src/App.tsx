import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { GitHub } from './components/GitHub';
import { Leetcode } from './components/Leetcode';
// import { Badges } from './components/Badges';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useLoading } from './hooks/useLoading';
import { CustomCursor } from "./components/ui/CustomCursor";
import { ScrollToTop } from "./components/ui/ScrollToTop";

function App() {
  const isLoading = useLoading();

  return (
    <>
      <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-opacity duration-500`}>
        <CustomCursor />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects /> 
        <Education />      
        <Certifications />
        <GitHub />
        {/* <Leetcode /> */}
        {/* <Badges /> */}   
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;