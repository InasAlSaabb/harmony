import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import MissionSection from '@/components/home/MissionSection';
import ProgramsPreview from '@/components/home/ProgramsPreview';
import CentersSection from '@/components/home/CentersSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MissionSection />
      <ProgramsPreview />
      <CentersSection />
      <CTASection />
    </main>
  );
}