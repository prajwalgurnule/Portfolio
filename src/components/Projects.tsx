import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { ProjectCard } from './ui/ProjectCard';
import {
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiShadcnui,
  SiFramer,
  SiSocketdotio,
  SiPython,
  SiGooglegemini,
  SiPostgresql,
  SiStreamlit,
  SiJupyter,
  SiJavascript,
} from 'react-icons/si';

// Define reusable tech stack icons & colors
const techStacks = {
  react: { icon: SiReact, name: "React", color: '#00cfff' },
  node: { icon: SiNodedotjs, name: "Node.js", color: '#228b22' },
  firebase: { icon: SiFirebase, name: "Firebase", color: '#fbbf00' },
  tailwind: { icon: SiTailwindcss, name: "Tailwind CSS", color: '#06b6d4' },
  typescript: { icon: SiTypescript, name: "TypeScript", color: '#1f6feb' },
  javascript: { icon: SiJavascript, name: "Javascript", color: '#1f6feb' },
  next: { icon: SiNextdotjs, name: "Next.js", color: '#' },
  mongodb: { icon: SiMongodb, name: "MongoDB", color: '#10b981' },
  python: { icon: SiPython, name: "Python", color: '#186997' },
  shadcn: { icon: SiShadcnui, name: "ShadCN", color: '#6366f1' },
  framer: { icon: SiFramer, name: "Framer Motion", color: '#2563eb' },
  socket: { icon: SiSocketdotio, name: "Socket.io", color: '#' },
  postgresql: { icon: SiPostgresql, name: "PostgreSQl", color: '#5b4df1' },
  geminiapi: { icon: SiGooglegemini, name: "Gemini Api", color: '#ff3d00' },
  streamlit: { icon: SiStreamlit, name: "Streamlit", color: '#ff3d00' },
  jupyter: { icon: SiJupyter, name: "Jupyter", color: '#ff3d00' },
};

// Define projects data
// const projects = [
//   {
//     title: 'Naukri-Sahayak',
//     description: 'AI-driven mock interview platform designed to help job seekers prepare and excel in their interviews.',
//     image: '/assets/naukri-sahayak.png',
//     link: 'https://naukri-sahayak.vercel.app/',
//     tags: ['React', 'Next.js', 'Python', 'PostgresSql', 'Gemini API'],
//   },
//   // {
//   //   title: 'Chat-With-Pdf',
//   //   description: 'DSA sheet management and tracking platform.',
//   //   image: '/assets/neocode.png',
//   //   link: 'https://neocoding.vercel.app',
//   //   tags: ['TypeScript', 'Next.js', 'PostgreSQL'],
//   // },
//   {
//     title: 'My-Cinema',
//     description: 'A full-stack application for Movie Website consist backend build with SpringBoot and Frontend with React.',
//     image: '/assets/mycinema.jpg',
//     link: '',
//     tags: ['React', 'SpringBoot', 'MongoDB'],
//   },
//   {
//     title: 'Computational-Drug-Discovery',
//     description: 'A machine learning model using pharmacology data from the ChEMBL Database to predict drug activity.',
//     image: '/assets/CDD.png',
//     link: '',
//     tags: ['Python', 'Streamlit', 'BERT'],
//   },
//   {
//     title: 'Sentimental-Analysis-for-Hotel-Review',
//     description: 'a machine learning model that can perform sentiment analysis on hotel reviews to determine the overall sentiment expressed in the review.',
//     image: '/assets/SAFHR.png',
//     link: '',
//     tags: ['Python', 'SVM', 'MLP'],
//   },
//   {
//     title: 'Grocery-Store-Website',
//     description: 'An Grocery store website design to offer customers a convenient alternative to traditional brick-and-mortar shopping.',
//     image: '/assets/Grocery.png',
//     link: '',
//     tags: ['HTML/CSS', 'Javascript', 'PHP', 'SQL'],
//   },
// ];

const projects = [
  {
    title: 'Naukri Sahayak',
    description: 'AI-driven mock interview platform designed to help job seekers prepare and excel in their interviews.',
    image: '/assets/naukri-sahayak.png',
    link: 'https://naukri-sahayak.vercel.app/',
    github: 'https://github.com/prajwalgurnule/Naukri-Sahayak',
    techStack: [
      techStacks.react,
      techStacks.tailwind,
      techStacks.shadcn,
      techStacks.python,
      techStacks.postgresql,
      techStacks.geminiapi,
    ],
  },
  {
    title: 'Computational Drug Discovery',
    description: 'A machine learning model using pharmacology data from the ChEMBL Database to predict drug activity.',
    image: '/assets/CDD.png',
    link: '',
    github: 'https://github.com/prajwalgurnule/Computational-Drug-Discovery',
    techStack: [
      techStacks.python,
      techStacks.streamlit,
      techStacks.jupyter,
    ],
  },
  {
    title: 'Screenify',
    description: 'An advanced interview and meeting platform built to simplify and elevate recruitment and collaboration experience',
    image: '/assets/screenify.png',
    link: 'https://screenify-platform.vercel.app/',
    github: 'https://github.com/prajwalgurnule/Screenify',
    techStack: [
      
      techStacks.react,
      techStacks.next,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.shadcn,
    ],
  },
  {
    title: 'Sentimental Analysis for Hotel Review',
    description: 'a machine learning model that can perform sentiment analysis on hotel reviews expressed in the review.',
    image: '/assets/SAFHR.png',
    link: '',
    github: 'https://github.com/prajwalgurnule/Sentimental-Analysis-for-Hotel-Review',
    tags: ['Python', 'SVM', 'MLP'],
    techStack: [
      techStacks.python,
      techStacks.jupyter,
    ],
  },
  {
    title: 'Spotify Clone',
    description: 'Built a Spotify Clone that replicates the core features of a modern music streaming platform.',
    image: '/assets/spotify.png',
    link:'https://spotify-clone-app-sepia.vercel.app/',
    github: 'https://github.com/prajwalgurnule/Spotify-Clone-App',
    techStack: [
      techStacks.next,
      techStacks.javascript,
      techStacks.tailwind,
    ],
  },
  {
    title: 'Money Matters',
    description: 'The app integrates financial APIs to fetch user-specific data and provides an overview of transaction history.',
    image: '/assets/mm.png',
    link: 'https://money-matters-application.vercel.app/',
    github: 'https://github.com/prajwalgurnule/Money-Matters',
    techStack: [
      techStacks.react,
      techStacks.javascript,
      techStacks.tailwind,
      techStacks.framer,
    ],
  },
];

export function Projects() {
  return (<SectionBackground>
    <section id="projects">
      <div className="container mx-auto px-8">
        <SectionTitle subtitle="Every project, a product. Every product, a solution with a story.">Projects</SectionTitle>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        
      </div>
    </section>
  </SectionBackground>
  );
}
