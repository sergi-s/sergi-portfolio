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
    title: "Software Developer",
    location: "Nasdaq Verafin",
    description:
      "Optimized ACH transaction matching algorithm, improving processing speed by 23–27% across ~2,000 financial institutions.\nBuilt and scaled data pipelines processing millions of transactions daily for fraud detection systems.\nDesigned batch ingestion systems for RTP / FedNow using Scala, Spark, and AWS data lake architecture.\nImplemented distributed data workflows (S3, EMR, Lambda, SQS) with infrastructure managed via Terraform.",
    icon: React.createElement(FaShieldAlt),
    date: "1/2025 - Present",
  },
].reverse();

export const projectsData = [
  {
    title: "Credit Card Fraud Detection",
    description: "Problem: Detect fraudulent transactions in highly imbalanced financial datasets.\nApproach: Applied resampling techniques (SMOTE, under/over-sampling). Trained and compared multiple models (Random Forest, Neural Networks). Optimized for recall to minimize false negatives.\nTech: Python, Scikit-learn, Pandas.\nResult: Achieved 99.83% F1-score with oversampled neural network and reduced false negative rate to near-zero while maintaining high precision.",
    tags: ["Python", "Scikit-learn", "Pandas", "SMOTE", "Neural Networks"],
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
  {
    category: "Core",
    items: ["Scala", "Java", "SQL"],
  },
  {
    category: "Data & Distributed Systems",
    items: ["Apache Spark", "EMR", "Data Lakes"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS (S3, Lambda, SQS, RDS)", "Terraform"],
  },
  {
    category: "Backend",
    items: ["Node.js", "NestJS", "Express"],
  },
  {
    category: "Frontend (Familiar)",
    items: ["React", "Next.js"],
  },
] as const;