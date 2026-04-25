'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactModal from '@/components/ContactModal';

export default function LandingPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');

  const openContact = (subject: string) => {
    setContactSubject(subject);
    setIsContactOpen(true);
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.main 
      className="relative min-h-screen w-full bg-black"
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <style jsx global>{`
        @keyframes slowReveal {
          0% { clip-path: inset(0 100% 0 0); opacity: 0; transform: translateX(-10px); }
          100% { clip-path: inset(0 0 0 0); opacity: 1; transform: translateX(0); }
        }
        .animate-reveal { animation: slowReveal 3.5s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline preload="auto" className="h-full w-full object-cover opacity-40">
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <div className="mb-10">
             <Image src="/logo-white-clear.png" alt="Own. Interior Design Logo" width={140} height={50} className="w-auto h-auto" priority />
          </div>
          
          <div className="mb-8 overflow-visible">
            <h1 className="text-5xl md:text-7xl text-white animate-reveal" style={{ fontFamily: "'WindSong', cursive", lineHeight: '1.4', padding: '0.2em 0' }}>
              Make it your Own<span className="text-[#B37038]">.</span>
            </h1>
          </div>
          
          <p className="max-w-lg font-sans text-[10px] tracking-[0.4em] uppercase text-white/40 mb-12">
            Nottingham, UK &bull; Est. 2015
          </p>

          <button 
            onClick={scrollToServices}
            className="group border border-white/20 bg-transparent px-10 py-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:bg-white hover:text-black transition-all duration-70[...]
          >
            Explore Services
            <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="relative z-10 bg-black py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <ServiceBox 
              title="COMMERCIAL PROJECTS" 
              desc="Bespoke interiors for retail, hospitality, and office spaces that define your brand identity."
              img="/commercial-interior-design-nottingham.jpg" 
              altText="Commercial interior design Nottingham UK retail workplace hotels bars restaurants hospitality"
              link="/commercial"
            />
            <ServiceBox 
              title="HOME INTERIORS" 
              desc="Full-service residential design, from initial concept sketches to final on-site styling."
              img="/residential-interiors-nottingham-london.png" 
              altText="Residential interior design Nottingham London luxury home styling and renovation"
              link="/residential"
            />
          </div>

          <div className="w-full">
            <ServiceBox 
              title="eDesign SERVICE" 
              desc="Professional interior design delivered digitally. The perfect solution for individual room transformations anywhere in the UK."
              img="/eDesign/eDesign-intelligent-space-planning.jpg"
              altText="Online eDesign services UK virtual interior design for individual rooms"
              isFullWidth
              link="/edesign"
            />
          </div>
        </div>
      </section>

      {/* ABOUT / PHILOSOPHY SECTION */}
      <section className="relative z-10 bg-[#0a0a0a] py-24 px-6 md:px-12 text-center text-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl font-light uppercase tracking-[0.3em] mb-8 text-[#B37038]">
            The Philosophy
          </h2>
          <p className="text-white/70 tracking-[0.1em] leading-loose text-sm md:text-base mb-12">
            Established in 2015, Own. Interior Design has spent a decade proving that spaces should reflect the unique personality and vision of those who occupy them. Operating from our Nottingh[...]
          </p>
          <Link href="/about" className="text-white border border-white/20 px-8 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 mb-12">
            Read About Us
          </Link>
          <Image src="/logo-white-clear.png" alt="Own. Logo Mark" width={80} height={30} className="w-auto h-auto opacity-40" />
        </div>
      </section>
      {/* Selected Insights / Journal Teaser */}
      <section className="relative z-10 bg-[#F9F6F0] py-32 px-6 md:px-12 text-zinc-900 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-6">
            <div>
              <h2 className="text-3xl font-light uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
                THE <span className="text-[#B37038]">JOURNAL</span>
              </h2>
              <p className="text-zinc-500 tracking-[0.1em] text-sm md:text-base font-light max-w-lg">
                A decade of design insights, studio news, and technical deep-dives into our architectural process.
              </p>
            </div>
            <Link href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-zinc-900 pb-1 hover:text-[#B37038] hover:border-[#B37038] transition-colors whitespace-nowra[...]
              View All Entries
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Journal Article 1 */}
            <Link href="/journal/welcome" className="group flex flex-col cursor-pointer">
              <div className="w-full aspect-[4/3] bg-zinc-200 relative overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <Image src="/journal/001_Own. journal/Luolai-cafe-bakery-retail.jpg" alt="Welcome to Own. Interior Design" fill className="object-cover group-hover:scale-105 transition-transform [...]
              </div>
              <div className="text-[10px] text-[#B37038] font-bold uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>Studio News &bull; April 2026</div>
              <h3 className="text-lg md:text-xl font-light tracking-[0.1em] uppercase mb-4 group-hover:text-[#B37038] transition-colors leading-snug" style={{ fontFamily: 'var(--font-montserrat)'[...]
                WELCOME TO OWN. INTERIOR DESIGN
              </h3>
              <p className="text-xs md:text-sm text-zinc-500 leading-loose line-clamp-3">
                10 years of creating spaces that feel personal, considered and genuinely yours. Reflecting on the journey so far and the philosophy behind the studio.
              </p>
            </Link>

            {/* Journal Article 2 */}
            <Link href="#" className="group flex flex-col cursor-pointer mt-0 md:mt-16">
              <div className="w-full aspect-[4/3] bg-zinc-200 relative overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-[10px] tracking-widest uppercase bg-zinc-200 group-hover:scale-105 transition-transform durati[...]
                  [ Image Placeholder ]
                </div>
              </div>
              <div className="text-[10px] text-[#B37038] font-bold uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>Insights &bull; Mar 2021</div>
              <h3 className="text-lg md:text-xl font-light tracking-[0.1em] uppercase mb-4 group-hover:text-[#B37038] transition-colors leading-snug" style={{ fontFamily: 'var(--font-montserrat)'[...]
                THE PSYCHOLOGY OF LIGHT IN RESIDENTIAL DESIGN
              </h3>
              <p className="text-xs md:text-sm text-zinc-500 leading-loose line-clamp-3">
                Why luxury isn't about the furniture you buy, but how the light strikes it. A deep dive into sourcing and placing architectural lighting in period homes.
              </p>
            </Link>

            {/* Journal Article 3 */}
            <Link href="#" className="group flex flex-col cursor-pointer mt-0 md:mt-32">
              <div className="w-full aspect-[4/3] bg-zinc-200 relative overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-[10px] tracking-widest uppercase bg-zinc-200 group-hover:scale-105 transition-transform durati[...]
                  [ Image Placeholder ]
                </div>
              </div>
              <div className="text-[10px] text-[#B37038] font-bold uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>Studio News &bull; Est. 2015</div>
              <h3 className="text-lg md:text-xl font-light tracking-[0.1em] uppercase mb-4 group-hover:text-[#B37038] transition-colors leading-snug" style={{ fontFamily: 'var(--font-montserrat)'[...]
                A DECADE OF DELIVERING INTENTIONAL SPACES
              </h3>
              <p className="text-xs md:text-sm text-zinc-500 leading-loose line-clamp-3">
                Looking back on the genesis of Own. Interior Design, our foundational commercial projects, and the philosophy that continues to drive the studio forward.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* INITIATION ROUTER SECTION */}
      <section className="relative z-10 bg-zinc-950 py-32 px-6 md:px-12 border-t border-zinc-900 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light uppercase tracking-[0.2em] mb-4 text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Begin Your <span className="text-[#B37038]">Project</span>
          </h2>
          <p className="text-white/40 tracking-[0.2em] text-xs font-light max-w-2xl mx-auto mb-20 leading-loose">
            Based in Nottingham, we operate exclusively across bespoke residential and high-end commercial commissions throughout the UK. Choose your path below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Pathway 1 */}
            <div className="border border-white/10 bg-[#0a0a0a] p-10 flex flex-col hover:border-[#B37038] transition-colors duration-500 group">
              <h3 className="text-[#B37038] tracking-[0.2em] font-light uppercase mb-6 text-sm" style={{ fontFamily: 'var(--font-montserrat)' }}>Bespoke Residential</h3>
              <p className="text-white/50 text-xs tracking-wide leading-loose mb-10 flex-grow font-light">
                Full-service interior architecture and design for large-scale luxury residential renovations and new builds across the UK.
              </p>
              <button onClick={() => openContact('Bespoke Residential Consultation')} className="text-white text-[10px] font-bold tracking-[0.2em] uppercase border-b border-white pb-1 w-max group[...]
                Arrange a Consultation
              </button>
            </div>

            {/* Pathway 2 */}
            <div className="border-t-[3px] border-[#B37038] bg-zinc-900 p-10 flex flex-col relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-8 bg-[#B37038] text-white text-[8px] uppercase tracking-widest px-3 py-1 font-bold">Online Service</div>
              <h3 className="text-white tracking-[0.2em] font-light uppercase mb-6 mt-4 text-sm" style={{ fontFamily: 'var(--font-montserrat)' }}>own. eDesign</h3>
              <p className="text-white/50 text-xs tracking-wide leading-loose mb-10 flex-grow font-light">
                The layout logic and aesthetic edge of a high-end UK design studio—accessible completely digitally for your single-room project.
              </p>
              <Link href="/edesign" className="bg-[#B37038] text-center text-white px-8 py-4 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-colors w-f[...]
                Explore Packages
              </Link>
            </div>

            {/* Pathway 3 */}
            <div className="border border-white/10 bg-[#0a0a0a] p-10 flex flex-col hover:border-[#B37038] transition-colors duration-500 group">
              <h3 className="text-[#B37038] tracking-[0.2em] font-light uppercase mb-6 text-sm" style={{ fontFamily: 'var(--font-montserrat)' }}>Commercial</h3>
              <p className="text-white/50 text-xs tracking-wide leading-loose mb-10 flex-grow font-light">
                Retail, Food & Beverage, Hospitality, and Corporate workplace design backed by intense operational strategy.
              </p>
              <button onClick={() => openContact('Commercial Project Enquiry')} className="text-white text-[10px] font-bold tracking-[0.2em] uppercase border-b border-white pb-1 w-max group-hover[...]
                Contact the Studio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 bg-black py-12 px-6 border-t border-white/10 text-center text-white/50 text-[10px] md:text-[11px] uppercase tracking-[0.2em]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <p>&copy; {new Date().getFullYear()} Own. Interior Design. All rights reserved.</p>
          <p>Nottingham, UK</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Pinterest</a>
            <button onClick={() => openContact('General Enquiry')} className="hover:text-white transition-colors duration-300 uppercase tracking-[0.2em]">Email</button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-[8px] md:text-[9px] text-white/30 tracking-widest leading-loose pt-4 border-t border-white/10">
          <p>Own Interior Design Limited is a limited company registered in England and Wales (No 9488159). Registered Address: 30 Clumber Court, Nottingham, NG7 1EE.</p>
        </div>
      </footer>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} defaultSubject={contactSubject} />

      {/* WHATSAPP FLOAT */}
      <a href="https://wa.me/447XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="fixed bottom-10 right-10 z-50 bg-[#25D366] p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] [...]
        <MessageCircle size={28} color="white" />
      </a>
    </motion.main>
  );
}

function ServiceBox({ title, desc, img, altText, isFullWidth = false, link }: { title: string, desc: string, img: string, altText: string, isFullWidth?: boolean, link?: string }) {
  const content = (
    <>
      <Image
        src={img}
        alt={altText}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
      />
      
      <div className="absolute inset-0 bg-black/60 group-hover:bg-[#B37038]/85 transition-colors duration-500" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
        <h2 className="text-white text-2xl font-light tracking-[0.3em] mb-4 transition-all duration-500">
          {title}
        </h2>
        <p className="text-white opacity-0 group-hover:opacity-100 text-[11px] tracking-[0.15em] leading-relaxed max-w-md transition-all duration-700 translate-y-4 group-hover:translate-y-0">
          {desc}
        </p>
        <div className="mt-8 h-[1px] w-0 group-hover:w-24 bg-white/50 transition-all duration-700" />
      </div>
    </>
  );

  const containerClasses = `relative group overflow-hidden bg-zinc-900 ${isFullWidth ? 'h-[400px]' : 'h-[550px]'} transition-all duration-700 block`;

  if (link) {
    return (
      <Link href={link} className={containerClasses}>
        {content}
      </Link>
    );
  }

  return (
    <div className={containerClasses}>
      {content}
    </div>
  );
}
