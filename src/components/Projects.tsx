/* eslint-disable react/no-unescaped-entities */

'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import projectsData from '@/data/projects.json';
import ProjectCard from './ProjectCard';
import styles from '@/styles/Projects.module.css';

type Project = {
  name: string;
  description: string;
  generatedDescription?: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  techStack?: string[];
  link?: string;
  repo?: string;
  author: string;
};

export default function Projects() {
  const projects = projectsData as Project[];
  const [isRegenerating, setIsRegenerating] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsRegenerating(true);
    const handleStop = () => setIsRegenerating(false);
    
    window.addEventListener('project-generation-start', handleStart);
    window.addEventListener('project-generation-stop', handleStop);
    
    return () => {
      window.removeEventListener('project-generation-start', handleStart);
      window.removeEventListener('project-generation-stop', handleStop);
    };
  }, []);

  return (
    <section id="projects" className={styles.projectsSection}>
      {/* Background decoration */}
      <div className={styles.backgroundDecoration}>
        <div className={styles.blueBlob} />
        <div className={styles.purpleBlob} />
      </div>

      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            Projects I'm Proud Of
          </h2>
          <p className={styles.subtitle}>
            Exploring the intersection of design and technology.
          </p>
        </motion.div>

        {isRegenerating ? (
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }} 
             animate={{ opacity: 1, scale: 1 }}
             className={styles.loadingContainer}
           >
             <div className={styles.spinner}>
               <div className={styles.spinnerRing}></div>
               <div className={styles.spinnerBorder}></div>
             </div>
             <p className={styles.loadingText}>
               GENERATING_PROJECTS...
             </p>
           </motion.div>
        ) : (
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                {...project}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
