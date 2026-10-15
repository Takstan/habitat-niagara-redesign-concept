import React, { useState } from 'react';
import { ShoppingBag, Truck, MapPin, Phone, Clock, Check, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
import { RESTORE_LOCATIONS, ACCEPTED_RESTORE_ITEMS } from '../data/habitatData';

interface ReStoreSectionProps {
  onSuccessToast?: (msg: string) => void;
}

export const ReStoreSection: React.FC<ReStoreSectionProps> = ({ onSuccessToast }) => {
  const [activeLocationId, setActiveLocationId] = useState<string>('st-catharines');
  const [pickupModalOpen, setPickupModalOpen] = useState(false);
  const [pickupStep, setPickupStep] = useState(1);
  const [pickupData, setPickupData] = useState({
    name: '',
    phone: '',
    address: '',
    city: 'St. Catharines',
    itemType: 'furniture',
    itemCount: '1-3 items',
    groundFloor: 'yes',
    notes: '',
  });

  const selectedStore = RESTORE_LOCATIONS.find((s) => s.id === activeLocationId) || RESTORE_LOCATIONS[0];

  const handlePickupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPickupStep(2);
    if (onSuccessToast) {
      onSuccessToast('Donation pickup request sent! Our dispatch team will confirm your date.');
    }
  };

  return (
    <section id="restores-map" className="py-16 sm:py-24 bg-[#F8FAFC] text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00AFD7] mb-2">
              <span>Social Enterprise Retail</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#0054A4]">Shop & Donate</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#002F6C]" style={{ textWrap: 'balance' }}>
              Habitat Niagara ReStores: 3 locations across the peninsula.
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
              100% of profits from our ReStores directly power local home construction. When you donate quality furniture or shop for home improvement materials, you’re helping a Niagara family build a brighter future.
            </p>
          </div>

          <button
            onClick={() => { setPickupModalOpen(true); setPickupStep(1); }}
            className="px-5 py-3 text-xs font-bold text-white bg-[#0054A4] hover:bg-[#002F6C] rounded-md shadow-xs transition-colors whitespace-nowrap flex items-center gap-2 cursor-pointer shrink-0"
          >
            <Truck className="w-4 h-4 text-[#00AFD7]" />
            <span>Book a Free Donation Pickup</span>
          </button>
        </div>

        {/* Store Location Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 3 Store Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Select a Niagara ReStore:
            </div>
            {RESTORE_LOCATIONS.map((store) => {
              const isActive = store.id === activeLocationId;
              return (
                <div
                  key={store.id}
                  onClick={() => setActiveLocationId(store.id)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? 'border-2 border-[#0054A4] bg-white shadow-md'
                      : 'border-slate-200 bg-white/70 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-base font-bold text-[#002F6C]">{store.name}</h3>
                      <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-[#0054A4] shrink-0" />
                        <span>{store.address}, {store.city}</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-[#00843D] bg-[#00843D]/10 px-2 py-0.5 rounded-sm">
                      Open Mon-Sat
                    </span>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      {store.phone}
                    </span>
                    <span className="font-semibold text-[#0054A4] flex items-center gap-1">
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Store Detailed Card */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-[#00843D] uppercase">Store Profile & Drop-off</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#002F6C]">{selectedStore.name}</h3>
              </div>
              <a
                href={`tel:${selectedStore.phone.replace(/[^0-9]/g, '')}`}
                className="px-3.5 py-1.5 text-xs font-bold text-[#0054A4] bg-[#0054A4]/10 hover:bg-[#0054A4]/20 rounded-md transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Store</span>
              </a>
            </div>

            {/* Address & Hours Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#0054A4]" />
                  <span>Physical Address & Drop-Off Bay</span>
                </div>
                <div className="text-slate-600 pl-5.5">
                  {selectedStore.address}
                  <br />
                  {selectedStore.city}, ON {selectedStore.postalCode}
                </div>
                <div className="pl-5.5 pt-1 text-[11px] text-slate-500">
                  Drive-thru donation bay open until 4:30 PM.
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#00843D]" />
                  <span>Store & Donation Hours</span>
                </div>
                <div className="text-slate-600 pl-5.5 space-y-0.5">
                  <div className="flex justify-between">
                    <span>Monday – Friday:</span>
                    <strong className="text-slate-800 font-mono">{selectedStore.hours.weekdays}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <strong className="text-slate-800 font-mono">{selectedStore.hours.saturday}</strong>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Store Features */}
            <div>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                Location Highlights & Specialties
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedStore.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                  >
                    ✓ {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Donation Acceptance Guidelines accordion/preview */}
            <div className="pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Accepted Donation Items
                </span>
                <span className="text-[11px] text-[#00843D] font-semibold">Tax receipts for eligible donations</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ACCEPTED_RESTORE_ITEMS.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-50 rounded-md text-xs border border-slate-100">
                    <strong className="text-[#002F6C] block">{item.category}</strong>
                    <span className="text-slate-600 text-[11px]">{item.examples}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Free Donation Pickup Modal */}
      {pickupModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200 space-y-5">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-[#0054A4]" />
                <h3 className="text-lg font-bold text-[#002F6C]">Free Donation Pickup Service</h3>
              </div>
              <button
                onClick={() => setPickupModalOpen(false)}
                className="text-xs text-slate-400 hover:text-slate-700 p-1"
              >
                Close ✕
              </button>
            </div>

            {pickupStep === 1 ? (
              <form onSubmit={handlePickupSubmit} className="space-y-3.5">
                <p className="text-xs text-slate-600">
                  Have large furniture, appliances, or renovation materials? Habitat Niagara’s truck will pick them up from your driveway or garage across the Niagara Region.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="David Brown"
                      value={pickupData.name}
                      onChange={(e) => setPickupData({ ...pickupData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-md border border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="(905) 555-4321"
                      value={pickupData.phone}
                      onChange={(e) => setPickupData({ ...pickupData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-md border border-slate-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2">
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">Street Address</label>
                    <input
                      type="text"
                      required
                      placeholder="123 Niagara St"
                      value={pickupData.address}
                      onChange={(e) => setPickupData({ ...pickupData, address: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-md border border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">City</label>
                    <select
                      value={pickupData.city}
                      onChange={(e) => setPickupData({ ...pickupData, city: e.target.value })}
                      className="w-full px-2 py-2 text-xs rounded-md border border-slate-300"
                    >
                      <option value="St. Catharines">St. Catharines</option>
                      <option value="Welland">Welland</option>
                      <option value="Niagara Falls">Niagara Falls</option>
                      <option value="Grimsby">Grimsby</option>
                      <option value="Fonthill">Fonthill</option>
                      <option value="Thorold">Thorold</option>
                      <option value="Port Colborne">Port Colborne</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">Primary Items</label>
                    <select
                      value={pickupData.itemType}
                      onChange={(e) => setPickupData({ ...pickupData, itemType: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-md border border-slate-300"
                    >
                      <option value="furniture">Furniture (Sofas, tables, dressers)</option>
                      <option value="appliances">Appliances (Fridge, stove, washer)</option>
                      <option value="cabinets">Kitchen Cabinets / Vanities</option>
                      <option value="building">Building Supplies & Lumber</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">Estimated Count</label>
                    <select
                      value={pickupData.itemCount}
                      onChange={(e) => setPickupData({ ...pickupData, itemCount: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-md border border-slate-300"
                    >
                      <option value="1-3 items">1–3 large items</option>
                      <option value="4-8 items">4–8 items (multi-room)</option>
                      <option value="full-house">Full estate or renovation batch</option>
                    </select>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg text-[11px] text-slate-600 border border-slate-200">
                  <strong>Pickup Requirements:</strong> Items must be in clean, reusable condition with no fabric tears, stains, or pet damage, situated on ground level or in garage for driver safety.
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-bold text-white bg-[#0054A4] hover:bg-[#002F6C] rounded-md transition-colors cursor-pointer"
                >
                  Confirm Pickup Booking Request
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4 py-4">
                <div className="w-12 h-12 rounded-full bg-[#00843D]/10 text-[#00843D] flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-[#002F6C]">Pickup Request Received!</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our ReStore logistics dispatcher will review your location in <strong>{pickupData.city}</strong> and call you at <strong>{pickupData.phone}</strong> to confirm your pickup window.
                </p>
                <button
                  onClick={() => setPickupModalOpen(false)}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-[#002F6C] rounded-md"
                >
                  Close
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
