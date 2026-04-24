'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ContactModal from '@/components/ContactModal';

export default function ResidentialPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');

  const openContact = (subject: string) => {
    setContactSubject(subject);
    setIsContactOpen(true);
  };

  return (
    <motion.main 
      className="min-h-screen bg-[#F9F6F0] text-zinc-900 overflow-hidden relative"
      style={{ fontFamily: 'var(--font-montserrat-alt)' }}
      // This creates the "walking right into a room" effect (coming from the right)
      initial={{ opacity: 0, x: '100vw' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100vw' }}
      transition={{ type: 'spring', stiffness: 70, damping: 20, duration: 0.8 }}
    >
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center bg-gradient-to-b from-[#F9F6F0] to-transparent">
        <Link href="/" className="group flex items-center gap-3 text-[10px] md:text-sm uppercase tracking-[0.3em] text-zinc-900 hover:text-[#B37038] transition-colors">
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-300" />
          Back to Main
        </Link>
        <Image src="/logo-black-clear.png" alt="Own. Logo" width={80} height={30} className="w-auto h-auto opacity-70" />
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="flex items-baseline justify-center mb-8 mt-10" style={{ fontFamily: 'var(--font-montserrat)' }}>
          <span style={{ fontFamily: 'var(--font-japokki)' }} className="lowercase tracking-normal mr-3 text-[#B37038] text-4xl md:text-6xl">own.</span>
          <span className="font-light uppercase tracking-[0.2em] text-5xl md:text-7xl">Home</span>
        </h1>
        <p className="max-w-3xl text-zinc-600 tracking-[0.1em] leading-loose text-sm md:text-base font-light mb-6">
          Based in Nottingham, Own. Interior Design specialises in aspirational residential projects, working hand-in-hand with clients to create homes that reflect their unique personalities and lifestyles.
        </p>
        <p className="max-w-3xl text-[#B37038] tracking-[0.1em] leading-loose text-sm md:text-base font-light">
          Personal Service. Value for Money. Always on Time. High Quality.
        </p>
      </section>

      {/* Philosophy / Process Section */}
      <section className="py-24 px-6 md:px-12 bg-white border-y border-zinc-200 text-center">
        <h2 className="text-2xl font-light uppercase tracking-[0.2em] mb-16 text-[#B37038]" style={{ fontFamily: 'var(--font-montserrat)' }}>Our Process</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4 p-8">
            <h3 className="text-xl tracking-[0.2em] uppercase font-light">Define</h3>
            <p className="text-sm tracking-widest leading-loose text-zinc-500"><span className="font-semibold text-[#B37038]">Establishing the brief:</span> Setting the budget, and programme while mapping out exactly what you want your home to be.</p>
          </div>
          <div className="space-y-4 p-8 border-y md:border-y-0 md:border-x border-zinc-200">
            <h3 className="text-xl tracking-[0.2em] uppercase font-light">Develop</h3>
            <p className="text-sm tracking-widest leading-loose text-zinc-500"><span className="font-semibold text-[#B37038]">Iterative Creativity:</span> Blending aesthetics and practicality through concept development.</p>
          </div>
          <div className="space-y-4 p-8">
            <h3 className="text-xl tracking-[0.2em] uppercase font-light">Deliver</h3>
            <p className="text-sm tracking-widest leading-loose text-zinc-500"><span className="font-semibold text-[#B37038]">Responsive Solutions:</span> Continuous feedback loops guarantee your input is flawlessly executed into reality.</p>
          </div>
        </div>
      </section>

      {/* Residential Services Breakdown */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-zinc-200 text-center">
        <h2 className="text-3xl font-light uppercase tracking-[0.2em] mb-16" style={{ fontFamily: 'var(--font-montserrat)' }}>Home <span className="text-[#B37038]">Services</span></h2>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 text-xs md:text-sm tracking-[0.2em] text-zinc-600 uppercase">
          {[
            "Interior Design", "Architectural Design", "Home Extensions", 
            "Internal Remodelling", "Kitchen Refurbishments", "Bathroom Refurbishments",
            "Children's Bedrooms & Playrooms", "Bespoke Joinery", 
            "Home office", "Loft / Garage Conversions", "Wellness Spaces", 
            "Lighting Design", "Project Management"
          ].map((service, i) => (
            <div key={i} className="py-3 px-6 border border-zinc-200 hover:border-[#B37038] hover:text-zinc-900 transition-colors rounded-full cursor-default bg-zinc-50">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-32 px-6 md:px-12 bg-zinc-50 border-t border-zinc-200 relative overflow-hidden">
        {/* Subtle decorative background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#B37038] to-transparent opacity-30"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 relative z-10">
          
          {/* Testimonial 1 */}
          <div className="text-center relative">
            <div className="text-[5rem] md:text-[8rem] text-[#B37038] opacity-10 font-serif absolute -top-12 md:-top-20 left-1/2 -translate-x-1/2 leading-none user-select-none">"</div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#B37038] mb-12 relative z-10">
              Home Renovation &amp; Living Room — 20 April 2020
            </div>
            <p className="text-base md:text-lg text-zinc-800 font-light leading-loose tracking-wide mb-12 relative z-10 italic">
              "Own Interior Design was professional and produced what we asked them for, meeting the brief perfectly. John was very helpful and competent when liaising with the builders and suppliers to choose the materials and keep the budget. It's been a pleasure to work with and I highly recommend Own Interior Design."
            </p>
            <div className="flex flex-col items-center justify-center space-y-2 relative z-10">
              <h4 className="text-zinc-900 tracking-[0.2em] uppercase text-sm md:text-base">Ruslan Cusnir</h4>
              <span className="text-zinc-500 text-[10px] tracking-[0.2em] uppercase">R&amp;D Radiochemist at CHUV | Lausanne university hospital</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="text-center relative">
            <div className="text-[5rem] md:text-[8rem] text-[#B37038] opacity-10 font-serif absolute -top-12 md:-top-20 left-1/2 -translate-x-1/2 leading-none user-select-none">"</div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#B37038] mb-12 relative z-10">
              Residential Design — 13 May 2020
            </div>
            <p className="text-base md:text-lg text-zinc-800 font-light leading-loose tracking-wide mb-12 relative z-10 italic">
              "Own Interior Design were very professional from the outset. John, the designer, set up a design meeting to talk through the timescale, design opportunities and site constraints. His expertise in the field meant he brought a lot of fresh ideas to the project and the knowhow to deliver the technical elements of the design. We are delighted with the final designs."
            </p>
            <div className="flex flex-col items-center justify-center space-y-2 relative z-10">
              <h4 className="text-zinc-900 tracking-[0.2em] uppercase text-sm md:text-base">Julia</h4>
              <span className="text-zinc-500 text-[10px] tracking-[0.2em] uppercase">Private Residential Client</span>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Projects Outline - Focus on Imagery */}
      <section className="py-20 px-6 md:px-12 bg-[#F9F6F0]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-light uppercase tracking-[0.2em] mb-8" style={{ fontFamily: 'var(--font-montserrat)' }}>Selected <span className="text-[#B37038]">Residential Works</span></h2>
          <p className="text-zinc-500 tracking-[0.1em] text-sm mb-16">
            Explore Crosslands Meadow and our portfolio of bespoke home transformations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[600px]">
            {/* Main Hero Shot */}
            <div className="md:col-span-8 bg-zinc-200 h-full relative overflow-hidden group">
              <video 
                src="/residential/crosslands-hero.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900/40 group-hover:bg-black/0 transition-colors duration-700 pointer-events-none">
                <span className="text-white uppercase tracking-widest text-xs font-bold mb-2 tracking-[0.4em] drop-shadow-md">Crosslands Meadow</span>
                <span className="text-[#B37038] uppercase tracking-[0.2em] text-[10px] drop-shadow-md">Residential Interior Remodelling</span>
              </div>
            </div>
            
            {/* Secondary Shots */}
            <div className="md:col-span-4 flex flex-col gap-4 h-full">
              <div className="flex-1 bg-zinc-200 relative overflow-hidden group">
                <Image 
                  src="/residential/crosslands-home-moodboard-interior.jpg"
                  alt="Crosslands Moodboard"
                  fill
                  className="object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 bg-zinc-200 relative overflow-hidden group">
                <Image 
                  src="/residential/crosslands-home-extension-nottingham.png"
                  alt="Crosslands Extension"
                  fill
                  className="object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          
        </div>
      </section>
      {/* Final Residential CTA */}
      <section className="py-32 px-6 md:px-12 bg-zinc-900 border-t border-zinc-200 text-white text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-[0.1em] mb-8" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Elevate Your <br/><span className="text-[#B37038]">Residential Space</span>
          </h2>
          <p className="text-white/80 tracking-widest text-sm md:text-base leading-loose max-w-2xl mx-auto mb-12 font-light">
            From comprehensive architectural renovations to meticulous interior detailing. Discuss your bespoke residential commission with our lead design team.
          </p>
          <button onClick={() => openContact('Bespoke Residential Consultation')} className="inline-block bg-white text-zinc-900 px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#B37038] hover:text-white transition-all duration-500 shadow-xl">
            ARRANGE A CONSULTATION
          </button>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} defaultSubject={contactSubject} />

    </motion.main>
  );
}
