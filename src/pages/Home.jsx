
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Award, Wrench, GraduationCap, Camera, X, ChevronRight, Zap, Shield, Target } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import StyledHeading from '../components/StyledHeading';
import SEO from '../components/SEO';
// Removed direct Resend import - now using serverless function

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const { scrollYProgress } = useScroll();
  const heroParallax = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const galleryParallax = useTransform(scrollYProgress, [0.5, 1], [0, -100]);

  const videoRef = useRef(null);

useEffect(() => {
  if (videoRef.current) {
    videoRef.current.muted = true;
    videoRef.current.play().catch(() => {});
  }
}, []);

  // Sample images for gallery - in real app these would be actual welding photos
  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery/4ecc3b9b-c8dc-4f10-aee4-65e46088fc45.JPG",
      alt: "WIG-Schweißarbeiten"
    },
    {
      id: 2,
      src: "/images/gallery/ddd8c74c-b710-4bb4-8f4a-1800fa8eb067.JPG",
      alt: "Schweißausbildung"
    },
    {
      id: 3,
      src: "/images/gallery/3e5bd223-cc77-4248-bddb-c834f660c20f.JPG",
      alt: "Metallbearbeitung"
    },
    {
      id: 4,
      src: "/images/gallery/05d4e3d5-613c-4014-80d3-a67f54f5ed56.JPG",
      alt: "Schweißer bei der Arbeit"
    },
    {
      id: 5,
      src: "/images/gallery/162f3b78-b103-429c-a76a-b4f7209750fc.JPG",
      alt: "Werkstatt"
    },
    {
      id: 6,
      src: "/images/gallery/514775cd-d4e5-4803-90d0-f916b6481bcc.JPG",
      alt: "Schweißarbeiten"
    },
    {
      id: 7,
      src: "/images/gallery/708d0966-befa-4c47-ab54-9e0e0a23ea74.JPG",
      alt: "Schweißarbeiten Übersicht"
    },
    {
      id: 8,
      src: "/images/gallery/PHOTO-2026-02-09-08-22-29.jpg",
      alt: "WIG-Schweißnaht Edelstahl Rohr"
    },
    {
      id: 9,
      src: "/images/gallery/PHOTO-2026-02-09-08-22-29-2.jpg",
      alt: "Schweißverbindung Edelstahl Konus"
    }
  ];
  
  
  const scrollToContact = () => {
    document.getElementById('kontakt').scrollIntoView({ behavior: 'smooth' });
  };
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // State für Status des Formulars
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  
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
          form: 'Startseite',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
      }
    } catch (err) {
      setError('Ihre Anfrage konnte nicht versendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Certificate images mapping
  const certificateImages = {
    "Schweißwerkmeister": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d109b85bc98c79f2257484/df57a4c5b_Schweiwerkmeister.jpg",
    "Schweißausbilder": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d109b85bc98c79f2257484/cce1266e4_Schweilehrer.jpg",
    "Schweißfachmann": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d109b85bc98c79f2257484/7e7b9eb66_Schweifachmann.jpg"
  };

  return (
    <>
      <SEO page="home" />
      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
  className="relative w-full h-screen flex items-center justify-center"
>
  {/* Hintergrundbild (Hero) */}
  <motion.div
  className="absolute inset-0 bg-black"
  style={{ y: heroParallax }}
>
<video
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
>
  <source src="/Werbung-peter.mp4" type="video/mp4" />
</video>

  {/* Overlay */} 
  <div className="absolute inset-0 bg-black/50"></div>
</motion.div>
 

  {/* Text + Button */}
  <div className="relative z-10 text-center px-4">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="space-y-6"
    >
      <StyledHeading 
        as="h1"
        text="Welder's PlayGround"
        className="text-4xl md:text-7xl font-black font-['Montserrat'] tracking-tight text-white"
      />
      <div className="w-24 h-1 bg-[#C1121F] mx-auto"></div>
      <p className="text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
        Lohnschweißen & Schweißausbildung im Bereich WIG-Stahl
      </p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={scrollToContact}
          className="bg-[#C1121F] hover:bg-red-800 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-none transition-all duration-300 shadow-2xl"
        >
          Jetzt Kontakt aufnehmen
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
        </Button>
      </motion.div>
    </motion.div>
  </div>
</motion.section>


      {/* About Section */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <StyledHeading 
              as="h2"
              text="Über mich"
              className="text-4xl md:text-5xl font-black font-['Montserrat'] mb-6 text-white"
            />
            <p className="text-4xl md:text-5xl font-light text-gray-300 max-w-3xl mx-auto font-['Montserrat']">
              Peter Kapsalis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12" />,
                title: "Schweißwerkmeister",
                description: "Jahrelange Erfahrung in komplexen Schweißverfahren mit höchsten Qualitätsstandards"
              },
              {
                icon: <GraduationCap className="w-12 h-12" />,
                title: "Schweißausbilder",
                description: "Individueller Einzelunterricht für optimale Lernerfolge und praxisnahe Ausbildung"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Schweißfachmann",
                description: "Zertifizierte Expertise nach neuesten Standards und Normen der Schweißtechnik"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="cursor-pointer"
                onClick={() => setSelectedCertificate(item.title)}
              >
                <Card className="bg-[#333333] border-gray-700 h-full hover:border-[#C1121F] transition-all duration-300">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="text-[#C1121F] mb-6 flex justify-center">
                      {item.icon}
                    </div>
                    <StyledHeading 
                      as="h3"
                      text={item.title}
                      className="text-2xl font-bold font-['Montserrat'] mb-4 text-white"
                    />
                    <p className="text-gray-300 leading-relaxed flex-grow">
                      {item.description}
                    </p>
                    <p className="text-sm text-[#C1121F] mt-4 font-semibold">
                      Klicken Sie für Zertifikat
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-[90vw] max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={certificateImages[selectedCertificate]}
                  alt={`${selectedCertificate} Zertifikat`}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  loading="lazy"
                />
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute -top-4 -right-4 bg-[#C1121F] text-white p-3 rounded-full hover:bg-red-800 transition-colors shadow-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="py-20 bg-[#FAFAFA] text-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <StyledHeading 
              as="h2"
              text="Meine Leistungen"
              className="text-4xl md:text-5xl font-black font-['Montserrat'] mb-6"
            />
            <div className="w-24 h-1 bg-[#C1121F] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Wrench className="w-12 h-12" />,
                title: "Lohnschweißungen WIG-Stahl",
                description: "Mobile Schweißarbeiten mit eigener Anlage direkt vor Ort. Präzise Ausführung auch bei komplexesten Projekten.",
                link: createPageUrl("Lohnschweissungen")
              },
              {
                icon: <GraduationCap className="w-12 h-12" />,
                title: "Schweißausbildung WIG-Stahl",
                description: "Individueller Einzelunterricht für optimale Lernerfolge. Von Grundlagen bis zur Perfektion.",
                link: createPageUrl("Ausbildung")
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Schweißzertifikate",
                description: "Zertifizierung nach DIN ISO 9606-1, WHG und weiteren Standards nach Absprache.",
                link: createPageUrl("Zertifikate")
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 40px rgba(193, 18, 31, 0.1)",
                  transition: { duration: 0.3 }
                }}
                className="h-full flex flex-col"
              >
                <Card className="bg-white border-2 border-gray-200 h-full hover:border-[#C1121F] transition-all duration-300 shadow-lg flex flex-col">
                  <CardContent className="p-8 text-center flex-grow flex flex-col">
                    <div className="text-[#C1121F] mb-6 flex justify-center">
                      {service.icon}
                    </div>
                    <StyledHeading 
                      as="h3"
                      text={service.title}
                      className="text-2xl font-bold font-['Montserrat'] mb-4 text-[#111111]"
                    />
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                    <Link to={service.link} className="mt-auto">
                      <Button
                        className="w-full bg-[#C1121F] hover:bg-red-800 text-white font-semibold rounded-none transition-all duration-300"
                      >
                        Mehr erfahren
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galerie" className="relative py-20 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            y: galleryParallax,
            backgroundImage: `linear-gradient(rgba(17,17,17,0.8), rgba(17,17,17,0.6)), url('https://images.unsplash.com/photo-1581092335878-1ffea17e0d87?w=1600&fm=webp')`
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <StyledHeading
              as="h2"
              text="Meine Arbeit"
              className="text-4xl md:text-5xl font-black font-['Montserrat'] mb-6 text-white"
            />
            <div className="w-24 h-1 bg-[#C1121F] mx-auto"></div>
          </motion.div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative group overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    width="400"
                    height="256"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Swipe Carousel */}
          <div className="md:hidden">
            <div className="overflow-x-auto scrollbar-hide">
              <motion.div 
                className="flex space-x-4 pb-4"
                style={{ width: `${galleryImages.length * 280 + (galleryImages.length - 1) * 16}px` }}
              >
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="cursor-pointer flex-shrink-0"
                    onClick={() => setSelectedImage(image)}
                    style={{ width: '280px' }}
                  >
                    <div className="relative group overflow-hidden rounded-lg">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover transition-transform duration-500 group-active:scale-110"
                        loading="lazy"
                        width="280"
                        height="256"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-active:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Camera className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            {/* Scroll indicator for mobile */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-2">
                {galleryImages.map((_, index) => (
                  <div key={index} className="w-2 h-2 bg-gray-600 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  loading="lazy"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-4 -right-4 bg-[#C1121F] text-white p-2 rounded-full hover:bg-red-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

{/* Contact Section */}
<section id="kontakt" className="py-20 bg-[#111111]">
  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
    {/* Left Side: Kontaktinformationen */}
    <div>
      <StyledHeading 
        as="h2" 
        text="Kontakt aufnehmen" 
        className="text-2xl md:text-4xl font-bold text-white mb-6" 
      />
      <div className="space-y-6 text-gray-300">
        <div>
          <h3 className="text-lg font-semibold text-white">Direkter Kontakt</h3>
          <p className="mt-2 flex items-center"><span className="mr-2">📞</span> 0170/9693020</p>
          <p className="mt-1 flex items-center"><span className="mr-2">✉️</span> info@weldersplayground.de</p>
        </div>
        <div className="bg-[#2A2A2A] p-6 rounded-md">
          <h3 className="text-lg font-semibold text-red-600 mb-4">Warum Welder's PlayGround?</h3>
          <ul className="space-y-2 text-sm">
            <li>⚡ Mobile Schweißarbeiten vor Ort</li>
            <li>⚡ Individueller Einzelunterricht</li>
            <li>⚡ Zertifizierte Ausbildung</li>
            <li>⚡ Keine Arbeitnehmerüberlassung</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Right Side: Formular */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {isSubmitted ? (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 md:p-6 rounded-r-lg">
          <h3 className="font-bold text-base md:text-lg">Anfrage erfolgreich gesendet!</h3>
          <p className="text-sm md:text-base">Vielen Dank für Ihr Interesse. Wir werden uns schnellstmöglich mit Ihnen in Verbindung setzen.</p>
          <button 
            onClick={() => {setIsSubmitted(false); setFormData({name: '', email: '', message: ''})}}
            className="mt-4 text-sm underline"
          >
            Neue Nachricht senden
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              placeholder="Ihr Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="bg-[#333333] border-gray-600 text-white placeholder-gray-400 h-12 rounded-none focus:border-[#C1121F]"
              required
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Ihre E-Mail"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="bg-[#333333] border-gray-600 text-white placeholder-gray-400 h-12 rounded-none focus:border-[#C1121F]"
              required
            />
          </div>
          <div>
            <Textarea
              placeholder="Ihre Nachricht"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="bg-[#333333] border-gray-600 text-white placeholder-gray-400 min-h-32 rounded-none focus:border-[#C1121F]"
              required
            />
          </div>
          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded-r text-sm">
              {error}
            </div>
          )}
          <div className="text-xs text-gray-400 text-center">
            Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#C1121F] hover:bg-red-800 text-white py-4 text-lg font-semibold rounded-none transition-all duration-300"
            >
              {isSubmitting ? 'Wird gesendet...' : 'Unverbindlich anfragen'}
            </Button>
          </motion.div>
        </form>
      )}
    </motion.div>
  </div>
</section>
      </div>
    </>
  );
}
