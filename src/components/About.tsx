'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/styles/About.module.css';

interface Characteristic {
  id: string;
  title: string;
  summary: string;
}

const About = () => {
  const characteristics: Characteristic[] = [
    {
      id: 'problem-solver',
      title: 'Problem Solver',
      summary: 'Whether it\'s a LeetCode challenge or a complex technical issue, I thrive on research and requirements gathering. The satisfaction of cracking a tough problem drives me forward, and I approach each challenge with curiosity and determination.'
    },
    {
      id: 'continuous-learner',
      title: 'Continuous Learner',
      summary: 'As a self-taught developer and natural geek, I\'m constantly exploring new technologies. Whether it\'s diving into a framework to solve a problem or simply learning for the joy of it, I believe growth never stops.'
    },
    {
      id: 'system-designer',
      title: 'System Designer',
      summary: 'I love breaking down complex systems into clear, understandable components. From high-level architecture with cloud technologies to low-level design patterns following industry standards, I find elegance in well-structured systems.'
    },
    {
      id: 'ownership',
      title: 'Ownership',
      summary: 'Backed by experience, I take pride in every project and line of code I write. Design quality, robust error handling, and attention to detail matter to me—because delivering near-perfect software is my goal (even if perfection is impossible).'
    },
    {
      id: 'team-player',
      title: 'Team Player',
      summary: 'I excel at building strong relationships with peers and seniors, creating a comfortable and productive work environment. I especially value working with mentors, learning from their experiences, and exploring diverse perspectives that enrich my understanding.'
    }
  ];

  const generalSummary = {
    id: 'general',
    title: 'About Me',
    summary: 'I\'m a passionate software engineer who loves building scalable systems and elegant solutions. With a strong foundation in full-stack development and system design, I thrive on turning complex problems into simple, beautiful, and intuitive applications. When I\'m not coding, you\'ll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.'
  };

  const [selectedContent, setSelectedContent] = useState(generalSummary);
  const summaryPanelRef = useRef<HTMLDivElement>(null);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (summaryPanelRef.current && !summaryPanelRef.current.contains(event.target as Node)) {
        // Check if click was on a characteristic button
        const target = event.target as HTMLElement;
        if (!target.closest(`.${styles.characteristicItem}`)) {
          setSelectedContent(generalSummary);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className={styles.about} id="about">
      {/* Background decorations matching Projects section */}
      <div className={styles.backgroundDecoration}>
        <div className={styles.blueBlob}></div>
        <div className={styles.purpleBlob}></div>
      </div>

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.sectionTitle}>About Me</h2>
        </motion.div>

        <div className={styles.splitLayout}>
          {/* Left side - Characteristics list */}
          <motion.div
            className={styles.characteristicsList}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {characteristics.map((char, index) => (
              <motion.button
                key={char.id}
                className={`${styles.characteristicItem} ${
                  selectedContent.id === char.id ? styles.active : ''
                }`}
                onClick={() => setSelectedContent(char)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className={styles.characteristicTitle}>{char.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Right side - Summary */}
          <motion.div
            ref={summaryPanelRef}
            className={styles.summaryPanel}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedContent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={styles.summaryContent}
              >
                {/* <h3 className={styles.summaryTitle}>{selectedContent.title}</h3> */}
                <p className={styles.summaryText}>{selectedContent.summary}</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
