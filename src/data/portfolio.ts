export interface Experience {
  id: string;
  company: string;
  role: string;
  type: 'IC' | 'Lead';
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  approach: string;
  outcome: string;
  techStack: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  image: string;
  featured: boolean;
  leadership?: boolean;
}

export interface Skill {
  name: string;
  category: 'Backend' | 'Data' | 'Cloud' | 'Platform/Infra' | 'DX' | 'Leadership';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "TechCorp Inc",
    role: "Senior Software Engineer & Tech Lead",
    type: "Lead",
    duration: "2022 - Present",
    location: "San Francisco, CA",
    description: "Leading a team of 5 engineers while maintaining hands-on technical contributions to high-scale distributed systems.",
    achievements: [
      "Reduced P99 latency by 40% through database optimization and caching strategies",
      "Led migration to microservices architecture, improving system reliability by 99.9%",
      "Mentored 3 junior engineers, with 2 receiving promotions within 12 months",
      "Cut infrastructure costs by 30% through containerization and auto-scaling implementation"
    ],
    skills: ["Java", "Spring Boot", "Kubernetes", "PostgreSQL", "Redis", "Team Leadership"]
  },
  {
    id: "2",
    company: "StartupXYZ",
    role: "Software Engineer",
    type: "IC",
    duration: "2020 - 2022",
    location: "Austin, TX",
    description: "Full-stack development focused on building scalable web applications and APIs.",
    achievements: [
      "Built real-time analytics dashboard handling 1M+ daily events",
      "Increased API throughput by 60% through async processing and connection pooling",
      "Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes",
      "Decreased bug reports by 45% through comprehensive testing strategy"
    ],
    skills: ["Node.js", "React", "TypeScript", "MongoDB", "AWS", "Docker"]
  },
  {
    id: "3",
    company: "DevSolutions Ltd",
    role: "Junior Software Developer",
    type: "IC",
    duration: "2019 - 2020",
    location: "Remote",
    description: "Frontend and backend development with focus on learning modern development practices.",
    achievements: [
      "Delivered 15+ features for e-commerce platform serving 10k+ users",
      "Improved page load times by 35% through code optimization and lazy loading",
      "Contributed to open-source projects with 500+ GitHub stars",
      "Achieved 95% test coverage across all modules"
    ],
    skills: ["JavaScript", "Vue.js", "Python", "Flask", "MySQL", "Git"]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "High-Performance Microservices Platform",
    description: "Architected and built a distributed microservices platform handling 100k+ requests per second",
    problem: "Legacy monolithic application couldn't scale to meet growing user demands, causing frequent downtime and slow response times",
    approach: "Designed event-driven microservices architecture with CQRS pattern, implemented using Spring Boot, Kafka, and Kubernetes",
    outcome: "Achieved 99.99% uptime, reduced P99 latency from 2s to 200ms, and enabled horizontal scaling to support 10x traffic growth",
    techStack: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "Redis", "Kubernetes", "Istio"],
    links: {
      github: "https://github.com/alexchen/microservices-platform"
    },
    image: "/src/assets/project-architecture.jpg",
    featured: true,
    leadership: true
  },
  {
    id: "2",
    title: "Real-Time Analytics Engine",
    description: "Built a high-throughput analytics engine for processing millions of events per minute",
    problem: "Existing batch processing system had 6-hour delays, preventing real-time business insights",
    approach: "Implemented stream processing using Apache Flink with ClickHouse for analytical queries and Grafana for visualization",
    outcome: "Reduced data latency from hours to seconds, enabled real-time alerting, and improved decision-making speed by 80%",
    techStack: ["Apache Flink", "ClickHouse", "Apache Kafka", "Grafana", "Docker", "Terraform"],
    links: {
      github: "https://github.com/alexchen/analytics-engine",
      demo: "https://demo.analytics.example.com"
    },
    image: "/src/assets/project-architecture.jpg",
    featured: true
  },
  {
    id: "3",
    title: "Developer Productivity Platform",
    description: "Created internal tools that improved developer velocity by 40% across engineering teams",
    problem: "Developers spent too much time on repetitive tasks like deployment, testing, and environment setup",
    approach: "Built automated CI/CD pipelines, one-click environment provisioning, and integrated testing frameworks",
    outcome: "Reduced deployment time by 85%, decreased environment setup from 2 days to 10 minutes, improved test coverage to 90%",
    techStack: ["Jenkins", "Terraform", "Ansible", "Docker", "AWS", "Python", "Bash"],
    links: {
      github: "https://github.com/alexchen/dev-platform"
    },
    image: "/src/assets/project-architecture.jpg",
    featured: true,
    leadership: true
  }
];

export const skills: Skill[] = [
  // Backend
  { name: "Java/Kotlin", category: "Backend", level: "Expert" },
  { name: "Spring Boot", category: "Backend", level: "Expert" },
  { name: "Node.js", category: "Backend", level: "Advanced" },
  { name: "Python", category: "Backend", level: "Advanced" },
  { name: "Go", category: "Backend", level: "Intermediate" },
  
  // Data
  { name: "PostgreSQL", category: "Data", level: "Advanced" },
  { name: "Redis", category: "Data", level: "Advanced" },
  { name: "Apache Kafka", category: "Data", level: "Advanced" },
  { name: "ClickHouse", category: "Data", level: "Intermediate" },
  { name: "Elasticsearch", category: "Data", level: "Intermediate" },
  
  // Cloud
  { name: "AWS", category: "Cloud", level: "Advanced" },
  { name: "GCP", category: "Cloud", level: "Intermediate" },
  { name: "Azure", category: "Cloud", level: "Beginner" },
  
  // Platform/Infra
  { name: "Kubernetes", category: "Platform/Infra", level: "Advanced" },
  { name: "Docker", category: "Platform/Infra", level: "Expert" },
  { name: "Terraform", category: "Platform/Infra", level: "Advanced" },
  { name: "Istio", category: "Platform/Infra", level: "Intermediate" },
  
  // DX
  { name: "Jenkins", category: "DX", level: "Advanced" },
  { name: "GitHub Actions", category: "DX", level: "Advanced" },
  { name: "Test Strategy", category: "DX", level: "Advanced" },
  { name: "Monitoring & Observability", category: "DX", level: "Advanced" },
  
  // Leadership
  { name: "Team Mentoring", category: "Leadership", level: "Advanced" },
  { name: "Technical Architecture", category: "Leadership", level: "Advanced" },
  { name: "Incident Response", category: "Leadership", level: "Advanced" },
  { name: "Cross-team Collaboration", category: "Leadership", level: "Advanced" }
];