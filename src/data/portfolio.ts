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
