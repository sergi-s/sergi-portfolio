"use client"
import { useSectionInView } from '@/lib/hooks'
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './submit-btn'
import { toast } from 'react-hot-toast'

export default function Contact() {

    const { ref } = useSectionInView("Contact")
    return (
        <motion.section id="contact" ref={ref} className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>

            <SectionHeading>My Contact</SectionHeading>

            <p className='text-gray-700 -mt-6 dark:text-white/80'>
                Please Contact me directly at {" "}
                <a className="underline" href="mailto:sergisamirboules@gmail.com">sergisamirboules@gmail.com</a> {" "}
                or through this form.
            </p>

            <form className="mt-10 flex flex-col dark:text-black" action={async (formData) => {
                const response = await sendEmail(formData)
                if ('error' in response) { toast.error(response.error); return; }
                toast.success("Email send successfully")
            }}>
                <input className="h-14 px-4 rounded-lg borderBlack 
                dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    type="email" name="email" placeholder="Your email" required maxLength={500} />
                <textarea className="h-52 p-4 my-3 rounded-lg borderBlack
                dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" name="message"
                    placeholder="Your message" required maxLength={5000}></textarea>
                <SubmitBtn />
            </form>
        </motion.section>
    )
}
