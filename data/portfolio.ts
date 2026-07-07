export const siteConfig = {
  name: "Syed Kayes Mahmud",
  role: "Full Stack Developer",
  location: "Dhaka, Bangladesh",
  email: "syedkayesmahmud@gmail.com",
  bio: "I build scalable web applications — clean on the frontend, solid on the backend. Five years turning complex product ideas into fast, production-ready software.",
  github: "https://github.com/kayes-2003",
  linkedin: "https://www.linkedin.com/in/syed-kayes-mahmud-b722b5347/",
  twitter: "https://twitter.com/kayesmahmud",
  website: "https://kayes-portfolio-lemon.vercel.app",
  resumeUrl: "/Resume.pdf",
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
    title: "Dorja",
    description:
      "Hyperlocal delivery network connecting neighbourhood couriers already working for Daraz, CarryBee, Paperfly, and Steadfast with local customers — for surprise gift sends, supershop pickups, and same-area parcels, plus full customer/courier/admin dashboards.",
    tags: ["React", "FastAPI", "Python", "Supabase", "PostgreSQL", "Vercel"],
    liveUrl: "https://dorja-9n53.vercel.app/",
    githubUrl: "https://github.com/kayes-2003/dorja",
    featured: true,
    color: "#1F8A8C",
  },
];

export const experience = [
  {
    company: "Freelance — University & Agency",
    role: "Full Stack Developer",
    period: "Jan 2026 – Present",
    description:
      "Led migration of a legacy monolith to a microservices architecture using Node.js and Docker, reducing average API response time by 38%. Built a React/TypeScript dashboard used by 1,000+ monthly active users, improving page load speed by 45% through code-splitting and lazy loading. Designed RESTful APIs and PostgreSQL schemas for a payments module handling BDT 1M+ in monthly transactions. Mentored 3 junior developers and introduced a CI/CD pipeline that cut deployment time from 45 to 8 minutes.",
    skills: ["React", "TypeScript", "Node.js", "Docker", "PostgreSQL", "GitHub Actions"],
  },
  {
    company: "Alumni Association, Jahangirnagar University",
    role: "Full Stack Developer",
    period: "Jun 2025 – Dec 2025",
    description:
      "Developed and maintained customer-facing web applications using React, Express, and Supabase, architecting the platform to scale to 50,000+ users and validating performance with real production data. Implemented JWT-based authentication and role-based access control across 5 internal tools. Collaborated with product and design teams to ship 20+ features on a two-week sprint cycle, maintaining 90%+ test coverage with Jest and Cypress. Optimized SQL queries and added Redis caching, cutting average database load by 30%.",
    skills: ["React", "Express", "Supabase", "Redis", "Jest", "Cypress"],
  },
  {
    company: "Jahangirnagar University Science Club",
    role: "Junior Web Developer",
    period: "Aug 2024 – May 2025",
    description:
      "Built responsive websites and landing pages using HTML, CSS, and vanilla JavaScript for 15+ small projects. Assisted senior developers with bug fixes and QA testing across client React projects.",
    skills: ["HTML", "CSS", "JavaScript", "QA"],
  },
];

export const testimonials = [
  {
    quote:
      "Syed delivered a complex multi-tenant platform two weeks ahead of schedule. The code quality was exceptional — our team learned a lot from reading it.",
    name: "TariK Ahmed",
    role: "CTO, Dorja",
    initials: "TA",
  },
  {
    quote:
      "One of the best tellent I've worked with. Syed has a rare combination of deep technical skill and strong product instincts. He ships fast and gets things right.",
    name: "Kazi Arif",
    role: "General Secretary, Alumi Association",
    initials: "KA",
  },
];
