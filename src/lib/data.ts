import React from "react";
import { FaNodeJs, FaOpencart } from "react-icons/fa";
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
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Backend developer Intern",
//     location: "Alex, Egypt",
//     description:
//       "I worked as a backend intern for 3 months. working on a marketplace using OpenCart php.",
//     icon: React.createElement(FaOpencart),
//     date: "6/2022 - 9/2022",
//   },
//   {
//     title: "Backend developer Intern",
//     location: "Alex, Egypt",
//     description:
//       "I'm now a backend developer. My stack includes TypeScript, Prisma and Postgres. occasional involvement in Nextjs, react Native, POS systems.",
//     icon: React.createElement(FaNodeJs),
//     date: "9/2022 - present",
//   },
// ];

export const projectsData = [
  {
    title: "Salahly",
    description:
      "I worked as a full-stack developer on my graduation project for 5 months. Users can request roadside assistance.",
    tags: ["Flutter", "RTDB", "Firebase", "Provider", "Cloud functions"],
    imageUrl: salahly
  }
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Php",
  "OpenCart",
  "Laravel",
  "React",
  "Next.js",
  "Redis",
  "Node.js",
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