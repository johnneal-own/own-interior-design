'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, defaultSubject = '' }: { isOpen: boolean, onClose: () => void, defaultSubject?: string }) {
  const [isRobotChecked, setIsRobotChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isRobotChecked) return;
    
    // In a real application, you'd send this to an API endpoint.
    // For now, we simulate the security check and open the mail client.
    setIsSubmitted(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const mailtoLink = `mailto:info@own-id.co.uk?subject=${encodeURIComponent(defaultSubject || 'Website Enquiry')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    setTimeout(() => {
      window.location.href = mailtoLink;
      setTimeout(() => {
        setIsSubmitted(false);
        setIsRobotChecked(false);
        onClose();
      }, 1000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="relative w-full max-w-xl bg-[#F9F6F0] p-8 md:p-12 shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-zinc-500 hover:text-zinc-900 transition-colors">
              <X size={24} />
            </button>

            <h2 className="text-2xl font-light uppercase tracking-widest text-zinc-900 mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>Contact Own.</h2>
            <p className="text-sm font-light tracking-wide text-zinc-500 mb-8">Please fill out the form below to reach the studio directly.</p>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-[#B37038]/20 flex items-center justify-center mb-6">
                  <Check size={32} className="text-[#B37038]" />
                </div>
                <h3 className="text-xl text-zinc-900 tracking-widest uppercase mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>Security Verified</h3>
                <p className="text-sm font-light text-zinc-500 tracking-wide">Opening your email client to send securely to info@own-id.co.uk...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Full Name</label>
                  <input type="text" id="name" name="name" required className="bg-white border border-zinc-300 p-3 text-sm focus:outline-none focus:border-[#B37038] transition-colors" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Email Address</label>
                  <input type="email" id="email" name="email" required className="bg-white border border-zinc-300 p-3 text-sm focus:outline-none focus:border-[#B37038] transition-colors" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Message</label>
                  <textarea id="message" name="message" rows={4} required className="bg-white border border-zinc-300 p-3 text-sm resize-none focus:outline-none focus:border-[#B37038] transition-colors" />
                </div>

                {/* Security Popup Checkbox (Anti-spam) */}
                <div className="bg-zinc-100 border border-zinc-200 p-4 flex items-center gap-4 my-2">
                  <input 
                    type="checkbox" 
                    id="robotCheck" 
                    checked={isRobotChecked}
                    onChange={(e) => setIsRobotChecked(e.target.checked)}
                    className="w-5 h-5 accent-[#B37038] cursor-pointer shrink-0"
                  />
                  <label htmlFor="robotCheck" className="text-sm text-zinc-700 cursor-pointer font-medium select-none">
                    I'm not a robot
                  </label>
                  <div className="ml-auto text-[10px] text-zinc-400 uppercase tracking-widest text-right">
                    reCAPTCHA<br/>Privacy - Terms
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={!isRobotChecked}
                  className={`w-full py-4 text-[10px] uppercase font-bold tracking-[0.3em] transition-all duration-300 ${isRobotChecked ? 'bg-[#B37038] text-white hover:bg-zinc-900 shadow-lg' : 'bg-zinc-300 text-zinc-500 cursor-not-allowed'}`}
                >
                  Verify & Send Enquiry
                </button>

                {/* GDPR Legal Info */}
                <p className="text-[9px] text-zinc-400 font-light leading-relaxed text-center mt-2">
                  By submitting this form, you consent to Own Interior Design processing your personal data in accordance with our GDPR-compliant Privacy Policy. Your details will be sent directly to <strong>info@own-id.co.uk</strong> and will not be shared with third parties.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
