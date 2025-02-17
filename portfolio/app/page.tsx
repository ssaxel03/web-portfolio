import Details from '@/components/detailSection';
import About from '@/components/aboutSection';
import Socials from '@/components/socialSection';
import Projects from '@/components/projectSection';
import Skills from '@/components/skillSection';
import Journey from '@/components/journeySection';
import ContactForm from '@/components/contactForm';

export default function Page() {

    return (
        <main className="flex flex-col w-full justify-center items-start sm:w-4/6 px-2 py-2 lg:px-0 lg:py-12">

            <section className='flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 mb-4'>

                <Details />

                <About />

            </section>

            <Socials />

            <hr className="border-neutral-50 mb-16 w-full" />

            <section className='w-full mb-16'>

                <h2 className='text-xl font-bold mb-4'>Projects</h2>

                <Projects />

            </section>


            <hr className="border-neutral-50 mb-16 w-full" />

            <section className='w-full mb-16'>

                <h2 className="text-xl font-bold mb-4">Skills</h2>

                <Skills />

            </section>


            <hr className="border-neutral-50 mb-16 w-full" />

            <section className='w-full'>

                <h2 className="text-xl font-bold mb-4">Journey</h2>

                <Journey/>

            </section>

            <hr className="border-neutral-50 mb-16 w-full" />

            <section className='w-full'>

                <h2 className="text-xl font-bold mb-4">Contact me</h2>

                <ContactForm />

            </section>
        </main>
    );
}