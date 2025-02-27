"use client";
import { projects } from "@/data/portfolio-data";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.3 }} >
            <motion.h2 initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1,  x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.2 }} className='text-xl font-bold mb-4'>Projects</motion.h2>

            <div id='projects-grid' className='w-full gap-5 items-center justify-center'>

                {projects.list.map((project, index) => (
                    <motion.div key={index} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: index * 0.2 }}
                        className='w-full h-full'>
                        <div className='w-full h-full relative bg-neutral-800 hover:bg-orange-600 hover:scale-105 ease-in-out duration-300 rounded-md pt-2 pb-12 px-2'>


                            <Link
                                href={'/project?id=' + project.id}>
                                <h2 className='text-xl mb-1'>{project.name}</h2>
                                <p className='text-xl mb-1 text-justify'>{project.shortDescription}</p>

                                <div className='flex flex-row gap-2 absolute bottom-2 left-2'>

                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="text-xl"
                                            role="img"
                                            aria-label={tech.ariaLabel}
                                        >
                                            {tech.icon}
                                            <span className="sr-only">{tech.ariaLabel}</span>
                                        </span>
                                    ))}

                                </div>
                            </Link>
                        </div>
                    </motion.div>

                ))}
            </div>
        </motion.div>
    )
}