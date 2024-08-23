import React from "react";
import { FaNodeJs, FaOpencart, FaWordpressSimple } from "react-icons/fa";
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
    title: "Backend developer Intern",
    location: "Techhive",
    description:
      `I worked as a Full-stack intern. working on a global marketplace using OpenCart php, 
      engineered a simple recommendation systems for frequently  bought items, optimized a search algorithm to get minimum shipping 
      costs for a marketplace on OpenCart`,
    icon: React.createElement(FaOpencart),
    date: "6/2022 - 9/2022",
  },
  {
    title: "Backend developer",
    location: "Techhive",
    description:
      `
      Participated in varied projects involving diverse technologies: developed a low- code platform with Next.js(appasap.ai),
Node.js, Prisma, and AWS; contributed to a streaming service with Nest.js and AWS infrastructure; and crafted an access control system 
      integrating embedded systems, Node.js, and er80 QR scanners.`,
    icon: React.createElement(FaNodeJs),
    date: "9/2022 - 12/2023",
  },
  {
    title: "Full Stack developer",
    location: "Memorial University of newfoundland ",
    description:
      "Full stack developer, using wordpress, Php, Javascript, HTML and CSS, creating custom plugins",
    icon: React.createElement(FaWordpressSimple),
    date: "3/2024 - Present",
  },
].reverse();

export const projectsData = [
  {
    title: "Credit Card Fraud detection",
    description: "Detect Fraudulent Credit Card transactions using different Machine Learning models and compare performances",
    tags: ["Python", "ML", "SMOTE", "Pandas", "numpy", "keras", 'matplotlib'],
    imageUrl: 'https://i.ibb.co/ZJnXMPx/Screenshot-2024-08-23-at-12-49-25-PM.png',
    redirectTo: 'https://github.com/sergi-s/Credit-Card-fraud-detection'
  },
  {
    title: "Spelling Practice 2",
    description:
      "Created a spelling practice for multiple languages using LLMs to generate new sentences based on the user's performance and preferred topic",
    tags: ["LLMs", "Ollama", "Nextjs", "typescript", "prisma", "mongodb"],
    imageUrl: 'https://i.ibb.co/MDdD1xZ/Screenshot-from-2024-05-20-18-37-41.png',
    redirectTo: 'https://github.com/sergi-s/spelling-practice-2'
  },
  {
    title: "AI Algorithm Techniques Assignments",
    description:
      "A simple map for skiiers, using dijkstra algorithm to find a path between 2 points, minimizing for speed, difficulty and length",
    tags: ["dijkstra algorithm", "Nodejs", "Reactjs", "prisma", "mongodb", "leaflet"],
    imageUrl: 'https://github.com/coco-kit/software-engineering-group-project/raw/main/img/selected_path.png',
    redirectTo: 'https://ski-resort-map.vercel.app/'
  },
  {
    title: "AI Algorithm Techniques Assignments",
    description:
      "In my Master's program in Computer Science (CS) at 6980, under Prof. David Churchill, I enjoyed developing various complex algorithms including A*, IDDFS, alpha-beta pruning, negamax, transposition tables, game theory, connect 4 game, and various searching algorithms, as well as generic algorithms, cross-overs, and mutations",
    tags: ["Searching Algorithms", "A*", "optimizations", "NegaMax", "generic algorithms"],
    imageUrl: 'https://i.ibb.co/F3766ST/BFS.png',
    redirectTo: 'https://github.com/sergi-s/Special-Topics-in-Artificial-Intelligence'
  },
  {
    title: "Salahly",
    description:
      "I worked as a full-stack developer on my graduation project for 5 months. Users can request roadside assistance.",
    tags: ["Flutter", "RTDB", "Firebase", "Provider", "Cloud functions"],
    imageUrl: salahly,
    redirectTo: 'https://github.com/sergi-s/Salahly-client-application'
  }
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Php",
  "WordPress",
  "OpenCart",
  "Laravel",
  "React",
  "Next.js",
  "Redis",
  "Node.js",
  "NestJS",
  "Flutter",
  "Git",
  "GitHub Action",
  "Prisma",
  "SQL",
  "NoSQL",
  "Postgres",
  "MongoDB",
  "Tailwind",
  "HTML",
  "CSS",
  "Framer Motion",
  "Redux",
  "Express",
  "GraphQL",
  "Microservices",
  "Python",
  "AWS",
  "Docker",
  "Nginx",
  "minikube",
  "Digitalocean"
] as const;