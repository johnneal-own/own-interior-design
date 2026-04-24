'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ContactModal from '@/components/ContactModal';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');

  const openContact = (subject: string) => {
    setContactSubject(subject);
    setIsContactOpen(true);
  };

  const links = [
    { label: 'HOME', href: '/' },
    { label: 'COMMERCIAL', href: '/commercial' },
    { label: 'RESIDENTIAL', href: '/residential' },
    { label: 'eDesign', href: '/edesign' },
    { label: 'APPROACH', href: '/about' },
    { label: 'JOURNAL', href: '/journal' },
  ];

  return (
    <>
      {/* Floating Action Button - Hollow Ochre Square */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-8 z-[100] w-12 h-12 border-2 border-[#B37038] bg-black/20 backdrop-blur-md hover:bg-[#B37038] transition-colors duration-500 shadow-xl flex items-center justify-center group"
        aria-label="Open Navigation Menu"
      >
        <div className="w-2 h-2 bg-[#B37038] group-hover:bg-white transition-colors"></div>
      </button>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'inset(2rem 2rem calc(100vh - 5rem) calc(100vw - 5rem))' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(2rem 2rem calc(100vh - 5rem) calc(100vw - 5rem))' }}
            transition={{ type: 'tween', ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
            className="fixed inset-0 z-[150] bg-black flex flex-col justify-center items-start p-12 md:px-24 lg:px-40"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 md:top-12 md:right-12 w-12 h-12 border-2 border-white/20 hover:border-[#B37038] bg-transparent text-white flex items-center justify-center transition-all duration-300 group"
            >
              <svg width="18" height="18" viewBox="0 0 14 14" fill="none" stroke="currentColor" className="group-hover:rotate-90 group-hover:text-[#B37038] transition-all duration-500">
                <path d="M1 1L13 13M1 13L13 1" strokeWidth="2"/>
              </svg>
            </button>

            {/* Menu Links */}
            <nav className="flex flex-col text-left space-y-6 md:space-y-10 w-full">
              {links.map((link, i) => (
                <motion.div 
                  key={link.href}
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + (i * 0.1), duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group relative flex items-baseline justify-start gap-4 md:gap-6 transition-colors duration-500 py-2 w-fit overflow-visible"
                  >
                    <span 
                      style={{ fontFamily: 'var(--font-japokki)' }}
                      className="lowercase tracking-normal text-4xl md:text-7xl text-[#B37038]/50 group-hover:text-[#B37038] transition-colors leading-none"
                    >
                      own.
                    </span>
                    <span className="text-4xl md:text-7xl font-light tracking-[0.2em] text-white/50 group-hover:text-white transition-colors leading-none">{link.label}</span>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="pt-16 mt-8 border-t border-white/10 w-full max-w-md"
              >
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#B37038] mb-4">Contact</div>
                <button onClick={() => openContact('General Enquiry')} className="text-sm md:text-base tracking-widest hover:text-[#B37038] transition-colors text-left text-white/50">
                  info@own-id.co.uk
                </button>
              </motion.div>
            </nav>
            
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} defaultSubject={contactSubject} />
    </>
  );
}
