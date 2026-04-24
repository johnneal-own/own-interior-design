'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <motion.main 
      className="min-h-screen bg-black text-white overflow-hidden relative"
      // Vertical rise animation for the bio page to differentiate from the horizontal rooms
      initial={{ opacity: 0, y: '50vh' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-50vh' }}
      transition={{ type: 'spring', stiffness: 70, damping: 20, duration: 0.8 }}
    >
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
        <Link href="/" className="group flex items-center gap-3 text-[10px] md:text-sm uppercase tracking-[0.3em] hover:text-[#B37038] transition-colors">
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-300" />
          Back to Main
        </Link>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 max-w-4xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-light uppercase tracking-[0.2em] mb-4 mt-10">
          John <span className="text-[#B37038]">Neal</span>
        </h1>
        <h2 className="text-sm md:text-base tracking-[0.3em] text-white/50 uppercase mb-12">
          Senior Spatial & Interior Designer
        </h2>
        
        <div className="w-full h-[1px] bg-white/10 mb-12"></div>
        
        <p className="max-w-3xl text-white/80 tracking-[0.1em] leading-loose text-sm md:text-base font-light mb-8 text-left">
          I am a concept-led Senior Interior Designer with 20+ years of experience designing spaces across hospitality, F&amp;B, workplace, wellness, retail, and residential sectors. My strength lies in overseeing projects from initial feasibility and space planning straight through to developed design, technical coordination, and site support.
        </p>
        <p className="max-w-3xl text-[#B37038] tracking-[0.1em] leading-loose text-sm md:text-base font-light text-left">
          I am confident in balancing brand, lifestyle, and operational needs, collaborating seamlessly with clients, consultants, landlords, and contractors to deliver buildable designs that feel considered and deeply engaging.
        </p>
      </section>

      {/* Philosophy & Delivery */}
      <section className="py-20 px-6 md:px-12 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-light uppercase tracking-[0.2em] mb-12 text-[#B37038] text-center">Design & Delivery Strengths</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm tracking-widest leading-loose text-white/70">
            <div className="space-y-2 p-6 border border-white/5 hover:border-[#B37038]/50 transition-colors">
              <h3 className="text-white uppercase">Concept Development</h3>
              <p>Creating functional, inspiring concepts with clear spatial direction and cohesive rationale.</p>
            </div>
            <div className="space-y-2 p-6 border border-white/5 hover:border-[#B37038]/50 transition-colors">
              <h3 className="text-white uppercase">Brief & Feasibility</h3>
              <p>Shaping briefs from site insight, testing options early against budget, programme, and operational needs.</p>
            </div>
            <div className="space-y-2 p-6 border border-white/5 hover:border-[#B37038]/50 transition-colors">
              <h3 className="text-white uppercase">Spatial Planning</h3>
              <p>Planning layouts around real movement and user journeys, balancing experience with complete practicality.</p>
            </div>
            <div className="space-y-2 p-6 border border-white/5 hover:border-[#B37038]/50 transition-colors">
              <h3 className="text-white uppercase">Technical Documentation</h3>
              <p>Producing clear drawing packs, schedules, FF&E specifications, and key details built for durability and execution.</p>
            </div>
          </div>
        </div>
      </section>

    </motion.main>
  );
}
