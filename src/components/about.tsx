"use client"
import React from 'react'
import { motion } from "framer-motion"
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'

export default function About() {

    const { ref } = useSectionInView("About")
    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3">
                I'm a full-stack software engineer with a focus on the <span className="font-medium">backend</span>.{" "}
                I graduated from Alexandria University with a GPA of 3.78.{" "}
                {/* I enjoy working on the behind-the-scenes of websites and applications, making sure they run smoothly and efficiently. */}
                My passion lies in solving complex problems with code,{" "}
                {/* and I'm always eager to learn and adapt to new challenges in the world of software development */}
                My core stack is{" "}
                <span className="font-medium">
                    TypeScript, Node.js, Prisma and React
                </span>.
                I am also familiar with Graphql, tRPC and gRPC. I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software developer.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy playing
                video games, watching movies, and playing ping pong with my friends.
            </p>
        </motion.section>

    )
}
