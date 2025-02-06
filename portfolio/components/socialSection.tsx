import { socials } from '@/data/portfolio-data';

export default function Socials() {
    return (
        <section className='flex flex-row flex-wrap justify-start sm:justify-start gap-3 mb-1 mb-16'>
            {socials.list.map((social, index) => (
                <a
                    key={index}
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
            ))}

        </section>
    )
}