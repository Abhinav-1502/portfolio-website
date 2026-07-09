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
    role: 'Founding Software Engineer',
    company: 'GScore IT Solutions',
    location: 'Remote, US',
    period: 'May 2025 - present',
    points: [
      {
        summary: 'Architected production-grade GenAI pipelines with dynamic model routing to optimize cost and performance.',
        detail: 'Architected production-grade GenAI pipelines by integrating closed-source and locally trained models, enabling dynamic model routing based on query complexity to optimize inference performance and compute costs.'
      },
      {
        summary: 'Built event-driven email automation processing ~400 emails daily, cutting manual triage by 70%.',
        detail: 'Engineered an event-driven email automation system for enterprise clients using RabbitMQ, processing ~400 emails daily and reducing manual triage time by 70% through asynchronous workflow management.'
      },
      {
        summary: 'Architected and scaled backend systems, engineering robust FastAPI applications for AI services and dashboards.',
        detail: 'Architected and scaled foundational backend systems, dedicating most development efforts to engineering robust FastAPI applications that delivered critical AI services and RESTful APIs for data-intensive executive dashboards and enterprise applications.'
      },
      {
        summary: 'Owned full CI/CD lifecycle via GitHub Actions and AWS CDK, maintaining 99.8% uptime.',
        detail: 'Owned the full CI/CD lifecycle via GitHub Actions and AWS CDK, maintaining 99.8% uptime backed by AWS CloudWatch for AI-driven executive dashboards and scaling infrastructure to support data-intensive React/TypeScript applications.'
      },
      {
        summary: 'Accelerated product iteration by 30% by integrating agentic AI tools (Cursor, Claude) into the workflow.',
        detail: 'Accelerated product iteration cycles by 30% by integrating agentic AI tools (Cursor, Claude) into the development workflow, enabling rapid feature delivery and complex architectural refactoring.'
      }
    ]
  },
  {
    id: 'neu-ta',
    role: 'Graduate Teaching Assistant (Intro to AI Agents)',
    company: 'Northeastern University',
    location: 'Boston, MA',
    period: 'May 2025 – Aug 2025',
    points: [
      {
        summary: 'Mentored graduate students on LLMs, RAG, and Multi-Agent Architectures.',
        detail: 'Mentored a cohort of graduate students in the "Intro to AI Agents" course, facilitating the conceptual understanding of Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and Multi-Agent Architectures.'
      },
      {
        summary: 'Led labs on GenAI agent implementation using Python, LangChain, and OpenAI APIs.',
        detail: 'Led interactive laboratory sessions demonstrating Generative AI workflows, guiding students through the hands-on implementation of autonomous agents using Python and LangChain/OpenAI APIs.'
      },
      {
        summary: 'Evaluated complex code and provided feedback on prompt engineering and system design.',
        detail: 'Evaluated complex code-based assignments and final projects, providing granular feedback on prompt engineering, algorithm efficiency, and system design to foster technical growth.'
      },
      {
        summary: 'Refined lab materials for vector database integration and agentic state management.',
        detail: 'Collaborated with faculty to refine lab materials and debugging guides for agentic workflows, helping students overcome common challenges in vector database integration and state management.'
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
        summary: 'Spearheaded a full-stack Java/React app, boosting user engagement by 40%.',
        detail: 'Spearheaded the end-to-end development of a full-stack web application using Java, Spring Boot, and React.js, boosting user engagement by 40% through secure backend services and responsive UI design.'
      },
      {
        summary: 'Designed MySQL schemas via Hibernate and secure APIs, optimizing response times by 30% for 500+ users.',
        detail: 'Designed scalable MySQL schemas via Hibernate ORM and implemented secure RESTful APIs with CSRF protection and cookie-based authorization, optimizing response times by 30% for 500+ active users.'
      },
      {
        summary: 'Accelerated deployment cycles by 60% and achieved 99.9% availability migrating to AWS LightSail.',
        detail: 'Accelerated deployment cycles by 60% and achieved 99.9% system availability by migrating infrastructure from on-premises servers to AWS LightSail and establishing automated CI/CD pipelines.'
      }
    ]
  },
  {
    id: 'ltimindtree',
    role: 'Software Engineer',
    company: 'LTIMindtree',
    location: 'Remote, India',
    period: 'Sep 2021 – Aug 2023',
    points: [
      {
        summary: 'Developed backend microservices for a financial services client, increasing throughput by 18%.',
        detail: 'Developed robust backend microservices using Java, Spring Boot, and Hibernate for a financial services client, increasing system throughput by 18% for secure transaction processing.'
      },
      {
        summary: 'Orchestrated containerized Java services on Kubernetes/Azure, reducing downtime by 15%.',
        detail: 'Orchestrated containerized Java services using Kubernetes and deployed enterprise applications on Microsoft Azure, reducing downtime by 15% and ensuring high availability during peak financial operations.'
      },
      {
        summary: 'Integrated Kafka messaging for asynchronous inter-service communication across financial systems.',
        detail: 'Integrated Kafka messaging queues for asynchronous inter-service communication, improving data consistency and reliability across distributed financial reporting systems.'
      },
      {
        summary: 'Optimized PostgreSQL databases, decreasing query execution time by 28% for large-scale analytics.',
        detail: 'Optimized complex PostgreSQL databases utilizing indexing and query tuning strategies, decreasing query execution time by 28% for large-scale analytics datasets.'
      },
      {
        summary: 'Built user-centric React dashboards for financial reporting, cutting analysis time by 22%.',
        detail: 'Designed and developed user-centric frontend dashboards using React for financial reporting teams, accelerating operational data accessibility and reducing analysis time for key performance metrics by 22%.'
      }
    ]
  }
];
