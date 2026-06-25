import { Phone, Mail, MapPin, Clock, Search, Send, ExternalLink } from "lucide-react";
import { COMPANY_ADDRESS, COMPANY_EMAIL, WHATSAPP_LINK, MAP_LINK } from "../lib/constants";
import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function ContactUs() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useLanguage();

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${name}%0APhone: ${phone}%0ASubject: ${subject}%0AMessage: ${message}`;
    window.open(`https://wa.me/917850066668?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-[#f7f9fc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ff6a00] font-bold tracking-wider uppercase text-sm">{t('contact.badge')}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a2f8a] mt-3 mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 mb-16">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
               <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1a2f8a] mb-2">{t('contact.office.title')}</h4>
                    <a 
                      href={MAP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 font-medium leading-relaxed max-w-sm hover:text-[#ff6a00] transition-colors flex flex-col gap-2 group"
                    >
                      <p>{COMPANY_ADDRESS}</p>
                      <span className="text-[#ff6a00] text-sm flex items-center gap-1 font-bold group-hover:underline">
                        {t('contact.office.map')} <ExternalLink className="w-3 h-3" />
                      </span>
                    </a>
                  </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#ffd4b3] p-3 rounded-xl flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#ff6a00]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1a2f8a] mb-1">{t('contact.call.title')}</h4>
                    <div className="text-slate-600 font-medium space-y-1 mb-2">
                      <p>78500-66668</p>
                      <p>75250-37993</p>
                      <p>89574-39175</p>
                      <p>700770-2960</p>
                    </div>
                    <p className="text-sm text-slate-500 font-medium">{t('contact.call.desc')}</p>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-100"></div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#22c55e]/10 p-3 rounded-xl flex-shrink-0">
                    <WhatsAppIcon className="h-6 w-6 text-[#22c55e]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1a2f8a] mb-1">{t('contact.wa.title')}</h4>
                    <p className="text-slate-600 font-medium mb-1">78500-66668</p>
                    <p className="text-sm text-slate-500 font-medium">{t('contact.wa.desc')}</p>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-100"></div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#2e5bff]/10 p-3 rounded-xl flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#2e5bff]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1a2f8a] mb-1">{t('contact.email.title')}</h4>
                    <p className="text-slate-600 font-medium mb-1">{COMPANY_EMAIL}</p>
                    <p className="text-sm text-slate-500 font-medium">{t('contact.email.desc')}</p>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-100"></div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-xl flex-shrink-0">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1a2f8a] mb-1">{t('contact.hours.title')}</h4>
                    <p className="text-slate-600 font-medium mb-1">{t('contact.hours.d1')}</p>
                    <p className="text-rose-500 font-medium">{t('contact.hours.d2')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 h-full">
              <h3 className="text-2xl font-bold text-[#1a2f8a] mb-8">{t('contact.form.title')}</h3>
              
              <form onSubmit={handleWhatsAppSend} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('contact.form.name')}</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t('contact.form.nameph')}
                      className="w-full px-5 py-4 bg-[#f7f9fc] border border-slate-200 rounded-xl focus:ring-4 focus:ring-[#ff6a00]/20 focus:border-[#ff6a00] outline-none transition-all font-medium placeholder:text-slate-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('contact.form.phone')}</label>
                    <input 
                      type="tel" 
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t('contact.form.phoneph')}
                      className="w-full px-5 py-4 bg-[#f7f9fc] border border-slate-200 rounded-xl focus:ring-4 focus:ring-[#ff6a00]/20 focus:border-[#ff6a00] outline-none transition-all font-medium placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{t('contact.form.subject')}</label>
                  <input 
                    type="text" 
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={t('contact.form.subph')}
                    className="w-full px-5 py-4 bg-[#f7f9fc] border border-slate-200 rounded-xl focus:ring-4 focus:ring-[#ff6a00]/20 focus:border-[#ff6a00] outline-none transition-all font-medium placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{t('contact.form.message')}</label>
                  <textarea 
                    required
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t('contact.form.msgph')}
                    className="w-full px-5 py-4 bg-[#f7f9fc] border border-slate-200 rounded-xl focus:ring-4 focus:ring-[#ff6a00]/20 focus:border-[#ff6a00] outline-none transition-all font-medium placeholder:text-slate-400 resize-none"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full sm:w-auto bg-[#22c55e] hover:bg-[#20bd5a] text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-[#22c55e]/30 hover:shadow-xl hover:shadow-[#22c55e]/40 hover:-translate-y-0.5 text-lg"
                  >
                    <Send className="h-5 w-5" />
                    {t('contact.form.btn')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps Location */}
        <div className="w-full bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col relative">
          <div className="p-4 bg-[#1a2f8a] text-white flex justify-between items-center">
            <div className="font-bold">DTDC Couriers Kannauj</div>
            <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="text-sm bg-[#ff6a00] hover:bg-[#e65f00] px-4 py-1.5 rounded-full font-medium transition-colors">
              {t('contact.office.map')}
            </a>
          </div>
          <iframe 
            src="https://maps.google.com/maps?q=27.0563814,79.9174457(DTDC%20Couriers%20Kannauj)&t=&z=16&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            className="h-96 md:h-[400px]"
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="DTDC Kannauj Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
