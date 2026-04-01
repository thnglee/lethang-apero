export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  icon: string;
  image: string;
  video?: string;
  description: string;
  techStack: string[];
  externalLink?: string;
  githubLink?: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: "01",
    slug: "nextcapy",
    title: "nextcapy",
    category: "STARTUP — MVP DEVELOPMENT",
    icon: "/capy/capy-icon.png",
    image: "/capy/capy1.jpg",
    description: `Built during the NextStart Incubator — an AI companion device for children. Led a cross-functional team from market research through MVP launch: defined target segments, developed go-to-market strategy, and pitched to mentors and industry experts. A zero-to-one venture that demonstrates startup building capability.`,
    techStack: ["Market Research", "Team Leadership", "MVP Development", "Go-to-Market", "Competitive Analysis"],
    externalLink: "https://nextcapy.studio",
    githubLink: "https://github.com/NextCapy/capy-client",
    gallery: ["/capy/capy2.jpg"],
  },
  {
    id: "02",
    slug: "taichinhxanh",
    title: "taichinhxanh.info",
    category: "STARTUP OPERATIONS & TEAM LEADERSHIP",
    icon: "/tcx/tcx-icon.png",
    image: "/tcx/tcx.jpg",
    video: "/tcx/tcx.mp4",
    description:
      "Led e-commerce operations for Tai Chinh Xanh JSC. and the 'Softie' brand as a founding team member. Managed cross-functional teams across marketing, operations, and finance. Built the company landing page to support a funding round — combining business strategy with hands-on technical execution.",
    techStack: ["Team Leadership", "Startup Operations", "Revenue Analysis", "Next.js", "TypeScript"],
    externalLink: "https://taichinhxanh.info",
    githubLink: "https://github.com/thnglee/tcx",
  },
  {
    id: "03",
    slug: "fiber",
    title: "fiber",
    category: "PRODUCT DEVELOPMENT — MARKETING & TECH",
    icon: "/fiber/fiber-icon.png",
    image: "/fiber/fiber.png",
    video: "/fiber/fiber.mp4",
    description:
      "A browser extension for Vietnamese news summarization and real-time fact-checking. Built end-to-end from concept to launch — identified the user need, scoped the product, and shipped a working MVP. Demonstrates the ability to bridge marketing insight and technical execution to take a product from zero to one.",
    techStack: [
      "Product Development",
      "User Research",
      "React",
      "TypeScript",
      "OpenAI API",
    ],
    externalLink: "https://fiber.vercel.app",
    githubLink: "https://github.com/thnglee/fiber",
    gallery: [
      "/fiber/fiber1.png",
      "/fiber/fiber2.png",
      "/fiber/fiber3.png",
      "/fiber/fiber4.png",
    ],
  },
];
