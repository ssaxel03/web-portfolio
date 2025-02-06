import { redirect } from 'next/navigation'
import { projects } from '@/data/portfolio-data';

import { LuArrowLeft } from "react-icons/lu";
import Link from 'next/link';

export default function NewsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const selectedProject = projects.list.filter((project) => project.id === searchParams.id?.toString())[0];

  if (!selectedProject) {
    redirect('/');
  }

  return (
    <main className="flex flex-col w-full justify-center items-start sm:w-4/6 px-2 py-2 lg:px-0 lg:py-12 text-xl">

      <article className='w-full'>

        <div className='w-full flex flex-row justify-between gap-2 relative mb-4'>


          <Link href="/" className='max-h-[36px] flex items-center justify-center aspect-square px-2 py-2 rounded-full bg-neutral-50 hover:bg-orange-600 hover:scale-105 duration-300 ease-in-out'>
            <LuArrowLeft className='text-xl text-neutral-950' />
          </Link>

          <span className='flex flex-row gap-2 right-0 top-0'>
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
          </span>


        </div>

        <section className='w-full mb-4'>


          <h1 className="font-bold">{selectedProject.name}</h1>
          <p>{selectedProject.date}</p>


          <h2 className="font-bold mb-4">Tech stack</h2>

          <section className="flex flex-row flex-wrap gap-2 w-full">
            {selectedProject.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-neutral-800 text-neutral-50 flex justify-center items-center rounded-md px-2 h-10 aspect-video"
                role="img"
                aria-label={tech.ariaLabel}
              >
                {tech.icon}
                <span className="sr-only">{tech.ariaLabel}</span>
              </span>
            ))}
          </section>

        </section>

        <section className='w-full mb-4'>

          <h2 className="font-bold mb-4">Description</h2>

          {selectedProject.longDescription}

        </section>



      </article>

    </main>
  );
}