'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ContactModal from '@/components/ContactModal';

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);
  
  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-[600px] bg-zinc-950 overflow-hidden group border border-white/10 shadow-2xl">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image src={images[index]} alt="Commercial Design Portfolio" fill className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105" />
        </motion.div>
      </AnimatePresence>
      
      {images.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
          <button onClick={prevImage} className="bg-black/60 p-4 hover:bg-black hover:text-[#B37038] transition-colors backdrop-blur-md text-white shadow-xl ml-4 border border-white/10">
            <ArrowLeft size={20} />
          </button>
          <button onClick={nextImage} className="bg-black/60 p-4 hover:bg-black hover:text-[#B37038] transition-colors backdrop-blur-md text-white shadow-xl mr-4 border border-white/10">
            <ArrowRight size={20} />
          </button>
        </div>
      )}
      
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {images.map((_, i) => (
            <div key={i} className={`w-8 h-px transition-colors duration-300 ${i === index ? 'bg-[#B37038] h-[2px]' : 'bg-white/30'}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function CommercialPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');

  const openContact = (subject: string) => {
    setContactSubject(subject);
    setIsContactOpen(true);
  };

  return (
    <motion.main 
      className="min-h-screen bg-black text-white overflow-hidden relative"
      // Sliding in from the left to simulate a physical turn into a different wing of the studio
      initial={{ opacity: 0, x: '-100vw' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100vw' }}
      transition={{ type: 'spring', stiffness: 70, damping: 20, duration: 0.8 }}
    >
      {/* Navigation Header */}
      <header className="absolute top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center bg-gradient-to-b from-black to-transparent">
        <Link href="/" className="group flex items-center gap-3 text-[10px] md:text-sm tracking-[0.3em] text-white hover:text-[#B37038] transition-colors uppercase font-bold">
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-300" />
          HOME
        </Link>
        <Image src="/logo-white-clear.png" alt="Own. Logo" width={80} height={30} className="w-auto h-auto opacity-70" />
      </header>

      {/* Hero Video Header */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-black border-b border-white/10">
        <video 
          src="/commercial/RETAIL/fitout-Retail-boutique-cosmetics-Hero-carousel.mov" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent" />
        
        <div className="relative z-20 max-w-5xl mt-20 drop-shadow-2xl">
          <h1 className="flex justify-center items-center gap-4 mb-8 drop-shadow-lg" style={{ fontFamily: 'var(--font-montserrat)' }}>
            <span style={{ fontFamily: 'var(--font-japokki)' }} className="lowercase tracking-normal text-[#B37038] text-[40px] md:text-[64px] leading-none -translate-y-1">own.</span>
            <span className="text-white font-light tracking-[0.2em] text-4xl md:text-7xl leading-none uppercase">COMMERCIAL</span>
          </h1>
          <p className="max-w-3xl mx-auto text-white tracking-[0.1em] leading-loose text-sm md:text-base font-medium mb-6 drop-shadow-md">
            Own. Interior Design is a Nottingham-based design studio specialising in commercial design and brand environments for Retail, Leisure, Food &amp; Beverage, and Corporate Sectors. We work hand-in-hand with clients from inception to implementation; empowering individual identity and a true sense of ownership.
          </p>
          <p className="max-w-3xl mx-auto text-[#B37038] tracking-[0.1em] leading-loose text-sm md:text-base font-bold drop-shadow-md">
            With extensive experience in design and project implementation, we work collaboratively to ensure every project is resourced properly with unparalleled expertise and control.
          </p>
        </div>
      </section>

      {/* SECTOR: RETAIL */}
      <section className="py-32 px-6 md:px-12 bg-zinc-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 space-y-8">
            <div className="text-[10px] tracking-[0.3em] text-[#B37038] uppercase font-bold" style={{ fontFamily: 'var(--font-montserrat)' }}>Sector 01</div>
            <h2 className="text-3xl lg:text-5xl font-light uppercase tracking-[0.15em] leading-tight text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Retail <br/><span className="text-white/40">Environments</span>
            </h2>
            <p className="text-white/60 text-sm leading-loose tracking-wide font-light">
              We translate brand identity into physical, three-dimensional experiences. From global flagship roll-outs to boutique pop-ups, our retail spaces are meticulously engineered to command attention, guide the customer journey intuitively, and drive measurable commercial success.
            </p>
            <div className="pt-4 flex flex-wrap gap-3 uppercase text-[10px] tracking-widest text-[#B37038] font-bold">
              <span>Boutiques</span> &bull; <span>Flagships</span> &bull; <span>Showrooms</span> &bull; <span>Pop-ups</span>
            </div>
          </div>
          <div className="md:col-span-7 h-[600px]">
            <ImageCarousel images={[
              "/commercial/RETAIL/Flagship-Westfield-Retail-Design-London-Hero-carousel.jpeg",
              "/commercial/RETAIL/Salon-popup-Retail-interior-concept-rollout-carousel.png",
              "/commercial/RETAIL/supermarket-retail-concept-Leicester-carousel.png",
              "/commercial/RETAIL/Retail Projects/NOVA Beauty final.png"
            ]} />
          </div>
        </div>
      </section>

      {/* SECTOR: FOOD & BEVERAGE */}
      <section className="py-32 px-6 md:px-12 bg-zinc-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 order-2 md:order-1 h-[600px]">
            <ImageCarousel images={[
              "/commercial/FOOD & BEVERAGE/Cafe-Interior-Design-Nottingham-carousel.png",
              "/commercial/FOOD & BEVERAGE/Bar-Restaurant-London-Interior-carousel.png",
              "/commercial/FOOD & BEVERAGE/Coffeeshop-Interior-Design-Nottinghamshire-carousel.JPG",
              "/commercial/FOOD & BEVERAGE/Frameworks-coffee-kiosk-hero-carousel.jpg"
            ]} />
          </div>
          <div className="md:col-span-5 space-y-8 order-1 md:order-2 md:pl-12">
            <div className="text-[10px] tracking-[0.3em] text-[#B37038] uppercase font-bold" style={{ fontFamily: 'var(--font-montserrat)' }}>Sector 02</div>
            <h2 className="text-3xl lg:text-5xl font-light uppercase tracking-[0.15em] leading-tight text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Food &amp; <br/><span className="text-white/40">Beverage</span>
            </h2>
            <p className="text-white/60 text-sm leading-loose tracking-wide font-light">
              A successful hospitality space is terrifyingly precise behind the scenes. We bridge the gap between highly emotive, atmospheric dining environments and the rigorous operational mechanics essential for an efficient, profitable service flow.
            </p>
            <div className="pt-4 flex flex-wrap gap-3 uppercase text-[10px] tracking-widest text-[#B37038] font-bold">
              <span>Restaurants</span> &bull; <span>Bars</span> &bull; <span>Cafes</span> &bull; <span>Kiosks</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTOR: LEISURE & HOSPITALITY */}
      <section className="py-32 px-6 md:px-12 bg-black border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 space-y-8">
            <div className="text-[10px] tracking-[0.3em] text-[#B37038] uppercase font-bold" style={{ fontFamily: 'var(--font-montserrat)' }}>Sector 03</div>
            <h2 className="text-3xl lg:text-5xl font-light uppercase tracking-[0.15em] leading-tight text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Leisure &amp; <br/><span className="text-white/40">Hospitality</span>
            </h2>
            <p className="text-white/60 text-sm leading-loose tracking-wide font-light">
              Designing spaces of escape and rejuvenation. We create luxury wellness centers, spas, and hotel environments that prioritize holistic sensory experiences. Our material choices, acoustic engineering, and ambient lighting strategies work collectively to immediately down-regulate the nervous system upon arrival.
            </p>
            <div className="pt-4 flex flex-wrap gap-3 uppercase text-[10px] tracking-widest text-[#B37038] font-bold">
              <span>Hotels</span> &bull; <span>Spas</span> &bull; <span>Wellness Centres</span> &bull; <span>Members Clubs</span>
            </div>
          </div>
          <div className="md:col-span-7 h-[600px]">
             <ImageCarousel images={[
               "/commercial/LEISURE & HOSPITALITY/Hospitality-Wellness-hotel-spa-Birmingham-carousel.png",
               "/commercial/LEISURE & HOSPITALITY/Hospitality-lobby-lounge-hotel-carousel.png",
               "/commercial/LEISURE & HOSPITALITY/Hospitality-wellness-interior-health-concept.png",
               "/commercial/LEISURE & HOSPITALITY/beauty-salon-boutique-interior-designers-carousel.png"
             ]} />
          </div>
        </div>
      </section>

      {/* SECTOR: WORKPLACE */}
      <section className="py-32 px-6 md:px-12 bg-zinc-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 order-2 md:order-1 h-[600px]">
            <ImageCarousel images={[
              "/commercial/WORKPLACE/workplace-office-corporate-interior-carousel.jpg",
              "/commercial/WORKPLACE/workplace-fitout-interior-Derby-carousel.png",
              "/commercial/WORKPLACE/workplace-wellbeing-lobby-interior-carousel.png",
              "/commercial/WORKPLACE/Space-planning-layout-plans-workplace-carousel.png"
            ]} />
          </div>
          <div className="md:col-span-5 space-y-8 order-1 md:order-2 md:pl-12">
            <div className="text-[10px] tracking-[0.3em] text-[#B37038] uppercase font-bold" style={{ fontFamily: 'var(--font-montserrat)' }}>Sector 04</div>
            <h2 className="text-3xl lg:text-5xl font-light uppercase tracking-[0.15em] leading-tight text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Modern <br/><span className="text-white/40">Workplace</span>
            </h2>
            <p className="text-white/60 text-sm leading-loose tracking-wide font-light">
              The office is no longer just a place of mandatory occupation; it is a destination for collaboration. We engineer highly functional, visually stunning corporate environments and wellbeing lobbies that attract top-tier talent and actively reinforce overarching corporate culture.
            </p>
            <div className="pt-4 flex flex-wrap gap-3 uppercase text-[10px] tracking-widest text-[#B37038] font-bold">
              <span>Corporate HQs</span> &bull; <span>Agile Workspaces</span> &bull; <span>Wellbeing Lobbies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services Blueprint */}
      <section className="py-24 px-6 md:px-12 bg-zinc-900 border-b border-white/5 text-center">
        <h2 className="text-2xl font-light uppercase tracking-[0.2em] mb-16 text-[#B37038]" style={{ fontFamily: 'var(--font-montserrat)' }}>Core Capabilities</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4 p-8">
            <h3 className="text-xl tracking-[0.2em] uppercase font-light text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>Spatial Analytics</h3>
            <p className="text-sm tracking-widest leading-loose text-white/50 font-light">Rigorous space-planning, circulation flow mapping, and operational capacity evaluations ensuring commercial viability.</p>
          </div>
          <div className="space-y-4 p-8 border-y md:border-y-0 md:border-x border-white/10">
            <h3 className="text-xl tracking-[0.2em] uppercase font-light text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>Tender &amp; Detail</h3>
            <p className="text-sm tracking-widest leading-loose text-white/50 font-light">Comprehensive technical drawing packages and meticulous contractor specifications ready for strict tender processes.</p>
          </div>
          <div className="space-y-4 p-8">
            <h3 className="text-xl tracking-[0.2em] uppercase font-light text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>Brand Translation</h3>
            <p className="text-sm tracking-widest leading-loose text-white/50 font-light">Converting 2D brand collateral and corporate identity into immersive, tactile 3D architectural environments.</p>
          </div>
        </div>
      </section>

      {/* Legacy Client Testimonial Grid */}
      <section className="py-32 px-6 md:px-12 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-3xl font-light uppercase tracking-[0.2em] mb-4 text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>Global <span className="text-[#B37038]">Pedigree</span></h2>
            <div className="h-px w-20 bg-[#B37038] mx-auto opacity-50"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 relative">
            {/* Testimonial 1 */}
            <div className="text-center relative">
              <div className="text-[5rem] md:text-[8rem] text-white/5 font-serif absolute -top-12 md:-top-20 left-1/2 -translate-x-1/2 leading-none user-select-none">"</div>
              <h3 className="text-[#B37038] uppercase tracking-[0.2em] mb-2 font-light text-xl" style={{ fontFamily: 'var(--font-montserrat)' }}>Links of London</h3>
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-8 relative z-10">
                Hong Kong &amp; Edinburgh — 2017
              </div>
              <p className="text-sm md:text-base text-white/70 font-light leading-loose tracking-wide mb-12 relative z-10 italic">
                "Own. Interior Design were chosen to provide store design for luxury jewellery brand, Links of London to work on new store locations in Hong Kong and Edinburgh. John Neal is an experienced professional designer, easy to work with and attentive. He offered creative ideas but always with a practical and commercial viewpoint."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="text-center relative">
              <div className="text-[5rem] md:text-[8rem] text-white/5 font-serif absolute -top-12 md:-top-20 left-1/2 -translate-x-1/2 leading-none user-select-none">"</div>
              <h3 className="text-[#B37038] uppercase tracking-[0.2em] mb-2 font-light text-xl" style={{ fontFamily: 'var(--font-montserrat)' }}>Links of London HQ</h3>
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-8 relative z-10">
                London — 2016
              </div>
              <p className="text-sm md:text-base text-white/70 font-light leading-loose tracking-wide mb-12 relative z-10 italic">
                "I had the privilege of working with John when he joined us at Links of London as a consultant for an extended period. John was great to work alongside and very experienced in his field, always bringing fresh ideas to the table and quick to find solutions to problems we were faced with. A great all-rounder within the retail store design industry."
              </p>
              <div className="flex flex-col items-center justify-center space-y-2 relative z-10 mt-auto">
                <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-bold">Senior Project Manager</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Commercial CTA */}
      <section className="py-32 px-6 md:px-12 bg-[#B37038] text-white text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-[0.1em] mb-8" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Elevate Your <br/>Commercial Space
          </h2>
          <p className="text-white/80 tracking-widest text-sm md:text-base leading-loose max-w-2xl mx-auto mb-12">
            Every environment we design is rooted in operational strategy and brand intelligence. Discuss your upcoming fit-out, rollout, or bespoke commercial project with our team.
          </p>
          <button onClick={() => openContact('Commercial Project Enquiry')} className="inline-block border border-white px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-[#B37038] transition-colors duration-500 shadow-xl">
            INITIATE A PROJECT
          </button>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} defaultSubject={contactSubject} />

    </motion.main>
  );
}
