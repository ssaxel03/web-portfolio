import { details } from "../data/portfolio-data";

export default function Details() {

    return (
        <section className='flex flex-col w-full lg:w-1/2'>

            <h1 className='text-xl font-bold mb-4'>Who am I?</h1>

            <article className="text-xl mb-1">{details.name}</article>

            <article className="text-xl mb-1">{details.role}</article>

            <article className="text-xl">{details.location}</article>

        </section>
    )
}