import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'B.Tech in Computer Engineering',
    institution: 'Bajaj Institute of Technology, Wardha',
    period: '2021 - 2025',
    score: '8.00 CGPA',
  },
  {
    degree: 'HSC (XII) (MAHARASHTRA STATE BOARD)',
    institution: 'Shri Vyankatesh Mahavidhyalay Yelakeli, Wardha',
    period: '2019 - 2021',
    score: '93.33%',
  },
  {
    degree: 'SSC (X) (CBSE)',
    institution: 'Gandhi City Public School Wardha',
    period: '2016 - 2019',
    score: '83.8%',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu) => (
            <EducationCard key={edu.degree} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}