import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Timeline } from './ui/Timeline';

const experiences = [
  {
    title: 'IBM SkillsBuild Artificial Intelligence Virtual Internship',
    company: 'Edunet Foundation',
    period: 'Aug 2023 – Oct 2023',
    description: 'Completed a 6-week virtual internship with AICTE and Edunet Foundation, gaining Python and ML expertise, and developed a sentiment analysis model with accuracy by 80%.',
  },
  {
    title: 'Graphic Designer',
    company: 'Google Developer Student Clubs (GDSC) BITW',
    period: 'Aug 2023 - Aug 2024',
    description: 'Designed several e-posters and banners using Figma, Adobe Photoshop, and UI/UX principles, contributing to a 30% increase in engagement for seminar promotions.',
  },
  {
    title: 'Graphic Committee In charge',
    company: 'College Forum Network’ BIT',
    period: 'Aug 2023 - Aug 2024',
    description: 'Created visually impactful banners and posters using Figma and Adobe Photoshop for three major events, including the PC Building Auction, resulting in an increase of event attendance by over 200 participants.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Experience</SectionTitle>
        <Timeline items={experiences} />
      </div>
    </section>
  );
}