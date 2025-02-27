"use client";
import { about } from "@/data/portfolio-data"
import { motion } from "framer-motion"

export default function About() {
    return (
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.3 }} className='w-full lg:w-1/2'>
            <motion.h2 initial={{ opacity:0, x: -16 }} whileInView={{opacity: 1,  x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.2, delay: 0* 0.2 }}
                className="text-xl font-bold mb-4">About me</motion.h2>
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.2, delay: 1 * 0.2}}>
                {about.message}
            </motion.div>
        </motion.section>
    )
}