import { Calculator, ArrowRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import { WHATSAPP_NUMBER } from "../lib/constants";
import { useLanguage } from "../context/LanguageContext";

export function RateEstimator() {
  const [weight, setWeight] = useState("");
  const [pincode, setPincode] = useState("");
  const { t } = useLanguage();

  const handleEstimate = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hi Pickupwale, I need a shipping rate estimate. \nWeight: ${weight} kg\nDestination Pincode: ${pincode}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-20 bg-[#ff6a00] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#e65f00]/40 pattern-grid-lg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row">
          <div className="bg-[#1a2f8a] text-white p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
            <Calculator className="h-10 w-10 text-[#ff6a00] mb-6" />
            <h2 className="text-3xl font-bold mb-4">{t('rate.cost.title')}</h2>
            <p className="text-[#a8b2d1] text-lg mb-8 leading-relaxed">
              {t('rate.cost.desc')}
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#e6f1ff] font-medium">
                <div className="w-2 h-2 rounded-full bg-[#ff6a00]"></div> {t('rate.cost.b1')}
              </li>
              <li className="flex items-center gap-3 text-[#e6f1ff] font-medium">
                <div className="w-2 h-2 rounded-full bg-[#ff6a00]"></div> {t('rate.cost.b2')}
              </li>
            </ul>
          </div>
          
          <div className="p-8 md:p-12 md:w-1/2">
            <h3 className="text-2xl font-bold text-[#1a2f8a] mb-6">{t('rate.title')}</h3>
            <form onSubmit={handleEstimate} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">{t('rate.weight.label')}</label>
                <div className="relative">
                  <input 
                    type="number" 
                    required
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder={t('rate.weight.ph')}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-4 focus:ring-[#ff6a00]/20 focus:border-[#ff6a00] outline-none transition-all font-medium"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-500 font-bold">
                    KG
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">{t('rate.pincode.label')}</label>
                <input 
                  type="text" 
                  required
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder={t('rate.pincode.ph')}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-4 focus:ring-[#ff6a00]/20 focus:border-[#ff6a00] outline-none transition-all font-medium"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#ff6a00] hover:bg-[#e65f00] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#ff6a00]/30 hover:shadow-xl mt-6"
              >
                {t('rate.btn')}
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
