import React, { useState } from 'react';
import { Home, Hammer, ShoppingBag, Users, CheckCircle2, ArrowRight, Clock, HelpCircle, Sparkles } from 'lucide-react';
import { familyHomeownership, heroHabitatBuild, restoreRetailStore, volunteerCrewTeam } from '../assets/images';

interface WhatWeDoPillarsProps {
  onOpenDonateModal: () => void;
  onOpenVolunteerModal: () => void;
}

export const WhatWeDoPillars: React.FC<WhatWeDoPillarsProps> = ({
  onOpenDonateModal,
  onOpenVolunteerModal,
}) => {
  const [activeTab, setActiveTab] = useState<'homeownership' | 'construction' | 'restore' | 'community'>('homeownership');
  const [eligibilityStep, setEligibilityStep] = useState<number | null>(null);
  const [answers, setAnswers] = useState({
    livingCondition: '',
    niagaraResident: '',
    steadyIncome: '',
    sweatEquity: '',
  });

  const resetEligibility = () => {
    setEligibilityStep(null);
    setAnswers({ livingCondition: '', niagaraResident: '', steadyIncome: '', sweatEquity: '' });
  };

  return (
    <section id="pillars" className="py-16 sm:py-24 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0054A4] mb-2">
            <span>Our Core Mission</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#00843D]">Habitat Niagara Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#002F6C]" style={{ textWrap: 'balance' }}>
            What we do to transform lives across the Niagara Region.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Habitat for Humanity Niagara doesn’t offer charity handouts. Instead, we offer a hand up through innovative, community-powered pathways that empower families to build equity and security.
          </p>
        </div>

        {/* Tab Selector: Interactive Filter Bar adhering to Zero-Pill rule */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 p-1.5 bg-slate-100 rounded-lg border border-slate-200 mb-10 max-w-4xl">
          <button
            onClick={() => setActiveTab('homeownership')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-md transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer ${
              activeTab === 'homeownership'
                ? 'bg-white text-[#002F6C] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Home className="w-4 h-4 text-[#0054A4]" />
            <span>1. Affordable Homeownership</span>
          </button>

          <button
            onClick={() => setActiveTab('construction')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-md transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer ${
              activeTab === 'construction'
                ? 'bg-white text-[#002F6C] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Hammer className="w-4 h-4 text-[#00843D]" />
            <span>2. Sustainable Construction</span>
          </button>

          <button
            onClick={() => setActiveTab('restore')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-md transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer ${
              activeTab === 'restore'
                ? 'bg-white text-[#002F6C] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShoppingBag className="w-4 h-4 text-[#00AFD7]" />
            <span>3. The ReStores</span>
          </button>

          <button
            onClick={() => setActiveTab('community')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-md transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer ${
              activeTab === 'community'
                ? 'bg-white text-[#002F6C] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Users className="w-4 h-4 text-[#FF671F]" />
            <span>4. Community & Youth Build</span>
          </button>
        </div>

        {/* Tab 1: Affordable Homeownership */}
        {activeTab === 'homeownership' && (
          <div id="homeownership" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-semibold text-[#0054A4] uppercase tracking-wider">
                Pillar 01 — Hand Up, Not a Handout
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Helping local families achieve strength, stability, and independence.
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Many working families in Niagara are forced to spend over 50% of their income on rent in inadequate, unsafe, or overcrowded dwellings. Habitat Niagara bridges this gap through an innovative partnership model:
              </p>

              <div className="space-y-3.5 pt-1">
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-[#00843D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 text-sm">500 Hours of Family Sweat Equity</span>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Future homeowners invest 500 volunteer hours building their own home and other Habitat builds, working at the ReStore, and completing home maintenance workshops.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-[#00843D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 text-sm">Affordable Geared-To-Income Mortgage</span>
                    <p className="text-xs text-slate-600 mt-0.5">
                      No down payment is required. Monthly mortgage payments are capped at no more than 30% of household gross income, including taxes and loan repayment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-[#00843D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 text-sm">The Revolving Fund for Humanity</span>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Every mortgage payment made by a Habitat homeowner goes directly into a revolving build fund to construct the next family’s home in Niagara.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setEligibilityStep(1)}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#0054A4] hover:bg-[#002F6C] rounded-md transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4 text-[#00AFD7]" />
                  <span>Check Homeownership Eligibility</span>
                </button>
                <button
                  onClick={onOpenVolunteerModal}
                  className="px-5 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
                >
                  Help a Family on Site
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-slate-200 aspect-4/3 group">
                <img
                  src={familyHomeownership}
                  alt="Niagara mother and daughter receiving house keys from a Habitat volunteer leader"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold text-[#63BA2B]">Home Dedication Day</span>
                  <p className="text-sm font-medium mt-0.5">
                    Keys in hand: celebrating permanent stability and security for Niagara children.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Sustainable Construction */}
        {activeTab === 'construction' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-semibold text-[#00843D] uppercase tracking-wider">
                Pillar 02 — Building Green & Efficient
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Energy-efficient, net-zero ready homes built to last generations.
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We believe affordable housing must be affordable to heat and maintain for decades to come. Our construction team in Niagara works with local licensed trades, corporate build teams, and community volunteers to exceed modern Ontario Building Code standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="text-xs font-bold text-[#00843D] uppercase">High Performance Envelope</div>
                  <p className="text-xs text-slate-600 mt-1">Continuous exterior insulation and advanced air sealing slash monthly heating and cooling bills by up to 40%.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="text-xs font-bold text-[#00843D] uppercase">Universal Accessibility</div>
                  <p className="text-xs text-slate-600 mt-1">Zero-step entries, wider doorways, and reinforced bathroom framing accommodate family members of all ages and abilities.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="text-xs font-bold text-[#00843D] uppercase">Local Trades Partnerships</div>
                  <p className="text-xs text-slate-600 mt-1">Niagara electricians, plumbers, and HVAC masters mentor volunteers and donate skilled labor to ensure code compliance.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="text-xs font-bold text-[#00843D] uppercase">Solar & Heat Pump Ready</div>
                  <p className="text-xs text-slate-600 mt-1">Pre-wired and pre-plumbed for cold-climate heat pumps and rooftop photovoltaic panels to reduce environmental footprint.</p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={onOpenVolunteerModal}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#00843D] hover:bg-[#007033] rounded-md transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Hammer className="w-4 h-4 text-[#63BA2B]" />
                  <span>Sign Up for Next Build Day</span>
                </button>
                <button
                  onClick={onOpenDonateModal}
                  className="px-5 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
                >
                  Sponsor Building Materials
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-slate-200 aspect-4/3 group">
                <img
                  src={heroHabitatBuild}
                  alt="Habitat Niagara timber frame raising by volunteers"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold text-[#00AFD7]">Active Construction Site</span>
                  <p className="text-sm font-medium mt-0.5">
                    Framing the future with precision, community care, and sustainable materials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: The ReStores */}
        {activeTab === 'restore' && (
          <div id="restores" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-semibold text-[#00AFD7] uppercase tracking-wider">
                Pillar 03 — Social Enterprise & Environmental Stewardship
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Shop, donate, and divert waste to fund local home construction.
              </h3>
              <p className="text-slate-600 leading-relaxed">
                The Habitat Niagara ReStore is a retail social enterprise that accepts and resells donations of new and gently-used furniture, home appliances, building materials, and decor. 100% of store profits directly cover administrative costs and support home builds across Niagara!
              </p>

              <div className="space-y-3.5 pt-1">
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="w-8 h-8 rounded-md bg-[#0054A4]/10 text-[#0054A4] flex items-center justify-center shrink-0 font-bold text-sm">3</div>
                  <div>
                    <span className="font-bold text-slate-900 text-sm">Three Convenient Niagara Locations</span>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Full-service retail stores in <strong>St. Catharines</strong> (Bunting Rd), <strong>Fonthill / Pelham</strong> (Hwy 20), and <strong>Grimsby</strong> (South Service Rd).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="w-8 h-8 rounded-md bg-[#00843D]/10 text-[#00843D] flex items-center justify-center shrink-0 font-bold text-sm">♻</div>
                  <div>
                    <span className="font-bold text-slate-900 text-sm">1,200+ Tons Diverted Annually</span>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Keeping usable building supplies and furniture out of landfills while offering high-quality home goods at a fraction of retail prices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="w-8 h-8 rounded-md bg-[#FF671F]/10 text-[#FF671F] flex items-center justify-center shrink-0 font-bold text-sm">🚚</div>
                  <div>
                    <span className="font-bold text-slate-900 text-sm">Free Donation Pickup & Kitchen Salvage</span>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Donating bulky furniture or remodeling your kitchen? Our salvage crew will carefully remove cabinets and provide a charitable tax receipt for qualifying items.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#restores-map"
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#0054A4] hover:bg-[#002F6C] rounded-md transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-[#00AFD7]" />
                  <span>View Store Hours & Drop-off Bays</span>
                </a>
                <button
                  onClick={onOpenVolunteerModal}
                  className="px-5 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
                >
                  Volunteer at a ReStore
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-slate-200 aspect-4/3 group">
                <img
                  src={restoreRetailStore}
                  alt="Bright, welcoming Habitat ReStore showroom with furniture and fixtures"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold text-[#00AFD7]">ReStore Niagara Showroom</span>
                  <p className="text-sm font-medium mt-0.5">
                    Every dollar spent helps build an affordable home in our community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Community & Youth Build */}
        {activeTab === 'community' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-semibold text-[#FF671F] uppercase tracking-wider">
                Pillar 04 — Community Engagement & Next Gen
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Engaging youth, corporations, and community groups across Niagara.
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Community builds foster pride, break down social barriers, and create lifelong friendships. Whether it’s high school co-op students learning real trades or local businesses participating in Team Build Days, our sites are lively spaces of shared purpose.
              </p>

              <div className="space-y-3.5 pt-1">
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#FF671F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 text-sm">Women Build Niagara</span>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Empowering women of all skill levels to step onto the construction site, learn power tool safety, and collaborate to frame homes for single-parent families.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#FF671F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 text-sm">Youth Build & High School Co-op</span>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Partnering with Niagara Catholic and District School Board of Niagara (DSBN) to offer hands-on construction apprenticeships and 40-hour graduation volunteer credits.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#FF671F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 text-sm">Corporate Team Build Days</span>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Unique corporate team-building where employees step away from desks and laptops to raise roof trusses and hang drywall together while directly sponsoring build materials.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenVolunteerModal}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#00843D] hover:bg-[#007033] rounded-md transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Users className="w-4 h-4 text-[#63BA2B]" />
                  <span>Register a Team or Individual</span>
                </button>
                <button
                  onClick={onOpenDonateModal}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#FF671F] hover:bg-[#E05310] rounded-md transition-colors cursor-pointer"
                >
                  Sponsor a Build Day
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-slate-200 aspect-4/3 group">
                <img
                  src={volunteerCrewTeam}
                  alt="Energetic community volunteers smiling together on a Niagara build site"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold text-[#FF671F]">Niagara Volunteer Spirit</span>
                  <p className="text-sm font-medium mt-0.5">
                    Community members working together to build homes, communities, and hope.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Interactive Eligibility Check Modal */}
        {eligibilityStep !== null && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0054A4] uppercase">
                  <Sparkles className="w-4 h-4 text-[#00AFD7]" />
                  <span>Habitat Niagara Qualification Guide</span>
                </div>
                <button
                  onClick={resetEligibility}
                  className="text-xs text-slate-400 hover:text-slate-700 p-1 font-semibold"
                >
                  Close ✕
                </button>
              </div>

              {eligibilityStep === 1 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-[#002F6C]">Step 1: Housing Need</h4>
                  <p className="text-sm text-slate-600">
                    Is your current housing inadequate due to overcrowding, unaffordability (&gt;40% of income), structural safety issues, or lack of accessibility?
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={() => { setAnswers({ ...answers, livingCondition: 'yes' }); setEligibilityStep(2); }}
                      className="py-3 px-4 rounded-lg border-2 border-[#0054A4] bg-[#0054A4]/5 text-[#0054A4] font-bold text-sm hover:bg-[#0054A4] hover:text-white transition-colors cursor-pointer"
                    >
                      Yes, need better housing
                    </button>
                    <button
                      onClick={() => { setAnswers({ ...answers, livingCondition: 'no' }); setEligibilityStep(2); }}
                      className="py-3 px-4 rounded-lg border border-slate-300 text-slate-700 font-medium text-sm hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      No, current housing is adequate
                    </button>
                  </div>
                </div>
              )}

              {eligibilityStep === 2 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-[#002F6C]">Step 2: Niagara Residency & Income</h4>
                  <p className="text-sm text-slate-600">
                    Have you lived in the Niagara Region for at least 12 months, and does your family have a steady reliable income (employment, pension, disability)?
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={() => { setAnswers({ ...answers, steadyIncome: 'yes' }); setEligibilityStep(3); }}
                      className="py-3 px-4 rounded-lg border-2 border-[#0054A4] bg-[#0054A4]/5 text-[#0054A4] font-bold text-sm hover:bg-[#0054A4] hover:text-white transition-colors cursor-pointer"
                    >
                      Yes, steady income in Niagara
                    </button>
                    <button
                      onClick={() => { setAnswers({ ...answers, steadyIncome: 'no' }); setEligibilityStep(3); }}
                      className="py-3 px-4 rounded-lg border border-slate-300 text-slate-700 font-medium text-sm hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      Not yet / New to Niagara
                    </button>
                  </div>
                </div>
              )}

              {eligibilityStep === 3 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-[#002F6C]">Step 3: Willingness to Partner</h4>
                  <p className="text-sm text-slate-600">
                    Are you and your household ready to contribute 500 hours of sweat equity on build sites and participate in financial workshops?
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={() => { setAnswers({ ...answers, sweatEquity: 'yes' }); setEligibilityStep(4); }}
                      className="py-3 px-4 rounded-lg border-2 border-[#00843D] bg-[#00843D]/10 text-[#00843D] font-bold text-sm hover:bg-[#00843D] hover:text-white transition-colors cursor-pointer"
                    >
                      Yes! Ready to build together
                    </button>
                    <button
                      onClick={() => { setAnswers({ ...answers, sweatEquity: 'unsure' }); setEligibilityStep(4); }}
                      className="py-3 px-4 rounded-lg border border-slate-300 text-slate-700 font-medium text-sm hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      Need more information
                    </button>
                  </div>
                </div>
              )}

              {eligibilityStep === 4 && (
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#00843D]/10 text-[#00843D] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-center text-[#002F6C]">
                    You may be an ideal candidate for Habitat Niagara!
                  </h4>
                  <p className="text-sm text-slate-600 text-center">
                    Based on your responses, you meet the three pillars of Habitat homeownership: housing need, steady ability to repay, and willingness to complete 500 sweat equity hours.
                  </p>
                  <div className="p-3.5 bg-slate-50 rounded-lg text-xs text-slate-700 border border-slate-200">
                    <strong>Next Steps:</strong> Applications for upcoming Niagara build sites (including Welland and Thorold) are reviewed by our Family Selection Committee.
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={resetEligibility}
                      className="flex-1 py-2.5 text-xs font-bold text-white bg-[#0054A4] hover:bg-[#002F6C] rounded-md transition-colors cursor-pointer"
                    >
                      Request Application Package
                    </button>
                    <button
                      onClick={resetEligibility}
                      className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-md"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
