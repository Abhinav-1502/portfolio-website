export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  points: {
    summary: string;
    detail: string;
  }[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'gscore',
    role: 'Software Engineer',
    company: 'GScore Solutions',
    location: 'Remote, US',
    period: 'May 2025 - present',
    points: [
      {
        summary: 'Built Gen AI prototypes for government/finance, validating feasibility via client demos.',
        detail: 'Delivered end-to-end Gen AI prototypes for enterprise clients across government and financial sectors, designing backend systems and APIs to validate production feasibility through iterative client demonstrations.'
      },
      {
        summary: 'Built dual-intent AI chatbot (SQL gen + RAG), cutting query time to <500ms.',
        detail: 'Reduced query response time to <500ms by building dual-intent AI chatbot implementing natural language-to-SQL generation and RAG-based document Q&A with role-based access control for 7 user types.'
      },
      {
        summary: 'Architected email workflow automation for 200+ daily emails using microservices & RabbitMQ.',
        detail: 'Architected and built email-based workflow automation prototype processing 200+ daily emails with event-driven microservices and RabbitMQ message queues, following production-ready design principles for seamless migration.'
      },
      {
        summary: 'Built robust CI/CD pipeline (GitHub Actions, Docker) ensuring 99.8% uptime for email service.',
        detail: 'Engineered a robust CI/CD pipeline using GitHub Actions and Docker to automate testing and deployment, ensuring 99.8% uptime for the email processing service across 5 distinct environments.'
      },
      {
        summary: 'Led technical coordination, defined APIs, and gathered requirements for dashboard prototypes.',
        detail: 'Led technical coordination across frontend and QA teams, defining API contracts, gathering client requirements through iterative demos, and delivering integrated prototype solutions for enterprise dashboards.'
      }
    ]
  },
  {
    id: 'northeastern',
    role: 'Full Stack Developer Intern',
    company: 'Northeastern University',
    location: 'Boston, MA',
    period: 'Jan 2025 – May 2025',
    points: [
      {
        summary: 'Led full-stack Java/React app development, boosting club efficiency and engagement.',
        detail: 'Spearheaded the core development of a full-stack web application using JAVA and React.js, improving the club’s operational efficiency and member engagement through a responsive UI and secure backend services.'
      },
      {
        summary: 'Defined specs and technical roadmap through stakeholder analysis sessions.',
        detail: 'Conducted requirements gathering and system analysis sessions with stakeholders to define functional specifications and prioritize high-impact features, establishing a clear technical roadmap for the web platform.'
      },
      {
        summary: 'Built secure Spring REST APIs with cookie auth and CSRF protection.',
        detail: 'Designed and implemented secure RESTful APIs with Spring, employing Cookie-based authorization, CSRF protection, and robust session management to safeguard user data.'
      },
      {
        summary: 'Designed scalable MySQL schemas and managed data with Hibernate ORM.',
        detail: 'Modeled and managed relational data effectively by designing scalable MySQL database schemas and utilizing Hibernate ORM for seamless interaction between the application and database.'
      },
      {
        summary: 'Migrated from on-prem to AWS LightSail, creating a CI/CD pipeline for reliability.',
        detail: 'Initially deployed application on on-premises server, later migrated to AWS LightSail enabling CI/CD pipeline, improving deployment reliability and scalability.'
      }
    ]
  }
];
