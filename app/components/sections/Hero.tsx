'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';

// Simple gradient background instead of Three.js to fix scrolling
const SimpleBackground = () => (
  <div className="fixed inset-0 -z-10 pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-primary-900/10 to-dark-900" />
    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-dark-900/80" />
  </div>
);

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <SimpleBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto text-center w-full pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary-500/30"
          >
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium gradient-text">Launching November 2025</span>
          </motion.div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block">Transform Your</span>
            <span className="block mt-2 gradient-text">Digital Landscape</span>
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed"
          >
            We craft cutting-edge digital solutions that drive growth, 
            enhance efficiency, and deliver measurable results for forward-thinking businesses.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
          >
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="default"
              size="lg"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              onClick={() => scrollToSection('services')}
              variant="outline" 
              size="lg"
            >
              Explore Services
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/10"
          >
            {[
              { value: '0+', label: 'Projects Started' },
              { value: '100%', label: 'Client Focus' },
              { value: '3+', label: 'Expert Team' },
              { value: '24/7', label: 'Dedicated Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        onClick={() => scrollToSection('services')}
      >
        <div className="w-6 h-10 border-2 border-primary-500/50 rounded-full flex justify-center hover:border-primary-500 transition-colors">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}