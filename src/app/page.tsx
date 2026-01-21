'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import ContactDialog from '@/components/ContactDialog';


export default function Home() {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      
      {/* Featured Projects Section (Placeholder) */}

      <Projects />

      {/* Contact Section (Placeholder) */}
      <section id="contact" style={{ 
        padding: '120px 24px',
        textAlign: 'center' 
      }}>
         <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Get In Touch</h2>
         <p style={{ 
           color: 'var(--text-secondary)', 
           maxWidth: '600px', 
           margin: '0 auto 2rem',
           fontSize: '1.1rem'
         }}>
           I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
         </p>
         <button 
           onClick={() => setIsContactDialogOpen(true)}
           style={{
             display: 'inline-block',
             padding: '14px 36px',
             border: '1px solid var(--text-accent)',
             color: 'var(--text-accent)',
             borderRadius: '8px',
             fontWeight: '600',
             fontSize: '1rem',
             background: 'transparent',
             cursor: 'pointer',
             transition: 'all 0.2s ease'
           }}
           onMouseEnter={(e) => {
             e.currentTarget.style.background = 'rgba(100, 255, 218, 0.1)';
             e.currentTarget.style.transform = 'translateY(-2px)';
           }}
           onMouseLeave={(e) => {
             e.currentTarget.style.background = 'transparent';
             e.currentTarget.style.transform = 'translateY(0)';
           }}
         >
           Say Hello
         </button>
      </section>

      <ContactDialog 
        isOpen={isContactDialogOpen} 
        onClose={() => setIsContactDialogOpen(false)} 
      />
    </main>
  );
}

