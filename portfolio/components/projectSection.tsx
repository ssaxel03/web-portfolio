import { projects } from "@/data/portfolio-data";
import Link from "next/link";

export default function Projects() {
    return (

        <div id='projects-grid' className='w-full gap-5 items-center justify-center'>

            {projects.list.map((project, index) => (

                <Link href={'/project?id=' + project.id} key={index} className='w-full h-full relative bg-neutral-800 hover:bg-orange-600 hover:scale-105 ease-in-out duration-300 rounded-md pt-2 pb-12 px-2'>
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

            ))}

        </div>
    )
}