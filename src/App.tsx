/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { SpecializedIndustry } from './components/SpecializedIndustry';
import { About } from './components/About';
import { RateEstimator } from './components/RateEstimator';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen font-sans selection:bg-[#ff6a00] selection:text-white bg-white text-[#222222] scroll-smooth">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <SpecializedIndustry />
          <RateEstimator />
          <About />
          <ContactUs />
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </LanguageProvider>
  );
}
