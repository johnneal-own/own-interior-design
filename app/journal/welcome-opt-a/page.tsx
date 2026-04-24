'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function RibbonOptionA() {
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
    window.addEventListener('resize', updateScrollRange);
    return () => window.removeEventListener('resize', updateScrollRange);
  }, []);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const ribbonX = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);
  const shadowX = useTransform(scrollYProgress, [0, 1], [0, -(scrollRange * 1)]); // Sync shadows perfectly

  return (
    <main className="bg-[#F9F6F0] text-zinc-900 selection:bg-[#B37038] selection:text-white overflow-hidden">
      
      <Link href="/journal" className="fixed top-10 left-10 z-[100] group flex items-center gap-3 text-[10px] tracking-[0.3em] font-bold uppercase transition-opacity hover:opacity-50 text-white mix-blend-difference">
        <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-300" /> Back
      </Link>

      <section ref={targetRef} className="relative h-[800vh] bg-[#F9F6F0]">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          
          <motion.div style={{ x: shadowX }} className="absolute bottom-[5vh] left-0 pointer-events-none z-50 flex mix-blend-multiply w-max h-max">
             <div className="ml-[120vw] text-[12vw] drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] text-[#F9F6F0] font-bold tracking-widest leading-none shrink-0" style={{ fontFamily: 'var(--font-japokki)' }}>collaboration.</div>
             <div className="ml-[150vw] text-[12vw] drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] text-[#F9F6F0] font-bold tracking-widest leading-none shrink-0" style={{ fontFamily: 'var(--font-japokki)' }}>integrity.</div>
             <div className="ml-[150vw] text-[12vw] drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] text-[#F9F6F0] font-bold tracking-widest leading-none shrink-0" style={{ fontFamily: 'var(--font-japokki)' }}>passion.</div>
             <div className="ml-[100vw] text-[12vw] drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] text-[#F9F6F0] font-bold tracking-widest leading-none shrink-0 mr-[100vw]" style={{ fontFamily: 'var(--font-japokki)' }}>imagination.</div>
          </motion.div>

          {/* MAIN RIBBON */}
          <motion.div ref={scrollRef} style={{ x: ribbonX }} className="flex h-[60vh] w-max items-center gap-0 relative z-10">
            
            <div className="w-[80vw] h-screen shrink-0 flex flex-col justify-center items-center text-center px-24 bg-zinc-950 text-white relative">
                 <div className="w-64 md:w-96 aspect-video relative mb-8">
                     <Image src="/logo-white-clear.png" alt="Own Interior Design" fill className="object-contain" />
                 </div>
                 <div className="absolute bottom-20 right-20 flex items-center gap-4 animate-pulse">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#B37038]">Scroll To Begin Exhibition</span>
                    <ArrowRight size={24} className="text-[#B37038]" />
                 </div>
            </div>

            <div className="w-[45vw] h-full shrink-0 bg-[#EFECE5] p-16 flex flex-col justify-center text-sm leading-[2.5] tracking-wide font-light">
                <p className="mb-8 text-xs font-bold uppercase tracking-[0.4em] text-[#B37038]">The Foundations</p>
                <p>After 10 years of running Own. Interior Design, and to coincide with the launch of our new website, it felt like the right time to begin Own. Journal. Through it, we want to share more about the interior design projects we get involved in, emerging design trends, and industry insight.</p>
                <br/>
                <p>It also felt like the right moment to properly introduce our design studio and share a little more about what sits behind the name.</p>
            </div>

            <div className="w-[45vw] h-full shrink-0 bg-[#F4F1E9] p-16 flex flex-col justify-center text-sm leading-[2.5] tracking-wide font-light border-l border-zinc-200">
                <p>Own. Interior Design was built on the belief that good design should feel personal. Of course it should look beautiful, but more than that, it should feel right for the people using the space.</p>
                <br/>
                <p>It should support the way they live, work, move and feel. It should have purpose, personality and a sense of identity.</p>
            </div>

            <div className="w-[45vw] h-full shrink-0 bg-white p-16 flex flex-col justify-center text-sm leading-[2.5] tracking-wide font-light border-l border-zinc-200">
                <p>Over the last decade, I've worked across both commercial and residential interiors, on projects that have all been very different in style, scale and brief, but connected by the same approach.</p>
                <br/>
                <p>Whether designing for a brand, a business or a private client, my focus has always been on creating spaces that are thoughtful, functional and true to the people they are for. That way of working is at the heart of Own.</p>
            </div>

            <div className="w-[45vw] h-full shrink-0 bg-white p-16 flex flex-col justify-center text-sm leading-[2.5] tracking-wide font-light border-l border-zinc-200">
                <p className="text-xl md:text-2xl text-[#B37038] tracking-[0.1em] leading-relaxed mb-8" style={{ fontFamily: 'var(--font-montserrat)' }}>"Every project should have its own identity. That is what makes it feel authentic."</p>
                <p>It has never been about pushing a set style or trying to leave the same visual stamp on every project. For me, the best interiors come from really listening, understanding how a client wants to live or how they want their business to be experienced, and then shaping the design around that.</p>
            </div>

            <div className="w-[60vw] h-full shrink-0 relative bg-zinc-200">
                <Image src="/journal/001_Own. journal/Luolai-cafe-bakery-retail.jpg" alt="Luolai" fill className="object-cover" />
            </div>

            <div className="w-[45vw] h-full shrink-0 bg-[#0a0a0a] text-zinc-300 p-16 flex flex-col justify-center text-sm leading-[2.5] tracking-wide font-light">
                <p className="mb-8 text-xs font-bold uppercase tracking-[0.4em] text-zinc-600">Commercial Authority</p>
                <p>Over the years, that has meant working on a wide range of projects. On the commercial side, I've worked with recognised brands including Links of London, where the design process needed to balance brand expression, customer experience and attention to detail within a premium retail setting.</p>
                <br/>
                <p>Experiences like that have helped shape a strong understanding of how interiors can do much more than look good. They can influence perception, tell a story and support the success of a business.</p>
            </div>

            <div className="w-[60vw] h-full shrink-0 relative bg-black">
                <Image src="/journal/001_Own. journal/LOL_Westfield_223.jpg" alt="Commercial" fill className="object-cover" />
            </div>

            <div className="w-[45vw] h-full shrink-0 bg-[#EFECE5] p-16 flex flex-col justify-center text-sm leading-[2.5] tracking-wide font-light border-l border-zinc-200">
                <p className="mb-8 text-xs font-bold uppercase tracking-[0.4em] text-[#B37038]">The Approach</p>
                <p>That thinking is exactly where the phrase “Make it your own” comes from. It is more than a strapline. It really sums up how I approach design. Every client comes with something different.</p>
                <br/>
                <p>Sometimes that is a clear vision, and sometimes it is just a feeling, a lifestyle, or a sense of what is not working and what needs to change. My role is to work closely with them, draw that out, guide the process, and help shape a result that feels right for them, not for anyone else.</p>
            </div>

            <div className="w-[60vw] h-full shrink-0 relative bg-zinc-200 border-l border-white/20">
                <Image src="/journal/001_Own. journal/L-Living-Home-Retail-lifestyle-china.png" alt="L-Living" fill className="object-cover" />
            </div>

            <div className="w-[45vw] h-full shrink-0 bg-[#E8DCD6] p-16 flex flex-col justify-center text-sm leading-[2.5] tracking-wide font-light">
                <p className="mb-8 text-xs font-bold uppercase tracking-[0.4em] text-[#B37038]">Residential Sensibility</p>
                <p>On the residential side, projects such as Crosslands Meadows represent something equally important to me. Home projects are often more personal, and rightly so.</p>
                <br/>
                <p>They are not just about finishes, furniture or layouts. They are about how someone wants to live, what makes them feel comfortable, what reflects their taste, and what helps a space feel like home. Those are the details that matter, and they deserve to be handled with care.</p>
            </div>

            <div className="w-[60vw] h-full shrink-0 relative bg-zinc-200 border-x border-[#cbbaba]">
                <Image src="/journal/001_Own. journal/Firefly_Gemini Flash_zoom out a little bit, switch the shutters to the middle 1st floor window to the left 28886.png" alt="Residential" fill className="object-cover" />
            </div>

            <div className="w-[45vw] h-full shrink-0 bg-white p-16 flex flex-col justify-center text-sm leading-[2.5] tracking-wide font-light">
                <p>Alongside that, the values behind Own. remain central to how we work. Imagination, passion, integrity and collaboration are at the core of everything we do.</p>
                <br/>
                <p>This runs alongside honest communication, attention to detail, creative thinking, and a genuine belief that good design should improve the experience of a space, not simply decorate it.</p>
            </div>

            <div className="w-[45vw] h-full shrink-0 bg-[#F4F1E9] p-16 flex flex-col justify-center text-sm leading-[2.5] tracking-wide font-light border-l border-zinc-200">
                <p>Ten years in, I'm proud of what Own. Interior Design has built so far, and excited about what comes next.</p>
                <br/>
                <p>This first blog post felt like the right place to say hello properly, reflect on the journey so far, and begin sharing more of the projects, ideas and thinking behind the studio. Because in the end, the most successful interiors are not just visually resolved.</p>
            </div>

            <div className="w-[80vw] h-full shrink-0 flex flex-col justify-center items-center text-center bg-[#E8E6E1] border-l border-zinc-200 relative px-16">
                 
                 <p className="text-sm md:text-lg font-light tracking-[0.2em] uppercase text-zinc-600 mb-16 max-w-2xl leading-loose">
                    They feel personal. They feel considered. They feel like they belong.
                 </p>

                 <motion.div 
                    initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }} 
                    whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} 
                    transition={{ duration: 2, ease: 'easeInOut', delay: 0.2 }}
                    className="flex justify-start w-full max-w-3xl border-b border-[#B37038] pb-12"
                 >
                    <p className="text-6xl md:text-[100px] text-zinc-900 leading-none whitespace-nowrap overflow-visible pl-12" style={{ fontFamily: "'WindSong', cursive" }}>
                      Make it your own.
                    </p>
                 </motion.div>
                 
                 <div className="flex gap-12 mt-16">
                     <Link href="/residential" className="px-12 py-5 border border-zinc-400 bg-transparent hover:bg-zinc-900 hover:border-zinc-900 text-zinc-800 hover:text-white text-[10px] uppercase font-bold tracking-[0.4em] transition-all duration-500">
                       Residential Enquiries
                     </Link>
                     <Link href="/commercial" className="px-12 py-5 bg-[#B37038] text-white text-[10px] uppercase font-bold tracking-[0.4em] hover:bg-zinc-900 transition-all duration-500 shadow-xl">
                       Commercial Setup
                     </Link>
                 </div>
            </div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}
