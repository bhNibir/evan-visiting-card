"use client";

import { BusinessCard } from "@/components/BusinessCard";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-emerald-100 p-1 md:p-4">
      <BusinessCard />
    </main>
  );
}