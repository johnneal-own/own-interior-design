'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function JournalWelcomeRibbon() {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateScrollRange = () => {
      if (scrollRef.current) {
        setScrollRange(scrollRef.current.scrollWidth - window.innerWidth);
      }
    };
    
    updateScrollRange();
    
    const observer = new ResizeObserver(updateScrollRange);
    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }
    
    window.addEventListener('resize', updateScrollRange);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateScrollRange);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: targetRef });
  
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const ribbonX = useTransform(springScroll, [0, 1], [0, -scrollRange]);

  return (
    <main className="bg-[#F9F6F0] text-zinc-900 selection:bg-[#B37038] selection:text-white">
      
      {/* Back Button */}
      <Link href="/journal" className="fixed top-10 left-10 z-[100] group flex items-center gap-3 text-[10px] tracking-[0.3em] font-bold uppercase transition-opacity hover:opacity-50 text-zinc-500 mix-blend-difference">
        <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-300" /> Back
      </Link>

      {/* Scrolling Container */}
      <section ref={targetRef} className="relative h-[1500vh] bg-[#F9F6F0]">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          
          {/* MAIN RIBBON */}
          <motion.div 
            ref={scrollRef} 
            style={{ x: ribbonX }} 
            className="flex h-[70vh] w-max items-center gap-0 relative z-10 shadow-2xl"
          >
            
            {/* Panel 1: Title Block (Charcoal) */}
            <div className="w-[125vh] h-[70vh] shrink-0 bg-zinc-900 p-12 md:p-16 flex flex-col justify-center items-center text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#B37038] mb-12">Own. Journal</p>
                    <h1 className="text-4xl md:text-5xl font-light mb-8 text-[#F9F6F0] leading-snug tracking-wider" style={{ fontFamily: 'var(--font-montserrat)' }}>
                        Welcome to <br /> Own. Interior Design
                    </h1>
                    <p className="text-base md:text-lg font-light text-zinc-400 mb-16 tracking-widest leading-relaxed max-w-sm">
                        10 years of creating spaces that feel personal, considered and genuinely yours.
                    </p>
                    <div className="w-12 h-[1px] bg-zinc-700 mb-12" />
                    <div className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-bold">
                        By John Neal &bull; April 2026 &bull; 5 min read
                    </div>
                </motion.div>
            </div>

            {/* Panel 2: Intro / Standfirst */}
            <div className="w-[70vh] h-[70vh] shrink-0 bg-[#F9F6F0] p-12 md:p-16 flex flex-col justify-center text-sm md:text-base leading-[2.2] tracking-wide font-light border-r border-zinc-200">
                <p>After 10 years of running Own. Interior Design, and with the launch of our new website, it felt like the right time to begin Own. Journal. Through it, we want to share more about the interior design projects we get involved in, emerging design trends, and industry insight.</p>
                <br/>
                <p>It also felt like the right moment to properly introduce our design studio and share a little more about what sits behind the name.</p>
            </div>

            {/* Panel 3: Hero Image (Luolai) - 16:9 */}
            <div className="w-[125vh] h-[70vh] shrink-0 relative bg-zinc-200 overflow-hidden group">
                <motion.div className="w-full h-full relative" whileHover={{ scale: 1.05 }} transition={{ duration: 2, ease: "easeOut" }}>
                    <Image src="/journal/001_Own. journal/Luolai-cafe-bakery-retail.jpg" alt="Hero Project" fill className="object-cover" />
                </motion.div>
            </div>

            {/* Panel 4: Pull Quote (Blush Background) */}
            <div className="w-[70vh] h-[70vh] shrink-0 bg-[#F4EBE6] p-12 md:p-16 flex flex-col justify-center items-center text-center">
                <p className="text-3xl md:text-4xl text-[#B37038] tracking-widest leading-relaxed italic px-8" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    "The best interiors come from really listening."
                </p>
            </div>

            {/* Panel 5: Section One */}
            <div className="w-[70vh] h-[70vh] shrink-0 bg-[#EFECE5] p-12 md:p-16 flex flex-col justify-center text-sm md:text-base leading-[2.2] tracking-wide font-light border-l border-zinc-200">
                <h2 className="mb-8 text-sm md:text-base text-zinc-900 tracking-[0.2em] uppercase font-medium" style={{ fontFamily: 'var(--font-montserrat)' }}>A studio built around personal design</h2>
                <p>Own. Interior Design was built on the belief that good design should feel personal. It should look beautiful, but more importantly, it should feel right for the people using the space. It should support how they live, work, and move. It needs purpose, personality and identity.</p>
                <br/>
                <p>Over the last decade, I've worked across commercial and residential interiors on projects connected by this same approach. Whether designing for a brand or a private client, my focus is always on thoughtful, functional spaces.</p>
            </div>

            {/* L-Living Image (Moved from between Commercial and Residential) - 16:9 */}
            <div className="w-[125vh] h-[70vh] shrink-0 relative bg-zinc-200 overflow-hidden group border-l border-zinc-200">
                <motion.div className="w-full h-full relative" whileHover={{ scale: 1.05 }} transition={{ duration: 2, ease: "easeOut" }}>
                    <Image src="/journal/001_Own. journal/L-Living-Home-Retail-lifestyle-china.png" alt="L-Living Space" fill className="object-cover" />
                </motion.div>
            </div>

            {/* Panel 6: Section Two */}
            <div className="w-[70vh] h-[70vh] shrink-0 bg-white p-12 md:p-16 flex flex-col justify-center text-sm md:text-base leading-[2.2] tracking-wide font-light border-l border-zinc-200">
                <h2 className="mb-8 text-sm md:text-base text-zinc-900 tracking-[0.2em] uppercase font-medium" style={{ fontFamily: 'var(--font-montserrat)' }}>Designing around people</h2>
                <p>That way of working is at the heart of Own. It has never been about pushing a set style or trying to leave the same visual stamp on every project.</p>
                <br/>
                <p>For me, the best interiors come from understanding how a client wants to live or how they want their business to be experienced, and then shaping the design around that. Every project should have its own identity. That is what makes it authentic.</p>
            </div>

            {/* Panel 7: Links of London Text */}
            <div className="w-[70vh] h-[70vh] shrink-0 bg-[#0a0a0a] text-zinc-300 p-12 md:p-16 flex flex-col justify-center text-sm md:text-base leading-[2.2] tracking-wide font-light">
                <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-[#B37038]">Commercial Authority</p>
                <h2 className="mb-8 text-sm md:text-base text-white tracking-[0.2em] uppercase font-medium" style={{ fontFamily: 'var(--font-montserrat)' }}>Links of London</h2>
                <p>On the commercial side, I've worked with recognised brands including Links of London, where the design process needed to balance brand expression, customer experience and attention to detail within a premium retail setting.</p>
                <br/>
                <p>Experiences like that have helped shape a strong understanding of how interiors can do much more than look good. They can influence perception, tell a story and support the success of a business.</p>
            </div>

            {/* Panel 8: Links of London Image - 16:9 */}
            <div className="w-[125vh] h-[70vh] shrink-0 relative bg-zinc-900 overflow-hidden group border-l border-zinc-800">
                <motion.div className="w-full h-full relative" whileHover={{ scale: 1.05 }} transition={{ duration: 2, ease: "easeOut" }}>
                    <Image src="/journal/001_Own. journal/LOL_Westfield_223.jpg" alt="Links of London" fill className="object-cover" />
                </motion.div>
            </div>


            {/* Panel 10: Crosslands Meadows Text */}
            <div className="w-[70vh] h-[70vh] shrink-0 bg-[#F9F6F0] p-12 md:p-16 flex flex-col justify-center text-sm md:text-base leading-[2.2] tracking-wide font-light">
                <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-[#B37038]">Residential Sensibility</p>
                <h2 className="mb-8 text-sm md:text-base text-zinc-900 tracking-[0.2em] uppercase font-medium" style={{ fontFamily: 'var(--font-montserrat)' }}>Crosslands Meadows</h2>
                <p>On the residential side, projects such as Crosslands Meadows represent something equally important to me. Home projects are often more personal, and rightly so.</p>
                <br/>
                <p>They are not just about finishes or layouts. They are about how someone wants to live, what makes them comfortable, what reflects their taste, and what helps a space feel like home. Those details matter, and deserve to be handled with care.</p>
            </div>

            {/* Panel 11: Crosslands Meadows Image (Firefly) - 16:9 */}
            <div className="w-[125vh] h-[70vh] shrink-0 relative bg-zinc-200 overflow-hidden group border-l border-zinc-200">
                <motion.div className="w-full h-full relative" whileHover={{ scale: 1.05 }} transition={{ duration: 2, ease: "easeOut" }}>
                    <Image src="/journal/001_Own. journal/Firefly_Gemini Flash_zoom out a little bit, switch the shutters to the middle 1st floor window to the left 28886.png" alt="Crosslands Meadows Rear Elevation" fill className="object-cover" />
                </motion.div>
            </div>

            {/* Panel 12: Brand Message */}
            <div className="w-[70vh] h-[70vh] shrink-0 bg-[#EFECE5] p-12 md:p-16 flex flex-col justify-center text-sm md:text-base leading-[2.2] tracking-wide font-light border-l border-zinc-200">
                <h2 className="mb-8 text-sm md:text-base text-zinc-900 tracking-[0.2em] uppercase font-medium" style={{ fontFamily: 'var(--font-montserrat)' }}>What “Make it your own” means</h2>
                <p>That thinking is also where the phrase “Make it your own” comes from. It really sums up how I approach design. Every client comes with something different. Sometimes a clear vision, sometimes just a feeling.</p>
                <br/>
                <p>The aim is never to create something generic, or purely trend-driven. It is to create something with character, relevance and longevity. A space that reflects the client’s personality and needs. Somewhere they can genuinely connect with and feel proud of.</p>
            </div>

            {/* Panel 12.5: Kitchen Image (Between Brand Message and Values) - 16:9 */}
            <div className="w-[125vh] h-[70vh] shrink-0 relative bg-zinc-200 overflow-hidden group border-l border-zinc-200">
                <motion.div className="w-full h-full relative" whileHover={{ scale: 1.05 }} transition={{ duration: 2, ease: "easeOut" }}>
                    <Image src="/journal/001_Own. journal/home-kitchen-refurbishment-island-next 125.png" alt="Kitchen Space" fill className="object-cover" />
                </motion.div>
            </div>

            {/* Panel 13: Values Block */}
            <div className="w-[70vh] h-[70vh] shrink-0 bg-white p-12 md:p-16 flex flex-col justify-center border-l border-zinc-200">
                <p className="mb-10 text-[10px] font-bold uppercase tracking-[0.4em] text-[#B37038]">The values behind Own.</p>
                <div className="grid grid-cols-2 gap-y-10 gap-x-6 mb-10">
                    <div>
                        <h3 className="text-xs tracking-[0.2em] uppercase mb-2 text-zinc-900 font-medium" style={{ fontFamily: 'var(--font-montserrat)' }}>Imagination</h3>
                        <p className="text-xs font-light text-zinc-500 leading-relaxed pr-2">Creative thinking with purpose</p>
                    </div>
                    <div>
                        <h3 className="text-xs tracking-[0.2em] uppercase mb-2 text-zinc-900 font-medium" style={{ fontFamily: 'var(--font-montserrat)' }}>Passion</h3>
                        <p className="text-xs font-light text-zinc-500 leading-relaxed pr-2">A real care for detail and outcome</p>
                    </div>
                    <div>
                        <h3 className="text-xs tracking-[0.2em] uppercase mb-2 text-zinc-900 font-medium" style={{ fontFamily: 'var(--font-montserrat)' }}>Integrity</h3>
                        <p className="text-xs font-light text-zinc-500 leading-relaxed pr-2">Honest advice and clear communication</p>
                    </div>
                    <div>
                        <h3 className="text-xs tracking-[0.2em] uppercase mb-2 text-zinc-900 font-medium" style={{ fontFamily: 'var(--font-montserrat)' }}>Collaboration</h3>
                        <p className="text-xs font-light text-zinc-500 leading-relaxed pr-2">Working closely with clients throughout</p>
                    </div>
                </div>
                <p className="text-xs md:text-sm leading-[2] tracking-wide font-light text-zinc-600">
                    These values are at the core of everything we do, alongside honest communication and a genuine belief that good design should improve the experience of a space, not simply decorate it.
                </p>
            </div>

            {/* Panel 14: Looking Ahead */}
            <div className="w-[70vh] h-[70vh] shrink-0 bg-[#F9F6F0] p-12 md:p-16 flex flex-col justify-center text-sm md:text-base leading-[2.2] tracking-wide font-light border-l border-zinc-200">
                <h2 className="mb-8 text-sm md:text-base tracking-[0.2em] uppercase text-zinc-900 font-medium" style={{ fontFamily: 'var(--font-montserrat)' }}>Looking ahead</h2>
                <p>Ten years in, I’m proud of what Own. Interior Design has built so far, and excited about what comes next.</p>
                <br/>
                <p>This first blog post felt like the right place to say hello properly, reflect on the journey so far, and begin sharing more of the projects, ideas and thinking behind the studio.</p>
            </div>

            {/* Panel 15: Moodboard Image - 16:9 */}
            <div className="w-[125vh] h-[70vh] shrink-0 relative bg-zinc-200 overflow-hidden group border-l border-zinc-200">
                <motion.div className="w-full h-full relative" whileHover={{ scale: 1.05 }} transition={{ duration: 2, ease: "easeOut" }}>
                    <Image src="/journal/001_Own. journal/home-furniture-texture-material-moodboard.jpg" alt="Material and Texture Moodboard" fill className="object-cover" />
                </motion.div>
            </div>

            {/* Panel 16: Final Sign-off */}
            <div className="w-[70vh] h-[70vh] shrink-0 flex flex-col justify-center items-center text-center bg-white p-12 md:p-16 border-l border-zinc-200">
                 <p className="text-sm md:text-base font-light tracking-wide text-zinc-600 mb-12 leading-[2]">
                    Because in the end, the most successful interiors are not just visually resolved.
                 </p>
                 <p className="text-lg md:text-xl font-light tracking-widest text-zinc-900 mb-4 uppercase" style={{ fontFamily: 'var(--font-montserrat)' }}>They feel personal.</p>
                 <p className="text-lg md:text-xl font-light tracking-widest text-zinc-900 mb-4 uppercase" style={{ fontFamily: 'var(--font-montserrat)' }}>They feel considered.</p>
                 <p className="text-lg md:text-xl font-light tracking-widest text-zinc-900 mb-16 uppercase" style={{ fontFamily: 'var(--font-montserrat)' }}>They feel like they belong.</p>

                 <p className="text-5xl md:text-[64px] text-zinc-900 leading-none" style={{ fontFamily: "'WindSong', cursive" }}>
                   They feel like your own.
                 </p>
            </div>

            {/* Panel 17: End Call to Action */}
            <div className="w-[70vh] h-[70vh] shrink-0 flex flex-col justify-center items-center text-center bg-[#E8E6E1] p-12 md:p-16">
                 <h2 className="text-base tracking-[0.3em] font-light mb-8 uppercase text-zinc-900" style={{ fontFamily: 'var(--font-montserrat)' }}>Explore more from Own.</h2>
                 <p className="text-sm font-light text-zinc-600 mb-12 leading-[2]">
                    Discover our projects, learn more about the studio, or get in touch to discuss your own space.
                 </p>
                 
                 <div className="flex flex-col gap-6 w-full max-w-[200px] mb-16">
                     <Link href="/residential" className="px-6 py-4 border border-zinc-400 bg-transparent hover:bg-zinc-900 hover:border-zinc-900 text-zinc-800 hover:text-white text-[9px] uppercase font-bold tracking-[0.4em] transition-all duration-500 w-full text-center">
                       View Projects
                     </Link>
                     <Link href="/about" className="px-6 py-4 bg-[#B37038] text-white text-[9px] uppercase font-bold tracking-[0.4em] hover:bg-zinc-900 transition-all duration-500 shadow-xl w-full text-center">
                       Contact Own.
                     </Link>
                 </div>

                 <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 font-bold leading-loose">
                    <Link href="https://instagram.com" className="hover:text-zinc-900 transition-colors">Instagram</Link>
                    {' '}&bull;{' '}
                    <Link href="https://linkedin.com" className="hover:text-zinc-900 transition-colors">LinkedIn</Link>
                 </p>
            </div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}
