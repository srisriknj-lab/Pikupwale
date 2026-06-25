import { Droplet as Drop, ShieldCheck, MapPin, Search } from "lucide-react";
import { WHATSAPP_LINK } from "../lib/constants";
import { useLanguage } from "../context/LanguageContext";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function SpecializedIndustry() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-[#1a2f8a] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff6a00] via-[#1a2f8a] to-[#1a2f8a] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#ff6a00] font-semibold tracking-wider uppercase text-sm">{t('industry.badge')}</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
              {t('industry.title')}
            </h2>
            <p className="text-[#a8b2d1] text-lg mb-8 leading-relaxed">
              {t('industry.desc')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-[#ff6a00] h-5 w-5 flex-shrink-0" />
                <span className="text-[#e6f1ff]">{t('industry.feature1')}</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-[#ff6a00] h-5 w-5 flex-shrink-0" />
                <span className="text-[#e6f1ff]">{t('industry.feature2')}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-[#ff6a00] h-5 w-5 flex-shrink-0" />
                <span className="text-[#e6f1ff]">{t('industry.feature3')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Search className="text-[#ff6a00] h-5 w-5 flex-shrink-0" />
                <span className="text-[#e6f1ff]">{t('industry.feature4')}</span>
              </div>
            </div>
            
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff6a00] hover:bg-[#e65f00] text-white px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2 transition-colors"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {t('industry.consult')}
            </a>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-[#112240] rounded-3xl p-8 border border-[#233554] shadow-2xl relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6a00]/20 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-6 relative z-10 text-white">{t('industry.serve')}</h3>
              
              <ul className="space-y-4 relative z-10">
                {[
                  t('industry.list1'),
                  t('industry.list2'),
                  t('industry.list3'),
                  t('industry.list4'),
                  t('industry.list5'),
                  t('industry.list6'),
                  t('industry.list7')
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-[#1a2f8a]/80 p-3 rounded-lg border border-[#233554]/50 backdrop-blur-sm">
                    <div className="bg-[#ffffff] p-1.5 rounded text-[#e85a00]">
                      <Drop className="h-4 w-4" />
                    </div>
                    <span className="font-medium text-[#e6f1ff]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
