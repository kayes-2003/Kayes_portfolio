// ============================================================
// PORTFOLIO DATA — edit everything here
// ============================================================

export const siteConfig = {
  name: "Alex Chen",
  role: "Full Stack Developer",
  location: "San Francisco, CA",
  email: "alex@alexchen.dev",
  bio: "I build scalable web applications — clean on the frontend, solid on the backend. Five years turning complex product ideas into fast, production-ready software.",
  github: "https://github.com/alexchen",
  linkedin: "https://linkedin.com/in/alexchen",
  twitter: "https://twitter.com/alexchen",
  website: "https://alexchen.dev",
  resumeUrl: "/resume.pdf",
  available: true, // shows "Available for work" badge
};

export const stats = [
  { value: "30+", label: "Projects shipped" },
  { value: "5 yrs", label: "Experience" },
  { value: "50M+", label: "Users served" },
  { value: "12", label: "OSS contributions" },
];

export const skills = [
  {
    category: "Frontend",
    icon: "🖥️",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Svelte", level: 70 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Express", level: 88 },
      { name: "FastAPI", level: 80 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    items: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
      { name: "Prisma", level: 82 },
      { name: "Supabase", level: 78 },
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: "☁️",
    items: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 70 },
      { name: "GitHub Actions", level: 88 },
      { name: "Vercel / Netlify", level: 92 },
    ],
  },
];

export const projects = [
  {
    title: "SaaS Analytics Dashboard",
    description:
      "Real-time analytics platform with role-based access control, multi-tenant architecture, and live WebSocket dashboards. Serves 200+ enterprise clients.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/alexchen/saas-dashboard",
    featured: true,
    color: "#0070F3",
  },
  {
    title: "AI Chat Application",
    description:
      "Full-stack AI assistant with streaming responses, persistent conversation history, file uploads, and RAG-based document search.",
    tags: ["React", "FastAPI", "Python", "OpenAI", "Pinecone"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/alexchen/ai-chat",
    featured: true,
    color: "#7C3AED",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Headless commerce solution with custom CMS, Stripe payments, inventory management, and a mobile-first storefront. $2M+ in GMV.",
    tags: ["Next.js", "Stripe", "Sanity CMS", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/alexchen/ecommerce",
    featured: true,
    color: "#059669",
  },
  {
    title: "DevOps Monitoring Tool",
    description:
      "Infrastructure monitoring dashboard with Prometheus metrics, alerting, log aggregation, and Slack/PagerDuty integrations.",
    tags: ["React", "Go", "Prometheus", "Grafana", "Docker"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/alexchen/devops-monitor",
    featured: false,
    color: "#EA580C",
  },
];

export const experience = [
  {
    company: "Stripe",
    role: "Senior Full Stack Engineer",
    period: "2022 – Present",
    description:
      "Building payment flow UI and backend APIs serving 50M+ transactions per month. Led migration from monolith to microservices, reducing latency by 40%.",
    skills: ["React", "Node.js", "Go", "PostgreSQL", "Kubernetes"],
  },
  {
    company: "Vercel",
    role: "Full Stack Developer",
    period: "2020 – 2022",
    description:
      "Contributed to the Next.js edge runtime and built internal tooling used by 3,000+ engineers. Shipped the dashboard redesign used by 500K+ developers.",
    skills: ["Next.js", "TypeScript", "Rust", "Redis"],
  },
  {
    company: "Acme Inc.",
    role: "Frontend Engineer",
    period: "2019 – 2020",
    description:
      "Led a team of 4 to redesign the core product from a jQuery monolith to a React + GraphQL architecture. Improved page load time by 65%.",
    skills: ["React", "GraphQL", "Apollo", "Styled Components"],
  },
];

export const testimonials = [
  {
    quote:
      "Alex delivered a complex multi-tenant platform two weeks ahead of schedule. The code quality was exceptional — our team learned a lot from reading it.",
    name: "James Kim",
    role: "CTO, StartupXYZ",
    initials: "JK",
  },
  {
    quote:
      "One of the best engineers I've worked with. Alex has a rare combination of deep technical skill and strong product instincts. He ships fast and gets things right.",
    name: "Sarah Park",
    role: "Engineering Manager, Stripe",
    initials: "SP",
  },
];
