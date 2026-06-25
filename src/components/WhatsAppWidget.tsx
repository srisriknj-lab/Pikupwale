import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_LINK } from '../lib/constants';
import { useLanguage } from '../context/LanguageContext';

export function WhatsAppWidget() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 group">
      <div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none transform translate-y-2 group-hover:translate-y-0">
        <p className="text-sm font-bold text-[#1a2f8a]">{t('wa.tooltip')}</p>
      </div>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center relative"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
        <WhatsAppIcon className="w-7 h-7 relative z-10" />
      </a>
    </div>
  );
}
