import Details from '@/components/detailSection';
import About from '@/components/aboutSection';
import Socials from '@/components/socialSection';
import Projects from '@/components/projectSection';
import Skills from '@/components/skillSection';
import Journey from '@/components/journeySection';
import ContactForm from '@/components/contactForm';
import Divider from '@/components/divider';

export default function Page() {

    return (
        <main className="flex flex-col w-full justify-center items-start sm:w-4/6 px-2 py-2 lg:px-0 lg:py-12">

            <section className='flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 mb-4'>


                <Details />

                <About />

            </section>

            <Socials />

            <Divider/>

            <section className='w-full mb-16'>

                <Projects />

            </section>


            <Divider/>

            <section className='w-full mb-16'>

                <Skills />

            </section>


            <Divider/>

            <section className='w-full'>

                <Journey />

            </section>

            <Divider/>

            <section className='w-full'>

                <ContactForm />

            </section>
        </main>
    );
}