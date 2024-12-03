"use client";

import { Stethoscope } from "lucide-react";

interface HeaderProps {
  name: string;
  title: string;
}

export function Header({ name, title }: HeaderProps) {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h1 className="text-xl font-bold text-emerald-900">{name}</h1>
        <div className="flex items-center gap-2 mt-1">
          <Stethoscope className="w-4 h-4 text-emerald-600" />
          <p className="text-emerald-700 font-semibold">{title}</p>
        </div>
      </div>
    </div>
  );
}