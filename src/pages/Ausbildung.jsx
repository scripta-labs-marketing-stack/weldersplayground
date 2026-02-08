import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Send, ChevronLeft, ChevronRight, X } from 'lucide-react';
import StyledHeading from '../components/StyledHeading';
import SEO from '../components/SEO';

/* ---------------- PAGE HEADER ---------------- */
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
        className="text-sm md:text-lg text-gray-300 max-w-3xl mx-auto"
      >
        {subtitle}
      </motion.p>
    </div>
  </div>
);

/* ---------------- GALERIE ---------------- */
const galleryImages = [
  "IMG_7237_1.jpg",
  "IMG_7230_1.jpg",
  "IMG_7228_1.jpg",
  "IMG_7216_1.jpg",
  "IMG_7214_1.jpg",
  "IMG_7202_1.jpg",
  "IMG_7164_1.jpg",
  "IMG_7140_1.jpg",
];


const AusbildungGallery = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  const visibleCount = 3;
  const maxIndex = galleryImages.length - visibleCount;

  const prev = () =>
    setStartIndex((i) => (i <= 0 ? maxIndex : i - 1));

  const next = () =>
    setStartIndex((i) => (i >= maxIndex ? 0 : i + 1));

  const visibleImages = galleryImages.slice(
    startIndex,
    startIndex + visibleCount
  );

  return (
    <>
      {/* KARUSSELL */}
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleImages.map((img, i) => (
            <div
              key={img}
              onClick={() => setLightbox(startIndex + i)}
              className="aspect-[4/3] overflow-hidden rounded-lg bg-black cursor-zoom-in"
            >
              <img
                src={`/images/ausbildung/${img}`}
                alt="Schweißausbildung"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* NAVIGATION */}
        <button
          onClick={prev}
          className="absolute -left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2 rounded-full"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute -right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>

            <button
              onClick={prev}
              className="absolute left-6 text-white"
            >
              <ChevronLeft size={36} />
            </button>

            <img
              src={`/images/ausbildung/${galleryImages[lightbox]}`}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />

            <button
              onClick={next}
              className="absolute right-6 text-white"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ---------------- PAGE ---------------- */
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
    "Ausbildungszertifikate nach Absprache"
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
        setError('Ein Fehler ist aufgetreten.');
      }
    } catch {
      setError('Versand fehlgeschlagen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO page="ausbildung" />
      <div className="bg-[#FAFAFA] min-h-screen">
        <PageHeader
          title="Schweißausbildung WIG-Stahl"
          subtitle="Individueller Einzelunterricht für praxisnahes Lernen und optimalen Erfolg."
        />

        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 space-y-20">

          {/* GALERIE */}
          <div>
            <StyledHeading
              as="h2"
              text="Einblicke in die Ausbildung"
              className="text-xl md:text-3xl font-bold mb-6"
            />
            <AusbildungGallery />
          </div>

          {/* CONTENT */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <StyledHeading as="h2" text="Ihre Vorteile" className="text-xl md:text-3xl font-bold mb-6" />
              <ul className="space-y-4">
                {advantages.map((a, i) => (
                  <li key={i} className="flex gap-3">
                    <Check className="text-[#C1121F]" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <StyledHeading as="h2" text="Anmeldung & Information" className="text-xl md:text-3xl font-bold mb-6" />
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-xl space-y-4">
                <Input placeholder="Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                <Input type="email" placeholder="E-Mail" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                <Textarea value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <Button type="submit" className="w-full bg-[#C1121F] hover:bg-red-800">
                  {isSubmitting ? "Wird gesendet..." : "Jetzt anmelden"}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
