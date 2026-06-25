import { ArrowRight, PackageCheck, MapPin, ShieldCheck, Search } from "lucide-react";
import { WHATSAPP_LINK } from "../lib/constants";
import React, { useState } from "react";
import heroImg from "../assets/images/ecommerce_shipping_boxes_1782056640046.jpg";
import { useLanguage } from "../context/LanguageContext";

export function Hero() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const { t, language } = useLanguage();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      window.open(`https://www.dtdc.com/track-your-shipment/?awbNo=${trackingNumber}`, "_blank");
    }
  };

  return (
    <section id="home" className="pt-28 pb-32 md:pt-32 md:pb-40 bg-[#1a2f8a] relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#ff6a00]/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-[#ffd4b3] rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff6a00] border border-transparent text-white text-sm font-bold tracking-wide mb-6 uppercase">
              <MapPin className="h-4 w-4" />
              {language === 'en' ? 'Based in Kannauj, The Perfume Capital' : 'इत्र नगरी, कन्नौज पर आधारित'}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {language === 'en' ? (
                <>India's Trusted <span className="text-[#ff6a00]">Courier & Cargo</span> Partner</>
              ) : (
                <>भारत का भरोसेमंद <span className="text-[#ff6a00]">कूरियर और कार्गो</span> पार्टनर</>
              )}
            </h1>
            
            <p className="text-lg md:text-xl text-[#a8b2d1] mb-10 leading-relaxed font-medium">
              {language === 'en' ? 
                'Fast, safe, and reliable delivery across India. Specialized parcel pickup and logistics for the fragrance industry, traders, and businesses.' : 
                'पूरे भारत में तेज़, सुरक्षित और भरोसेमंद डिलीवरी। सुगंध उद्योग, व्यापारियों और व्यवसायों के लिए विशेष पार्सल पिकअप और रसद।'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff6a00] hover:bg-[#e65f00] text-white px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#ff6a00]/20 hover:shadow-xl hover:shadow-[#ff6a00]/30 hover:-translate-y-0.5"
              >
                {language === 'en' ? 'Book Free Pickup' : 'फ्री पिकअप बुक करें'}
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#services"
                className="bg-transparent hover:bg-white/5 text-white border-2 border-white/20 px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center transition-all"
              >
                {language === 'en' ? 'Explore Services' : 'सुविधाएं देखें'}
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <PackageCheck className="h-6 w-6 text-[#ff6a00]" />
                <span className="font-semibold text-[#e6f1ff] text-sm leading-tight">
                  {language === 'en' ? 'Specialized Fragrance Handling' : 'सुगंधित उत्पादों की विशेष पैकिंग'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-[#ff6a00]" />
                <span className="font-semibold text-[#e6f1ff] text-sm leading-tight">
                  {language === 'en' ? 'Safe & Insured Delivery' : 'सुरक्षित और बीमित डिलीवरी'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-[#ff6a00]" />
                <span className="font-semibold text-[#e6f1ff] text-sm leading-tight">
                  {language === 'en' ? 'Pan-India Reach' : 'पैन-इंडिया पहुँच'}
                </span>
              </div>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0 hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 shadow-[#ff6a00]/10">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f8a] via-transparent to-transparent opacity-60 z-10"></div>
              <img 
                src={heroImg} 
                alt="eCommerce Logistics and Courier Boxes" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating accent badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#ff6a00] text-white p-6 rounded-2xl shadow-xl z-20 border-4 border-[#1a2f8a] transform hover:-translate-y-1 transition-transform">
              <div className="text-3xl font-black mb-1">19.5k+</div>
              <div className="text-sm font-bold opacity-90 uppercase tracking-wide">
                {language === 'en' ? 'Pin Codes Served' : 'पिन कोड तक सेवाएं'}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Tracking Widget */}
      <div className="absolute -bottom-16 left-0 right-0 w-full z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-2 flex items-center justify-center md:justify-start gap-3 text-[#1a2f8a]">
                <Search className="h-6 w-6 text-[#ff6a00]" />
                {t('hero.trackShipment')}
              </h3>
              <p className="text-slate-600 font-medium text-sm md:text-base">
                {t('hero.trackSub')}
              </p>
            </div>
            <form onSubmit={handleTrack} className="w-full md:w-auto flex flex-col sm:flex-row gap-3 flex-grow md:max-w-md">
              <input 
                type="text" 
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder={t('hero.placeholder')} 
                className="w-full sm:flex-1 px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-[#1a2f8a] placeholder:text-slate-400 focus:ring-2 focus:ring-[#ff6a00] focus:border-[#ff6a00] outline-none transition-all font-bold text-lg"
              />
              <button type="submit" className="bg-[#ff6a00] hover:bg-[#e65f00] px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#ff6a00]/20 flex-shrink-0 text-white text-lg">
                {t('hero.track')} 
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
