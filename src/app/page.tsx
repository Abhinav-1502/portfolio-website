import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';


export default function Home() {
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
         <a href="mailto:hello@example.com" style={{
           display: 'inline-block',
           padding: '14px 36px',
           border: '1px solid var(--text-accent)',
           color: 'var(--text-accent)',
           borderRadius: '8px',
           fontWeight: '600',
           fontSize: '1rem'
         }}>
           Say Hello
         </a>
      </section>
    </main>
  );
}
