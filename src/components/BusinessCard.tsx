"use client";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Stethoscope,
  Phone,
  Mail,
  Facebook,
  MessageCircle,
  PawPrint,
  Syringe,

} from "lucide-react";

const contactInfo = {
  name: "Dr. Md. Sakib Ibna Obaid",
  title: "Pet Consultant & Surgeon",
  otherDetails: "DVM (BSMRAU), MS (Fellow)",
  otherDetails1: "CT: BVPGI",
  otherDetails2: "BVC Reg. No. 8938",
  phone: "+880 1618055925",
  email: "sioevan34@gmail.com",
  facebook: {
    username: "evan.sakib.54",
    link: "https://www.facebook.com/evan.sakib.54",
  },
  whatsapp: {
    number: "+8801618055925",
    link: "https://wa.me/8801618055925",
  },
};

export function BusinessCard() {
  return (
    <Card className="w-[450px] h-[250px] p-4 sm:p-6 bg-lime-300 relative overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-40">
        <PawPrint className="w-full h-full text-lime-800 " />
      </div>
      <div className="absolute bottom-24 left-56 w-24 h-24 opacity-5 transform rotate-[165deg]">
        <Syringe className="w-full h-full " />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl font-bold text-lime-950">{contactInfo.name}</h1>
            <div className="flex items-center gap-2 mt-1">
              <Stethoscope className="w-4 h-4 text-teal-900" />
              <p className="text-teal-900 text-sm font-semibold">{contactInfo.title}</p>
            </div>
          </div>
        </div>

        {/* Qualifications */}
        <div className="mt-3 text-sm text-neutral-900">
          <p>{contactInfo.otherDetails}</p>
          <p>{contactInfo.otherDetails1}</p>
          <p>{contactInfo.otherDetails2}</p>
        </div>

        <Separator className="my-4 bg-lime-600" />

        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-1.5 sm:gap-3 text-sm">
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center gap-2 text-neutral-900 hover:text-teal-900"
          >
            <Phone className="w-4 h-4" />
            <span>{contactInfo.phone}</span>
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-2 text-neutral-900 hover:text-teal-900"
          >
            <Mail className="w-4 h-4" />
            <span>{contactInfo.email}</span>
          </a>
          <a
            href={contactInfo.facebook.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-900 hover:text-teal-900"
          >
            <Facebook className="w-4 h-4" />
            <span>{contactInfo.facebook.username}</span>
          </a>
          <a
            href={contactInfo.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-900 hover:text-teal-900"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{contactInfo.whatsapp.number}</span>
          </a>
        </div>
      </div>
    </Card>
  );
}