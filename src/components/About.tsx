import { Users, History, Target, Heart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ffd4b3] text-[#ff6a00] text-sm font-bold tracking-wide uppercase mb-4">
              <Target className="h-4 w-4" />
              {t('about.mission')}
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2f8a] mb-6 leading-tight">
              {t('about.title')}
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 font-medium">
              <p>
                {t('about.p1')}
              </p>
              <p>
                {t('about.p2')}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-10">
              <div>
                <h4 className="text-4xl font-black text-[#ff6a00] mb-2 tracking-tight">{t('about.stat1.val')}</h4>
                <p className="text-[#1a2f8a] font-bold">{t('about.stat1.label')}</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-[#ff6a00] mb-2 tracking-tight">{t('about.stat2.val')}</h4>
                <p className="text-[#1a2f8a] font-bold">{t('about.stat2.label')}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#f7f9fc] rounded-3xl p-8 border border-slate-100">
            <h3 className="text-2xl font-bold text-[#1a2f8a] mb-6">{t('about.values.title')}</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-[#ffd4b3] p-3 rounded-xl h-fit">
                  <Heart className="h-6 w-6 text-[#ff6a00]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1a2f8a] mb-1">{t('about.v1.title')}</h4>
                  <p className="text-slate-600 font-medium">{t('about.v1.desc')}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-[#2e5bff]/10 p-3 rounded-xl h-fit">
                  <Target className="h-6 w-6 text-[#2e5bff]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1a2f8a] mb-1">{t('about.v2.title')}</h4>
                  <p className="text-slate-600 font-medium">{t('about.v2.desc')}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-[#ffd4b3] p-3 rounded-xl h-fit">
                  <Users className="h-6 w-6 text-[#ff6a00]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1a2f8a] mb-1">{t('about.v3.title')}</h4>
                  <p className="text-slate-600 font-medium">{t('about.v3.desc')}</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
