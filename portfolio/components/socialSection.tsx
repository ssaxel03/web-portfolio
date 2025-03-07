"use client";
import { socials } from '@/data/portfolio-data';
import { motion } from 'framer-motion';

export default function Socials() {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.3 }}>

            <motion.h2 initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.2 }} className="text-xl font-bold mb-4">Let's connect</motion.h2>

            <section className='flex flex-row flex-wrap justify-start sm:justify-start gap-3 mb-1 mb-16'>

                {socials.list.map((social, index) => (
                    <motion.div key={index} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
                        <a
                            href={social.url}
                            target={social.target}
                            className={`bg-neutral-800 text-xl text-neutral-50 flex justify-center items-center hover:bg-orange-600 hover:scale-105 duration-300 ease-in-out rounded-md h-10 ${social.name === 'CV'
                                ? 'px-8'
                                : 'px-2 aspect-video'
                                }`
                            }
                        >
                            {social.icon}
                        </a>
                    </motion.div>
                ))}

            </section>

        </motion.div>
    )
}