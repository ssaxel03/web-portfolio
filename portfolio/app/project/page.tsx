import ProjectsPage from '@/components/projectPage';
import { projects, details } from '@/data/portfolio-data';
import { Metadata, ResolvingMetadata } from 'next/types'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  const projectId = (await searchParams).id;
  const project = projects.list.filter((project) => project.id == projectId)[0];
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.'
    }
  }

  return {
    title: `${project.name} - ${details.name} - ${details.role}`,
    description: `${project.shortDescription}`,
    openGraph: {
      title: `${project.name} - ${details.name} - ${details.role}`,
      description: `${project.shortDescription}`,
      url: `https://ssaxel03.com/projects/${project.id}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.name} - ${details.name} - ${details.role}`,
      description: `${project.shortDescription}`,
    },
    icons: {
      icon: '/favicon.png', // Change this to your actual favicon path and format
    },
  }
}

export default function ProjectPage() {

  return (
    <ProjectsPage/>
  );
}