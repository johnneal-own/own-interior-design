'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Check, X } from 'lucide-react';

export default function eDesignPackagesPage() {
  return (
    <motion.main 
      className="min-h-screen bg-white text-zinc-900 overflow-x-hidden relative"
      initial={{ opacity: 0, x: '100vw' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100vw' }}
      transition={{ type: 'spring', stiffness: 60, damping: 20, duration: 1 }}
    >
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center bg-white/90 backdrop-blur-sm border-b border-zinc-100">
        <Link href="/edesign" className="group flex items-center gap-3 text-[10px] md:text-sm tracking-[0.3em] text-zinc-900 hover:text-[#B37038] transition-colors">
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-300" />
          BACK TO eDesign
        </Link>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-4xl mx-auto text-center" style={{ fontFamily: 'var(--font-montserrat-alt)' }}>
        <h1 className="mb-6 flex justify-center items-center gap-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
          <span style={{ fontFamily: 'var(--font-japokki)' }} className="lowercase text-[#B37038] tracking-normal text-[32px] md:text-[46px] leading-none -translate-y-1">own.</span>
          <span className="font-light tracking-[0.2em] text-3xl md:text-5xl leading-none">PACKAGES</span>
        </h1>
        <p className="text-zinc-500 tracking-[0.1em] leading-loose text-sm font-light">
          Compare our digital service tiers and securely purchase your package to initiate your project brief.
        </p>
      </section>

      {/* Package Comparison Table */}
      <section className="pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          
          {/* TIER 1 */}
          <div className="flex flex-col border border-zinc-200 bg-[#F9F6F0] hover:-translate-y-2 hover:shadow-2xl hover:border-[#B37038]/30 transition-all duration-500 group">
            <div className="p-8 border-b border-zinc-200 group-hover:bg-white transition-colors duration-500">
              <h3 className="text-xl font-light uppercase tracking-[0.2em] text-[#B37038] mb-2 text-center md:text-left">own. Direction</h3>
              <p className="text-xs text-zinc-600 leading-relaxed mb-6 h-12 text-center md:text-left">
                Essential styling clarity and layout confidence before you start buying furniture.
              </p>
              <div className="text-3xl font-light text-center md:text-left">£295 <span className="text-xs text-zinc-400">/ room</span></div>
              <div className="text-[10px] uppercase tracking-[0.1em] text-zinc-400 mt-2 text-center md:text-left">Min. FF&amp;E Budget: £3,000+</div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <ul className="space-y-4 text-xs tracking-wide text-zinc-800 flex-grow mb-12">
                <li className="flex items-start gap-3"><Check size={14} className="text-[#B37038] mt-0.5 shrink-0" /> Onboarding Questionnaire</li>
                <li className="flex items-start gap-3"><Check size={14} className="text-[#B37038] mt-0.5 shrink-0" /> 2 Concept Directions</li>
                <li className="flex items-start gap-3"><Check size={14} className="text-[#B37038] mt-0.5 shrink-0" /> 1-2 Layout Options</li>
                <li className="flex items-start gap-3"><Check size={14} className="text-[#B37038] mt-0.5 shrink-0" /> Mood &amp; Material Board</li>
                <li className="flex items-start gap-3"><Check size={14} className="text-[#B37038] mt-0.5 shrink-0" /> 1 Revision Round</li>
                <li className="flex items-start gap-3"><Check size={14} className="text-[#B37038] mt-0.5 shrink-0" /> Final Concept Presentation</li>
                <li className="flex items-start gap-3 text-zinc-400"><X size={14} className="mt-0.5 opacity-50 shrink-0" /> 3D Visuals</li>
                <li className="flex items-start gap-3 text-zinc-400"><X size={14} className="mt-0.5 opacity-50 shrink-0" /> Clickable Shopping List</li>
              </ul>
              <button 
                onClick={() => alert("Redirects to Stripe Checkout £295")}
                className="w-full border border-zinc-300 py-4 text-[10px] uppercase font-bold tracking-[0.2em] hover:border-zinc-900 transition-colors"
              >
                Purchase Direction
              </button>
            </div>
          </div>

          {/* TIER 2 - Core */}
          <div className="flex flex-col border-2 border-[#B37038] bg-white relative hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#B37038]/10 transition-all duration-500 group z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#B37038] text-white text-[9px] uppercase tracking-[0.3em] px-4 py-1 shadow-lg">Most Recommended</div>
            <div className="p-8 border-b border-zinc-100 group-hover:bg-[#F9F6F0]/30 transition-colors duration-500">
              <h3 className="text-xl font-light uppercase tracking-[0.2em] text-[#B37038] mb-2 text-center md:text-left">own. Design Pack</h3>
              <p className="text-xs text-zinc-600 leading-relaxed mb-6 h-12 text-center md:text-left">
                A fully detailed design package including visuals and a curated shopping list.
              </p>
              <div className="text-3xl font-light text-center md:text-left">£595 <span className="text-xs text-zinc-400">/ room</span></div>
              <div className="text-[10px] uppercase tracking-[0.1em] text-zinc-400 mt-2 text-center md:text-left">Min. FF&amp;E Budget: £5,000+</div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <ul className="space-y-4 text-xs tracking-wide text-zinc-800 flex-grow mb-12">
                <li className="flex items-start gap-3 font-medium"><Check size={14} className="text-[#B37038] mt-0.5 shrink-0" /> Everything in Direction</li>
                <li className="flex items-start gap-3"><Check size={14} className="text-[#B37038] mt-0.5 shrink-0" /> Developed Concept</li>
                <li className="flex items-start gap-3"><Check size={14} className="text-[#B37038] mt-0.5 shrink-0" /> Scaled CAD Furniture Plan</li>
                <li className="flex items-start gap-3"><Check size={14} className="text-[#B37038] mt-0.5 shrink-0" /> Computer Generated Visuals</li>
                <li className="flex items-start gap-3"><Check size={14} className="text-[#B37038] mt-0.5 shrink-0" /> FF&amp;E Shopping List (with links)</li>
                <li className="flex items-start gap-3"><Check size={14} className="text-[#B37038] mt-0.5 shrink-0" /> Final Room Presentation</li>
                <li className="flex items-start gap-3"><Check size={14} className="text-[#B37038] mt-0.5 shrink-0" /> 2 Weeks Post-Design Email Support</li>
              </ul>
              <button 
                onClick={() => alert("Redirects to Stripe Checkout £595")}
                className="w-full bg-[#B37038] text-white py-4 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-zinc-900 transition-colors"
              >
                Purchase Design Pack
              </button>
            </div>
          </div>

          {/* TIER 3 */}
          <div className="flex flex-col border border-zinc-200 bg-[#F9F6F0] hover:-translate-y-2 hover:shadow-2xl hover:border-[#B37038]/30 transition-all duration-500 group">
            <div className="p-8 border-b border-zinc-200 group-hover:bg-white transition-colors duration-500">
              <h3 className="text-xl font-light uppercase tracking-[0.2em] text-[#B37038] mb-2 text-center md:text-left">own. Design + Detail</h3>
              <p className="text-xs text-zinc-600 leading-relaxed mb-6 h-12 text-center md:text-left">
                For ambitious spaces requiring technical drawings and tradesman intent.
              </p>
              <div className="text-3xl font-light text-center md:text-left">£895 <span className="text-xs text-zinc-400">/ room</span></div>
              <div className="text-[10px] uppercase tracking-[0.1em] text-zinc-400 mt-2 text-center md:text-left">Min. FF&amp;E Budget: £10,000+</div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <ul className="space-y-4 text-xs tracking-wide text-zinc-800 flex-grow mb-12">
                <li className="flex items-start gap-3 font-medium"><Check size={14} className="text-[#B37038] mt-0.5 shrink-0" /> Everything in Design Pack</li>
                <li className="flex items-start gap-3"><Check size={14} className="text-[#B37038] mt-0.5 shrink-0" /> Lighting &amp; Electrical Layout</li>
                <li className="flex items-start gap-3"><Check size={14} className="text-[#B37038] mt-0.5 shrink-0" /> Key Architectural Elevations</li>
                <li className="flex items-start gap-3"><Check size={14} className="text-[#B37038] mt-0.5 shrink-0" /> Technical Design Intent</li>
                <li className="flex items-start gap-3"><Check size={14} className="text-[#B37038] mt-0.5 shrink-0" /> Final Specification Pack</li>
                <li className="flex items-start gap-3"><Check size={14} className="text-[#B37038] mt-0.5 shrink-0" /> Optional Joinery Intent Guides</li>
              </ul>
              <button 
                onClick={() => alert("Redirects to Stripe Checkout £895")}
                className="w-full border border-zinc-300 py-4 text-[10px] uppercase font-bold tracking-[0.2em] hover:border-zinc-900 transition-colors"
              >
                Purchase Design + Detail
              </button>
            </div>
          </div>

        </div>

        {/* Suitability & Legal Notes */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-6 font-bold">Important Information</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-zinc-500 text-left leading-loose">
            <div>
              <strong>Room Size Assumptions</strong><br />
              All packages are quoted based on standard single-function residential rooms up to 20 sqm. Significant multi-functional spaces (e.g., entirely open-plan kitchen/living/dining zones) fall outside this base structure and may require bespoke uplift quoting upon brief review.
            </div>
            <div>
              <strong>Scope Review &amp; Onboarding</strong><br />
              Immediately upon purchase, you will be directed to our secure Client Portal to complete your formal onboarding brief. Our studio reviews all briefs within 48 hours to confirm structural suitability. If your project falls outside operational scope, a full refund is immediately issued.
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
