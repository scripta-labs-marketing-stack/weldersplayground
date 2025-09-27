import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function ImpressumPage() {
  return (
    <>
      <SEO page="impressum" />
      <div className="bg-white text-black min-h-screen py-8 md:py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 md:px-6"
      >
        <h1 className="text-3xl md:text-4xl font-bold font-['Montserrat'] mb-8 md:mb-12 text-[#e50914]">
          Impressum
        </h1>
        
        <div className="space-y-6 md:space-y-8 text-black leading-relaxed">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold font-['Montserrat'] mb-4 text-[#e50914]">
              Angaben gemäß § 5 TMG:
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold font-['Montserrat'] mb-2 text-[#e50914]">Name / Firma:</h3>
                <p className="mb-1">Peter Kapsalis (in Gründung, Welders Playground)</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold font-['Montserrat'] mb-2 text-[#e50914]">Anschrift:</h3>
                <p className="mb-1">Waldweg 2</p>
                <p className="mb-1">84518 Garching an der Alz</p>
                <p className="mb-1">Deutschland</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold font-['Montserrat'] mb-2 text-[#e50914]">Telefon:</h3>
                <p className="mb-1">0170 9693020</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold font-['Montserrat'] mb-2 text-[#e50914]">E-Mail:</h3>
                <p className="mb-1">info@weldersplayground.de</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold font-['Montserrat'] mb-4 text-[#e50914]">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
            </h2>
            <p className="mb-1">Steve Otte</p>
            <p className="mb-1">Scripta Labs</p>
            <p className="mb-1">Kraiburger Str. 7</p>
            <p className="mb-1">83342 Tacherting</p>
            <p className="mb-1">Deutschland</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold font-['Montserrat'] mb-4 text-[#e50914]">
              Hinweis zur Firmierung:
            </h2>
            <p>
              Das Unternehmen befindet sich derzeit in Gründung. Handelsregister- oder Umsatzsteuerangaben werden nachgereicht, sobald diese verfügbar sind.
            </p>
          </div>
        </div>
      </motion.div>
      </div>
    </>
  );
}