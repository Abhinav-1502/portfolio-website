'use client';
import styles from '@/styles/TechBackground.module.css';

interface TechItem {
  icon: string;
  name: string;
  description: string;
}

const techStack: TechItem[] = [
  { 
    icon: 'java', 
    name: 'Java', 
    description: 'Expertise in building scalable enterprise applications, leveraging multithreading and strong OOP principles for robust backend systems.' 
  },
  { 
    icon: 'javascript', 
    name: 'JavaScript', 
    description: 'Deep understanding of ES6+, DOM manipulation, and asynchronous programming to create interactive and dynamic web experiences.' 
  },
  { 
    icon: 'python', 
    name: 'Python', 
    description: ' proficient in writing clean, efficient scripts for automation, data analysis, and building powerful backend services with Django and FastAPI.' 
  },
  { 
    icon: 'cplusplus', 
    name: 'C++', 
    description: 'Experience with system-level programming and algorithms, optimizing performance for resource-intensive applications.' 
  },
  { 
    icon: 'html5', 
    name: 'HTML5', 
    description: 'Structuring semantic and accessible web content, ensuring valid markup for modern, responsive layouts.' 
  },
  { 
    icon: 'css3', 
    name: 'CSS3', 
    description: 'Crafting responsive designs with generic CSS, Flexbox, and Grid to create visually appealing and adaptive user interfaces.' 
  },
  { 
    icon: 'sass', 
    name: 'Sass', 
    description: 'Writing maintainable and modular stylesheets using variables, mixins, and nesting to streamline CSS development.' 
  },
  { 
    icon: 'springboot', 
    name: 'Spring Boot', 
    description: 'Building production-ready microservices and REST APIs with rapid setup, dependency injection, and auto-configuration.' 
  },
  { 
    icon: 'nodedotjs', 
    name: 'Node.js', 
    description: 'Developing high-performance, event-driven server-side applications and real-time services using the V8 engine.' 
  },
  { 
    icon: 'express', 
    name: 'Express', 
    description: 'Creating lightweight and flexible web servers for routing and middleware management in Node.js applications.' 
  },
  { 
    icon: 'fastapi', 
    name: 'FastAPI', 
    description: 'Building modern, high-performance APIs with Python, leveraging type hints for automatic validation and documentation.' 
  },
  { 
    icon: 'react', 
    name: 'React', 
    description: 'Designing component-based UIs with hooks and state management to build single-page applications efficiently.' 
  },
  { 
    icon: 'angular', 
    name: 'Angular', 
    description: 'Developing complex, enterprise-grade applications with TypeScript, utilizing dependency injection and two-way data binding.' 
  },
  { 
    icon: 'typescript', 
    name: 'TypeScript', 
    description: 'Enhancing code quality and maintainability with static typing, interfaces, and advanced type features for large-scale JS projects.' 
  },
  { 
    icon: 'selenium', 
    name: 'Selenium', 
    description: 'Automating web browser interactions for end-to-end testing, scraping, and verifying application behavior across environments.' 
  },
  { 
    icon: 'docker', 
    name: 'Docker', 
    description: 'Containerizing applications to ensure consistency across development, testing, and production environments.' 
  },
  { 
    icon: 'mysql', 
    name: 'MySQL', 
    description: 'Designing normalized database schemas and writing complex queries for efficient relational data management.' 
  },
  { 
    icon: 'mongodb', 
    name: 'MongoDB', 
    description: 'Working with NoSQL databases to store flexible, JSON-like documents for scalable and high-volume data applications.' 
  },
  { 
    icon: 'postgresql', 
    name: 'PostgreSQL', 
    description: 'Leveraging advanced SQL features, reliable transactions, and extensions for sophisticated data modeling needs.' 
  },
  { 
    icon: 'git', 
    name: 'Git', 
    description: 'Managing version control effectively with branching, merging, and collaborative workflows to track code changes.' 
  },
  { 
    icon: 'githubactions', 
    name: 'GitHub Actions', 
    description: 'Automating CI/CD pipelines to build, test, and deploy code directly from GitHub repositories.' 
  },
  { 
    icon: 'postman', 
    name: 'Postman', 
    description: 'Testing and documenting APIs, inspecting requests and responses to ensure backend services function as expected.' 
  }
];

const TechBackground = () => {
  // Triple the list for seamless loop
  const marqueeItems = [...techStack, ...techStack, ...techStack];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.track}>
        {marqueeItems.map((item, index) => (
          <div key={`${item.icon}-${index}`} className={styles.iconWrapper}>
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={`/icons/${item.icon}.svg`} 
              alt={item.name} 
              className={styles.icon}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            {/* Tooltip */}
            <div className={styles.tooltip}>
              <span className={styles.tooltipTitle}>{item.name}</span>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechBackground;
