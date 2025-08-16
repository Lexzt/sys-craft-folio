-- Seed initial content for skill categories, skills, and projects

-- Skill categories
insert into public.skill_categories (slug, name, sort_order) values
  ('backend','Backend',1),
  ('data','Data',2),
  ('cloud','Cloud',3),
  ('platform-infra','Platform/Infra',4),
  ('dx','DX',5),
  ('leadership','Leadership',6);

-- Skills
insert into public.skills (name, level) values
  ('Java/Kotlin','Expert'),
  ('Spring Boot','Expert'),
  ('Node.js','Advanced'),
  ('Python','Advanced'),
  ('Go','Intermediate'),
  ('PostgreSQL','Advanced'),
  ('Redis','Advanced'),
  ('Apache Kafka','Advanced'),
  ('ClickHouse','Intermediate'),
  ('Elasticsearch','Intermediate'),
  ('AWS','Advanced'),
  ('GCP','Intermediate'),
  ('Azure','Beginner'),
  ('Kubernetes','Advanced'),
  ('Docker','Expert'),
  ('Terraform','Advanced'),
  ('Istio','Intermediate'),
  ('Jenkins','Advanced'),
  ('GitHub Actions','Advanced'),
  ('Test Strategy','Advanced'),
  ('Monitoring & Observability','Advanced'),
  ('Team Mentoring','Advanced'),
  ('Technical Architecture','Advanced'),
  ('Incident Response','Advanced'),
  ('Cross-team Collaboration','Advanced');

-- Map skills to categories
insert into public.skill_category_skills (category_id, skill_id) values
  ((select id from public.skill_categories where slug='backend'), (select id from public.skills where name='Java/Kotlin')),
  ((select id from public.skill_categories where slug='backend'), (select id from public.skills where name='Spring Boot')),
  ((select id from public.skill_categories where slug='backend'), (select id from public.skills where name='Node.js')),
  ((select id from public.skill_categories where slug='backend'), (select id from public.skills where name='Python')),
  ((select id from public.skill_categories where slug='backend'), (select id from public.skills where name='Go')),
  ((select id from public.skill_categories where slug='data'), (select id from public.skills where name='PostgreSQL')),
  ((select id from public.skill_categories where slug='data'), (select id from public.skills where name='Redis')),
  ((select id from public.skill_categories where slug='data'), (select id from public.skills where name='Apache Kafka')),
  ((select id from public.skill_categories where slug='data'), (select id from public.skills where name='ClickHouse')),
  ((select id from public.skill_categories where slug='data'), (select id from public.skills where name='Elasticsearch')),
  ((select id from public.skill_categories where slug='cloud'), (select id from public.skills where name='AWS')),
  ((select id from public.skill_categories where slug='cloud'), (select id from public.skills where name='GCP')),
  ((select id from public.skill_categories where slug='cloud'), (select id from public.skills where name='Azure')),
  ((select id from public.skill_categories where slug='platform-infra'), (select id from public.skills where name='Kubernetes')),
  ((select id from public.skill_categories where slug='platform-infra'), (select id from public.skills where name='Docker')),
  ((select id from public.skill_categories where slug='platform-infra'), (select id from public.skills where name='Terraform')),
  ((select id from public.skill_categories where slug='platform-infra'), (select id from public.skills where name='Istio')),
  ((select id from public.skill_categories where slug='dx'), (select id from public.skills where name='Jenkins')),
  ((select id from public.skill_categories where slug='dx'), (select id from public.skills where name='GitHub Actions')),
  ((select id from public.skill_categories where slug='dx'), (select id from public.skills where name='Test Strategy')),
  ((select id from public.skill_categories where slug='dx'), (select id from public.skills where name='Monitoring & Observability')),
  ((select id from public.skill_categories where slug='leadership'), (select id from public.skills where name='Team Mentoring')),
  ((select id from public.skill_categories where slug='leadership'), (select id from public.skills where name='Technical Architecture')),
  ((select id from public.skill_categories where slug='leadership'), (select id from public.skills where name='Incident Response')),
  ((select id from public.skill_categories where slug='leadership'), (select id from public.skills where name='Cross-team Collaboration'));

-- Projects
insert into public.projects (title, description, problem, approach, outcome, tech_stack, links, image_url, is_featured, is_lead) values
  (
    'High-Performance Microservices Platform',
    'Architected and built a distributed microservices platform handling 100k+ requests per second',
    'Legacy monolithic application couldn''t scale to meet growing user demands, causing frequent downtime and slow response times',
    'Designed event-driven microservices architecture with CQRS pattern, implemented using Spring Boot, Kafka, and Kubernetes',
    'Achieved 99.99% uptime, reduced P99 latency from 2s to 200ms, and enabled horizontal scaling to support 10x traffic growth',
    ARRAY['Java','Spring Boot','Apache Kafka','PostgreSQL','Redis','Kubernetes','Istio'],
    '{"github": "https://github.com/alexchen/microservices-platform"}'::jsonb,
    '/src/assets/project-architecture.jpg',
    true,
    true
  ),
  (
    'Real-Time Analytics Engine',
    'Built a high-throughput analytics engine for processing millions of events per minute',
    'Existing batch processing system had 6-hour delays, preventing real-time business insights',
    'Implemented stream processing using Apache Flink with ClickHouse for analytical queries and Grafana for visualization',
    'Reduced data latency from hours to seconds, enabled real-time alerting, and improved decision-making speed by 80%',
    ARRAY['Apache Flink','ClickHouse','Apache Kafka','Grafana','Docker','Terraform'],
    '{"github": "https://github.com/alexchen/analytics-engine", "demo": "https://demo.analytics.example.com"}'::jsonb,
    '/src/assets/project-architecture.jpg',
    true,
    false
  ),
  (
    'Developer Productivity Platform',
    'Created internal tools that improved developer velocity by 40% across engineering teams',
    'Developers spent too much time on repetitive tasks like deployment, testing, and environment setup',
    'Built automated CI/CD pipelines, one-click environment provisioning, and integrated testing frameworks',
    'Reduced deployment time by 85%, decreased environment setup from 2 days to 10 minutes, improved test coverage to 90%',
    ARRAY['Jenkins','Terraform','Ansible','Docker','AWS','Python','Bash'],
    '{"github": "https://github.com/alexchen/dev-platform"}'::jsonb,
    '/src/assets/project-architecture.jpg',
    true,
    true
  );
