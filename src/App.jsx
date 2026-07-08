import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import BackgroundBlobs from './components/BackgroundBlobs';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { motion } from 'framer-motion';

const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-dark z-50">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      className="w-16 h-16 border-4 border-primary border-t-secondary rounded-full"
    />
  </div>
);

function App() {
  return (
    <div className="relative min-h-screen bg-dark text-white font-inter overflow-x-hidden">
      {/* Background Elements */}
      <BackgroundBlobs />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
