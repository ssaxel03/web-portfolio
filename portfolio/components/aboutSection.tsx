import { about } from "@/data/portfolio-data"

export default function About() {
    return (
        <section className='w-full lg:w-1/2'>
            <h2 className="text-xl font-bold mb-4">About me</h2>
            {about.message}
        </section>
    )
}