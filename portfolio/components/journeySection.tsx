import { journey } from "@/data/portfolio-data"

export default function Journey() {
    return (
        <section className="flex flex-col gap-2 mb-16">
            {journey.list.map((experience, index) => (
                <div key={index} id="journey-grid" className="gap-4 mb-4">
                    <div className="mt-[8px] relative bg-orange-600 rounded-md">
                        <div className='absolute top-0 left-[50%] w-[12px] h-[12px] -translate-x-[50%] rounded-full bg-orange-600 w-'>
                        </div>
                    </div>


                    <article className="flex flex-col">
                        <h2 className="text-xl mb-1">{experience.role} @ {experience.company}</h2>
                        <p className="text-xl text-neutral-500 mb-1">{experience.date}</p>
                        {experience.description}

                        <section className="flex flex-row flex-wrap gap-2 w-full">
                            {experience.technologies.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="bg-neutral-800 text-xl text-neutral-50 flex justify-center items-center rounded-md px-2 h-10 aspect-video"
                                    role="img"
                                    aria-label={tech.ariaLabel}
                                >
                                    {tech.icon}
                                    <span className="sr-only">{tech.ariaLabel}</span>
                                </span>
                            ))}
                        </section>
                        
                    </article>
                </div>
            ))}
        </section>
    )
}