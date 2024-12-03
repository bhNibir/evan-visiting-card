"use client";

import { LucideIcon } from "lucide-react";

interface ContactItemProps {
  icon: LucideIcon;
  text: string;
  href: string;
}

export function ContactItem({ icon: Icon, text, href }: ContactItemProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200"
    >
      <Icon className="w-4 h-4" />
      <span className="text-sm truncate">{text}</span>
    </a>
  );
}