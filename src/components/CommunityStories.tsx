import React, { useState } from 'react';
import { Quote, MapPin, Heart, Sparkles, Building, Award } from 'lucide-react';
import { COMMUNITY_STORIES, NIAGARA_MUNICIPALITIES } from '../data/habitatData';

export const CommunityStories: React.FC = () => {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(0);
  const [sweatHours, setSweatHours] = useState(500);
  const activeStory = COMMUNITY_STORIES[selectedStoryIndex];

  return (
    <section id="impact" className="py-16 sm:py-24 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0054A4] mb-2">
            <span>Lives Changed in Niagara</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#00843D]">Community Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#002F6C]" style={{ textWrap: 'balance' }}>
            Safe, decent housing builds lasting generational stability.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Independent studies show that children who grow up in Habitat homes experience better health outcomes, higher educational attainment, and a 4x increase in future homeownership.
          </p>
        </div>

        {/* Testimonial & Story Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Story Feature Card */}
          <div className="lg:col-span-8 bg-[#002F6C] text-white p-6 sm:p-10 rounded-2xl shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00AFD7]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00843D]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#63BA2B]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeStory.municipality}, Ontario</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-300">Dedicated {activeStory.yearBuilt}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-300">
                  <Award className="w-4 h-4 text-[#00AFD7]" />
                  <span>{activeStory.homeDetails}</span>
                </div>
              </div>

              <Quote className="w-10 h-10 text-[#00AFD7]/40 stroke-1" />

              <blockquote className="text-xl sm:text-2xl font-semibold leading-relaxed tracking-tight text-white">
                “{activeStory.quote}”
              </blockquote>

              <p className="text-sm text-slate-200 leading-relaxed">
                {activeStory.story}
              </p>

              {/* Tag row without pills */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-300 font-medium">
                {activeStory.tags.map((tag, idx) => (
                  <span key={idx} className="flex items-center gap-2">
                    {idx > 0 && <span className="text-slate-500">·</span>}
                    <span className="text-[#00AFD7] font-semibold">{tag}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Story Switcher Tabs */}
            <div className="relative z-10 pt-8 mt-8 border-t border-white/10 flex flex-wrap gap-2">
              {COMMUNITY_STORIES.map((story, idx) => (
                <button
                  key={story.id}
                  onClick={() => setSelectedStoryIndex(idx)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    selectedStoryIndex === idx
                      ? 'bg-white text-[#002F6C] font-bold shadow-xs'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  {story.family} ({story.municipality})
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Sweat Equity Simulator */}
          <div className="lg:col-span-4 bg-[#F8FAFC] p-6 sm:p-8 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-[#0054A4] mb-1">
                <Sparkles className="w-4 h-4 text-[#00AFD7]" />
                <span>Interactive Learning</span>
              </div>
              <h3 className="text-lg font-bold text-[#002F6C]">
                The Sweat Equity Journey
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Future homeowners contribute 500 hours of sweat equity alongside volunteers. Drag the slider to see how those hours transform families:
              </p>

              {/* Slider Input */}
              <div className="mt-6 space-y-3">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Invested Sweat Equity:</span>
                  <span className="text-base text-[#00843D] font-mono tabular-nums">{sweatHours} Hours</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="25"
                  value={sweatHours}
                  onChange={(e) => setSweatHours(Number(e.target.value))}
                  className="w-full accent-[#00843D] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>50 hrs</span>
                  <span>250 hrs</span>
                  <span>500 hrs (Full Goal)</span>
                </div>
              </div>

              {/* Milestone Details */}
              <div className="mt-5 p-4 rounded-lg bg-white border border-slate-200 space-y-2 text-xs">
                <div className="font-bold text-[#002F6C]">
                  {sweatHours < 150 && 'Phase 1: Foundation & Financial Literacy'}
                  {sweatHours >= 150 && sweatHours < 350 && 'Phase 2: Framing & Tool Competency'}
                  {sweatHours >= 350 && 'Phase 3: Dedication, Pride & Community Ties'}
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  {sweatHours < 150 &&
                    'Attending homeowner financial planning seminars, budget forecasting, and volunteering initial shifts in the Habitat ReStore showroom.'}
                  {sweatHours >= 150 && sweatHours < 350 &&
                    'Framing interior walls, hanging insulation, and painting rooms side-by-side with neighbours and corporate sponsor teams.'}
                  {sweatHours >= 350 &&
                    'Finishing drywall, installing fixtures, landscaping the front yard, and mentoring the next incoming partner family.'}
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#00843D]/10 rounded-lg text-xs text-[#00843D] font-medium border border-[#00843D]/20">
              ✓ Sweat equity builds deep emotional ownership and lifelong home maintenance skills.
            </div>
          </div>

        </div>

        {/* Niagara Municipalities Impact Matrix */}
        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-base font-bold text-[#002F6C]">
                Serving Communities Across the Entire Niagara Peninsula
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                From Lake Ontario to Lake Erie, we collaborate with local councils, planners, and residents:
              </p>
            </div>
            <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
              12 Municipalities · 72+ Total Builds
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {NIAGARA_MUNICIPALITIES.map((mun, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white rounded-lg border border-slate-200 shadow-2xs hover:border-[#0054A4] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <strong className="text-xs font-bold text-slate-800">{mun.name}</strong>
                  <span className="text-xs font-bold text-[#0054A4] font-mono tabular-nums">{mun.builds}</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1">{mun.status}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
