import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function DatenschutzPage() {
  return (
    <>
      <SEO page="datenschutz" />
      <div className="bg-white text-black min-h-screen py-8 md:py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 md:px-6"
      >
        <h1 className="text-3xl md:text-4xl font-bold font-['Montserrat'] mb-8 md:mb-12 text-[#e50914]">
          Datenschutzerklärung
        </h1>
        
        <div className="space-y-6 md:space-y-8 text-black leading-relaxed">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold font-['Montserrat'] mb-4 text-[#e50914]">
              1. Verantwortlicher
            </h2>
            <p className="mb-2">Peter Kapsalis</p>
            <p className="mb-2">Waldweg 2</p>
            <p className="mb-2">84518 Garching an der Alz</p>
            <p className="mb-4">E-Mail: info@weldersplayground.de</p>
            <p className="mb-1"><strong>Inhaltlich Verantwortlicher (Agentur):</strong></p>
            <p>Steve Otte, Scripta Labs, Kraiburger Str. 7, 83342 Tacherting</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold font-['Montserrat'] mb-4 text-[#e50914]">
              2. Erhobene Daten und Zwecke der Verarbeitung
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Nutzung des Kontaktformulars:</strong> übermittelte Daten (Name, E-Mail, Nachricht) werden ausschließlich zur Bearbeitung Ihrer Anfrage genutzt.</li>
              <li>Keine Weitergabe der Daten an Dritte, außer zur technischen Abwicklung der Kommunikation.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold font-['Montserrat'] mb-4 text-[#e50914]">
              3. Eingesetzte Dienste / Empfänger
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Hosting & Bereitstellung:</strong> Base44 (SaaS, EU/USA).</li>
              <li><strong>E-Mail-Versand:</strong> Resend (API, USA).</li>
              <li><strong>Spam-Schutz:</strong> Google reCAPTCHA v3 (Google Ireland Ltd.).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold font-['Montserrat'] mb-4 text-[#e50914]">
              4. Rechtsgrundlagen
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Art. 6 Abs. 1 lit. b DSGVO (Vertrag / Anfragebearbeitung)</li>
              <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse, z. B. Schutz vor Spam durch reCAPTCHA)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold font-['Montserrat'] mb-4 text-[#e50914]">
              5. Speicherdauer
            </h2>
            <p>
              Formulardaten werden nach Bearbeitung gelöscht, spätestens nach 6 Monaten, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold font-['Montserrat'] mb-4 text-[#e50914]">
              6. Betroffenenrechte
            </h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch sowie Datenübertragbarkeit. Wenden Sie sich hierfür bitte an info@weldersplayground.de.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold font-['Montserrat'] mb-4 text-[#e50914]">
              7. Cookies / Tracking
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Zum Schutz vor Spam wird Google reCAPTCHA eingebunden. Dieses setzt Cookies und prüft Nutzereigenschaften.</li>
              <li>Ein entsprechender Hinweis erscheint im Cookie-Banner.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold font-['Montserrat'] mb-4 text-[#e50914]">
              8. Hinweis (Interim-Version)
            </h2>
            <p>
              Diese Datenschutzerklärung dient der Übergangsphase bis zur offiziellen Eintragung und Fertigstellung der vollständigen Datenschutzhinweise. Erweiterte Angaben (z. B. Handelsregister, Umsatzsteuer-ID, AV-Verträge) werden nachgereicht.
            </p>
          </div>
        </div>
      </motion.div>
      </div>
    </>
  );
}