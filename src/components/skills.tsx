"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from "framer-motion"

const fadeInAnimationVariants = { initial: { opacity: 0, y: 100 }, animate: (index: number) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * index } }) }
export default function Skills() {

    const { ref } = useSectionInView("Skills")
    return (
        <section className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40' ref={ref}
            id="skills">

            <SectionHeading>My Skills</SectionHeading>
            <div className='grid gap-6 text-left sm:grid-cols-2'>
                {skillsData.map((group, groupIndex) => (
                    <motion.div
                        key={group.category}
                        className="rounded-3xl border border-black/10 bg-white/80 p-5 dark:border-white/10 dark:bg-white/5"
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={groupIndex}
                    >
                        <h3 className='mb-3 text-lg font-semibold'>{group.category}</h3>
                        <ul className='flex flex-wrap gap-2'>
                            {group.items.map((skill, skillIndex) => (
                                <li key={skillIndex} className='rounded-full bg-black/[0.85] px-3 py-1 text-sm uppercase tracking-wider text-white'>{skill}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>

    )
}
