import { Truck, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_ADDRESS, COMPANY_NAME, WHATSAPP_LINK, WHATSAPP_NUMBER } from "../lib/constants";
import { Logo } from "./Logo";
import { useLanguage } from "../context/LanguageContext";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center mb-6">
              <div className="bg-white px-4 py-2 rounded-xl">
                <Logo className="h-12 w-auto" />
              </div>
            </a>
            <p className="text-slate-400 mb-6 leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">{t('footer.services')}</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-orange-400 transition-colors">{t('footer.s1')}</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition-colors">{t('footer.s2')}</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition-colors">{t('footer.s3')}</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition-colors">{t('footer.s4')}</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition-colors">{t('footer.s5')}</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition-colors">{t('footer.s6')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-orange-400 transition-colors">{t('footer.l1')}</a></li>
              <li><a href="#about" className="hover:text-orange-400 transition-colors">{t('footer.l2')}</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition-colors">{t('footer.l3')}</a></li>
              <li><a href={WHATSAPP_LINK} className="hover:text-orange-400 transition-colors">{t('footer.l4')}</a></li>
              <li><a href={WHATSAPP_LINK} className="hover:text-orange-400 transition-colors">{t('footer.l5')}</a></li>
              <li><a href="https://www.dtdc.com/support-locate-us/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">{t('footer.l6')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a href={WHATSAPP_LINK} className="hover:text-white transition-colors">{WHATSAPP_NUMBER}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a href="mailto:contact@pickupwale.in" className="hover:text-white transition-colors">contact@pickupwale.in</a>
              </li>
            </ul>
            <div className="mt-8">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold inline-flex items-center gap-2 transition-colors w-full justify-center"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {t('footer.wa')}
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-slate-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. {t('footer.rights')}
          </p>
          <div className="text-slate-500 text-sm">
            {t('footer.keywords')}
          </div>
        </div>
      </div>
    </footer>
  );
}
