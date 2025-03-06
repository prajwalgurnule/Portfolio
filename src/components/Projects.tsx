import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';

const projects = [
  {
    title: 'Naukri-Sahayak',
    description: 'AI-driven mock interview platform designed to help job seekers prepare and excel in their interviews.',
    image: '/assets/naukri-sahayak.png',
    link: 'https://naukri-sahayak.vercel.app/',
    tags: ['React', 'Next.js', 'Python', 'PostgresSql', 'Gemini API'],
  },
  // {
  //   title: 'Chat-With-Pdf',
  //   description: 'DSA sheet management and tracking platform.',
  //   image: '/assets/neocode.png',
  //   link: 'https://neocoding.vercel.app',
  //   tags: ['TypeScript', 'Next.js', 'PostgreSQL'],
  // },
  {
    title: 'My-Cinema',
    description: 'A full-stack application for Movie Website consist backend build with SpringBoot and Frontend with React.',
    image: '/assets/mycinema.jpg',
    link: '',
    tags: ['React', 'SpringBoot', 'MongoDB'],
  },
  {
    title: 'Computational-Drug-Discovery',
    description: 'A machine learning model using pharmacology data from the ChEMBL Database to predict drug activity.',
    image: '/assets/CDD.png',
    link: '',
    tags: ['Python', 'Streamlit', 'BERT'],
  },
  {
    title: 'Sentimental-Analysis-for-Hotel-Review',
    description: 'a machine learning model that can perform sentiment analysis on hotel reviews to determine the overall sentiment expressed in the review.',
    image: '/assets/SAFHR.png',
    link: '',
    tags: ['Python', 'SVM', 'MLP'],
  },
  {
    title: 'Grocery-Store-Website',
    description: 'An Grocery store website design to offer customers a convenient alternative to traditional brick-and-mortar shopping.',
    image: '/assets/Grocery.png',
    link: '',
    tags: ['HTML/CSS', 'Javascript', 'PHP', 'SQL'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}