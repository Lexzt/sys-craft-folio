export interface Skill {
  name: string;
  category: 'Backend' | 'Data' | 'Cloud' | 'Platform/Infra' | 'DX' | 'Leadership';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

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

