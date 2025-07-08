import React from "react";
import { Briefcase } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  skills,
}: ExperienceCardProps) {
  return (
    <div className="relative group pl-6 sm:pl-10">
      {/* Timeline Dot */}
      <div className="absolute left-[-16px] top-4 w-8 h-8 bg-purple-600 dark:bg-purple-500 rounded-full border-4 border-gray-200 dark:border-gray-800"></div>

      {/* Experience Card */}
      <div className="relative bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-xl">
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="p-3 sm:p-4 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
              <p className="text-base text-purple-600 dark:text-purple-400">{company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{period}</p>
            </div>
          </div>

          {/* Description (Custom purple Bullets) */}
          <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
            {description.split("\n").map((line, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>

          {/* Skills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
