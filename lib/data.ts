export const profile = {
  name: "Vishnu Patel",
  fullName: "Vishnu Mukesh Patel",
  role: "Full-Stack Developer & UI/UX Engineer",
  headline: "Building digital experiences that people love.",
  subheadline:
    "I'm a developer and designer who turns ideas into fast, elegant, and human-centered products — pairing clean engineering with a strong eye for detail.",
  location: "Maharashtra, India",
  email: "vishnupatelm4@gmail.com",
  phone: "+91 92848 00679",
  whatsapp: "https://wa.me/919284800679",
  github: "https://github.com/Ervishnupatel",
  githubUser: "Ervishnupatel",
  linkedin: "https://www.linkedin.com/in/vishnu-patel-221517355/",
  resume: "",
  available: true,
};

export const stats = [
  { value: 6, suffix: "+", label: "Shipped projects" },
  { value: 2, suffix: "+", label: "Internships" },
  { value: 12, suffix: "+", label: "Certifications" },
  { value: 100, suffix: "%", label: "Commitment" },
];

export const about = {
  intro:
    "Hi, I'm Vishnu — a full-stack developer and UI/UX-focused engineer based near Mumbai.",
  paragraphs: [
    "I design and build web products end to end, from the first wireframe to the deployed app. I care deeply about how things feel: the spacing, the motion, the small moments that make an interface feel effortless.",
    "Currently pursuing a Diploma in Computer Engineering, I've spent every break and free evening turning ideas into shipped projects and learning the craft of building for the web. I believe great software is equal parts solid engineering and thoughtful design.",
    "My philosophy is simple — keep it clean, keep it fast, and always design for the person on the other side of the screen.",
  ],
};

export type Project = {
  slug: string;
  title: string;
  category: "Web App" | "Frontend" | "UI Clone" | "Game";
  year: string;
  image: string;
  summary: string;
  problem: string;
  result: string;
  tech: string[];
  live?: string;
  code?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "weather-go",
    title: "Weather Go",
    category: "Web App",
    year: "2025",
    image: "/projects/weathergo.png",
    summary:
      "A real-time weather forecasting app with a clean, responsive interface and live API data.",
    problem:
      "People needed a fast, no-clutter way to check accurate local weather without ads or bloated dashboards.",
    result:
      "Delivers live temperature, humidity and conditions in under a second with a fully responsive layout.",
    tech: ["JavaScript", "Weather API", "CSS", "HTML"],
    live: "https://weather-goo.netlify.app/",
    code: "https://github.com/Ervishnupatel/Weather-Go",
    featured: true,
  },
  {
    slug: "greenland-infra",
    title: "Greenland Infra",
    category: "Frontend",
    year: "2025",
    image: "/projects/greenland.png",
    summary:
      "A sleek architectural studio website built around minimal design and visual storytelling.",
    problem:
      "An infrastructure brand needed a premium online presence that showcased projects visually and built trust.",
    result:
      "A minimal, content-first site that presents work as a visual narrative and elevates the brand image.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://greenland-infra.netlify.app/",
    code: "https://github.com/Ervishnupatel/Greenland-Infra",
    featured: true,
  },
  {
    slug: "cloudcapture",
    title: "CloudCapture",
    category: "Web App",
    year: "2025",
    image: "/projects/cloudcapture.png",
    summary:
      "A structured form interface with validation and secure data handling, built for scale.",
    problem:
      "Capturing user information reliably meant validating input and transmitting it securely without friction.",
    result:
      "A robust form flow with client-side validation and clean UX that scales to more fields effortlessly.",
    tech: ["JavaScript", "Forms", "CSS", "HTML"],
    live: "https://form-vishnupatel.netlify.app/",
    featured: true,
  },
  {
    slug: "rock-paper-scissors",
    title: "Rock Paper Scissors",
    category: "Game",
    year: "2024",
    image: "/projects/rps.png",
    summary:
      "A playful browser game against the computer with smooth animations and a live scoreboard.",
    problem:
      "A learning project to master DOM logic, state, and instant feedback interactions.",
    result:
      "An addictive, responsive mini-game with animated feedback and persistent scoring.",
    tech: ["JavaScript", "CSS", "HTML"],
    live: "https://rpcvishnu.netlify.app/",
    code: "https://github.com/Ervishnupatel/Rock-Paper-Scissors-Game",
  },
  {
    slug: "netflix-clone",
    title: "Netflix Clone",
    category: "UI Clone",
    year: "2024",
    image: "/projects/netflix.png",
    summary:
      "A pixel-faithful Netflix landing UI built to practice real-world layout challenges.",
    problem:
      "Recreating a production-grade UI to deepen mastery of layout, responsiveness and visual fidelity.",
    result:
      "A high-fidelity recreation that sharpened CSS architecture and layout precision.",
    tech: ["HTML", "CSS", "Responsive UI"],
    live: "https://net2flixclone-vishnupatel.netlify.app/",
  },
  {
    slug: "portfolio-v1",
    title: "Portfolio v1",
    category: "Frontend",
    year: "2025",
    image: "/projects/portfolio.png",
    summary:
      "The first iteration of my personal site, with certifications, achievements and social integration.",
    problem:
      "Needed a single home on the web to present my journey, work and credentials.",
    result:
      "A complete personal brand hub — the foundation this premium rebuild grew from.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://vishnu-patels.netlify.app/",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    items: ["Node.js", "REST APIs", "Java","Python"],
  },
  {
    title: "Databases",
    items: ["MySQL", "SQL", "Oracle", "SupaBase"],
  },
  {
    title: "Languages",
    items: ["C", "C++", "Python", "Java"],
  },
  {
    title: "Design",
    items: ["Figma", "UI/UX", "Canva", "Logo Design"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"],
  },
];

