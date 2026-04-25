'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ChevronDown, ChevronUp, Check } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

export default function eDesignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');

  const openContact = (subject: string) => {
    setContactSubject(subject);
    setIsContactOpen(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('edesign-content')?.scrollIntoView({ behavior: 'smooth' });
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: "What exactly is own. eDesign?", a: "A rigidly structured digital interior design service. We provide professional layouts, material coordination, and shopping specifications remotely. Yo[...]
    { q: "Do my measurements need to be exact?", a: "Yes. Because we operate entirely remotely, our CAD layouts are built directly on the accuracy of the measurements you provide via the portal. W[...]
    { q: "How many revisions are included?", a: "Every package encompasses one consolidated round of revisions. This keeps the project moving smoothly and secures aesthetic alignment without endle[...]
    { q: "Does this work for rented properties?", a: "Absolutely. We specify non-permanent, high-impact fixtures alongside curated FF&E that easily elevates your space without risking your deposit[...]
    { q: "Can I use this service for a kitchen or extension remodel?", a: "No. Extensive architectural scopes involving plumbing, major electrical grids, and structural reconfiguration require bes[...]
    { q: "What happens after I purchase?", a: "You will immediately secure your slot in our studio schedule and be redirected to our secure Client Portal. You simply complete your project brief, u[...]
  ];

  return (
    <motion.main 
      className="min-h-screen bg-[#F4EFE6] text-zinc-900 overflow-hidden relative"
      style={{ fontFamily: 'var(--font-montserrat-alt)' }}
      // Dropping in straight downwards to simulate vertical motion
      initial={{ opacity: 0, y: '-100vh' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100vh' }}
      transition={{ type: 'spring', stiffness: 60, damping: 20, duration: 1 }}
    >
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center bg-gradient-to-b from-[#F4EFE6] via-[#F4EFE6]/80 to-transparent">
        <Link href="/" className="group flex items-center gap-3 text-[10px] md:text-sm uppercase tracking-[0.3em] text-zinc-900 hover:text-[#B37038] transition-colors">
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-300" />
          Back to Main
        </Link>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 px-6 md:px-12 flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center group">
          <h1 className="flex justify-center items-baseline gap-3 mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
            <span style={{ fontFamily: 'var(--font-japokki)' }} className="lowercase tracking-normal text-[#B37038] text-4xl md:text-6xl">own.</span>
            <span className="font-light tracking-[0.2em] text-5xl md:text-7xl">eDesign</span>
          </h1>
        
        <h2 className="text-3xl md:text-5xl text-zinc-400 mb-8" style={{ fontFamily: "'WindSong', cursive" }}>
          Own your direction.
        </h2>

        <div className="h-px w-24 bg-[#B37038] mb-8 opacity-50"></div>
        <p className="max-w-2xl text-zinc-500 tracking-[0.1em] leading-loose text-sm md:text-base font-light mb-12">
          The layout logic, material expertise, and aesthetic edge of a high-end UK design studio—accessible for your single-room project. Designed for clients who desire intelligent spatial thi[...]
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <Link 
            href="/edesign/packages"
            className="bg-zinc-900 text-white px-12 py-5 text-[10px] font-bold tracking-[0.3em] hover:bg-[#B37038] transition-all duration-500 shadow-xl inline-block"
          >
            OWN. eDesign PACKAGES
          </Link>
        </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="edesign-content" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold tracking-[0.3em] text-[#B37038] mb-8" style={{ fontFamily: 'var(--font-montserrat)' }}>WHAT IS own. eDesign?</h2>
          <p className="text-base md:text-lg text-zinc-600 font-light leading-relaxed tracking-wide">
            A highly structured, purely digital interior design service. Built exclusively for design-conscious clients ready to actively move forward with a room project. With defined packages, e[...]
          </p>
        </div>
      </section>

      {/* Why Choose own. eDesign */}
      <section className="py-24 px-6 md:px-12 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-2xl md:text-4xl font-light tracking-[0.15em] leading-snug uppercase" style={{ fontFamily: 'var(--font-montserrat)' }}>INTELLIGENT SPATIAL DESIGN,<br /> <span class[...]
            <p className="text-sm text-zinc-500 leading-loose">
              Most online styling services focus merely on cushions and colour. We bring an architectural eye to your home. By mapping precise scale, zoning, and circulation flow, we ensure you h[...]
            </p>
            <ul className="text-xs uppercase tracking-[0.1em] text-zinc-700 space-y-4 pt-4 border-l-2 border-[#B37038] pl-6">
              <li>— Clearer Design Direction</li>
              <li>— Avert Costly Purchasing Mistakes</li>
              <li>— Stronger Structural Empathy</li>
              <li>— UK-Wide Accessibility</li>
            </ul>
          </div>
          <div className="h-[400px] relative overflow-hidden group rounded-lg shadow-lg">
            <Image
              src="/eDesign/eDesign-intelligent-space-planning.jpg"
              alt="eDesign Intelligent Space Planning"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Roadmap - How it Works */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-light uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>THE PROCESS</h2>
          <div className="h-px w-20 bg-[#B37038] mx-auto opacity-50"></div>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Decorative connector line for desktop */}
          <div className="hidden md:block absolute top-[20px] left-[12%] right-[12%] h-px bg-zinc-200 z-0"></div>
          
          {[
            { phase: "01", title: "Select Package", desc: "Compare our digital service tiers and securely purchase your package online to engage the studio." },
            { phase: "02", title: "The Brief", desc: "Instantly unlock the secure client portal. Upload your room photos, dimensions, and vision." },
            { phase: "03", title: "Concepting", desc: "Following a suitability check, our studio begins conceptualising and zoning the space based on your inputs." },
            { phase: "04", title: "Final Issue", desc: "Your comprehensive design pack, visual renders, and clickable shopping lists are delivered." }
          ].map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-[#B37038] text-[10px] font-bold tracking-widest mb-6 shadow-sm">
                {step.phase}
              </div>
              <h4 className="text-sm uppercase tracking-[0.2em] mb-3">{step.title}</h4>
              <p className="text-xs text-zinc-500 leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
          <Link href="/edesign/packages" className="border border-zinc-900 bg-transparent px-10 py-4 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-900 hover:bg-zinc-900 hover:text-wh[...]
            View Pricing &amp; Packages
          </Link>
        </div>
      </section>

      {/* Pre-Purchase Filtering */}
      <section className="py-24 px-6 md:px-12 bg-[#F9F6F0] border-y border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light tracking-[0.2em] mb-8 text-center" style={{ fontFamily: 'var(--font-montserrat)' }}>IS own. eDesign RIGHT FOR YOU?</h2>
          <p className="text-sm text-zinc-600 leading-loose text-center mb-12">
            This digital service is strictly designed for clients who:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-sm text-zinc-800">
            <div className="flex items-start gap-4"><Check size={20} className="text-[#B37038] shrink-0" /> Are ready to move forward and hold a realistic furniture budget (£3,000+ per room).</d[...]
            <div className="flex items-start gap-4"><Check size={20} className="text-[#B37038] shrink-0" /> Are comfortable executing our finished vision themselves or alongside their own trades.[...]
            <div className="flex items-start gap-4"><Check size={20} className="text-[#B37038] shrink-0" /> Can provide accurate dimensions and unedited room photographs.</div>
            <div className="flex items-start gap-4"><Check size={20} className="text-[#B37038] shrink-0" /> Wish to follow a highly-structured digital package without the need for endless open re[...]
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-light uppercase tracking-[0.2em] mb-12 text-center" style={{ fontFamily: 'var(--font-montserrat)' }}>COMMON ENQUIRIES</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-zinc-200 pb-4">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center text-left py-4 hover:text-[#B37038] transition-colors"
                >
                  <span className="text-sm uppercase tracking-widest leading-relaxed pr-8">{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={16} className="text-[#B37038] shrink-0" /> : <ChevronDown size={16} className="text-zinc-400 shrink-0" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-zinc-500 leading-loose pb-6 pt-2">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complex Projects Disclaimer */}
      <section className="py-24 px-6 md:px-12 bg-zinc-950 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-light uppercase tracking-[0.2em] mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>PLANNING AN EXTENSION, KITCHEN, OR LOFT?</h2>
          <p className="text-white/60 tracking-[0.1em] text-sm leading-loose mb-10">
            Complex architectural work requires detailed coordination deeply extending beyond an online package. Standard eDesign packages are unsuitable for projects involving structural replann[...]
          </p>
          <button onClick={() => openContact('Virtual Consultation Enquiry')} className="text-[10px] uppercase tracking-[0.2em] border-b border-[#B37038] text-[#B37038] pb-1 hover:text-white tran[...]
            Enquire about Virtual Consultation
          </button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-12 bg-[#B37038] text-white text-center">
        <h2 className="text-3xl font-light uppercase tracking-[0.2em] mb-10" style={{ fontFamily: 'var(--font-montserrat)' }}>READY TO ARTICULATE YOUR SPACE?</h2>
        <Link 
          href="/edesign/packages"
          className="bg-white text-zinc-900 px-12 py-5 text-[10px] font-bold tracking-[0.3em] hover:bg-zinc-900 hover:text-white transition-all duration-500 shadow-xl inline-block"
        >
          OWN. eDesign PACKAGES
        </Link>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} defaultSubject={contactSubject} />
    </motion.main>
  );
}
