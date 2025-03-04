"use client";
import { journey } from "@/data/portfolio-data";
import { motion } from "framer-motion";

export default function Journey() {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.3 }}>
            <motion.h2 initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.2 }} className="text-xl font-bold mb-4">Journey</motion.h2>

            <section className="flex flex-col gap-2 mb-16">
                {journey.list.map((experience, index) => (
                    <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5 }}
                        key={index}
                        id="journey-grid"
                        className="gap-4 mb-4">
                        <motion.div style={{ transformOrigin: 'top' }} initial={{ opacity: 0, height: 0 }} whileInView={{ opacity: 1, height: "100%" }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1 }}
                            className="mt-[8px] relative bg-orange-600 rounded-md">
                            <div className='absolute top-0 left-[50%] w-[12px] h-[12px] -translate-x-[50%] rounded-full bg-orange-600'>
                            </div>
                        </motion.div>


                        <article className="flex flex-col">
                            <motion.h3 initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.2 }} className="text-xl mb-1">{experience.role} @ {experience.company}</motion.h3>
                            <motion.p initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.2 }} className="text-xl text-neutral-500 mb-1">{experience.date}</motion.p>
                            <motion.div initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.2 }}>
                                {experience.description}
                            </motion.div>


                            <section className="flex flex-row flex-wrap gap-2 w-full">
                                {experience.technologies.map((tech, techIndex) => (
                                    <motion.span initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.2, delay: techIndex * 0.25 }}
                                        key={techIndex}
                                        className="group relative bg-neutral-800 text-xl text-neutral-50 flex justify-center items-center rounded-md px-2 h-10 aspect-video"
                                        role="img"
                                        aria-label={tech.ariaLabel}
                                    >
                                        {tech.icon}
                                        <span className="sr-only">{tech.ariaLabel}</span>
                                        <span className="absolute hidden group-hover:block bg-neutral-800 text-white text-xl px-2 py-1 rounded-md bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-lg">
                                            {tech.name}
                                        </span>
                                    </motion.span>
                                ))}
                            </section>

                        </article>
                    </motion.div>
                ))}
            </section>
        </motion.div>
    )
}