import React from 'react';
import { Code2, Brain, Trophy, Rocket } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { AboutCard } from './about/AboutCard';
import { Stats } from './about/Stats';

export function About() {
  const cards = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Specialized in MERN stack with TypeScript, building scalable web applications.',
      color: 'bg-blue-600',
    },
    {
      icon: Brain,
      title: 'Problem Solving',
      description: 'Strong DSA background with competitive programming experience.',
      color: 'bg-purple-600',
    },
    {
      icon: Trophy,
      title: 'Achievements',
      description: 'Multiple certifications and academic excellence in computer science.',
      color: 'bg-green-600',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Passionate about creating innovative solutions to complex problems.',
      color: 'bg-orange-600',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-8 relative">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="max-w-4xl mx-auto mb-16 px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Hey, I’m Prajwal Gurnule! 👋</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              A passionate Final Year Undergraduate with a deep enthusiasm for Software Development & AI/ML. I thrive at the intersection of innovation and execution, transforming ideas into impactful solutions.
            </p>
          </div>

          <div className="grid gap-6 text-gray-700 dark:text-gray-300 md:grid-cols-2">
            <div className="p-6 border-l-4 border-blue-500 dark:border-blue-400 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">🚀 What Drives Me?</h3>
              <p className="mt-2 text-lg">I love problem-solving, data analysis, and leading projects that make a difference. Constant learning keeps me motivated!</p>
            </div>

            <div className="p-6 border-l-4 border-green-500 dark:border-green-400 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">🤝 Collaboration is Key</h3>
              <p className="mt-2 text-lg">I believe in teamwork and the power of diverse minds coming together to create something amazing.</p>
            </div>

            <div className="p-6 border-l-4 border-yellow-500 dark:border-yellow-400 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">📈 Growth & Leadership</h3>
              <p className="mt-2 text-lg">Beyond technical skills, I enjoy leading teams, mentoring peers, and creating a positive work environment.</p>
            </div>

            <div className="p-6 border-l-4 border-purple-500 dark:border-purple-400 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">🌍 Let’s Connect!</h3>
              <p className="mt-2 text-lg">Always open to networking, sharing ideas, and collaborating on exciting projects. Let’s make an impact together!</p>
            </div>
          </div>
        </div>


          <Stats />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cards.map((card) => (
            <AboutCard key={card.title} {...card} />
          ))}
        </div>
    </section>
  );
}