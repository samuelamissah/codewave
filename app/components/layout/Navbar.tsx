'use client';

import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/#about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Background blur */}
      <div className="absolute inset-0 bg-dark-900/90 backdrop-blur-xl border-b border-white/10" />
      
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 z-50">
            <Code2 className="w-8 h-8 text-primary-500" />
            <span className="text-2xl font-bold">
              Code<span className="gradient-text">Wave</span>
            </span>
            <span className="text-xs bg-primary-500/20 text-primary-300 px-2 py-1 rounded-full">Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.href.startsWith('/#')) {
                const sectionId = item.href.substring(2);
                return (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(sectionId)}
                    className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-sm font-medium hover:underline hover:underline-offset-4"
                  >
                    {item.label}
                  </button>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-sm font-medium hover:underline hover:underline-offset-4"
                >
                  {item.label}
                </Link>
              );
            })}
            <Button asChild variant="default" size="sm">
              <a href="#contact" onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}>
                Schedule Consultation
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden z-50 p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4 border-t border-white/10 mt-2">
                {navItems.map((item) => {
                  if (item.href.startsWith('/#')) {
                    const sectionId = item.href.substring(2);
                    return (
                      <button
                        key={item.label}
                        onClick={() => {
                          setIsOpen(false);
                          setTimeout(() => scrollToSection(sectionId), 100);
                        }}
                        className="block w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-gray-300 hover:text-white"
                      >
                        {item.label}
                      </button>
                    );
                  }
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-gray-300 hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div className="px-4 pt-4">
                  <Button asChild variant="default" className="w-full">
                    <a href="#contact" onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      setTimeout(() => scrollToSection('contact'), 100);
                    }}>
                      Get Started
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}