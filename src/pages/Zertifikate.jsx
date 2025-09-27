import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Award, GraduationCap, ChevronRight } from 'lucide-react';
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

const CertificateCard = ({ title, items, icon }) => (
  <div className="bg-white rounded-lg shadow-xl p-4 md:p-8">
    <div className="flex flex-col md:flex-row items-start md:items-center mb-4 md:mb-6">
      <div className="mb-2 md:mb-0 md:mr-4">
        {icon}
      </div>
      <StyledHeading
        as="h2"
        text={title}
        className="text-xl md:text-3xl font-bold font-['Montserrat'] text-gray-900"
      />
    </div>
    <ul className="space-y-2 md:space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start text-sm md:text-lg text-gray-700">
          <Award className="w-4 h-4 md:w-5 md:h-5 text-[#C1121F] mr-2 md:mr-3 flex-shrink-0 mt-1" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function ZertifikatePage() {
  const myCertificates = [
    "Schweißwerkmeister (HWK)",
    "International Welding Specialist (IWS)",
    "Zertifiziert nach DIN EN ISO 9606-1",
    "Zertifiziert nach DIN EN ISO 9606-2",
    "Zertifiziert nach WHG (Wasserhaushaltsgesetz)"
  ];

  const trainingCertificates = [
    "Vorbereitung und Abnahme von Schweißerprüfungen nach DIN EN ISO 9606.",
    "Erwerb von Qualifikationen für spezielle Werkstoffgruppen.",
    "Individuelle Zertifizierungspfade je nach Karriereziel.",
    "Auffrischungskurse zur Verlängerung bestehender Zertifikate."
  ];

  return (
    <>
      <SEO page="zertifikate" />
      <div className="bg-[#FAFAFA] text-gray-900 min-h-screen">
      <PageHeader 
        title="Schweißzertifikate"
        subtitle="Anerkannte Qualifikationen für höchste Ansprüche – für mich und für Sie."
      />

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 space-y-12 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CertificateCard 
            title="Meine Qualifikationen"
            items={myCertificates}
            icon={<Award className="w-8 h-8 md:w-10 md:h-10 text-[#C1121F]" />}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CertificateCard 
            title="Zertifikate in der Ausbildung"
            items={trainingCertificates}
            icon={<GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-[#C1121F]" />}
          />
        </motion.div>

        <motion.div 
          className="text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl mb-4 md:mb-6">Interesse, selbst ein zertifizierter Profi zu werden?</p>
          <Link to={createPageUrl("Ausbildung")}>
            <Button className="bg-[#C1121F] hover:bg-red-800 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-none transition-all duration-300 shadow-2xl">
              Zur Ausbildungs-Anmeldung
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
      </div>
    </>
  );
}