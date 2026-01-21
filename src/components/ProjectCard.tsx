'use client';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import styles from '@/styles/ProjectCard.module.css';

type ProjectCardProps = {
  name: string;
  description: string;
  generatedDescription?: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  techStack?: string[];
  link?: string;
  author: string;
  index: number;
};

export default function ProjectCard({ 
  name, 
  description, 
  generatedDescription,
  language,
  languageColor,
  techStack,
  link,
  author,
  index
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const fullDescription = generatedDescription || description;
  
  // Get first sentence or first 100 characters as short description
  const shortDescription = fullDescription.split('.')[0] + '.';
  const hasMoreContent = fullDescription.length > shortDescription.length + 10;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={styles.card}
    >
      {/* Subtle gradient overlay on hover */}
      <div className={styles.gradientOverlay} />
      
      <div className={styles.cardContent}>
        {/* Header with links */}
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <h3 className={styles.title}>
              {name.replace(/-/g, ' ')}
            </h3>
            <div className={styles.languageIndicator}>
              <div className={styles.languageDot} style={{ backgroundColor: languageColor }} />
              <span>{language}</span>
            </div>
          </div>
          
          <div className={styles.buttonGroup}>
            {link && (
              <a 
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
                title="View Live Demo"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Demo</span>
              </a>
            )}
            <a 
              href={`https://github.com/${author}/${name}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
              title="View Source Code"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Description */}
        <div className={styles.descriptionSection}>
          <p className={styles.description}>
            {isExpanded ? fullDescription : shortDescription}
          </p>
          {hasMoreContent && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={styles.readMoreButton}
            >
              {isExpanded ? (
                <>
                  <span>Read less</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Read more</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Tech Stack */}
        <div className={styles.techStackSection}>
          <div className={styles.techStackHeader}>
            <span className={styles.techStackLabel}>Tech Stack</span>
            <div className={styles.techStackDivider}></div>
          </div>
          <div className={styles.techStackList}>
            {techStack && techStack.length > 0 ? (
              techStack.map((tech: string) => (
                <span 
                  key={tech} 
                  className={styles.techTag}
                >
                  {tech}
                </span>
              ))
            ) : (
              <span 
                className={styles.techTag}
                style={{ color: languageColor }}
              >
                {language}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
