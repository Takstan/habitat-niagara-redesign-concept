import React, { useState } from 'react';
import { Menu, X, Heart, Hammer } from 'lucide-react';

interface NavbarProps {
  onOpenDonateModal: () => void;
  onOpenVolunteerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDonateModal, onOpenVolunteerModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#002F6C] text-white text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#63BA2B]">Habitat for Humanity Niagara</span>
            <span className="hidden sm:inline text-slate-300" aria-hidden="true">·</span>
            <span className="text-slate-200">Building strength, stability, and self-reliance through shelter</span>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 zones separated by gap-8 */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text/logo element wordmark */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 shrink-0 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0054A4] rounded-lg"
          >
            <div className="w-11 h-11 rounded-lg bg-[#0054A4] flex items-center justify-center text-white shadow-xs group-hover:bg-[#002F6C] transition-colors">
              {/* Habitat House Silhouette Icon */}
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V10.5Z" fill="#00843D" />
                <path d="M12 7.5L6 12.5V19H9.5V14H14.5V19H18V12.5L12 7.5Z" fill="white" />
                <circle cx="12" cy="11.5" r="1.5" fill="#0054A4" />
              </svg>
            </div>
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#002F6C] leading-tight">
              Habitat <span className="font-semibold text-slate-700">Niagara</span>
            </span>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <button
              onClick={() => scrollTo('pillars')}
              className="hover:text-[#0054A4] transition-colors whitespace-nowrap cursor-pointer"
            >
              What We Do
            </button>
            <button
              onClick={() => scrollTo('homeownership')}
              className="hover:text-[#0054A4] transition-colors whitespace-nowrap cursor-pointer"
            >
              Homeownership
            </button>
            <button
              onClick={() => scrollTo('restores')}
              className="hover:text-[#0054A4] transition-colors whitespace-nowrap cursor-pointer"
            >
              ReStores
            </button>
            <button
              onClick={() => scrollTo('volunteer')}
              className="hover:text-[#0054A4] transition-colors whitespace-nowrap cursor-pointer"
            >
              Volunteer
            </button>
            <button
              onClick={() => scrollTo('impact')}
              className="hover:text-[#0054A4] transition-colors whitespace-nowrap cursor-pointer"
            >
              Community Impact
            </button>
          </nav>

          {/* Zone 3: 1 primary action (with secondary volunteer affordance) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenVolunteerModal}
              className="px-4 py-2 text-xs font-bold text-[#0054A4] bg-[#0054A4]/10 hover:bg-[#0054A4]/20 rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
            >
              <Hammer className="w-3.5 h-3.5 text-[#0054A4]" />
              <span>Volunteer Sign-Up</span>
            </button>
            <button
              onClick={onOpenDonateModal}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#FF671F] hover:bg-[#E05310] active:scale-[0.98] rounded-md shadow-xs transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate Now</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenDonateModal}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#FF671F] rounded-md shadow-xs"
            >
              Donate
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0054A4] rounded-md focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <nav className="flex flex-col space-y-2 text-base font-semibold text-slate-800">
              <button
                onClick={() => scrollTo('pillars')}
                className="text-left py-2 px-2 hover:bg-slate-50 rounded-md"
              >
                What We Do
              </button>
              <button
                onClick={() => scrollTo('homeownership')}
                className="text-left py-2 px-2 hover:bg-slate-50 rounded-md"
              >
                Affordable Homeownership
              </button>
              <button
                onClick={() => scrollTo('restores')}
                className="text-left py-2 px-2 hover:bg-slate-50 rounded-md"
              >
                Habitat ReStores (Fonthill, St. Catharines, Grimsby)
              </button>
              <button
                onClick={() => scrollTo('volunteer')}
                className="text-left py-2 px-2 hover:bg-slate-50 rounded-md"
              >
                Volunteer Opportunities
              </button>
              <button
                onClick={() => scrollTo('impact')}
                className="text-left py-2 px-2 hover:bg-slate-50 rounded-md"
              >
                Community Impact & Stories
              </button>
            </nav>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenVolunteerModal(); }}
                className="w-full py-2.5 text-center text-sm font-bold text-[#0054A4] bg-[#0054A4]/10 rounded-md"
              >
                Sign Up to Volunteer
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenDonateModal(); }}
                className="w-full py-2.5 text-center text-sm font-bold text-white bg-[#FF671F] rounded-md shadow-xs flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate to Niagara Builds</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
