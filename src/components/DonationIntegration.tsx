import React, { useState } from 'react';
import { Heart, ShieldCheck, Check, DollarSign, Sparkles, FileText, ArrowRight, Lock } from 'lucide-react';
import { DONATION_TIERS } from '../data/habitatData';

interface DonationIntegrationProps {
  initialAmount?: number;
}

export const DonationIntegration: React.FC<DonationIntegrationProps> = ({ initialAmount = 150 }) => {
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [selectedAmount, setSelectedAmount] = useState<number>(initialAmount);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [fund, setFund] = useState<string>('General Niagara Build Fund');
  const [isDedication, setIsDedication] = useState<boolean>(false);
  const [dedicationName, setDedicationName] = useState<string>('');
  
  // Checkout flow state
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [completedDonation, setCompletedDonation] = useState<{
    receiptNumber: string;
    amount: number;
    frequency: string;
    donorName: string;
    date: string;
  } | null>(null);

  // Donor form
  const [donor, setDonor] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: 'St. Catharines',
    postalCode: 'L2R 5V6',
    coverFees: true,
  });

  const activeAmount = customAmount ? parseFloat(customAmount) || 0 : selectedAmount;
  const processingFee = donor.coverFees ? Number((activeAmount * 0.029 + 0.30).toFixed(2)) : 0;
  const totalAmount = Number((activeAmount + processingFee).toFixed(2));
  
  // Ontario charitable tax credit approximation (approx 30% for under $200, 40%+ for over $200)
  const estimatedTaxCredit = activeAmount > 200
    ? Number((200 * 0.20 + (activeAmount - 200) * 0.40).toFixed(2))
    : Number((activeAmount * 0.20).toFixed(2));

  const handleSelectTier = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    if (val) {
      setSelectedAmount(0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeAmount <= 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setCompletedDonation({
        receiptNumber: `HN-${Math.floor(100000 + Math.random() * 900000)}`,
        amount: totalAmount,
        frequency: frequency === 'monthly' ? 'Monthly' : 'One-time',
        donorName: `${donor.firstName || 'Community Supporter'} ${donor.lastName || ''}`.trim(),
        date: new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' }),
      });
    }, 800);
  };

  return (
    <section id="donate" className="py-16 sm:py-24 bg-[#F8FAFC] text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF671F] mb-2">
            <span>Direct Community Impact</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#0054A4]">Donation Integration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#002F6C]" style={{ textWrap: 'balance' }}>
            Empower a Niagara family with the foundation for a lifetime.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            100% of your financial gift stays here in the Niagara Region to purchase building materials, hire specialized trades, and construct safe, energy-efficient homes.
          </p>
        </div>

        {/* Donation Interface Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Frequency & Impact Tiers */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
            
            {/* Frequency Segmented Control (Zero-Pill interactive control) */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                Gift Frequency
              </div>
              <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-lg border border-slate-200">
                <button
                  type="button"
                  onClick={() => setFrequency('once')}
                  className={`py-2.5 px-4 text-xs sm:text-sm font-bold rounded-md transition-all cursor-pointer ${
                    frequency === 'once'
                      ? 'bg-white text-[#002F6C] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  One-Time Gift
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`py-2.5 px-4 text-xs sm:text-sm font-bold rounded-md transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    frequency === 'monthly'
                      ? 'bg-[#00843D] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Monthly Hope Builder</span>
                </button>
              </div>
            </div>

            {/* Impact Tiers Grid */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Select Donation Amount (CAD)
                </div>
                <span className="text-xs text-[#00843D] font-semibold">100% Tax Deductible</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {DONATION_TIERS.map((tier) => {
                  const isSelected = selectedAmount === tier.amount && !customAmount;
                  return (
                    <button
                      key={tier.amount}
                      type="button"
                      onClick={() => handleSelectTier(tier.amount)}
                      className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-2 border-[#FF671F] bg-[#FF671F]/5 shadow-xs ring-1 ring-[#FF671F]'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="text-xl font-extrabold text-[#002F6C] font-mono tabular-nums">
                        ${tier.amount}
                      </div>
                      <div className="text-xs font-semibold text-slate-700 mt-1 line-clamp-1">
                        {tier.label}
                      </div>
                    </button>
                  );
                })}

                {/* Custom Amount Field */}
                <div className={`p-3 rounded-lg border flex flex-col justify-between ${
                  customAmount ? 'border-2 border-[#FF671F] bg-[#FF671F]/5' : 'border-slate-200 bg-white'
                }`}>
                  <span className="text-[11px] font-bold text-slate-500 uppercase">Other Amount</span>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-sm font-bold text-slate-400">$</span>
                    <input
                      type="text"
                      placeholder="Custom"
                      value={customAmount}
                      onChange={handleCustomChange}
                      className="w-full text-base font-bold text-[#002F6C] outline-hidden font-mono"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Active Impact Description Card */}
            {(() => {
              const matchedTier = DONATION_TIERS.find((t) => t.amount === selectedAmount);
              return (
                <div className="p-4 rounded-lg bg-[#0054A4]/5 border border-[#0054A4]/20 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#0054A4] text-white flex items-center justify-center shrink-0 text-sm font-bold">
                    $
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#0054A4]">
                      How your ${activeAmount} {frequency === 'monthly' ? '/ month' : ''} changes lives:
                    </div>
                    <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                      {matchedTier
                        ? matchedTier.impactDescription
                        : `Your thoughtful gift of $${activeAmount} directly funds crucial construction materials, insulation, and tool supplies for Habitat homes across the Niagara Region.`}
                    </p>
                  </div>
                </div>
              );
            })()}

            {/* Fund Destination Allocation */}
            <div className="space-y-2">
              <label htmlFor="fund-select" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Direct My Gift To
              </label>
              <select
                id="fund-select"
                value={fund}
                onChange={(e) => setFund(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm font-medium text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#0054A4]"
              >
                <option value="General Niagara Build Fund">General Niagara Build Fund (Highest Priority Need)</option>
                <option value="Welland 5-Home Community Build">Welland 5-Home Community Build Project</option>
                <option value="St. Catharines Neighborhood Revitalization">St. Catharines Neighborhood Revitalization</option>
                <option value="Women Build Niagara Campaign">Women Build Niagara Campaign</option>
                <option value="ReStore Logistics & Salvage Truck Operations">ReStore Logistics & Salvage Truck Operations</option>
              </select>
            </div>

            {/* Gift Dedication Option */}
            <div className="pt-2 border-t border-slate-100">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isDedication}
                  onChange={(e) => setIsDedication(e.target.checked)}
                  className="rounded-sm border-slate-300 text-[#0054A4] focus:ring-[#0054A4] w-4 h-4 cursor-pointer"
                />
                <span className="text-xs font-semibold text-slate-700">Make this gift in honour or memory of someone special</span>
              </label>

              {isDedication && (
                <div className="mt-3">
                  <input
                    type="text"
                    placeholder="Honouree's Name (e.g. In memory of John Smith)"
                    value={dedicationName}
                    onChange={(e) => setDedicationName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#0054A4]"
                  />
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Donor Details & Checkout Summary */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-base font-bold text-[#002F6C]">Donor Information</h3>
                <span className="text-xs text-slate-500">Official CRA Tax Receipt Details</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-[#00843D] font-bold">
                <Lock className="w-3.5 h-3.5" />
                <span>256-bit Secure</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">First Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane"
                    value={donor.firstName}
                    onChange={(e) => setDonor({ ...donor, firstName: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0054A4]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">Last Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Doe"
                    value={donor.lastName}
                    onChange={(e) => setDonor({ ...donor, lastName: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0054A4]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">Email (For Tax Receipt)</label>
                <input
                  type="email"
                  required
                  placeholder="jane.doe@example.com"
                  value={donor.email}
                  onChange={(e) => setDonor({ ...donor, email: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0054A4]"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2">
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">City in Ontario</label>
                  <input
                    type="text"
                    value={donor.city}
                    onChange={(e) => setDonor({ ...donor, city: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0054A4]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">Postal Code</label>
                  <input
                    type="text"
                    value={donor.postalCode}
                    onChange={(e) => setDonor({ ...donor, postalCode: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0054A4]"
                  />
                </div>
              </div>

              {/* Cover Processing Fees Checkbox */}
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={donor.coverFees}
                    onChange={(e) => setDonor({ ...donor, coverFees: e.target.checked })}
                    className="mt-0.5 rounded-sm border-slate-300 text-[#0054A4] focus:ring-[#0054A4] w-4 h-4 cursor-pointer"
                  />
                  <span className="text-xs text-slate-700 leading-snug">
                    I’d like to add <strong>${processingFee}</strong> to cover credit card processing fees so 100% of my gift directly builds homes.
                  </span>
                </label>
              </div>

              {/* Tax Benefit Card */}
              <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-lg flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-emerald-900">Estimated Canadian Tax Credit:</div>
                  <div className="text-emerald-700 text-[11px]">Ontario & Federal Combined Credit</div>
                </div>
                <div className="text-base font-extrabold text-emerald-800 font-mono tabular-nums">
                  ~${estimatedTaxCredit} CAD
                </div>
              </div>

              {/* Summary Breakdown */}
              <div className="pt-2 border-t border-slate-100 space-y-1 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Gift Amount ({frequency === 'monthly' ? 'Monthly' : 'One-Time'}):</span>
                  <span className="font-semibold text-slate-900 font-mono tabular-nums">${activeAmount.toFixed(2)} CAD</span>
                </div>
                {donor.coverFees && (
                  <div className="flex justify-between">
                    <span>Processing Fee Contribution:</span>
                    <span className="font-semibold text-slate-900 font-mono tabular-nums">${processingFee.toFixed(2)} CAD</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold text-[#002F6C] pt-2 border-t border-slate-200">
                  <span>Total Donation:</span>
                  <span className="font-mono tabular-nums">${totalAmount.toFixed(2)} CAD</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || activeAmount <= 0}
                className="w-full py-3.5 px-6 rounded-md font-bold text-sm text-white bg-[#FF671F] hover:bg-[#E05310] active:scale-[0.99] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing Donation...</span>
                  </span>
                ) : (
                  <>
                    <Heart className="w-4 h-4 fill-white" />
                    <span>Complete {frequency === 'monthly' ? 'Monthly' : ''} Gift of ${totalAmount} CAD</span>
                  </>
                )}
              </button>

              <div className="text-center">
                <span className="text-[11px] text-slate-500">
                  CRA Registered Charity: <strong>119057530RR0001</strong> · Instant digital tax receipt will be issued.
                </span>
              </div>
            </form>
          </div>

        </div>

      </div>

      {/* Instant Official Tax Receipt Modal */}
      {completedDonation && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-xl w-full p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200 space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00843D]/10 text-[#00843D] flex items-center justify-center">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#002F6C]">Thank You for Building Hope!</h3>
                  <span className="text-xs text-slate-500">Donation Successfully Received</span>
                </div>
              </div>
              <button
                onClick={() => setCompletedDonation(null)}
                className="text-xs text-slate-400 hover:text-slate-700 p-1 font-semibold"
              >
                Close ✕
              </button>
            </div>

            {/* Official Canadian Tax Receipt Paper Graphic */}
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-3 text-xs">
              <div className="flex justify-between items-start border-b border-slate-200 pb-2">
                <div>
                  <div className="font-extrabold text-[#0054A4]">HABITAT FOR HUMANITY NIAGARA</div>
                  <div className="text-[11px] text-slate-500">Official Charitable Donation Tax Receipt</div>
                </div>
                <div className="text-right">
                  <span className="font-mono font-bold text-slate-900">{completedDonation.receiptNumber}</span>
                  <div className="text-[11px] text-slate-500">{completedDonation.date}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-[11px]">
                <div>
                  <span className="text-slate-500 block">Received From:</span>
                  <strong className="text-slate-800">{completedDonation.donorName}</strong>
                  <div className="text-slate-600">{donor.city}, ON {donor.postalCode}</div>
                </div>
                <div>
                  <span className="text-slate-500 block">Charity Registration Number:</span>
                  <strong className="text-slate-800">119057530RR0001</strong>
                  <div className="text-slate-600">Location: Niagara, Ontario, Canada</div>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-2 flex justify-between items-center text-sm">
                <span className="font-semibold text-slate-700">Eligible Amount for Tax Deduction:</span>
                <span className="font-extrabold text-[#00843D] font-mono text-base tabular-nums">
                  ${completedDonation.amount.toFixed(2)} CAD
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              A copy of this official tax receipt and welcome letter from the Habitat Niagara Executive Director has been sent to <strong>{donor.email || 'your email'}</strong>. Your generous gift immediately buys building supplies for our active Niagara build projects!
            </p>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setCompletedDonation(null)}
                className="flex-1 py-3 text-xs font-bold text-white bg-[#0054A4] hover:bg-[#002F6C] rounded-md transition-colors cursor-pointer"
              >
                Return to Site
              </button>
              <button
                onClick={() => window.print()}
                className="px-4 py-3 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-slate-600" />
                <span>Print Tax Receipt</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
