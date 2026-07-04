// ============================================================
// PORTFOLIO DATA — edit everything here
// ============================================================

export const siteConfig = {
  name: "Syed Kayes Mahmud",
  role: "Full Stack Developer",
  location: "Dhaka, Bangladesh",
  email: "syedkayesmahmud@gmail.com",
  bio: "I build scalable web applications — clean on the frontend, solid on the backend. Five years turning complex product ideas into fast, production-ready software.",
  github: "https://github.com/kayes-2003",
  linkedin: "https://www.linkedin.com/in/syed-kayes-mahmud-b722b5347/",
  twitter: "https://twitter.com/kayesmahmud",
  website: "https://alexchen.dev",
  resumeUrl: "/resume.pdf",
  available: true, // shows "Available for work" badge
};

export const stats = [
  { value: "30+", label: "Projects shipped" },
  { value: "2 yrs", label: "Experience" },
  { value: "10+", label: "Users served" },
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
      { name: "Supabase", level: 100 },
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
      { name: "Vercel / Netlify", level: 98},
    ],
  },
];

export const projects = [
  {
  title: "La Maison — Fine Dining Web App",
  description:
    "Fully web-controlled restaurant platform with real-time order tracking, admin dashboard, and customer-facing menu. Features role-based access (admin/customer), live delivery status updates via Supabase Realtime, Supabase Auth, hero carousel controlled from the admin panel, product wishlist, per-item star ratings, social sharing, sales analytics.",
  tags: ["React 18", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Tailwind CSS", "Supabase Realtime", "Row Level Security"],
  liveUrl: "https://la-maison-web.vercel.app/",
  githubUrl: "https://github.com/kayes-2003/La_Maison",
  featured: true,
  color: "#c9a96e",   // La Maison brand gold
},
  {
  title: "BlogSphere",
  description:
    "Full-stack blogging platform with secure auth, role-based access (reader · author · admin), rich editor with cover image upload, categories, comment moderation, and author dashboard.",
  tags: ["React", "Tailwind CSS", "Supabase", "React Router", "Vite"],
  liveUrl: "https://blogsphere-t5id.vercel.app/",
  githubUrl: "https://github.com/kayes-2003/blogsphere",
  featured: true,
  color: "#0F6E56",
},
  {
  title: "University Central Sports Platform",
  description:
    "Full-stack live sports update platform with real-time scoreboards, event timelines, player and team management, admin dashboard, Cloudinary image uploads, and role-based access — built with Next.js, Node.js, PostgreSQL (Neon), and Socket.io.",
  tags: ["Next.js", "Node.js", "PostgreSQL", "Socket.io", "Cloudinary", "TypeScript"],
  liveUrl: "https://sports-platform-qbxi.vercel.app/",
  githubUrl: "https://github.com/kayes-2003/sports-platform",
  featured: true,
  color: "#185FA5",
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
