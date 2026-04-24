'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Full360OptionB() {
  const targetRef = useRef(null);
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
  const shadowX = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]); // Static overlay sync across all rooms

  return (
    <main className="bg-[#1a1a1a] text-white selection:bg-[#B37038] selection:text-white">
      
      <Link href="/journal" className="fixed top-10 left-10 z-[100] group flex items-center gap-3 text-[10px] tracking-[0.3em] font-bold uppercase transition-opacity hover:opacity-50 text-white mix-blend-difference">
        <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-300" /> Back
      </Link>

      <section ref={targetRef} className="relative h-[1100vh] bg-[#1a1a1a]">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden bg-[#1a1a1a]">
          
          <motion.div style={{ x: shadowX }} className="absolute bottom-[2vh] left-0 pointer-events-none z-50 flex opacity-20 w-max h-max">
             <div className="ml-[150vw] text-[16vw] text-[#1a1a1a] drop-shadow-[0_20px_40px_rgba(0,0,0,1)] font-bold tracking-widest shrink-0 leading-none" style={{ fontFamily: 'var(--font-japokki)' }}>collaboration.</div>
             <div className="ml-[200vw] text-[16vw] text-[#1a1a1a] drop-shadow-[0_20px_40px_rgba(0,0,0,1)] font-bold tracking-widest shrink-0 leading-none" style={{ fontFamily: 'var(--font-japokki)' }}>integrity.</div>
             <div className="ml-[300vw] text-[16vw] text-[#1a1a1a] drop-shadow-[0_20px_40px_rgba(0,0,0,1)] font-bold tracking-widest shrink-0 leading-none" style={{ fontFamily: 'var(--font-japokki)' }}>passion.</div>
             <div className="ml-[250vw] text-[16vw] text-[#1a1a1a] drop-shadow-[0_20px_40px_rgba(0,0,0,1)] font-bold tracking-widest shrink-0 leading-none mr-[100vw]" style={{ fontFamily: 'var(--font-japokki)' }}>imagination.</div>
          </motion.div>

          {/* THE 100vh 360 ROOM */}
          <motion.div ref={scrollRef} style={{ x: ribbonX }} className="flex h-screen w-max items-center gap-0">
            
            <div className="w-[100vw] h-full shrink-0 flex flex-col justify-center items-center text-center px-24 bg-zinc-950 border-r border-[#222]">
                 <div className="w-64 md:w-96 aspect-video relative mb-8">
                     <Image src="/logo-white-clear.png" alt="Own Interior Design" fill className="object-contain" />
                 </div>
                 <div className="absolute bottom-20 right-20 flex items-center gap-4 animate-pulse">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#B37038]">Scroll To Walk Right</span>
                    <ArrowRight size={24} className="text-[#B37038]" />
                 </div>
            </div>

            <div className="w-[100vw] h-full shrink-0 bg-[#EFECE5] p-24 md:p-48 flex flex-col justify-center border-l border-black/5 relative">
                <h3 className="text-[#B37038] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-8">The Foundations</h3>
                <p className="font-light text-lg md:text-3xl leading-relaxed tracking-wide text-zinc-800 mb-8">
                  After 10 years of running Own. Interior Design, and to coincide with the launch of our new website, it felt like the right time to begin Own. Journal. Through it, we want to share more about the interior design projects we get involved in, emerging design trends, and industry insight. Own. Interior Design was built on the belief that good design should feel personal. Of course it should look beautiful, but more than that, it should feel right for the people using the space.
                </p>
                <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-black/10 to-transparent z-10 pointer-events-none"></div>
            </div>

            <div className="w-[100vw] h-full shrink-0 relative bg-black">
                <Image src="/journal/001_Own. journal/Luolai-cafe-bakery-retail.jpg" alt="Luolai" fill className="object-cover" />
            </div>

            <div className="w-[100vw] h-full shrink-0 bg-[#E8E6E1] p-24 md:p-48 flex flex-col justify-center relative">
                <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-black/10 to-transparent z-10 pointer-events-none"></div>
                <p className="font-light text-lg md:text-3xl leading-relaxed tracking-wide text-zinc-800">
                  Over the last decade, I've worked across both commercial and residential interiors, on projects that have all been very different in style, scale and brief, but connected by the same approach. Whether designing for a brand, a business or a private client, my focus has always been on creating spaces that are thoughtful, functional and true to the people they are for. That way of working is at the heart of Own. Every project should have its own identity. That is what makes it feel authentic.
                </p>
                <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-black/10 to-transparent z-10 pointer-events-none"></div>
            </div>

            <div className="w-[100vw] h-full shrink-0 relative bg-black">
                <Image src="/journal/001_Own. journal/LOL_Westfield_223.jpg" alt="Commercial" fill className="object-cover" />
            </div>

            <div className="w-[100vw] h-full shrink-0 bg-[#0a0a0a] p-24 md:p-48 flex flex-col justify-center relative text-zinc-300">
                <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-black/40 to-transparent z-10 pointer-events-none"></div>
                <h3 className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-8">Commercial Authority</h3>
                <p className="font-light text-lg md:text-3xl leading-relaxed tracking-wide mb-8">
                  Over the years, that has meant working on a wide range of projects. On the commercial side, I've worked with recognised brands including Links of London, where the design process needed to balance brand expression, customer experience and attention to detail within a premium retail setting. Experiences like that have helped shape a strong understanding of how interiors can do much more than look good. They can influence perception, tell a story and support the success of a business.
                </p>
                <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-black/40 to-transparent z-10 pointer-events-none"></div>
            </div>

            <div className="w-[100vw] h-full shrink-0 relative bg-black">
                <Image src="/journal/001_Own. journal/L-Living-Home-Retail-lifestyle-china.png" alt="L-Living" fill className="object-cover" />
            </div>

            <div className="w-[100vw] h-full shrink-0 bg-[#E8DCD6] p-24 md:p-48 flex flex-col justify-center relative text-zinc-900 border-l border-white/20">
                <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-black/10 to-transparent z-10 pointer-events-none"></div>
                <h3 className="text-[#B37038] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-8">Residential Sensibility</h3>
                <p className="font-light text-lg md:text-3xl leading-relaxed tracking-wide">
                  On the residential side, projects such as Crosslands Meadows represent something equally important to me. Home projects are often more personal, and rightly so. They are not just about finishes, furniture or layouts. They are about how someone wants to live, what makes them feel comfortable. That thinking is also where the phrase “Make it your own” comes from. It is more than a strapline. It really sums up how I approach design. Every client comes with something different.
                </p>
                <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-black/10 to-transparent z-10 pointer-events-none"></div>
            </div>

            <div className="w-[100vw] h-full shrink-0 relative bg-black">
                <Image src="/journal/001_Own. journal/Firefly_Gemini Flash_zoom out a little bit, switch the shutters to the middle 1st floor window to the left 28886.png" alt="Residential" fill className="object-cover" />
            </div>

            <div className="w-[100vw] h-full shrink-0 bg-[#F4F1E9] p-24 md:p-48 flex flex-col justify-center relative text-zinc-900">
                <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-black/10 to-transparent z-10 pointer-events-none"></div>
                <p className="font-light text-lg md:text-3xl leading-relaxed tracking-wide mb-8">
                  Alongside that, the values behind Own. remain central to how we work. Imagination, passion, integrity and collaboration are at the core of everything we do. Ten years in, I'm proud of what Own. Interior Design has built so far, and excited about what comes next. This first blog post felt like the right place to say hello properly, reflect on the journey so far, and begin sharing more of the projects, ideas and thinking behind the studio.
                </p>
                <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-black/10 to-transparent z-10 pointer-events-none"></div>
            </div>

            <div className="w-[100vw] h-full shrink-0 flex flex-col justify-center bg-[#EFECE5] relative text-zinc-900 border-l border-zinc-300 pl-[10vw]">
                 <div className="space-y-4 text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] text-zinc-400 mb-16">
                   <p>They feel personal.</p>
                   <p>They feel considered.</p>
                   <p>They feel like they belong.</p>
                 </div>
                 
                 <motion.div 
                    initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }} 
                    whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} 
                    transition={{ duration: 2, ease: 'easeInOut', delay: 0.2 }}
                    className="flex justify-start w-full max-w-4xl border-b border-[#B37038] pb-12"
                 >
                    <p className="text-7xl md:text-[130px] text-zinc-900 leading-none whitespace-nowrap overflow-visible pl-4" style={{ fontFamily: "'WindSong', cursive" }}>Make it your own.</p>
                 </motion.div>

                 <div className="flex gap-12 mt-16 pb-12 w-full max-w-3xl">
                     <Link href="/residential" className="flex-1 py-8 text-center border border-zinc-400 bg-transparent hover:bg-zinc-900 hover:border-zinc-900 text-zinc-800 hover:text-white text-xs uppercase font-bold tracking-[0.4em] transition-all duration-500">
                       Plan Residential
                     </Link>
                     <Link href="/commercial" className="flex-1 py-8 text-center bg-[#B37038] text-white text-xs uppercase font-bold tracking-[0.4em] hover:bg-zinc-900 transition-all duration-500 shadow-2xl">
                       Plan Commercial
                     </Link>
                 </div>
            </div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}
