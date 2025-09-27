import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Send } from 'lucide-react';
// Removed direct Resend import - now using serverless function
import StyledHeading from '../components/StyledHeading';
import SEO from '../components/SEO';

const PageHeader = ({ title, subtitle }) => (
  <div className="bg-[#111111] text-white py-12 md:py-20">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <StyledHeading
        as="h1"
        text={title}
        className="text-2xl md:text-4xl lg:text-5xl font-black font-['Montserrat'] text-white"
      />
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: '6rem' }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-1 bg-[#C1121F] mx-auto my-4 md:my-6"
      />
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-sm md:text-lg text-gray-300 max-w-3xl mx-auto px-4"
      >
        {subtitle}
      </motion.p>
    </div>
  </div>
);

export default function AusbildungPage() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: 'Ich interessiere mich für die Ausbildung.' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const advantages = [
    "1-zu-1-Betreuung für maximalen Lernerfolg",
    "Fokus auf praktische Fähigkeiten und reale Anwendungsfälle",
    "Flexible Terminabsprache nach Ihren Bedürfnissen",
    "Lernen an modernen, professionellen Schweißanlagen",
    "Vorbereitung auf anerkannte Schweißzertifikate"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://formspree.io/f/mvgwzqde', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          form: 'Ausbildung',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: 'Ich interessiere mich für die Ausbildung.' });
      } else {
        setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
      }
    } catch (err) {
      setError('Ihre Anfrage konnte nicht versendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO page="ausbildung" />
      <div className="bg-[#FAFAFA] text-gray-900 min-h-screen">
      <PageHeader 
        title="Schweißausbildung WIG-Stahl"
        subtitle="Individueller Einzelunterricht für praxisnahes Lernen und optimalen Erfolg."
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          {/* Advantages Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <StyledHeading as="h2" text="Ihre Vorteile" className="text-xl md:text-3xl font-bold font-['Montserrat'] mb-6 md:mb-8" />
            <ul className="space-y-3 md:space-y-4">
              {advantages.map((advantage, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-[#C1121F] flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-lg text-gray-700">{advantage}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <StyledHeading as="h2" text="Anmeldung & Information" className="text-xl md:text-3xl font-bold font-['Montserrat'] mb-6 md:mb-8" />
            
            {isSubmitted ? (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 md:p-6 rounded-r-lg">
                <h3 className="font-bold text-base md:text-lg">Anfrage erfolgreich gesendet!</h3>
                <p className="text-sm md:text-base">Vielen Dank für Ihr Interesse. Wir werden uns schnellstmöglich mit Ihnen in Verbindung setzen, um alles Weitere zu besprechen.</p>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({name: '', email: '', message: 'Ich interessiere mich für die Ausbildung.'});
                  }}
                  className="mt-3 text-sm underline hover:text-green-800"
                >
                  Neue Anfrage stellen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 p-4 md:p-8 bg-white rounded-lg shadow-xl">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Ihr Name" 
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                    required 
                    className="h-10 md:h-12"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="Ihre E-Mail-Adresse" 
                    value={formData.email} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})} 
                    required 
                    className="h-10 md:h-12"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Ihre Nachricht</label>
                  <Textarea 
                    id="message" 
                    value={formData.message} 
                    onChange={(e) => setFormData({...formData, message: e.target.value})} 
                    required 
                    className="min-h-24 md:min-h-32"
                  />
                </div>
                {error && (
                  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded-r text-sm">
                    {error}
                  </div>
                )}
                <div className="text-xs text-gray-500 text-center">
                  Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-[#C1121F] hover:bg-red-800 text-white py-3 md:py-4 text-base md:text-lg font-semibold rounded-none transition-all duration-300"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Jetzt anmelden'}
                  {!isSubmitting && <Send className="w-4 h-4 md:w-5 md:h-5 ml-2" />}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      </div>
    </>
  );
}
