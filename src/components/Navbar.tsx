import { Truck, Menu, X, Phone, Globe } from "lucide-react";
import { useState } from "react";
import { WHATSAPP_LINK } from "../lib/constants";
import { Logo } from "./Logo";
import { useLanguage } from "../context/LanguageContext";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks: Array<{ name: string; href: string; external?: boolean }> = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.services'), href: "#services" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <Logo className="h-16 w-auto" />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-[#1a2f8a] hover:text-[#ff6a00] font-bold transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-slate-600 hover:text-[#ff6a00] font-semibold transition-colors px-3 py-1.5 rounded-full border border-slate-200 hover:border-[#ff6a00]"
            >
              <Globe className="h-4 w-4" />
              {language === 'en' ? 'हिन्दी' : 'English'}
            </button>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff6a00] hover:bg-[#e65f00] text-white px-6 py-2.5 rounded-full font-bold inline-flex items-center gap-2 transition-all shadow-sm shadow-[#ff6a00]/30"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t('nav.bookPickup')}
            </a>
          </div>

          <div className="flex items-center md:hidden gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-slate-600 hover:text-[#ff6a00] font-semibold transition-colors px-2.5 py-1 rounded-full border border-slate-200"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm">{language === 'en' ? 'हिन्दी' : 'EN'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-[#222222] focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="block px-3 py-3 text-base font-bold text-[#1a2f8a] hover:text-[#ff6a00] hover:bg-[#1a2f8a]/5 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full flex items-center justify-center gap-2 bg-[#ff6a00] hover:bg-[#e65f00] text-white px-4 py-4 rounded-xl font-bold transition-colors"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {t('nav.bookPickupNow')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
