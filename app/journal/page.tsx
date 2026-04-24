'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function JournalIndexPage() {
  return (
    <motion.main 
      className="min-h-screen bg-[#F9F6F0] text-zinc-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center bg-gradient-to-b from-[#F9F6F0] to-transparent">
        <Link href="/" className="group flex items-center gap-3 text-[10px] md:text-sm tracking-[0.3em] font-bold uppercase hover:text-[#B37038] transition-colors">
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-300" />
          HOME
        </Link>
        <Image src="/logo-white-clear.png" alt="Own. Logo" width={80} height={30} className="w-auto h-auto opacity-30 invert" />
      </header>

      {/* Hero */}
      <section className="pt-48 pb-24 px-6 text-center max-w-4xl mx-auto">
        <h1 className="flex justify-center items-center gap-4 text-4xl md:text-6xl font-light tracking-[0.2em] mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
          <span style={{ fontFamily: 'var(--font-japokki)' }} className="lowercase tracking-normal text-[#B37038] text-[40px] md:text-[64px] leading-none -translate-y-1">own.</span>
          <span className="uppercase text-zinc-900">JOURNAL</span>
        </h1>
        <p className="text-zinc-500 tracking-widest leading-loose font-light">
          A decade of design insights, studio news, and technical deep-dives into our architectural process.
        </p>
      </section>

      {/* Article Grid */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Post 1 */}
          <Link href="/journal/welcome" className="group flex flex-col cursor-pointer">
            <div className="w-full aspect-[4/5] relative overflow-hidden mb-6 bg-zinc-200">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />
              <Image 
                src="/journal/001_Own. journal/Luolai-cafe-bakery-retail.jpg" 
                alt="10 Years of Own. Interior Design" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="text-[10px] text-[#B37038] font-bold uppercase tracking-[0.2em] mb-4">Studio News &bull; Est. 2015</div>
            <h3 className="text-xl md:text-2xl font-light tracking-[0.1em] uppercase mb-4 group-hover:text-[#B37038] transition-colors leading-snug" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Welcome to Own. Interior Design
            </h3>
            <p className="text-xs md:text-sm text-zinc-500 leading-loose line-clamp-3">
              10 years of creating spaces that feel personal, considered and genuinely yours. Reflecting on the journey so far and the philosophy that drives the studio.
            </p>
          </Link>

        </div>
      </section>

    </motion.main>
  );
}
