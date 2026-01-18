import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Award, GraduationCap, ChevronRight } from 'lucide-react';
import StyledHeading from '../components/StyledHeading';
import SEO from '../components/SEO';

/* -------------------------------- Header -------------------------------- */

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

/* ----------------------------- Card Component ---------------------------- */

const CertificateCard = ({ title, items, icon, onOpen }) => (
  <div className="bg-white rounded-lg shadow-xl p-4 md:p-8">
    <div className="flex flex-col md:flex-row items-start md:items-center mb-4 md:mb-6">
      <div className="mb-2 md:mb-0 md:mr-4">{icon}</div>
      <StyledHeading
        as="h2"
        text={title}
        className="text-xl md:text-3xl font-bold font-['Montserrat'] text-gray-900"
      />
    </div>

    <ul className="space-y-2 md:space-y-3">
      {items.map((item, index) => {
        const isClickable = typeof item === "object" && onOpen;

        return (
          <li
            key={index}
            className="flex items-start text-sm md:text-lg text-gray-700"
          >
            <Award className="w-4 h-4 md:w-5 md:h-5 text-[#C1121F] mr-2 md:mr-3 mt-1 flex-shrink-0" />

            {isClickable ? (
              <button
                onClick={() => onOpen(item)}
                className="hover:underline text-left"
              >
                {item.title}
              </button>
            ) : (
              <span>{item.title ?? item}</span>
            )}
          </li>
        );
      })}
    </ul>
  </div>
);

/* ------------------------------- Page ------------------------------------ */

export default function ZertifikatePage() {
  const myCertificates = [
    { 
      title: "EN ISO 9606-1 141 T BW FM5 S s 1,0 D 12,0 PH-L045 ss gb",
      file: "/certificates/20260116-1610.pdf",
    },
    {
      title: "EN ISO 9606-1 141 T BW FM5 S s 1,0 D 12,0 PH-L045 ss gb",
      file: "/certificates/20260116-1611.pdf",
    },
    {
      title: "EN ISO 9606-1 141 T FW FM5 S t 2,0 D 21,3 PH sl",
      file: "/certificates/20260116-1613.pdf",
    },
    {
      title: "EN ISO 9606-1 141 T FW FM5 S t 5,0 D 88,3 PH ml",
      file: "/certificates/20260116-1613.pdf",
    },
    {
      title: "EN ISO 9606-1 141 T BW FM5 S s 1,0 D 80,0 PH-L045 ss gb",
      file: "/certificates/20260116-1614.pdf",
    },
    {
      title: "EN ISO 9606-1 141 T BW FM5 S s 1,0 D 50,0 PH-L045 ss gb",
      file: "/certificates/20260116-1615.pdf",
    },
    {
      title: "EN ISO 9606-1 141 T BW FM5 S s 1,0 D 12,0 PH-L045 ss gb",
      file: "/certificates/20260116-1616.pdf",
    },
  ];



  const trainingCertificates = [
    "Vorbereitung auf Schweißerprüfungen nach DIN EN ISO 9606",
    "Individuelle Ausbildungs- und Zertifizierungspfade",
  ];

  const [activePdf, setActivePdf] = useState(null);
  const [activeTitle, setActiveTitle] = useState("");

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
              onOpen={(cert) => {
                setActivePdf(cert.file);
                setActiveTitle(cert.title);
              }}
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
        </div>

        <motion.div 
          className="text-center px-4 pb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl mb-6">
            Interesse, selbst ein zertifizierter Profi zu werden?
          </p>
          <Link to={createPageUrl("Ausbildung")}>
            <Button className="bg-[#C1121F] hover:bg-red-800 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-none shadow-2xl">
              Zur Ausbildungs-Anmeldung
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>

      
      {activePdf && (
  <div className="fixed inset-0 z-50 bg-black/80 flex items-end md:items-center justify-center">
    <div className="bg-white w-full md:w-[90%] max-w-5xl h-[92vh] md:h-[80vh] rounded-t-xl md:rounded-lg overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b">
        <h3 className="font-bold text-base md:text-lg pr-4">
          {activeTitle}
        </h3>
        <button
          onClick={() => setActivePdf(null)}
          className="text-2xl font-bold px-2"
          aria-label="Modal schließen"
        >
          ✕
        </button>
      </div>

      <iframe
  src={`${activePdf}#toolbar=0&navpanes=0&scrollbar=1`}
  className="w-full h-full"
  title={activeTitle}
/>

    </div>
  </div>
)}
    </>
  );
}