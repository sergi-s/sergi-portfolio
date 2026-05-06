import React from "react";
import { FaNodeJs, FaOpencart, FaWordpressSimple, FaShieldAlt } from "react-icons/fa";
import salahly from "@/public/salahly.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Backend Developer Intern",
    location: "Techhive",
    description:
      "Built recommendation engine for global marketplace processing 1000s of SKUs. Optimized search algorithm reducing shipping cost queries from O(n) to O(1), improving checkout experience across OpenCart platform.",
    icon: React.createElement(FaOpencart),
    date: "6/2022 - 9/2022",
  },
  {
    title: "Backend Developer",
    location: "Techhive",
    description:
      "Architected backend services across multiple product lines: low-code platform (Next.js, Node.js, Prisma, AWS deployment), real-time streaming service (Nest.js), embedded access control system (QR scanners). Owned full development lifecycle from design to production deployment.",
    icon: React.createElement(FaNodeJs),
    date: "9/2022 - 12/2023",
  },
  {
    title: "Full Stack Developer",
    location: "Memorial University of Newfoundland",
    description:
      "Engineered WordPress solutions with custom plugin development (PHP, JavaScript). Implemented dynamic features enhancing user engagement and site performance across multiple institutional web properties.",
    icon: React.createElement(FaWordpressSimple),
    date: "3/2024 - Present",
  },
  {
    title: "Backend Software Engineer",
    location: "Nasdaq Verafin",
    description:
      "Designed and maintained data pipelines processing Faster Payments and wire transactions at scale using Java and Scala. Built systems feeding fraud detection algorithms used by financial institutions, handling millions of transactions daily with high reliability requirements.",
    icon: React.createElement(FaShieldAlt),
    date: "1/2025 - Present",
  },
].reverse();

export const projectsData = [
  {
    title: "Credit Card Fraud Detection",
    description: "Built ML models detecting fraudulent transactions on imbalanced datasets using SMOTE. Compared performance across Random Forest, Logistic Regression, and XGBoost, optimizing for recall to minimize false negatives in fraud classification.",
    tags: ["Python", "ML", "SMOTE", "Pandas", "XGBoost", "scikit-learn"],
    imageUrl: 'https://i.ibb.co/ZJnXMPx/Screenshot-2024-08-23-at-12-49-25-PM.png',
    redirectTo: 'https://github.com/sergi-s/Credit-Card-fraud-detection'
  },
  {
    title: "Intelligent Spelling Practice Platform",
    description:
      "Full-stack application generating personalized language lessons using LLMs (Ollama). Adapts difficulty and topics based on user performance metrics, supporting multiple languages with real-time feedback.",
    tags: ["LLMs", "Next.js", "TypeScript", "Prisma", "MongoDB"],
    imageUrl: 'https://i.ibb.co/MDdD1xZ/Screenshot-from-2024-05-20-18-37-41.png',
    redirectTo: 'https://github.com/sergi-s/spelling-practice-2'
  },
  {
    title: "Ski Resort Pathfinding System",
    description:
      "Implemented Dijkstra algorithm optimizing multi-variable routing (speed, difficulty, terrain). Real-time interactive map helping skiers find optimal paths reducing decisions and time on mountain.",
    tags: ["Dijkstra Algorithm", "Node.js", "React", "Leaflet", "MongoDB"],
    imageUrl: 'https://i.ibb.co/0CfKZMY/Screenshot-2024-09-21-at-2-09-46-PM.png',
    redirectTo: 'https://ski-resort-map.vercel.app/'
  },
  {
    title: "Advanced AI Algorithms",
    description:
      "Master's coursework implementing cutting-edge search algorithms: A* with heuristics, IDDFS, alpha-beta pruning, negamax with transposition tables, and genetic algorithms. Applied to game AI and optimization challenges.",
    tags: ["A* Search", "Alpha-Beta Pruning", "NegaMax", "Genetic Algorithms", "Game AI"],
    imageUrl: 'https://i.ibb.co/F3766ST/BFS.png',
    redirectTo: 'https://github.com/sergi-s/Special-Topics-in-Artificial-Intelligence'
  },
  {
    title: "Salahly - Roadside Assistance App",
    description:
      "Full-stack mobile application connecting drivers with assistance providers. Implemented real-time location tracking, service matching, and payment processing supporting thousands of concurrent users.",
    tags: ["Flutter", "Firebase RTDB", "Cloud Functions", "Google Maps", "Stripe"],
    imageUrl: salahly,
    redirectTo: 'https://github.com/sergi-s/Salahly-client-application'
  }
] as const;

export const skillsData = [
  // Backend & Data
  "Java",
  "Scala",
  "SQL",
  "Node.js",
  "NestJS",
  "Express",
  // Databases & Data Infrastructure
  "Postgres",
  "DynamoDB",
  "MongoDB",
  "Redis",
  "Spark",
  "EMR",
  // Frontend
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind",
  "Framer Motion",
  // Cloud & DevOps
  "AWS",
  "Docker",
  "Prisma",
  "GraphQL",
  "Microservices",
  // Other Skills
  "Python",
  "Php",
  "Git",
  "GitHub Actions"
] as const;