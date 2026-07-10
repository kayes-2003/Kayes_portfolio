export const siteConfig = {
  name: "Syed Kayes Mahmud",
  role: "Full Stack Developer",
  location: "Dhaka, Bangladesh",
  email: "syedkayesmahmud@gmail.com",
  bio: "Self-taught full-stack developer building and rigorously testing production-style web apps since 2023 — clean on the frontend, solid on the backend. Open to freelance and remote contract work — available immediately.",
  github: "https://github.com/kayes-2003",
  linkedin: "https://www.linkedin.com/in/syed-kayes-mahmud-b722b5347/",
  twitter: "https://twitter.com/kayesmahmud",
  website: "https://kayes-portfolio-lemon.vercel.app",
  resumeUrl: "/Resume.pdf",
  available: true, // shows "Available for work" badge
};

export const stats = [
  { value: "7+", label: "Projects Shipped" },
  { value: "2023", label: "Building Since" },
  { value: "6", label: "Testing Tools" },
];

// Skill levels removed — precise self-rated percentages (e.g. "100%", "98%") read as
// arbitrary rather than credible. Tags-only list matches the resume's skills section exactly.
export const skills = [
  {
    category: "Frontend",
    icon: "🖥️",
    items: ["React", "Next.js", "Redux", "Tailwind CSS", "Vite", "TypeScript"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: ["Node.js", "Express", "Django", "REST APIs", "GraphQL"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    category: "Testing & Performance",
    icon: "⚡",
    items: ["Artillery", "Lighthouse", "GTmetrix", "OWASP ZAP", "SSL Labs", "UptimeRobot", "Jest", "Cypress"],
  },
  {
    category: "DevOps & Cloud",
    icon: "☁️",
    items: ["Docker", "AWS (EC2, S3, Lambda)", "GitHub Actions", "Vercel"],
  },
];

export const projects = [
  {
    title: "University Sports Live Score Platform",
    description:
      "Real-time sports score tracking platform for university tournaments with live match updates, event timelines, player/team management, and an admin dashboard. Load-tested with Artillery (1,000+ simulated concurrent connections), manually validated with 100+ real users, and monitored continuously via UptimeRobot.",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL", "Cloudinary", "TypeScript"],
    liveUrl: "https://sports-platform-qbxi.vercel.app/",
    githubUrl: "https://github.com/kayes-2003/sports-platform",
    featured: true,
    color: "#185FA5",
  },
  {
    title: "Alumni Management Platform",
    description:
      "Customer-facing web application with JWT-based authentication and role-based access control across 5 internal tools. Database layer architected to scale to 50,000+ user records; functionality and performance validated with 300 real test records. Optimized SQL queries and added Redis caching, cutting average database load by 30% under test conditions.",
    tags: ["React", "Express", "Supabase", "Redis", "Jest", "Cypress"],
    liveUrl: "https://alumni-system-livid.vercel.app/",
    githubUrl: "https://github.com/kayes-2003/alumni-system",
    featured: true,
    color: "#0F6E56",
  },
  {
    title: "La Maison — Fine Dining Web App",
    description:
      "Restaurant platform with real-time order tracking, admin dashboard, and customer-facing menu. Role-based access (admin/customer), live delivery status via Supabase Realtime, hero carousel controlled from the admin panel, wishlist, per-item ratings, and sales analytics.",
    tags: ["React 18", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Tailwind CSS", "Supabase Realtime", "Row Level Security"],
    liveUrl: "https://la-maison-web.vercel.app/",
    githubUrl: "https://github.com/kayes-2003/La_Maison",
    featured: true,
    color: "#c9a96e",
  },
  {
    title: "BlogSphere",
    description:
      "Full-stack blogging platform with secure auth, role-based access (reader · author · admin), rich editor with cover image upload, categories, and comment moderation.",
    tags: ["React", "Tailwind CSS", "Supabase", "React Router", "Vite"],
    liveUrl: "https://blogsphere-t5id.vercel.app/",
    githubUrl: "https://github.com/kayes-2003/blogsphere",
    featured: false,
    color: "#0F6E56",
  },
  {
    title: "Dorja",
    description:
      "Local delivery app UI covering order placement, tracking, and a customer-facing dashboard.",
    tags: ["React", "Tailwind CSS", "Supabase", "PostgreSQL", "Tailwind CSS", "Supabase Realtime", "Row Level Security"],
    liveUrl: "https://dorja.vercel.app/",
    githubUrl: "https://github.com/kayes-2003/dorja",
    featured: false,
    color: "#7C3AED",
  },
  {
    title: "Taco Shop",
    description:
      "React-based food-ordering UI with menu browsing and cart functionality.",
    tags: ["React"],
    liveUrl: "https://taco-shop-six.vercel.app/",
    githubUrl: "https://github.com/kayes-2003/taco-shop",
    featured: false,
    color: "#DB2777",
  },
];

// All projects above are performance- and security-tested with Lighthouse, GTmetrix,
// OWASP ZAP, and SSL Labs (per project, as applicable) — same claim as the resume.

export const experience = [
  {
    company: "Jahangirnagar University Science Club",
    role: "Web Contributor",
    period: "Aug 2024 – May 2025",
    description:
      "Built responsive websites and landing pages using HTML, CSS, and vanilla JavaScript for 15+ small club projects. Assisted with bug fixes and QA testing across club React projects, gaining hands-on experience with real-world collaborative development.",
    skills: ["HTML", "CSS", "JavaScript", "React", "QA"],
  },
];

export const education = {
  degree: "B.Sc. in Statistics and Data Science",
  school: "Jahangirnagar University",
  period: "2023 – Expected Dec 2026",
};

export const selfDirectedLearning = [
  {
    title: "Full-stack web development",
    detail: "HTML, CSS, JavaScript, React, Node.js — structured video curricula from Apna College, freeCodeCamp.org, CodeWithHarry, and BroCode (YouTube).",
  },
  {
    title: "Core web fundamentals & modern frontend practice",
    detail: "MDN Web Docs, W3Schools, freeCodeCamp.org, official React/Vite docs, Frontend Mentor, CSS-Tricks, Piccalilli, and Can I Use.",
  },
];

