// ─── Portfolio Data ───────────────────────────────────────────────────────────

export const personal = {
  name: "Rajesh Anuragi",
  role: "Fullstack Developer",
  taglines: [
    "Fullstack Developer",
    "UI Developer",
    "React & Node.js Engineer",
    "Automation Associate",
    "Problem Solver",
  ],
  bio: "I'm a student and developer with a strong interest in full-stack development and building practical, user-focused applications. I've completed a two-year full-stack program and am currently pursuing a BSc in Information Sciences at Azim Premji University — combining academic learning with hands-on work to build efficient, scalable, and user-friendly solutions.",
  email: "rajeshanuragi2003@gmail.com",
  email2: "anuragi.rajesh2003@gmail.com",
  github: "https://github.com/AnuragiRajesh",
  linkedin: "https://www.linkedin.com/in/rajesh-anuragi-976256223/",
  twitter: "",
  resume: "/assets/Rajesh Anuragi.pdf",
  location: "Bangalore, India",
  availability: "Open to opportunities",
  avatar: "/assets/profile.jpeg",
};

export const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "8+", label: "Projects Shipped" },
  { value: "3",  label: "Companies" },
  { value: "∞",  label: "Lines of Code" },
];

export const skills = [
  // Frontend
  { name: "React / Next.js",  category: "Frontend",  level: 90 },
  { name: "TypeScript",       category: "Frontend",  level: 82 },
  { name: "Tailwind CSS",     category: "Frontend",  level: 88 },
  { name: "AngularJS",        category: "Frontend",  level: 70 },
  // Backend
  { name: "Node.js / Express",category: "Backend",   level: 78 },
  { name: "Python",           category: "Backend",   level: 80 },
  { name: "PostgreSQL",       category: "Backend",   level: 75 },
  { name: "REST APIs",        category: "Backend",   level: 85 },
  // DevOps / Tools
  { name: "Git",              category: "DevOps",    level: 88 },
  { name: "Figma",            category: "DevOps",    level: 75 },
  { name: "Conda",            category: "DevOps",    level: 65 },
  { name: "Linux / Shell",    category: "DevOps",    level: 70 },
  // Automation
  { name: "Pandas",           category: "Automation", level: 82 },
  { name: "Python Scripting", category: "Automation", level: 80 },
];

export const experience = [
  {
    id: 1,
    type: "work" as const,
    company: "Amaranth Medical Analytics",
    role: "Part-time Fullstack Developer",
    period: "Dec 2024 – Feb 2026",
    duration: "~1 yr",
    location: "Bangalore (Part-time)",
    description:
      "Working part-time while attending college, I deliver responsive UIs, implement features, and fix UI issues to improve overall user experience. I use Figma for designing UI components and logos. Over time I learned Conda and built APIs with PostgreSQL database functionality, and wrote helper scripts for efficiently managing datasets and patients within projects — enabling the testing team to work more efficiently.",
    highlights: [
      "Built responsive UIs and improved user experience",
      "Designed UI components and logos using Figma",
      "Built APIs with PostgreSQL using Conda environment",
      "Wrote helper scripts for dataset and patient management",
    ],
    tech: ["React", "PostgreSQL", "Python", "Figma", "Conda"],
    color: "#00f5ff",
  },
  {
    id: 2,
    type: "work" as const,
    company: "One Paper Lane",
    role: "UI Developer",
    period: "Jul 2023 – Dec 2024",
    duration: "1 yr 6 mos",
    location: "Bangalore",
    description:
      "Converted an AngularJS application to ReactJS while keeping the front-end design consistent. Added new features to the UI, enhanced usability, and integrated APIs to ensure smooth communication between UI and backend. Ran database queries to verify data displayed on the front end, improving debugging and data accuracy.",
    highlights: [
      "Migrated AngularJS app to ReactJS",
      "Integrated REST APIs with the front end",
      "Ran DB queries to debug and verify UI data accuracy",
      "Added new features and improved overall usability",
    ],
    tech: ["React", "AngularJS", "JavaScript", "REST APIs", "SQL"],
    color: "#a855f7",
  },
  {
    id: 3,
    type: "internship" as const,
    company: "General Datatech India Pvt. Ltd. (GDT)",
    role: "Automation Associate Intern",
    period: "Jun 2026 – Jul 2026",
    duration: "2 mos",
    location: "Bangalore",
    description:
      "Worked on internal automation projects for the company's use cases. Primarily used Pandas to automate data workflows and build scripts that streamlined internal processes.",
    highlights: [
      "Automated internal data workflows using Pandas",
      "Built Python scripts for company use cases",
      "Gained hands-on experience with real-world automation tasks",
    ],
    tech: ["Python", "Pandas", "Automation", "Scripting"],
    color: "#f472b6",
  },
];

