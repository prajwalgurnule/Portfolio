import React from 'react';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:scale-110 transform transition-transform duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      <div className="relative text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
        {icon}
      </div>
    </a>
  );
}

export function SocialLinks() {
  const links = [
    { href: 'https://github.com/prajwalgurnule', icon: <Github className="w-6 h-6" />, label: 'GitHub' },
    { href: 'https://linkedin.com/in/prajwal-gurnule', icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn' },
    { href: 'https://instagram.com/prajwalgurnule_', icon: <Instagram className="w-6 h-6" />, label: 'Instagram' },
    { href: 'https://wa.me/919834367836', icon: <FaWhatsapp className="w-6 h-6" />, label: 'WhatsApp' },
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {links.map((link) => (
        <SocialLink key={link.href} {...link} />
      ))}
    </div>
  );
}
