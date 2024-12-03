"use client";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, Facebook, MessageCircle } from "lucide-react";
import { BackgroundPattern } from "./BackgroundPattern";
import { ContactItem } from "./ContactItem";
import { Header } from "./Header";
import { Qualifications } from "./Qualifications";

const contactInfo = {
  name: "Dr. Md. Sakib Ibna Obaid",
  title: "Pet Consultant & Surgeon",
  qualifications: [
    "DVM (BSMRAU), MS (Fellow)",
    "CT: BVPGI",
    "BVC Reg. No. 8938",
  ],
  phone: "880 1618055925",
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
    <Card className="w-[450px] h-[250px] p-6 bg-white relative overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border-emerald-100">
      <BackgroundPattern />

      <div className="relative z-10">
        <Header name={contactInfo.name} title={contactInfo.title} />
        <Qualifications details={contactInfo.qualifications} />

        <Separator className="my-4 bg-emerald-100" />

        <div className="grid grid-cols-2 gap-3">
          <ContactItem
            icon={Phone}
            text={contactInfo.phone}
            href={`tel:${contactInfo.phone}`}
          />
          <ContactItem
            icon={Mail}
            text={contactInfo.email}
            href={`mailto:${contactInfo.email}`}
          />
          <ContactItem
            icon={Facebook}
            text={contactInfo.facebook.username}
            href={contactInfo.facebook.link}
          />
          <ContactItem
            icon={MessageCircle}
            text="WhatsApp"
            href={contactInfo.whatsapp.link}
          />
        </div>
      </div>
    </Card>
  );
}