// @ts-nocheck
"use client"
import React from 'react'
import Image from 'next/image'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useTheme } from '@/context/theme-context';

export default function Experience() {

    const { ref } = useSectionInView("Experience")
    const { theme } = useTheme()
    return (
        <section id="experience" ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor=''>
                {
                    experiencesData.map((experience, index) => (
                        <VerticalTimelineElement
                            key={index}
                            contentStyle={{
                                background: theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem"
                            }}
                            contentArrowStyle={{
                                borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255,255,255,0.5)"
                            }}
                            date={experience.date}
                            icon={experience.icon}
                            iconStyle={{ background: theme === "light" ? "white" : "rgba(255,255,255,0.5)", fontSize: "1.5rem" }}
                        >
                            <h3 className='font-semibold capitalize'>{experience.title}</h3>
                            <p className='font-normal !mt-0 '>{experience.location}</p>
                            <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75 whitespace-pre-line'>{experience.description}</p>
                        </VerticalTimelineElement>
                    ))
                }
            </VerticalTimeline>

            <div className="mt-10 rounded-3xl border border-black/10 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5">
                <h3 className="text-xl font-semibold mb-6">Data Pipeline Architecture (Fraud Detection)</h3>
                
<div className="relative rounded-3xl border border-gray-300 bg-white dark:border-white/20 dark:bg-black/30 overflow-hidden">
    
    <Image 
        src="/diagram-export-5-6-2026-2_31_52-PM.svg" 
        alt="Data Pipeline System Architecture"
        width={1591}
        height={488}
        unoptimized
        className="w-full h-auto"
    />
    <p className="p-4 text-sm text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
        Scalable batch data pipeline for ingesting, transforming, and exporting financial transactions for fraud detection systems.
    </p>
    {/* Actual cut */}
    <div className="absolute bottom-0 right-0 w-40 h-40 bg-white dark:bg-black rounded-tl-3xl" />
</div>

                <div className="mt-6">
                    <p className="text-sm font-semibold text-gray-700 dark:text-white/90 mb-4">Tech Stack</p>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                        <div className="rounded-lg bg-gray-50 dark:bg-white/5 p-3">
                            <p className="text-xs font-medium text-gray-500 dark:text-white/60 uppercase tracking-wide mb-1">Languages</p>
                            <p className="text-sm text-gray-700 dark:text-white/90">Scala, Java</p>
                        </div>
                        <div className="rounded-lg bg-gray-50 dark:bg-white/5 p-3">
                            <p className="text-xs font-medium text-gray-500 dark:text-white/60 uppercase tracking-wide mb-1">Processing</p>
                            <p className="text-sm text-gray-700 dark:text-white/90">Apache Spark</p>
                        </div>
                        <div className="rounded-lg bg-gray-50 dark:bg-white/5 p-3">
                            <p className="text-xs font-medium text-gray-500 dark:text-white/60 uppercase tracking-wide mb-1">Cloud</p>
                            <p className="text-sm text-gray-700 dark:text-white/90">AWS S3, EMR</p>
                        </div>
                        <div className="rounded-lg bg-gray-50 dark:bg-white/5 p-3">
                            <p className="text-xs font-medium text-gray-500 dark:text-white/60 uppercase tracking-wide mb-1">Infra</p>
                            <p className="text-sm text-gray-700 dark:text-white/90">Terraform</p>
                        </div>
                        <div className="rounded-lg bg-gray-50 dark:bg-white/5 p-3">
                            <p className="text-xs font-medium text-gray-500 dark:text-white/60 uppercase tracking-wide mb-1">Scale</p>
                            <p className="text-sm text-gray-700 dark:text-white/90">Millions/day</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}