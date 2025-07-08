import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";

const badges = [
  {
    id: "leetcode-50",
    platform: "LeetCode",
    title: "50 Days Badge 2024",
    image: "https://assets.leetcode.com/static_assets/marketing/2024-50.gif",
    profile: "https://leetcode.com/Prajwal_Gurnule/",
  },
  {
    id: "leetcode-100",
    platform: "LeetCode",
    title: "100 Days Badge 2024",
    image: "https://assets.leetcode.com/static_assets/marketing/2024-100-new.gif",
    profile: "https://leetcode.com/Prajwal_Gurnule",
  },
];


export function Badges() {
  return (
    <SectionBackground>
      <section id="badges">
        <div className="container mx-auto max-w-6xl px-8">
          <SectionTitle subtitle="Milestones that reflect the journey of continuous growth and mastery.">Coding Badges</SectionTitle>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 sm:gap-8 gap-4">
            {badges.map((badge) => (
              <a
                key={badge.id}
                href={badge.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex flex-col items-center justify-center p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-purple-500 opacity-0 group-hover:opacity-20 rounded-xl blur-lg transition-all duration-300" />

                {/* Badge Image */}
                <img
                  src={badge.image}
                  alt={badge.platform}
                  className="w-30 h-30 rounded-md transition-transform duration-300 group-hover:scale-110"
                />

                {/* Badge Text */}
                <p className="mt-3 text-sm font-semibold text-gray-900 dark:text-white text-center">
                  {badge.title}
                </p>
                <span className="text-sm text-gray-600 dark:text-gray-400">{badge.platform}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
