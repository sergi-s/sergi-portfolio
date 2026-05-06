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
                I'm a <span className="font-medium">backend engineer</span> focused on building scalable systems and data infrastructure. 
                Currently at Nasdaq Verafin designing data pipelines for fraud detection processing millions of transactions daily.
                <br /> My expertise spans <span className="font-medium">backend architecture, and data engineering</span> — 
                with strong proficiency in <span className="font-medium">Java, Scala, SQL, Node.js, and AWS</span>.
                <br /> I completed my Master's in Computer Science at Memorial University and graduated from Alexandria University with 3.78 GPA.
                <br /> I'm passionate about solving complex technical challenges and building high-impact systems.
            </p>

            <p>
                <span className="italic">Outside of code</span>, I'm competitive at ping pong 🏓, enjoy strategy games and sci-fi films, 
                and I'm always up for discussing architecture patterns over coffee.
            </p>
        </motion.section>

    )
}
