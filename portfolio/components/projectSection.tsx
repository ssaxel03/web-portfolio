"use client";
import { projects } from "@/data/portfolio-data";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <motion.div id="projects" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.3 }}
            className="w-full py-8">
            <motion.h2 initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.2 }} className='text-xl font-bold mb-4'>Projects</motion.h2>

            <div id='projects-grid' className='w-full gap-5 items-center justify-center'>

                {projects.list.map((project, index) => (
                    <motion.div key={index} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: index * 0.2 }}
                        className='w-full h-full'>
                        <Link href={'/project?id=' + project.id}>
                            <div className='w-full h-full relative bg-neutral-800 hover:bg-orange-600 hover:scale-105 ease-in-out duration-300 rounded-md pt-2 pb-12 px-2'>
                                <h3 className='text-xl mb-1'>{project.name}</h3>
                                <p className='text-xl mb-1 text-justify text-neutral-300'>{project.shortDescription}</p>

                                <div className='flex flex-row gap-2 absolute bottom-2 left-2'>

                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="text-xl relative group"
                                            role="img"
                                            aria-label={tech.ariaLabel}
                                        >
                                            {tech.icon}
                                            <span className="sr-only">{tech.ariaLabel}</span>
                                            <span className="absolute hidden group-hover:block bg-neutral-800 text-neutral-300 text-xl px-2 py-1 rounded-md bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-lg">
                                                {tech.name}
                                            </span>
                                        </span>
                                    ))}

                                </div>
                            </div>
                        </Link>
                    </motion.div>

                ))}
            </div>
        </motion.div>
    )
}