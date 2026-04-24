'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function LayeredGalleryOptionC() {
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
  const shadowX = useTransform(scrollYProgress, [0, 1], [0, -(scrollRange * 1.2)]); // Overlap values float slightly faster

  return (
    <main className="bg-[#EFECE5] text-zinc-900 selection:bg-[#B37038] selection:text-white overflow-hidden">
      
      <Link href="/journal" className="fixed top-10 left-10 z-[100] group flex items-center gap-3 text-[10px] tracking-[0.3em] font-bold uppercase transition-opacity hover:opacity-50 text-zinc-900 mix-blend-difference">
        <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-300" /> Back
      </Link>

      <section ref={targetRef} className="relative h-[800vh] bg-[#EFECE5]">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden bg-[#EFECE5]">
          
          {/* FLOATING BLACK THICK VALUES OVER TOP OF THE FRAMES */}
          <motion.div style={{ x: shadowX }} className="absolute inset-0 pointer-events-none z-[100] flex items-center w-max h-max">
             <div className="ml-[100vw] text-[18vw] text-black drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] font-black uppercase shrink-0 leading-none" style={{ fontFamily: 'var(--font-montserrat)' }}>collaboration.</div>
             <div className="ml-[150vw] text-[18vw] text-black drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] font-black uppercase shrink-0 leading-none" style={{ fontFamily: 'var(--font-montserrat)' }}>integrity.</div>
             <div className="ml-[150vw] text-[18vw] text-black drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] font-black uppercase shrink-0 leading-none" style={{ fontFamily: 'var(--font-montserrat)' }}>passion.</div>
             <div className="ml-[150vw] text-[18vw] text-black drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] font-black uppercase shrink-0 leading-none mr-[100vw]" style={{ fontFamily: 'var(--font-montserrat)' }}>imagination.</div>
          </motion.div>

          <motion.div ref={scrollRef} style={{ x: ribbonX }} className="flex h-screen w-max items-center pr-[10vw] relative">
            
            <div className="w-[100vw] h-full flex flex-col justify-center items-center text-center bg-zinc-950 text-white relative z-10 shrink-0">
                 <div className="w-64 md:w-96 aspect-video relative mb-8">
                     <Image src="/logo-white-clear.png" alt="Own Interior Design" fill className="object-contain" />
                 </div>
                 <div className="absolute bottom-20 right-20 flex items-center gap-4 animate-pulse">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#B37038]">Scroll Gallery Maps</span>
                    <ArrowRight size={24} className="text-[#B37038]" />
                 </div>
            </div>

            <div className="w-[50vw] h-[70vh] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-16 md:p-24 flex flex-col justify-center relative z-20 -ml-[5vw] shrink-0 mt-20 border border-zinc-200">
                 <h3 className="text-[#B37038] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-8">The Foundations</h3>
                 <p className="font-light text-sm leading-[2.5] tracking-wide text-zinc-800">
                   After 10 years of running Own. Interior Design, and to coincide with the launch of our new website, it felt like the right time to begin Own. Journal. Through it, we want to share more about the interior design projects we get involved in, emerging design trends, and industry insight.
                 </p>
                 <br/><p className="font-light text-sm leading-[2.5] tracking-wide text-zinc-800">It also felt like the right moment to properly introduce our design studio and share a little more about what sits behind the name. Own. Interior Design was built on the belief that good design should feel personal. Of course it should look beautiful, but more than that, it should feel right for the people using the space.</p>
            </div>

            <div className="w-[70vw] aspect-video bg-zinc-200 shadow-2xl relative z-10 -ml-[15vw] -mt-32 shrink-0 border-[16px] border-[#F4F1E9]">
                <Image src="/journal/001_Own. journal/Luolai-cafe-bakery-retail.jpg" alt="Luolai" fill className="object-cover" />
            </div>

            <div className="w-[45vw] h-[60vh] bg-[#F9F6F0] shadow-2xl p-16 flex flex-col justify-center relative z-30 -ml-[10vw] mt-48 shrink-0">
                 <p className="font-light text-sm leading-[2.5] tracking-wide text-zinc-800">
                   Over the last decade, I've worked across both commercial and residential interiors, on projects that have all been very different in style, scale and brief, but connected by the same approach. Whether designing for a brand, a business or a private client, my focus has always been on creating spaces that are thoughtful, functional and true to the people they are for. That way of working is at the heart of Own.
                 </p>
                 <br/><p className="text-xl md:text-2xl text-[#B37038] tracking-[0.1em] mt-8 font-serif leading-relaxed italic">"Every project should have its own identity. That is what makes it feel authentic."</p>
            </div>

            <div className="w-[50vw] h-[80vh] bg-zinc-950 shadow-[0_30px_60px_rgba(0,0,0,0.5)] p-16 md:p-24 flex flex-col justify-center relative z-10 -ml-[5vw] -mt-20 shrink-0 text-white">
                 <h3 className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-8">Commercial Authority</h3>
                 <p className="font-light text-sm leading-[2.5] tracking-wide text-zinc-300">
                   Over the years, that has meant working on a wide range of projects. On the commercial side, I've worked with recognised brands including Links of London, where the design process needed to balance brand expression, customer experience and attention to detail within a premium retail setting. 
                 </p>
                 <br/><p className="font-light text-sm leading-[2.5] tracking-wide text-zinc-300">Experiences like that have helped shape a strong understanding of how interiors can do much more than look good. They can influence perception, tell a story and support the success of a business.</p>
            </div>

            <div className="w-[60vw] aspect-video bg-zinc-200 shadow-2xl relative z-20 -ml-[10vw] mt-40 shrink-0 border-[12px] border-zinc-900">
                <Image src="/journal/001_Own. journal/LOL_Westfield_223.jpg" alt="Commercial" fill className="object-cover" />
            </div>
            
            <div className="w-[50vw] h-[70vh] bg-[#F4F1E9] shadow-2xl p-16 md:p-24 flex flex-col justify-center relative z-30 -ml-[15vw] -mt-10 shrink-0 border border-white">
                 <h3 className="text-[#B37038] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-8">The Approach</h3>
                 <p className="font-light text-sm leading-[2.5] tracking-wide text-zinc-900">
                   That thinking is exactly where the phrase “Make it your own” comes from. It is more than a strapline. It really sums up how I approach design. Every client comes with something different.
                 </p>
                 <br/><p className="font-light text-sm leading-[2.5] tracking-wide text-zinc-900">Sometimes that is a clear vision, and sometimes it is just a feeling, a lifestyle, or a sense of what is not working and what needs to change. My role is to work closely with them, draw that out, guide the process, and help shape a result that feels right for them, not for anyone else.</p>
            </div>

            <div className="w-[50vw] h-[75vh] bg-[#E8DCD6] shadow-2xl p-16 md:p-24 flex flex-col justify-center relative z-20 -ml-[5vw] mt-24 shrink-0 text-zinc-900">
                 <h3 className="text-[#B37038] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-8">Residential Sensibility</h3>
                 <p className="font-light text-sm leading-[2.5] tracking-wide">
                   On the residential side, projects such as Crosslands Meadows represent something equally important to me. Home projects are often more personal, and rightly so. They are not just about finishes, furniture or layouts. They are about how someone wants to live, what makes them feel comfortable, what reflects their taste, and what helps a space feel like home.
                 </p>
            </div>

            <div className="w-[60vw] aspect-video bg-zinc-200 shadow-2xl relative z-10 -ml-[10vw] -mt-32 shrink-0 border-[16px] border-[#F4F1E9]">
                <Image src="/journal/001_Own. journal/Firefly_Gemini Flash_zoom out a little bit, switch the shutters to the middle 1st floor window to the left 28886.png" alt="Residential" fill className="object-cover" />
            </div>

            <div className="w-[60vw] h-[80vh] bg-white shadow-2xl p-16 md:p-24 flex flex-col justify-center relative z-30 -ml-[15vw] mt-10 shrink-0 border border-zinc-100">
                 <p className="font-light text-sm leading-[2.5] tracking-wide text-zinc-800">
                   Alongside that, the values behind Own. remain central to how we work. Imagination, passion, integrity and collaboration are at the core of everything we do. This runs alongside honest communication, attention to detail, creative thinking, and a genuine belief that good design should improve the experience of a space, not simply decorate it.
                 </p>
                 <br/><p className="font-light text-sm leading-[2.5] tracking-wide text-zinc-800">
                   Ten years in, I'm proud of what Own. Interior Design has built so far, and excited about what comes next. This first blog post felt like the right place to say hello properly, reflect on the journey so far, and begin sharing more of the projects, ideas and thinking behind the studio.
                 </p>
            </div>

            <div className="w-[90vw] h-screen shrink-0 flex flex-col justify-center pl-32 relative z-10 bg-zinc-200">
                 <p className="text-xl md:text-3xl font-light tracking-[0.2em] uppercase text-zinc-600 mb-16 max-w-4xl leading-loose">
                    They feel personal. They feel considered. They feel like they belong.
                 </p>

                 <motion.div 
                    initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }} 
                    whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} 
                    transition={{ duration: 2, ease: 'easeInOut', delay: 0.2 }}
                    className="flex justify-start w-full max-w-4xl border-b border-[#B37038] pb-12"
                 >
                    <p className="text-[120px] text-zinc-900 leading-none whitespace-nowrap pl-4" style={{ fontFamily: "'WindSong', cursive" }}>
                      Make it your own.
                    </p>
                 </motion.div>
                 
                 <div className="flex gap-12 mt-16 w-full max-w-4xl">
                     <Link href="/residential" className="flex-1 py-8 text-center border-2 border-zinc-400 bg-transparent hover:bg-zinc-900 hover:border-zinc-900 text-zinc-800 hover:text-white text-xs uppercase font-bold tracking-[0.4em] transition-all duration-500">
                       Start Residential
                     </Link>
                     <Link href="/commercial" className="flex-1 py-8 text-center bg-[#B37038] text-white text-xs uppercase font-bold tracking-[0.4em] hover:bg-zinc-900 transition-all duration-500 shadow-2xl border-2 border-[#B37038] hover:border-zinc-900">
                       Start Commercial
                     </Link>
                 </div>
            </div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}
