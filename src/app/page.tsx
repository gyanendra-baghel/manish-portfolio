"use client";
import CertificateSection from "@/components/CertificateSection";
import { Contact } from "@/components/Contact";
import { HeroSection } from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { ProjectSection } from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";
import { Tab } from "@/components/Tab";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <main>
      <Navbar />
      
      <HeroSection />
      
      <SkillSection />
      <ProjectSection />
      <br></br>
      <br></br>
      <CertificateSection />
      <br></br>
      <Contact />
    </main>
  );
}
