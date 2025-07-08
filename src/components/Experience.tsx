import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Qloron Technology Pvt. Ltd., Nagpur",
    period: "Feb 2025 - July 2025",
    description: `Collaborated with a team of React developers to design and implement React Native applications, leveraging Agile methodologies to enhance sprint efficiency and accelerate feature delivery by 30%.
    Engineered seamless data synchronization by building and testing RESTful APIs using Firebase and Postman, resulting in a 25% improvement in applications speed.
    Delivered 20+ projects and key modules for internal full-stack systems Screenify and Sortboxs, streamlining interview workflows and HR management contributing to a 40% increase in operational productivity.`,
    skills: ["React", "Next.js", "Firebase", "Java", "Application Programming Interface"],
  },
   {
    title: "Graphic Designer",
    company: "Google Developer Student Clubs (GDSC) BITW",
    period: "Aug 2023 - Aug 2024",
    description: `Designed several e-posters and banners using Figma, Adobe Photoshop, and UI/UX principles, contributing to a 30% increase in engagement for seminar promotions.`,
    skills: ["Figma","UI/UX","Team Collaboration","Networking"],
  },
  // {
  //  
  //   description: '',
  // },
  {
    title: 'Graphic Committee In charge',
    company: 'College Forum Network’ BIT',
    period: 'Aug 2023 - Aug 2024',
    description: `Created visually impactful banners and posters using Figma and Adobe Photoshop for three major events, including the PC Building Auction, resulting in an increase of event attendance by over 200 participants.`,
    skills: ["Figma","UI/UX","Team Collaboration","Networking"],
  },
];

export function Experience() {
  return (
    <SectionBackground>
      <section id="experience">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="From classrooms to codebases — applying knowledge where it matters most.">Experience</SectionTitle>
          <div className="relative border-l-2 border-purple-600 dark:border-purple-500 max-w-5xl mx-auto space-y-10">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
