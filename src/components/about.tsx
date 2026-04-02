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
                I'm a software developer with a focus on the <span className="font-medium">backend</span>.
                <br /> I recently completed my Master's in Computer Science at Memorial University of Newfoundland.
                <br /> I graduated from Alexandria University with a GPA of 3.78 (B.Sc. in Computer Science).
                My passion lies in solving complex problems with code.
                <br /> My current role is at Nasdaq Verafin where I work on systems to fight financial crime.
                <br /> My core stack is primarily <span className="font-medium">Java, Scala, and SQL</span>.
                I also have experience with <span className="font-medium">TypeScript, Node.js, Prisma, and React</span>, and familiarity with GraphQL, tRPC and gRPC.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy playing
                video games, watching movies, and playing ping pong with my friends.
            </p>
        </motion.section>

    )
}
