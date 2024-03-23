// @ts-nocheck
"use client"
import React, { Fragment } from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useTheme } from '@/context/theme-context';

export default function Experience() {

    const { ref } = useSectionInView("Experience")
    const { theme } = useTheme()
    const experience = experiencesData[0]
    return (
        <section id="experience" ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor=''>
                <VerticalTimelineElement
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
                    <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>{experience.description}</p>
                </VerticalTimelineElement>
                {/* {
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
                            <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>{experience.description}</p>
                        </VerticalTimelineElement>
                    ))
                } */}
            </VerticalTimeline>

        </section>
    )
}