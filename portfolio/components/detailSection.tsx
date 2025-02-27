"use client";
import { details } from "../data/portfolio-data";
import { motion } from 'framer-motion';

export default function Details() {

    return (
        <motion.section initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.3 }} className='flex flex-col w-full lg:w-1/2'>
            <motion.h2 initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.2, delay: 0 * 0.2 }} 
            className='text-xl font-bold mb-4'>Who am I?</motion.h2>

            <motion.h1 initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.2, delay: 1 * 0.2}} 
            className="text-xl mb-1">{details.name}</motion.h1>

            <motion.article initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.2, delay: 2 * 0.2}} 
            className="text-xl mb-1">{details.role}</motion.article>

            <motion.article initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.2, delay: 3 * 0.2}}  
            className="text-xl">{details.location}</motion.article>
        </motion.section>
    )
}