"use client";

interface QualificationsProps {
  details: string[];
}

export function Qualifications({ details }: QualificationsProps) {
  return (
    <div className="mt-3 text-sm text-gray-600">
      {details.map((detail, index) => (
        <p key={index}>{detail}</p>
      ))}
    </div>
  );
}