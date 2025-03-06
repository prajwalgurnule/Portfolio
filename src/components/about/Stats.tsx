import React from "react";
import { Code2, Coffee, Users } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function StatItem({ icon, value, label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md min-w-[120px]">
      <div className="text-blue-600 dark:text-blue-400 mb-3">{icon}</div>
      <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-sm text-center text-gray-600 dark:text-gray-400 mt-1">
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto py-8">
      <StatItem icon={<Code2 className="w-8 h-8" />} value="5+" label="Projects Completed" />
      <StatItem icon={<Coffee className="w-8 h-8" />} value="100+" label="Cups of Coffee" />
      <StatItem icon={<Users className="w-8 h-8" />} value="50+" label="Happy Clients" />
    </div>
  );
}
