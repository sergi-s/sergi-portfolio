"use client"
import React, { Fragment } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useSectionInView } from '@/lib/hooks'

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.3)
    return (
        <section className='scroll-mt-28 mb-28' id='projects' ref={ref}>
            <SectionHeading>My Projects</SectionHeading>
            <div>
                {projectsData.map((project) => (
                    <Fragment key={project.title}>
                        <Project {...project} />
                    </Fragment>
                ))}

            </div>
        </section>
    )
}
