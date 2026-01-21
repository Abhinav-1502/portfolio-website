/* eslint-disable react/no-unescaped-entities */
'use client';
import { useState } from 'react';
import { experiences } from '../data/experience';
import styles from '../styles/Experience.module.css';

const Experience = () => {
  // Track expanded state for each point using a composite key "expId-index"
  const [expandedPoints, setExpandedPoints] = useState<Set<string>>(new Set());

  const togglePoint = (expId: string, index: number) => {
    const key = `${expId}-${index}`;
    const newExpanded = new Set(expandedPoints);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedPoints(newExpanded);
  };

  return (
    <section className={styles.experienceSection} id="experience">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Experience That I'm Grateful For</h2>
          <p className={styles.subtitle}>Click on any bullet point to see more details</p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <div key={exp.id} className={styles.card}>
              <div className={styles.cardContent}>
                <h3 className={styles.role}>{exp.role}</h3>
                <div className={styles.companyGroup}>
                  <span className={styles.company}>{exp.company}</span>
                  <div className={styles.meta}>
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className={styles.list}>
                  {exp.points.map((point, index) => {
                    const isExpanded = expandedPoints.has(`${exp.id}-${index}`);
                    return (
                      <li 
                        key={index} 
                        className={`${styles.listItem} ${styles.clickable}`}
                        onClick={() => togglePoint(exp.id, index)}
                        title={isExpanded ? "Click to summarize" : "Click for details"}
                      >
                        <span className={styles.bullet}>{isExpanded ? '▾' : '▸'}</span>
                        <p>
                          {isExpanded ? point.detail : point.summary}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