export const experience = [
    {
    company: "UnifyXpers",
    role: "Python Developer Intern",
    period: "may 2026 — august 2026"
    description:
      "Built responsive, interactive web interfaces from real-world briefs and shipped them on schedule.",
    achievements: [
      "Delivered multiple back-end and clean, maintainable code",
      "Translated design specs into pixel-accurate, responsive layouts",
    ],
  },
  {
    company: "Cognifyz Technologies",
    role: "Front-End Web Development Intern",
    period: "Jan 2025 — Feb 2025",
    description:
      "Built responsive, interactive web interfaces from real-world briefs and shipped them on schedule.",
    achievements: [
      "Delivered multiple front-end tasks with clean, maintainable code",
      "Translated design specs into pixel-accurate, responsive layouts",
      "Earned an internship completion certificate for consistent delivery",
    ],
  },
  {
    company: "Self-Driven Projects",
    role: "Full-Stack Developer",
    period: "2024",
    description:
      "Designed, built and deployed personal products end to end — from UI design to live deployment.",
    achievements: [
      "Shipped 6+ live projects across web apps, UIs and games",
      "Owned the full lifecycle: design, build, test and deploy",
    ],
  },
];

export const process = [
  {
    step: "01",
    title: "Research",
    description: "Understand the problem, the users, and what success actually looks like.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Define scope, structure, and the right tech for the job.",
  },
  {
    step: "03",
    title: "Design",
    description: "Wireframe and craft interfaces that are clean, clear and on-brand.",
  },
  {
    step: "04",
    title: "Development",
    description: "Build fast, accessible, maintainable code with care for detail.",
  },
  {
    step: "05",
    title: "Testing",
    description: "Validate across devices, fix the edges, and polish the experience.",
  },
  {
    step: "06",
    title: "Launch",
    description: "Ship to production, monitor, and iterate based on real feedback.",
  },
];

export const testimonials = [
  {
    quote:
      "Vishnu delivered every front-end task with precision and on time. His attention to detail and design sense stood out throughout the internship.",
    name: "Cognifyz Technologies",
    title: "Internship Mentor",
  },
  {
    quote:
      "A fast learner who turns requirements into polished, working interfaces. Reliable, curious and genuinely passionate about building.",
    name: "Peer Review",
    title: "Collaborator",
  },
  {
    quote:
      "The work feels premium — clean layouts, smooth interactions, and clear thinking behind every decision. Exactly what modern products need.",
    name: "Project Feedback",
    title: "Client",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];
