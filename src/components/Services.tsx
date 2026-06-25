import { 
  Package, 
  Truck, 
  FileText, 
  Briefcase, 
  Droplet,
  Globe,
  CheckCircle2,
  Phone
} from "lucide-react";
import { WHATSAPP_LINK } from "../lib/constants";
import { useLanguage } from "../context/LanguageContext";

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.s1.title'),
      tag: t('services.s1.tag'),
      description: t('services.s1.desc'),
      features: [
        t('services.s1.f1'),
        t('services.s1.f2'),
        t('services.s1.f3'),
        t('services.s1.f4'),
        t('services.s1.f5'),
      ],
      price: "From ₹80/kg",
      icon: <Droplet className="h-6 w-6 text-[#ff6a00]" />,
      color: "bg-[#ffd4b3]",
      featured: true
    },
    {
      title: t('services.s2.title'),
      tag: t('services.s2.tag'),
      description: t('services.s2.desc'),
      features: [
        t('services.s2.f1'),
        t('services.s2.f2'),
        t('services.s2.f3'),
        t('services.s2.f4'),
        t('services.s2.f5'),
      ],
      price: "From ₹50/parcel",
      icon: <Globe className="h-6 w-6 text-[#2e5bff]" />,
      color: "bg-[#2e5bff]/10",
      featured: false
    },
    {
      title: t('services.s3.title'),
      tag: t('services.s3.tag'),
      description: t('services.s3.desc'),
      features: [
        t('services.s3.f1'),
        t('services.s3.f2'),
        t('services.s3.f3'),
        t('services.s3.f4'),
        t('services.s3.f5'),
      ],
      price: "From ₹60/500g",
      icon: <Package className="h-6 w-6 text-[#ff6a00]" />,
      color: "bg-[#ffd4b3]",
      featured: false
    },
    {
      title: t('services.s4.title'),
      tag: t('services.s4.tag'),
      description: t('services.s4.desc'),
      features: [
        t('services.s4.f1'),
        t('services.s4.f2'),
        t('services.s4.f3'),
        t('services.s4.f4'),
        t('services.s4.f5'),
      ],
      price: "Custom pricing",
      icon: <Truck className="h-6 w-6 text-[#2e5bff]" />,
      color: "bg-[#2e5bff]/10",
      featured: false
    },
    {
      title: t('services.s5.title'),
      tag: t('services.s5.tag'),
      description: t('services.s5.desc'),
      features: [
        t('services.s5.f1'),
        t('services.s5.f2'),
        t('services.s5.f3'),
        t('services.s5.f4'),
        t('services.s5.f5'),
      ],
      price: "From ₹70/envelope",
      icon: <FileText className="h-6 w-6 text-[#ff6a00]" />,
      color: "bg-[#ffd4b3]",
      featured: false
    },
    {
      title: t('services.s6.title'),
      tag: t('services.s6.tag'),
      description: t('services.s6.desc'),
      features: [
        t('services.s6.f1'),
        t('services.s6.f2'),
        t('services.s6.f3'),
        t('services.s6.f4'),
        t('services.s6.f5'),
      ],
      price: "Contact for quote",
      icon: <Briefcase className="h-6 w-6 text-[#2e5bff]" />,
      color: "bg-[#2e5bff]/10",
      featured: false
    }
  ];

  const partners = [
    "Delhivery",
    "DTDC",
    "Blue Dart",
    "India Post",
    "Ecom Express",
    "Xpressbees"
  ];

  return (
    <section id="services" className="pt-32 pb-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2f8a] mb-4">{t('services.title')}</h2>
          <p className="text-lg text-slate-600">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-white border ${service.featured ? 'border-[#ff6a00] shadow-xl shadow-[#ff6a00]/5' : 'border-slate-200'} rounded-2xl flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative`}
            >
              {service.tag && (
                <div className={`absolute top-0 right-0 ${service.featured ? 'bg-[#ff6a00] text-white' : 'bg-slate-100 text-slate-600'} text-xs font-bold px-3 py-1.5 rounded-bl-lg tracking-wide uppercase`}>
                  {service.tag}
                </div>
              )}
              
              <div className={`p-8 pb-6 flex-1 `}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1a2f8a] mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle2 className={`h-5 w-5 mt-0.5 flex-shrink-0 ${service.featured ? 'text-[#ff6a00]' : 'text-slate-400'}`} />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`p-6 border-t ${service.featured ? 'bg-[#fff5f0] border-[#ff6a00]/20' : 'bg-[#f7f9fc] border-slate-100'}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{t('services.startingAt')}</div>
                  <div className={`text-2xl font-black ${service.featured ? 'text-[#ff6a00]' : 'text-[#1a2f8a]'}`}>{service.price}</div>
                </div>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                    service.featured 
                      ? 'bg-[#e85a00] hover:bg-[#cc4a00] text-white shadow-lg shadow-[#e85a00]/30' 
                      : 'bg-white hover:bg-[#e85a00] hover:text-white hover:border-[#e85a00] text-[#1a2f8a] border-2 border-slate-200'
                  }`}
                >
                  <Phone className="h-5 w-5" />
                  {t('services.bookNow')}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-16 border-t border-slate-100">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#ff6a00] font-bold tracking-wider uppercase text-sm">{t('services.network.subtitle')}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2f8a] mt-2 mb-4">{t('services.network.title')}</h2>
            <p className="text-lg text-slate-600">
              {t('services.network.desc')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-slate-100 shadow-sm rounded-xl px-8 py-4 flex items-center justify-center font-bold text-xl text-[#1a2f8a] w-full sm:w-auto hover:border-[#ff6a00]/30 transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>

          {/* Locate Us Card/Banner */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#1a2f8a] to-[#2e5bff] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl shadow-blue-900/15">
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-12 translate-y-12 select-none pointer-events-none">
              <Globe className="w-96 h-96" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <span className="bg-white/15 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-3 inline-block">
                  {t('services.locateUs.tag')}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
                  {t('services.locateUs.title')}
                </h3>
                <p className="text-blue-100 font-medium max-w-xl text-sm md:text-base">
                  {t('services.locateUs.desc')}
                </p>
              </div>
              <a 
                href="https://www.dtdc.com/support-locate-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-[#ff6a00] text-[#1a2f8a] hover:text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 whitespace-nowrap text-base"
              >
                <Globe className="h-5 w-5" />
                {t('services.locateUs.btn')}
              </a>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
