import React, { useState } from 'react';
import { Mail, Phone, MapPin, Heart, ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onOpenDonateModal: () => void;
  onOpenVolunteerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDonateModal, onOpenVolunteerModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#002035] text-slate-300 text-xs border-t border-slate-800">
      
      {/* Newsletter & Community Action Band */}
      <div className="border-b border-white/10 bg-[#001726] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-white">Stay Connected with Habitat Niagara Builds</h3>
            <p className="text-slate-400">Receive build updates, family stories, and ReStore DIY sales directly to your inbox.</p>
          </div>

          <div className="w-full md:w-auto">
            {newsletterSubscribed ? (
              <div className="flex items-center gap-2 text-xs font-bold text-[#63BA2B] bg-[#00843D]/20 px-4 py-3 rounded-lg border border-[#00843D]/30">
                <Check className="w-4 h-4" />
                <span>Thank you for subscribing to Niagara build news!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-md w-full">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-3.5 py-2.5 rounded-md bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#00AFD7] w-full sm:w-72"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-md bg-[#00843D] hover:bg-[#007033] font-bold text-white text-xs transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links & Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Organization Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0054A4] flex items-center justify-center text-white">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V10.5Z" fill="#00843D" />
                  <path d="M12 7.5L6 12.5V19H9.5V14H14.5V19H18V12.5L12 7.5Z" fill="white" />
                  <circle cx="12" cy="11.5" r="1.5" fill="#0054A4" />
                </svg>
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                Habitat for Humanity <span className="font-semibold text-slate-300">Niagara</span>
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed">
              Habitat for Humanity Niagara brings communities together to help families build strength, stability, and self-reliance through affordable homeownership.
            </p>

            <div className="pt-2 text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00AFD7]" />
                <span>Head Office: 150 Bunting Rd, St. Catharines, ON L2M 3Y2</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#00AFD7]" />
                <a href="tel:9056857365" className="hover:text-white transition-colors">(905) 685-7365</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00AFD7]" />
                <a href="mailto:info@habitatniagara.ca" className="hover:text-white transition-colors">info@habitatniagara.ca</a>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-slate-400">
                Registered Charity Business Number: <strong className="text-slate-200">119057530 RR0001</strong>
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-bold text-white text-xs uppercase tracking-wider">
              Explore What We Do
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => scrollTo('pillars')} className="hover:text-white transition-colors">
                  Our Mission & Pillars
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('homeownership')} className="hover:text-white transition-colors">
                  Homeownership Program
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pillars')} className="hover:text-white transition-colors">
                  Sustainable Building
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('impact')} className="hover:text-white transition-colors">
                  Niagara Impact Matrix
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('impact')} className="hover:text-white transition-colors">
                  Homeowner Stories
                </button>
              </li>
            </ul>
          </div>

          {/* ReStores Quick Info */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-bold text-white text-xs uppercase tracking-wider">
              Niagara ReStores
            </div>
            <div className="space-y-2.5 text-slate-400">
              <div>
                <strong className="text-slate-200 block">St. Catharines ReStore</strong>
                <span>447 Bunting Rd · (905) 685-7365</span>
              </div>
              <div>
                <strong className="text-slate-200 block">Fonthill (Pelham) ReStore</strong>
                <span>2498 Hwy 20 E · (905) 892-4663</span>
              </div>
              <div>
                <strong className="text-slate-200 block">Grimsby ReStore</strong>
                <span>185 South Service Rd · (905) 309-7365</span>
              </div>
              <div className="pt-1">
                <button
                  onClick={() => scrollTo('restores-map')}
                  className="text-[#00AFD7] hover:underline font-semibold"
                >
                  Book Free Donation Pickup →
                </button>
              </div>
            </div>
          </div>

          {/* Get Involved CTAs */}
          <div className="lg:col-span-3 space-y-4">
            <div className="font-bold text-white text-xs uppercase tracking-wider">
              Get Involved
            </div>
            <p className="text-slate-400">
              Help us eliminate substandard housing in Niagara through volunteering, shopping, or financial contributions.
            </p>
            <div className="space-y-2 pt-1">
              <button
                onClick={onOpenVolunteerModal}
                className="w-full py-2.5 px-4 rounded-md font-bold text-white bg-[#00843D] hover:bg-[#007033] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Volunteer on Site</span>
              </button>
              <button
                onClick={onOpenDonateModal}
                className="w-full py-2.5 px-4 rounded-md font-bold text-white bg-[#FF671F] hover:bg-[#E05310] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Donate to Niagara Builds</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal, Land Acknowledgment & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Habitat for Humanity Niagara. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-200">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-200">Accessibility Standards</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-200">Financial Accountability</a>
          </div>
        </div>

        <div className="mt-4 text-[11px] text-slate-400 text-center leading-relaxed">
          Habitat for Humanity Niagara respectfully acknowledges that the land on which we gather and build is the traditional territory of the Haudenosaunee and Anishinaabe peoples, many of whom continue to live and work here today.
        </div>
      </div>
    </footer>
  );
};
