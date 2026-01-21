/* eslint-disable @next/next/no-img-element */
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '@/styles/Hero.module.css';

import TechBackground from '@/components/TechBackground';

const Hero = () => {
  return (
    <section className={styles.hero}>
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
            Hi, I&apos;m <span className={styles.name}>Abhinav</span>
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
            I write <span className={styles.codeName}>code.</span>
          </motion.h1>
        
          
          <motion.div 
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <Link href="#projects" className={styles.primaryButton}>
              View Work
            </Link>
            <Link href="#contact" className={styles.secondaryButton}>
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
