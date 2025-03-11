import Hero from '@/components/heroSection';
import Socials from '@/components/socialSection';
import Projects from '@/components/projectSection';
import Skills from '@/components/skillSection';
import Journey from '@/components/journeySection';
import ContactForm from '@/components/contactForm';
import Divider from '@/components/divider';
import { details, about, skills, journey } from "data/portfolio-data";
import { Metadata } from 'next';

const nameArray = details.name.split(" ");
const roleArray = details.role.split(" ");
const skillsArray = skills.list.map((skill) => skill.name);
const companiesArray = journey.list.map((exp) => exp.company);

export const metadata: Metadata = {
  title: `${details.name} - ${details.role}`,
  icons: {
    icon: '/favicon.png',
  },
  description: `${about.metadata}`,
  keywords: [...nameArray, ...roleArray, ...skillsArray, ...companiesArray],
  authors: [{ name: `${details.name}` }],
  creator: `${details.name}`,
  publisher: `${details.name}`,
  robots: 'index, follow',
  openGraph: {
    title: `${details.name} - ${details.role}`,
    description: `${about.metadata}`,
    url: 'https://ssaxel03.com',
    siteName: `${details.name} - ${details.role}`,
    images: [
      {
        url: '/og-image.jpg', // Create an image for social sharing
        width: 1200,
        height: 630,
        alt: `${details.name} - ${details.role}`
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${details.name} - ${details.role}`,
    description: `${about.metadata}`,
    images: ['/og-image.jpg']
  },
  alternates: {
    canonical: 'https://ssaxel03.com',
  },
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL('https://ssaxel03.com'),
};

export default function Page() {

  return (
    <main className="flex flex-col w-full justify-center items-start sm:w-4/6 px-2 pb-2 lg:px-0 lg:pb-12">

      <Hero />

      <section id="projects" className='w-full mb-16'>

        <Projects />

      </section>


      <Divider />

      <section className='w-full mb-16'>

        <Skills />

      </section>


      <Divider />

      <section className='w-full'>

        <Journey />

      </section>

      <Divider />

      <Socials />

      <Divider />

      <ContactForm />
    </main>
  );
}