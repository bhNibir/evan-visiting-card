"use client";

import { PawPrint, Syringe } from "lucide-react";

export function BackgroundPattern() {
  return (
    <>
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
        <PawPrint className="w-full h-full" />
      </div>
      <div className="absolute bottom-0 left-0 w-24 h-24 opacity-5 transform rotate-45">
        <Syringe className="w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent pointer-events-none" />
    </>
  );
}