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
  { value: "3+", label: "Years Experience" },
  { value: "13+", label: "Projects Shipped" },
  { value: "3",   label: "Roles" },
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
    title: "Lead Management System",
    description:
      "A full-stack lead management system for sales teams. Admins can create and assign leads, while members manage their own pipeline — with notes, activity logs, and real-time status tracking.",
    tech: ["React", "Node.js", "MongoDB", "REST APIs"],
    tags: ["Fullstack"] as ProjectTag[],
    github: "https://github.com/AnuragiRajesh/Lead-Management",
    live: "https://lead-management-omega-cyan.vercel.app",
    featured: true,
    gradient: "from-cyan-500/20 to-blue-500/20",
    accent: "#00f5ff",
  },
  {
    id: 2,
    title: "Library Management System",
    description:
      "A fullstack library app built with Angular, Express.js, and MongoDB. Students can browse, purchase, and return books, while admins can add or delete titles from the catalogue.",
    tech: ["Angular", "Express.js", "MongoDB", "Node.js"],
    tags: ["Fullstack"] as ProjectTag[],
    github: "https://github.com/AnuragiRajesh/Library",
    live: "",
    featured: true,
    gradient: "from-purple-500/20 to-pink-500/20",
    accent: "#a855f7",
  },
  {
    id: 3,
    title: "E-Commerce App",
    description:
      "A backend-focused e-commerce application built with Node.js and Prisma ORM. Includes product management, order handling, middleware layers, and a PostgreSQL database.",
    tech: ["Node.js", "Prisma", "PostgreSQL", "Middleware"],
    tags: ["Backend"] as ProjectTag[],
    github: "https://github.com/AnuragiRajesh/Ecommerce-app-",
    live: "",
    featured: true,
    gradient: "from-pink-500/20 to-orange-500/20",
    accent: "#f472b6",
  },
  {
    id: 4,
    title: "Leave Management Portal",
    description:
      "A frontend application for managing employee leaves. Employees can apply for leave and track status, while managers can approve or reject requests through a clean Angular interface.",
    tech: ["Angular", "TypeScript", "REST APIs"],
    tags: ["Frontend"] as ProjectTag[],
    github: "https://github.com/AnuragiRajesh/Leave-Management",
    live: "",
    featured: false,
    gradient: "from-green-500/20 to-teal-500/20",
    accent: "#4ade80",
  },
  {
    id: 5,
    title: "Gold Loan Dashboard",
    description:
      "A web application for managing gold loan records. Built with HTML and JavaScript, it provides a clean dashboard UI for tracking loan amounts, customer details, and repayment status.",
    tech: ["HTML", "JavaScript", "CSS"],
    tags: ["Frontend"] as ProjectTag[],
    github: "https://github.com/AnuragiRajesh/Gold_Loan_Dashboard",
    live: "",
    featured: false,
    gradient: "from-yellow-500/20 to-orange-500/20",
    accent: "#f59e0b",
  },
  {
    id: 6,
    title: "VayuWatch — Air Quality Monitor",
    description:
      "An air quality monitoring app for Indian cities. Displays real-time AQI data with an urban life theme, helping users stay aware of pollution levels in their city.",
    tech: ["Dart", "Flutter", "APIs"],
    tags: ["Frontend"] as ProjectTag[],
    github: "https://github.com/AnuragiRajesh/Vayuwatch",
    live: "",
    featured: false,
    gradient: "from-sky-500/20 to-cyan-500/20",
    accent: "#38bdf8",
  },
  {
    id: 7,
    title: "ChatApp",
    description:
      "A real-time chat application built with TypeScript and SignalR for WebSocket-based messaging. Supports multiple users with live message delivery and a clean chat interface.",
    tech: ["TypeScript", "SignalR", "WebSockets"],
    tags: ["Fullstack"] as ProjectTag[],
    github: "https://github.com/AnuragiRajesh/ChatApp",
    live: "",
    featured: false,
    gradient: "from-violet-500/20 to-purple-500/20",
    accent: "#8b5cf6",
  },
  {
    id: 8,
    title: "Location Finder API",
    description:
      "A TypeScript backend API that accepts longitude and latitude coordinates and returns the corresponding location details. Clean REST interface with structured JSON responses.",
    tech: ["TypeScript", "Node.js", "REST API"],
    tags: ["Backend"] as ProjectTag[],
    github: "https://github.com/AnuragiRajesh/location_finder",
    live: "",
    featured: false,
    gradient: "from-teal-500/20 to-green-500/20",
    accent: "#14b8a6",
  },
  {
    id: 9,
    title: "File Upload Online",
    description:
      "A web application that lets users upload files and folders online. Simple, intuitive interface with backend handling for file storage and retrieval.",
    tech: ["Node.js", "Express.js", "Multer"],
    tags: ["Backend"] as ProjectTag[],
    github: "https://github.com/AnuragiRajesh/File-Upload-Online",
    live: "",
    featured: false,
    gradient: "from-indigo-500/20 to-blue-500/20",
    accent: "#6366f1",
  },
  {
    id: 10,
    title: "Todo App — Angular & Sequelize",
    description:
      "A fullstack todo application using Angular on the frontend and Sequelize ORM with a SQL database on the backend. Supports creating, updating, and deleting tasks.",
    tech: ["Angular", "Sequelize", "Node.js", "SQL"],
    tags: ["Fullstack"] as ProjectTag[],
    github: "https://github.com/AnuragiRajesh/todoapp-with-angular-and-sequelize",
    live: "",
    featured: false,
    gradient: "from-red-500/20 to-pink-500/20",
    accent: "#f43f5e",
  },
  {
    id: 11,
    title: "Hariyali Squad",
    description:
      "A website presenting the work of a course on sustainable food growing practices. Shares research, methods, and insights around eco-friendly urban agriculture.",
    tech: ["HTML", "CSS", "JavaScript"],
    tags: ["Frontend"] as ProjectTag[],
    github: "https://github.com/AnuragiRajesh/Hariyali-Squad-",
    live: "",
    featured: false,
    gradient: "from-green-500/20 to-lime-500/20",
    accent: "#84cc16",
  },
  {
    id: 12,
    title: "Introduction to Verilog",
    description:
      "Digital circuit simulations in Verilog — includes truth tables and implementations of a 1-bit adder, a 2-bit comparator, and a digital multiplexer.",
    tech: ["Verilog", "Digital Logic", "HDL"],
    tags: ["Backend"] as ProjectTag[],
    github: "https://github.com/AnuragiRajesh/Introduction-to-Verilog",
    live: "",
    featured: false,
    gradient: "from-slate-500/20 to-gray-500/20",
    accent: "#94a3b8",
  },
  {
    id: 13,
    title: "Transmedia Military Hotel",
    description:
      "An immersive media website about a military hotel, built for a media and journalism course. Combines video, audio, and rich text content in a 3D-enhanced React interface using Three.js.",
    tech: ["React", "TypeScript", "Three.js"],
    tags: ["Frontend"] as ProjectTag[],
    github: "https://github.com/AnuragiRajesh/Transmedia-Military-Hotel",
    live: "",
    featured: false,
    gradient: "from-amber-500/20 to-red-500/20",
    accent: "#f59e0b",
  },
];

