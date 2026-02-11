/* eslint-disable @next/next/no-img-element */
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Linkedin, Github } from 'lucide-react';
import styles from '@/styles/Hero.module.css';

import TechBackground from '@/components/TechBackground';

const Hero = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.background} />
      <TechBackground />
      
      <div className={styles.content}>
        <div className={styles.textContent}>
          <motion.span 
            className={styles.greeting}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I&apos;m <span className={styles.name}> ABHINAV EERANTI </span>
          </motion.span>
          
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            I design systems.
          </motion.h1>
          
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            I write code.
          </motion.h1>
        
          
          <motion.div 
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <Link 
              href="#projects" 
              className={styles.primaryButton}
              onClick={(e) => handleSmoothScroll(e, '#projects')}
            >
              View Work
            </Link>
            <Link 
              href="/Resume_9.1_Standard_SDE.pdf "
              className={styles.secondaryButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </Link>
            <Link 
              href="#contact" 
              className={styles.secondaryButton}
              onClick={(e) => handleSmoothScroll(e, '#contact')}
            >
               Contact Me
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className={styles.imageContent}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.profileImageContainer}>
             {/* Replace with your actual image path */}
             <img src="/images/profile_pic.jpg" alt="Abhinav" className={styles.profileImage} />
          </div>
          
          <motion.div 
            className={styles.socialLinks}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a 
              href="https://www.linkedin.com/in/abhinaveeranti" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href="https://github.com/Abhinav-1502" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="GitHub Profile"
            >
              <Github size={22} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
