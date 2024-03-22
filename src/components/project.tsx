import React, { useRef } from 'react'
import Image from 'next/image'
import { useScroll, useTransform } from 'framer-motion'
import { projectsData } from '@/lib/data'
import { motion } from "framer-motion"

type ProjectProps = (typeof projectsData)[number] | { title: string, description: string, imageUrl: string, tags: string[], redirectTo: string }

export default function Project({ title, description, imageUrl, tags, redirectTo }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return <motion.div
        className='group mb-3 sm:mb-8 last:mb-0'
        ref={ref}
        style={{
            scale: scaleProgress,
            opacity: opacityProgress
        }}>
        <a href={redirectTo} target="_blank" rel="noopener noreferrer" className='block'>
            <section
                className='bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[28rem] sm:group-even:pl-8 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'>
                <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'>
                    <h3 className='text-2xl font-semibold'>{title}</h3>
                    <div className='mt-2 mb-2 flex-1 overflow-y-auto'>
                        <p className='leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
                    </div>
                    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                        {tags.map((tag, index) => (
                            <li className="bg-black/[0.7] px-3 py-1 text-[0.7] uppercase tracking-wider text-white rounded-full dark:text-white/70" key={index}>{tag}</li>
                        ))}
                    </ul>
                    <Image height="200" width="300" src={imageUrl} alt={title} quality={95} className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40' />
                </div>
            </section>
        </a>
    </motion.div>
}