export const education = [
  {
    id: 1,
    institution: "Azim Premji University",
    degree: "BSc Honours — Information Sciences",
    period: "2024 – 2028",
    location: "Bangalore, India",
    description:
      "APU emphasises liberal arts, critical thinking, interdisciplinary learning, and practical engagement. Strengthening understanding of computer science concepts, problem-solving, and software development practices.",
    color: "#4ade80",
  },
  {
    id: 2,
    institution: "Full-Stack Development Program",
    degree: "Two-Year Full-Stack Development Course",
    period: "2022 – 2024",
    location: "Bangalore, India",
    description:
      "Completed a comprehensive two-year program covering front-end and back-end technologies — modern UI frameworks, APIs, and databases. Built a solid foundation in designing, developing, and maintaining end-to-end applications.",
    color: "#6366f1",
  },
];

export type ProjectTag = "All" | "Fullstack" | "Frontend" | "Backend" | "Automation";

export const projects = [
  {
    id: 1,
    title: "DevFlow — Project Management SaaS",
    description:
      "A full-featured project management tool with real-time collaboration, kanban boards, sprint tracking and Slack integration. Built for remote engineering teams.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebSockets"],
    tags: ["Fullstack"] as ProjectTag[],
    github: "https://github.com/AnuragiRajesh",
    live: "",
    featured: true,
    gradient: "from-cyan-500/20 to-blue-500/20",
    accent: "#00f5ff",
  },
  {
    id: 2,
    title: "ShopSphere — E-Commerce Platform",
    description:
      "Multi-vendor e-commerce platform with dynamic storefronts, Stripe payments, inventory management and an admin analytics dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    tags: ["Fullstack"] as ProjectTag[],
    github: "https://github.com/AnuragiRajesh",
    live: "",
    featured: true,
    gradient: "from-purple-500/20 to-pink-500/20",
    accent: "#a855f7",
  },
  {
    id: 3,
    title: "AutoQA — Test Automation Framework",
    description:
      "An in-house test automation framework built on Playwright, enabling parallel cross-browser testing with detailed HTML reports and CI/CD pipeline integration.",
    tech: ["Python", "Playwright", "FastAPI", "Docker", "GitHub Actions"],
    tags: ["Automation", "Backend"] as ProjectTag[],
    github: "https://github.com/AnuragiRajesh",
    live: "",
    featured: true,
    gradient: "from-pink-500/20 to-orange-500/20",
    accent: "#f472b6",
  },
  {
    id: 4,
    title: "PulseAPI — Analytics REST Service",
    description:
      "High-performance analytics REST API handling 10k+ req/min with rate limiting, JWT auth, caching layer and OpenAPI documentation.",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis", "Swagger"],
    tags: ["Backend"] as ProjectTag[],
    github: "https://github.com/AnuragiRajesh",
    live: "",
    featured: false,
    gradient: "from-green-500/20 to-cyan-500/20",
    accent: "#4ade80",
  },
  {
    id: 5,
    title: "PortalUI — Component Design System",
    description:
      "A custom React component library with 40+ accessible components, Storybook documentation, dark/light theme support, and full TypeScript types.",
    tech: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
    tags: ["Frontend"] as ProjectTag[],
    github: "https://github.com/AnuragiRajesh",
    live: "",
    featured: false,
    gradient: "from-blue-500/20 to-purple-500/20",
    accent: "#6366f1",
  },
  {
    id: 6,
    title: "DataHarvest — Web Scraping Pipeline",
    description:
      "Automated data collection pipeline using Selenium and BeautifulSoup. Processes 50k+ records daily into structured PostgreSQL datasets.",
    tech: ["Python", "Selenium", "BeautifulSoup", "PostgreSQL", "Celery"],
    tags: ["Automation", "Backend"] as ProjectTag[],
    github: "https://github.com/AnuragiRajesh",
    live: "",
    featured: false,
    gradient: "from-orange-500/20 to-red-500/20",
    accent: "#f97316",
  },
  {
    id: 7,
    title: "ChatNest — Real-time Messaging App",
    description:
      "End-to-end encrypted messaging application with rooms, file sharing, read receipts and push notifications. Mobile-first responsive design.",
    tech: ["Next.js", "Socket.io", "Node.js", "MongoDB", "AWS S3"],
    tags: ["Fullstack"] as ProjectTag[],
    github: "https://github.com/AnuragiRajesh",
    live: "",
    featured: false,
    gradient: "from-teal-500/20 to-green-500/20",
    accent: "#14b8a6",
  },
  {
    id: 8,
    title: "InfraDash — DevOps Monitoring Dashboard",
    description:
      "Real-time infrastructure monitoring dashboard visualising server metrics, container health, and deployment pipelines with alert notifications.",
    tech: ["React", "Python", "Docker", "Prometheus", "Grafana"],
    tags: ["Fullstack", "Backend"] as ProjectTag[],
    github: "https://github.com/AnuragiRajesh",
    live: "",
    featured: false,
    gradient: "from-violet-500/20 to-cyan-500/20",
    accent: "#8b5cf6",
  },
];
