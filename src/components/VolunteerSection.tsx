import React, { useState } from 'react';
import { Hammer, Users, Calendar, MapPin, CheckCircle2, Shield, HeartHandshake, ArrowRight, Sparkles, Building2 } from 'lucide-react';
import { VOLUNTEER_ROLES } from '../data/habitatData';
import { VolunteerRole } from '../types';

interface VolunteerSectionProps {
  onSuccessToast?: (msg: string) => void;
}

export const VolunteerSection: React.FC<VolunteerSectionProps> = ({ onSuccessToast }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeRoleForModal, setActiveRoleForModal] = useState<VolunteerRole | null>(null);
  const [isGroupTab, setIsGroupTab] = useState<boolean>(false);

  // Form submission state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    municipality: 'St. Catharines',
    selectedRole: 'build-crew',
    availability: 'weekdays',
    tshirtSize: 'L',
    hasSteelToes: 'yes',
    emergencyName: '',
    emergencyPhone: '',
    safetyWaiver: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedConfirmation, setSubmittedConfirmation] = useState<{
    volunteerId: string;
    name: string;
    roleName: string;
    scheduledOrientation: string;
  } | null>(null);

  const filteredRoles = selectedCategory === 'all'
    ? VOLUNTEER_ROLES
    : VOLUNTEER_ROLES.filter((r) => r.category === selectedCategory);

  const handleRoleSelectForModal = (role: VolunteerRole) => {
    setFormData((prev) => ({ ...prev, selectedRole: role.id }));
    setActiveRoleForModal(role);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const roleObj = VOLUNTEER_ROLES.find((r) => r.id === formData.selectedRole);
      setSubmittedConfirmation({
        volunteerId: `VOL-NIAGARA-${Math.floor(1000 + Math.random() * 9000)}`,
        name: formData.fullName || 'Community Volunteer',
        roleName: roleObj ? roleObj.title : 'Habitat Niagara Volunteer Crew',
        scheduledOrientation: 'Next Tuesday at 6:30 PM (Virtual or at 447 Bunting Rd, St. Catharines)',
      });
      if (onSuccessToast) {
        onSuccessToast('Volunteer application submitted successfully!');
      }
    }, 700);
  };

  return (
    <section id="volunteer" className="py-16 sm:py-24 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00843D] mb-2">
            <span>Community Hands & Hearts</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#0054A4]">Volunteer Sign-Up</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#002F6C]" style={{ textWrap: 'balance' }}>
            No construction experience? No problem. We train and equip you.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you want to frame walls on an active job site, stage design pieces at our ReStores, or lead youth co-op projects, every single volunteer hour helps build a stronger Niagara.
          </p>
        </div>

        {/* Toggle between Individual Volunteer and Corporate Team Builds */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
          
          {/* Category Filter Controls adhering to Zero-Pill rule */}
          <div className="flex overflow-x-auto no-scrollbar gap-1.5 p-1 bg-slate-100 rounded-lg">
            <button
              onClick={() => { setIsGroupTab(false); setSelectedCategory('all'); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                !isGroupTab && selectedCategory === 'all'
                  ? 'bg-white text-[#002F6C] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Roles ({VOLUNTEER_ROLES.length})
            </button>
            <button
              onClick={() => { setIsGroupTab(false); setSelectedCategory('build'); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                !isGroupTab && selectedCategory === 'build'
                  ? 'bg-white text-[#002F6C] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Build Sites
            </button>
            <button
              onClick={() => { setIsGroupTab(false); setSelectedCategory('restore'); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                !isGroupTab && selectedCategory === 'restore'
                  ? 'bg-white text-[#002F6C] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ReStore Stores
            </button>
            <button
              onClick={() => { setIsGroupTab(false); setSelectedCategory('salvage'); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                !isGroupTab && selectedCategory === 'salvage'
                  ? 'bg-white text-[#002F6C] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Salvage Crew
            </button>
            <button
              onClick={() => { setIsGroupTab(false); setSelectedCategory('youth'); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                !isGroupTab && selectedCategory === 'youth'
                  ? 'bg-white text-[#002F6C] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Youth & Co-op
            </button>
          </div>

          {/* Group Team Build Switch */}
          <button
            onClick={() => setIsGroupTab(!isGroupTab)}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-md border transition-all flex items-center gap-2 cursor-pointer ${
              isGroupTab
                ? 'bg-[#002F6C] text-white border-[#002F6C]'
                : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Corporate & Group Team Builds</span>
          </button>
        </div>

        {/* Corporate Group Tab View */}
        {isGroupTab ? (
          <div className="bg-[#002F6C] text-white p-8 rounded-xl border border-slate-200 mb-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#63BA2B]">Team Sponsorship & Construction Day</span>
                <h3 className="text-2xl font-bold">Unite your company or organization on an active Niagara build site.</h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Bring up to 15 team members for an unforgettable day of hands-on construction, camaraderie, and direct community impact. We provide all tools, personal protective equipment (PPE), safety orientations, and lunch on site!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-200">
                  <div className="p-3 bg-white/10 rounded-lg border border-white/10">
                    <strong className="block text-white text-sm">Full Team Safety Gear</strong>
                    Hard hats, safety glasses & vests provided
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg border border-white/10">
                    <strong className="block text-white text-sm">Dedicated Site Crew Leader</strong>
                    Guided by experienced builders
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg border border-white/10">
                    <strong className="block text-white text-sm">Tax Receipt & Recognition</strong>
                    PR photos & charity tax receipt
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 bg-white text-slate-900 p-6 rounded-lg space-y-3">
                <h4 className="text-base font-bold text-[#002F6C]">Request Team Build Date</h4>
                <p className="text-xs text-slate-600">Reserve a date for your business or service club:</p>
                <input
                  type="text"
                  placeholder="Organization / Company Name"
                  className="w-full px-3 py-2 text-xs rounded-md border border-slate-300"
                />
                <input
                  type="email"
                  placeholder="Contact Email"
                  className="w-full px-3 py-2 text-xs rounded-md border border-slate-300"
                />
                <button
                  type="button"
                  onClick={() => {
                    setIsGroupTab(false);
                    if (onSuccessToast) onSuccessToast('Team Build inquiry received! Our volunteer coordinator will reach out.');
                  }}
                  className="w-full py-2.5 text-xs font-bold text-white bg-[#00843D] hover:bg-[#007033] rounded-md transition-colors cursor-pointer"
                >
                  Submit Team Inquiry
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {/* Roles Directory & Application Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Roles Directory Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#002F6C]">
                Available Volunteer Opportunities in Niagara
              </h3>
              <span className="text-xs text-slate-500 font-mono">
                {filteredRoles.length} Open Programs
              </span>
            </div>

            <div className="space-y-3.5">
              {filteredRoles.map((role) => {
                const isSelected = formData.selectedRole === role.id;
                return (
                  <div
                    key={role.id}
                    className={`p-5 rounded-xl border transition-all ${
                      isSelected
                        ? 'border-2 border-[#0054A4] bg-[#0054A4]/5 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                          <span className="font-semibold text-[#0054A4] uppercase tracking-wider text-[11px]">{role.category}</span>
                          <span aria-hidden="true">·</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            {role.location}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-slate-900">{role.title}</h4>
                      </div>
                      <span className="text-[11px] font-bold text-[#00843D] bg-[#00843D]/10 px-2 py-0.5 rounded-sm whitespace-nowrap">
                        {role.spotsAvailable} Spots
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {role.description}
                    </p>

                    <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                      <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{role.commitment}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRoleSelectForModal(role)}
                        className={`text-xs font-bold px-3 py-1.5 rounded-md transition-colors cursor-pointer flex items-center gap-1 ${
                          isSelected
                            ? 'bg-[#0054A4] text-white'
                            : 'text-[#0054A4] hover:bg-[#0054A4]/10'
                        }`}
                      >
                        <span>{isSelected ? 'Selected in Form' : 'Select This Role'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Safety & Equipment Guarantee */}
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-3">
              <Shield className="w-5 h-5 text-[#00843D] shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600">
                <strong className="text-slate-800 block">Our Safety Commitment</strong>
                All volunteers receive mandatory on-site safety orientation and supervision. Habitat Niagara provides hard hats, safety goggles, and high-visibility vests. Steel-toed safety boots are required on build sites.
              </div>
            </div>
          </div>

          {/* Interactive Volunteer Registration Form */}
          <div className="lg:col-span-6 bg-[#F8FAFC] p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm">
            
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-5">
              <div>
                <h3 className="text-lg font-bold text-[#002F6C]">Volunteer Registration Form</h3>
                <span className="text-xs text-slate-500">Fast sign-up · We will confirm your first shift</span>
              </div>
              <div className="w-9 h-9 rounded-md bg-[#00843D]/10 text-[#00843D] flex items-center justify-center">
                <Hammer className="w-5 h-5" />
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0054A4]"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.ca"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0054A4]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(905) 555-0123"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0054A4]"
                  />
                </div>
              </div>

              {/* Niagara Municipality & Preferred Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Niagara Municipality
                  </label>
                  <select
                    value={formData.municipality}
                    onChange={(e) => setFormData({ ...formData, municipality: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0054A4]"
                  >
                    <option value="St. Catharines">St. Catharines</option>
                    <option value="Welland">Welland</option>
                    <option value="Niagara Falls">Niagara Falls</option>
                    <option value="Thorold">Thorold</option>
                    <option value="Grimsby">Grimsby</option>
                    <option value="Pelham / Fonthill">Pelham / Fonthill</option>
                    <option value="Port Colborne">Port Colborne</option>
                    <option value="Fort Erie">Fort Erie</option>
                    <option value="Lincoln">Lincoln / Beamsville</option>
                    <option value="Niagara-on-the-Lake">Niagara-on-the-Lake</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Selected Role
                  </label>
                  <select
                    value={formData.selectedRole}
                    onChange={(e) => setFormData({ ...formData, selectedRole: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white font-semibold text-[#0054A4] focus:outline-hidden focus:ring-2 focus:ring-[#0054A4]"
                  >
                    {VOLUNTEER_ROLES.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Availability & Safety T-shirt Size */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Availability
                  </label>
                  <select
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white"
                  >
                    <option value="weekdays">Weekdays (Mon-Fri)</option>
                    <option value="saturdays">Saturdays Only</option>
                    <option value="flexible">Flexible / Call as needed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Crew T-Shirt Size
                  </label>
                  <select
                    value={formData.tshirtSize}
                    onChange={(e) => setFormData({ ...formData, tshirtSize: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white"
                  >
                    <option value="S">Small (S)</option>
                    <option value="M">Medium (M)</option>
                    <option value="L">Large (L)</option>
                    <option value="XL">Extra Large (XL)</option>
                    <option value="2XL">2XL</option>
                  </select>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="p-3.5 bg-white rounded-lg border border-slate-200 space-y-2">
                <span className="text-[11px] font-bold text-slate-700 uppercase block">Emergency Contact</span>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Contact Name"
                    value={formData.emergencyName}
                    onChange={(e) => setFormData({ ...formData, emergencyName: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-md border border-slate-300"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Emergency Phone"
                    value={formData.emergencyPhone}
                    onChange={(e) => setFormData({ ...formData, emergencyPhone: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-md border border-slate-300"
                  />
                </div>
              </div>

              {/* Safety Waiver Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.safetyWaiver}
                    onChange={(e) => setFormData({ ...formData, safetyWaiver: e.target.checked })}
                    className="mt-0.5 rounded-sm border-slate-300 text-[#00843D] focus:ring-[#00843D] w-4 h-4 cursor-pointer"
                  />
                  <span className="text-xs text-slate-600 leading-snug">
                    I confirm I am at least 16 years of age and agree to attend the mandatory safety orientation before starting on a build site or ReStore.
                  </span>
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting || !formData.safetyWaiver}
                className="w-full py-3.5 px-6 rounded-md font-bold text-sm text-white bg-[#00843D] hover:bg-[#007033] active:scale-[0.99] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting Application...</span>
                  </span>
                ) : (
                  <>
                    <Hammer className="w-4 h-4 text-[#63BA2B]" />
                    <span>Complete Volunteer Sign-Up</span>
                  </>
                )}
              </button>

              <div className="text-center text-[11px] text-slate-500">
                Habitat Niagara Volunteer Coordinator will contact you within 1-2 business days with shift schedules.
              </div>
            </form>

          </div>

        </div>

      </div>

      {/* Confirmation Modal */}
      {submittedConfirmation && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200 space-y-5">
            
            <div className="w-14 h-14 rounded-full bg-[#00843D]/10 text-[#00843D] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="text-center space-y-1">
              <span className="text-xs font-bold text-[#00843D] uppercase tracking-wider">Welcome to the Team!</span>
              <h3 className="text-2xl font-bold text-[#002F6C]">Volunteer Registration Confirmed</h3>
              <p className="text-xs text-slate-500 font-mono">Volunteer ID: {submittedConfirmation.volunteerId}</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2 text-xs">
              <div>
                <span className="text-slate-500 block">Volunteer Name:</span>
                <strong className="text-slate-800 text-sm">{submittedConfirmation.name}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Assigned Program:</span>
                <strong className="text-[#0054A4] text-sm">{submittedConfirmation.roleName}</strong>
              </div>
              <div className="border-t border-slate-200 pt-2">
                <span className="text-slate-500 block">Upcoming Safety Orientation:</span>
                <strong className="text-slate-800">{submittedConfirmation.scheduledOrientation}</strong>
              </div>
            </div>

            <p className="text-xs text-slate-600 text-center leading-relaxed">
              We’ve sent the Niagara Volunteer Handbook, safety video link, and your build schedule to <strong>{formData.email}</strong>. Thank you for lending a hand to build safe, decent homes in our community!
            </p>

            <button
              onClick={() => setSubmittedConfirmation(null)}
              className="w-full py-3 text-xs font-bold text-white bg-[#002F6C] hover:bg-[#001D42] rounded-md transition-colors cursor-pointer"
            >
              Done & Return to Overview
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
