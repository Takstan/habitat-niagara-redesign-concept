import React, { useState } from 'react';
import { Hammer, Heart, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { heroHabitatBuild } from '../assets/images';

interface HeroProps {
  onOpenDonateModal: () => void;
  onOpenVolunteerModal: () => void;
  onExplorePillars: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDonateModal,
  onOpenVolunteerModal,
  onExplorePillars,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative bg-[#002F6C] text-white overflow-hidden">
      {/* Background architectural grid pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />

      {/* Decorative Brand Accent Gradients */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#00AFD7]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#00843D]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20 relative z-10">
        
        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Mission Narrative & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Non-pill unboxed kicker */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00AFD7]">
              <span>Habitat for Humanity Niagara</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#63BA2B]">Community Housing Initiative</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]" style={{ textWrap: 'balance' }}>
              Building strength, stability, and self-reliance through shelter in Niagara.
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              We bring communities together to help working families build and buy safe, decent, and affordable homes. Through community partnership, 500 hours of family sweat equity, and geared-to-income mortgages, we create lasting generational stability across 12 Niagara municipalities.
            </p>

            {/* Conversion Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenVolunteerModal}
                className="px-6 py-3.5 text-sm font-bold text-white bg-[#00843D] hover:bg-[#007033] active:scale-[0.98] rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <Hammer className="w-4 h-4 text-[#63BA2B] group-hover:rotate-12 transition-transform" />
                <span className="whitespace-nowrap">Join a Build as Volunteer</span>
                <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenDonateModal}
                className="px-6 py-3.5 text-sm font-bold text-white bg-[#FF671F] hover:bg-[#E05310] active:scale-[0.98] rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span className="whitespace-nowrap">Donate to Niagara Builds</span>
              </button>
            </div>

            {/* Quick Trust Guarantee */}
            <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#63BA2B]" />
                <span>100% of donations stay local in Niagara</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00AFD7]" />
                <span>Instant Canadian Tax Receipts</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Feature */}
          <div className="lg:col-span-6">
            <div className="relative group">
              
              {/* Outer Decorative Frame */}
              <div className="relative overflow-hidden rounded-xl bg-slate-800 shadow-2xl border border-white/10 aspect-16/10 sm:aspect-16/9">
                
                {/* Fallback container if image is loading or fails */}
                {!imgLoaded && !imgError && (
                  <div className="absolute inset-0 bg-[#002F6C] animate-pulse flex items-center justify-center">
                    <span className="text-xs font-semibold text-slate-300">Loading Build Photography...</span>
                  </div>
                )}

                {imgError ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0054A4] to-[#002F6C] p-8 flex flex-col justify-end text-white">
                    <div className="w-12 h-12 rounded-lg bg-[#00843D] flex items-center justify-center mb-4">
                      <Hammer className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Community Build in Action</h3>
                    <p className="text-sm text-slate-200 mt-1">Volunteers and homeowner families building hope together in Niagara.</p>
                  </div>
                ) : (
                  <img
                    src={heroHabitatBuild}
                    alt="Volunteers and homeowner family joyfully raising a timber house frame on a Habitat for Humanity Niagara build site"
                    referrerPolicy="no-referrer"
                    onLoad={() => setImgLoaded(true)}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}

                {/* Measured Scrim Overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* On-image caption banner */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#00AFD7] mb-1">
                    <span>Active Niagara Region Build Site</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-300">Volunteer Timber Raising</span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold leading-snug drop-shadow-sm">
                    “Every nail hammered and every beam raised brings a hardworking Niagara family one step closer to a stable home.”
                  </p>
                </div>
              </div>

              {/* Decorative ReStore floating micro-callout */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white text-slate-900 rounded-lg p-3.5 shadow-xl border border-slate-100 items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-md bg-[#00843D]/10 text-[#00843D] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#002F6C]">Habitat ReStores</div>
                  <div className="text-[11px] text-slate-600">3 Niagara locations · 100% of profits fund home construction</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Quantitative Impact Proof Strip (Claim-to-Proof Adjacency) */}
      <div className="border-t border-white/10 bg-[#002347]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            
            <div className="border-r border-white/10 last:border-r-0 pr-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#63BA2B] font-mono tabular-nums">
                72+
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 mt-0.5">
                Homes Built in Niagara
              </div>
              <div className="text-[11px] text-slate-400">Across 12 municipalities</div>
            </div>

            <div className="border-r border-white/10 last:border-r-0 pr-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#00AFD7] font-mono tabular-nums">
                88+
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 mt-0.5">
                Families Empowered
              </div>
              <div className="text-[11px] text-slate-400">Providing safety & stability</div>
            </div>

            <div className="border-r border-white/10 last:border-r-0 pr-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#FF671F] font-mono tabular-nums">
                500 hrs
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 mt-0.5">
                Sweat Equity Per Family
              </div>
              <div className="text-[11px] text-slate-400">Building skills & community</div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#63BA2B] font-mono tabular-nums">
                1,200+ t
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 mt-0.5">
                Diverted from Landfill
              </div>
              <div className="text-[11px] text-slate-400">Annual ReStore eco-impact</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
