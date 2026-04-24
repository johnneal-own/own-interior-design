'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ConcertinaOptionD() {
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

  return (
    <main className="bg-[#111] text-white selection:bg-[#B37038] selection:text-white overflow-hidden">
      
      <Link href="/journal" className="fixed top-10 left-10 z-[100] group flex items-center gap-3 text-[10px] tracking-[0.3em] font-bold uppercase transition-opacity hover:opacity-50 text-white mix-blend-difference">
        <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-300" /> Back
      </Link>

      <section ref={targetRef} className="relative h-[1000vh] bg-[#111]">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden perspective-[2000px]">
          
          <motion.div ref={scrollRef} style={{ x: ribbonX }} className="flex h-[80vh] w-max items-center gap-0 relative transform-style-3d pl-24 pr-[30vw]">
            
            <motion.div 
               style={{ rotateY: useTransform(scrollYProgress, [0, 0.2], [0, 15]), originX: 0 }}
               className="w-[80vw] h-full shrink-0 flex flex-col justify-center items-center text-center bg-zinc-950 text-white relative z-10 border-r border-[#222]"
            >
                 <div className="w-64 md:w-96 aspect-video relative mb-8">
                     <Image src="/logo-white-clear.png" alt="Own Interior Design" fill className="object-contain" />
                 </div>
                 <div className="absolute bottom-20 right-20 flex items-center gap-4 animate-pulse">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#B37038]">Scroll To Open Booklet</span>
                    <ArrowRight size={24} className="text-[#B37038]" />
                 </div>
            </motion.div>

            <motion.div 
               style={{ rotateY: 15, originX: 0 }}
               className="w-[50vw] h-full shrink-0 bg-[#EFECE5] text-zinc-900 p-24 flex flex-col justify-center border-l-8 border-r border-black/20 z-0 origin-left shadow-[inset_30px_0_50px_rgba(0,0,0,0.1)]"
            >
                 <p className="mb-8 text-xs font-bold uppercase tracking-[0.4em] text-[#B37038]">The Foundations</p>
                 <p className="font-light text-sm md:text-lg leading-[2.5] tracking-wide">
                   After 10 years of running Own. Interior Design, and to coincide with the launch of our new website, it felt like the right time to begin Own. Journal. Through it, we want to share more about the interior design projects we get involved in, emerging design trends, and industry insight. Own. Interior Design was built on the belief that good design should feel personal. Of course it should look beautiful, but more than that, it should feel right for the people using the space.
                 </p>
            </motion.div>

            <motion.div 
               style={{ rotateY: -15, originX: 0 }}
               className="w-[70vw] h-full shrink-0 bg-black relative group z-20 origin-left shadow-2xl border-l-[1px] border-white/50"
            >
                 <div className="absolute inset-0">
                     <Image src="/journal/001_Own. journal/Luolai-cafe-bakery-retail.jpg" alt="Luolai" fill className="object-cover" />
                 </div>
                 <div className="absolute inset-0 bg-white flex items-center justify-center mix-blend-screen px-12">
                     <h2 className="text-[9vw] font-black tracking-tighter text-black uppercase w-full break-all leading-none" style={{ fontFamily: 'var(--font-montserrat)' }}>
                        collab<br/>oration.
                     </h2>
                     <div className="absolute left-8 top-8 bg-black text-white px-4 py-2 font-bold tracking-widest text-[8px] uppercase mix-blend-normal">Card 01</div>
                 </div>
            </motion.div>

            <motion.div 
               style={{ rotateY: 20, originX: 0 }}
               className="w-[50vw] h-full shrink-0 bg-zinc-900 text-white p-24 flex flex-col justify-center border-l border-r border-black/50 z-10 origin-left shadow-[inset_40px_0_50px_rgba(0,0,0,0.5)]"
            >
                 <p className="font-light text-sm md:text-lg leading-[2.5] tracking-wide text-zinc-300">
                   Over the last decade, I've worked across both commercial and residential interiors, on projects that have all been very different in style, scale and brief, but connected by the same approach. Whether designing for a brand, a business or a private client, my focus has always been on creating spaces that are thoughtful, functional and true to the people they are for.
                 </p>
                 <br/><p className="text-xl md:text-3xl text-[#B37038] tracking-[0.1em] mt-8 font-serif italic">"Every project should have its own identity."</p>
            </motion.div>

            <motion.div 
               style={{ rotateY: -10, originX: 0 }}
               className="w-[70vw] h-full shrink-0 bg-black relative group z-20 origin-left shadow-[20px_0_50px_rgba(0,0,0,0.8)] border-l"
            >
                 <div className="absolute inset-0">
                     <Image src="/journal/001_Own. journal/LOL_Westfield_223.jpg" alt="Commercial" fill className="object-cover" />
                 </div>
                 <div className="absolute inset-0 bg-[#EFECE5] flex items-center justify-center mix-blend-screen px-12 overflow-hidden">
                     <h2 className="text-[12vw] font-black tracking-tighter text-black uppercase w-full text-center leading-[0.8]" style={{ fontFamily: 'var(--font-montserrat)' }}>
                        pass<br/>ion.
                     </h2>
                     <div className="absolute left-8 top-8 bg-black text-white px-4 py-2 font-bold tracking-widest text-[8px] uppercase mix-blend-normal">Card 02</div>
                 </div>
            </motion.div>

            <motion.div 
               style={{ rotateY: 15, originX: 0 }}
               className="w-[50vw] h-full shrink-0 bg-zinc-950 text-white p-24 flex flex-col justify-center border-l border-r border-black/50 z-10 origin-left shadow-[inset_40px_0_50px_rgba(0,0,0,0.9)]"
            >
                 <h3 className="text-zinc-600 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-8">Commercial Authority</h3>
                 <p className="font-light text-sm md:text-lg leading-[2.5] tracking-wide text-zinc-400">
                   Over the years, that has meant working on a wide range of projects. On the commercial side, I've worked with recognised brands including Links of London, where the design process needed to balance brand expression, customer experience and attention to detail within a premium retail setting. Experiences like that have helped shape a strong understanding of how interiors can do much more than look good. They can influence perception, tell a story and support the success of a business.
                 </p>
            </motion.div>

            <motion.div 
               style={{ rotateY: -15, originX: 0 }}
               className="w-[70vw] h-full shrink-0 bg-black relative group z-20 origin-left shadow-2xl border-l-[1px] border-white/20"
            >
                 <div className="absolute inset-0">
                     <Image src="/journal/001_Own. journal/L-Living-Home-Retail-lifestyle-china.png" alt="L-Living" fill className="object-cover" />
                 </div>
                 <div className="absolute inset-0 bg-[#E8DCD6] flex items-end justify-start mix-blend-screen p-16 overflow-hidden">
                     <h2 className="text-[13vw] font-black tracking-tighter text-black uppercase leading-[0.8]" style={{ fontFamily: 'var(--font-montserrat)' }}>
                        integ<br/>rity.
                     </h2>
                     <div className="absolute right-16 top-16 bg-black text-white px-4 py-2 font-bold tracking-widest text-[8px] uppercase mix-blend-normal">Card 03</div>
                 </div>
            </motion.div>

            <motion.div 
               style={{ rotateY: 15, originX: 0 }}
               className="w-[50vw] h-full shrink-0 bg-[#F4F1E9] text-zinc-900 p-24 flex flex-col justify-center border-l-8 border-r border-black/20 z-10 origin-left shadow-[inset_30px_0_50px_rgba(0,0,0,0.1)]"
            >
                 <h3 className="text-[#B37038] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-8">Residential Sensibility</h3>
                 <p className="font-light text-sm md:text-lg leading-[2.5] tracking-wide">
                   On the residential side, projects such as Crosslands Meadows represent something equally important to me. Home projects are often more personal, and rightly so. They are not just about finishes, furniture or layouts. They are about how someone wants to live, what makes them feel comfortable, what reflects their taste, and what helps a space feel like home. Those are the details that matter, and they deserve to be handled with care.
                 </p>
                 <br/><p className="font-light text-sm md:text-lg leading-[2.5] tracking-wide">
                   That thinking is exactly where the phrase “Make it your own” comes from. It is more than a strapline. It really sums up how I approach design. Every client comes with something different.
                 </p>
            </motion.div>

            <motion.div 
               style={{ rotateY: -20, originX: 0 }}
               className="w-[70vw] h-full shrink-0 bg-black relative group z-20 origin-left shadow-2xl border-l-[1px] border-white/20"
            >
                 <div className="absolute inset-0">
                     <Image src="/journal/001_Own. journal/Firefly_Gemini Flash_zoom out a little bit, switch the shutters to the middle 1st floor window to the left 28886.png" alt="Residential" fill className="object-cover" />
                 </div>
                 <div className="absolute inset-0 bg-[#E8E6E1] flex items-center justify-center mix-blend-screen overflow-hidden">
                     <h2 className="text-[10vw] font-black tracking-tighter text-black uppercase leading-[0.8] text-center" style={{ fontFamily: 'var(--font-montserrat)' }}>
                        imagin<br/>ation.
                     </h2>
                     <div className="absolute left-16 bottom-16 bg-black text-white px-4 py-2 font-bold tracking-widest text-[8px] uppercase mix-blend-normal">Card 04</div>
                 </div>
            </motion.div>

            <motion.div 
               style={{ rotateY: 10, originX: 0 }}
               className="w-[60vw] h-full shrink-0 bg-[#EFECE5] text-zinc-900 p-24 flex flex-col justify-center border-l-8 border-black/20 z-10 origin-left shadow-[inset_30px_0_50px_rgba(0,0,0,0.1)]"
            >
                 <p className="font-light text-sm md:text-lg leading-[2.5] tracking-wide">
                   Sometimes that is a clear vision, and sometimes it is just a feeling, a lifestyle, or a sense of what is not working and what needs to change. My role is to work closely with them, draw that out, guide the process, and help shape a result that feels right for them, not for anyone else.
                   <br/><br/>
                   Alongside that, the values behind Own. remain central to how we work. Imagination, passion, integrity and collaboration are at the core of everything we do. This runs alongside honest communication, attention to detail, creative thinking, and a genuine belief that good design should improve the experience of a space, not simply decorate it.
                 </p>
                 <br/><p className="font-light text-sm md:text-lg leading-[2.5] tracking-wide text-zinc-500">
                   Ten years in, I'm proud of what Own. Interior Design has built so far, and excited about what comes next. This first blog post felt like the right place to say hello properly, reflect on the journey so far, and begin sharing more of the projects, ideas and thinking behind the studio.
                 </p>
            </motion.div>

            <motion.div 
               style={{ rotateY: 0, originX: 0 }}
               className="w-[100vw] h-full shrink-0 flex flex-col justify-center bg-zinc-200 px-32 relative z-30 shadow-[-50px_0_100px_rgba(0,0,0,0.5)] border-l"
            >
                 <p className="text-xl md:text-3xl font-light tracking-[0.2em] uppercase text-zinc-500 mb-16 max-w-4xl leading-loose">
                    They feel personal. They feel considered. They feel like they belong.
                 </p>

                 <motion.div 
                    initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }} 
                    whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} 
                    transition={{ duration: 2, ease: 'easeInOut', delay: 0.2 }}
                    className="flex justify-start w-full max-w-4xl border-b border-[#B37038] pb-12"
                 >
                    <p className="text-7xl md:text-[140px] text-zinc-900 leading-none whitespace-nowrap pl-4" style={{ fontFamily: "'WindSong', cursive" }}>
                      Make it your own.
                    </p>
                 </motion.div>
                 
                 <div className="flex gap-12 mt-16 w-full max-w-3xl">
                     <Link href="/residential" className="flex-1 py-8 text-center border-2 border-zinc-400 bg-transparent hover:bg-zinc-900 hover:border-zinc-900 text-zinc-800 hover:text-white text-[10px] md:text-xs uppercase font-bold tracking-[0.4em] transition-all duration-500">
                       Design Residential
                     </Link>
                     <Link href="/commercial" className="flex-1 py-8 text-center bg-[#B37038] text-white text-[10px] md:text-xs uppercase font-bold tracking-[0.4em] hover:bg-zinc-900 transition-all duration-500 shadow-2xl border-2 border-[#B37038] hover:border-zinc-900">
                       Design Commercial
                     </Link>
                 </div>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}
