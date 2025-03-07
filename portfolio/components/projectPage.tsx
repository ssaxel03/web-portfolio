"use client";
import { redirect } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { projects } from '@/data/portfolio-data';

import { LuArrowLeft } from "react-icons/lu";
import Link from 'next/link';
import { motion } from "framer-motion";

function Page() {
  const searchParams = useSearchParams()

  const selectedProject = projects.list.filter((project) => project.id === searchParams.get('id'))[0];

  if (!selectedProject) {
    redirect('/');
  }

  return (

    <main className="flex flex-col w-full justify-center items-start text-neutral-50 sm:w-4/6 px-2 py-2 lg:px-0 lg:py-12 text-xl">

      <article className='w-full'>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.3 }}
          className='w-full flex flex-row justify-between gap-2 relative mb-4'>

          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.2 }}>
            <Link href="/" className='max-h-[36px] flex items-center justify-center aspect-square px-2 py-2 rounded-full bg-neutral-50 hover:bg-orange-600 hover:scale-105 duration-300 ease-in-out'>
              <LuArrowLeft className='text-xl text-neutral-950' />
            </Link>
          </motion.div>


          <motion.span initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.2 }}
            className='flex flex-row gap-2 right-0 top-0'>
            {selectedProject.links.map((link, index) => (

              <a
                key={index}
                href={link.url}
                target={link.target}
                className="text-4xl text-neutral-50 flex justify-center items-center hover:scale-105 hover:text-orange-600 duration-300 ease-in-out"
              >
                {link.icon}
              </a>

            ))}
          </motion.span>
        </motion.div>

        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.3 }}
          className='w-full mb-4'>


          <motion.h1 initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.2 }}
            className="font-bold">{selectedProject.name}</motion.h1>

          <motion.p initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.2 }}
          className='text-neutral-300'>{selectedProject.date}</motion.p>


          <motion.h2 initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.2 }}
            className="font-bold mb-4">Tech stack</motion.h2>

          <section className="flex flex-row flex-wrap gap-2 w-full">
            {selectedProject.technologies.map((tech, techIndex) => (
              <motion.span initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: techIndex * 0.2 }}
                key={techIndex}
                className="relative group bg-neutral-800 text-neutral-50 flex justify-center items-center rounded-md px-2 h-10 aspect-video"
                role="img"
                aria-label={tech.ariaLabel}
              >
                {tech.icon}
                <span className="sr-only">{tech.ariaLabel}</span>
                <span className="absolute hidden group-hover:block bg-neutral-800 text-neutral-300 text-xl px-2 py-1 rounded-md bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-lg">
                  {tech.name}
                </span>
              </motion.span>
            ))}
          </section>

        </motion.section>

        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.3 }}
          className='w-full mb-4'>

          <motion.h2 initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.2 }}
            className="font-bold mb-4">Description</motion.h2>

          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.2 }}
          className='text-neutral-300'>
            {selectedProject.longDescription}
          </motion.div>

        </motion.section>



      </article>

    </main>
  )

}

export default function ProjectsPage() {

  return (
    <Suspense>
      <Page />
    </Suspense>
  );
}