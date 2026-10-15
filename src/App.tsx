/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatWeDoPillars } from './components/WhatWeDoPillars';
import { VolunteerSection } from './components/VolunteerSection';
import { DonationIntegration } from './components/DonationIntegration';
import { ReStoreSection } from './components/ReStoreSection';
import { CommunityStories } from './components/CommunityStories';
import { Footer } from './components/Footer';
import { Heart, Hammer, CheckCircle, X } from 'lucide-react';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const scrollToDonate = () => {
    const el = document.getElementById('donate');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToVolunteer = () => {
    const el = document.getElementById('volunteer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPillars = () => {
    const el = document.getElementById('pillars');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#0054A4]/20 selection:text-[#002F6C]">
      
      {/* Top Navigation Bar */}
      <Navbar
        onOpenDonateModal={scrollToDonate}
        onOpenVolunteerModal={scrollToVolunteer}
      />

      <main className="grow">
        {/* Hero Section with high-fidelity build photography and impact stats */}
        <Hero
          onOpenDonateModal={scrollToDonate}
          onOpenVolunteerModal={scrollToVolunteer}
          onExplorePillars={scrollToPillars}
        />

        {/* What We Do Core Pillars (Homeownership, Sustainable Building, ReStore, Community) */}
        <WhatWeDoPillars
          onOpenDonateModal={scrollToDonate}
          onOpenVolunteerModal={scrollToVolunteer}
        />

        {/* Volunteer Opportunities & Multi-step Sign-Up Form */}
        <VolunteerSection
          onSuccessToast={showToast}
        />

        {/* Interactive Donation Integration with Tax Receipt Preview */}
        <DonationIntegration />

        {/* Habitat ReStore Niagara 3 Locations & Free Donation Pickup Scheduler */}
        <ReStoreSection
          onSuccessToast={showToast}
        />

        {/* Community Impact, Regional Municipalities & Sweat Equity Simulator */}
        <CommunityStories />
      </main>

      {/* Institutional Footer */}
      <Footer
        onOpenDonateModal={scrollToDonate}
        onOpenVolunteerModal={scrollToVolunteer}
      />

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#002F6C] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-white/20 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <CheckCircle className="w-5 h-5 text-[#63BA2B] shrink-0" />
          <span className="text-xs font-semibold">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white ml-2 p-1 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Floating Action Affordance on Desktop/Mobile */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2">
        <button
          onClick={scrollToVolunteer}
          className="px-4 py-2.5 rounded-full bg-white text-[#0054A4] text-xs font-bold shadow-lg border border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-1.5 cursor-pointer"
        >
          <Hammer className="w-3.5 h-3.5 text-[#00843D]" />
          <span>Volunteer Sign-Up</span>
        </button>
        <button
          onClick={scrollToDonate}
          className="px-4 py-2.5 rounded-full bg-[#FF671F] text-white text-xs font-bold shadow-lg hover:bg-[#E05310] transition-all flex items-center gap-1.5 cursor-pointer"
        >
          <Heart className="w-3.5 h-3.5 fill-white" />
          <span>Donate</span>
        </button>
      </div>

    </div>
  );
}
