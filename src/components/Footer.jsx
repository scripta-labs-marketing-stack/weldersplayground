import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d109b85bc98c79f2257484/63cf6538e_LogoWebseite.png"
              alt="Welder's PlayGround"
              className="h-10 md:h-12 w-auto mx-auto md:mx-0 mb-2"
            />
            <p className="text-gray-400 text-sm">Kapsalis Peter</p>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-2 mb-6 md:mb-0">
             <a href="tel:01709693020" className="text-gray-400 hover:text-[#C1121F] transition-colors">
                0170/9693020
              </a>
              <a href="mailto:info@weldersplayground.de" className="text-gray-400 hover:text-[#C1121F] transition-colors">
                info@weldersplayground.de
              </a>
          </div>
          <div className="flex space-x-6">
            <Link to={createPageUrl("Impressum")} className="text-gray-500 hover:text-white transition-colors text-sm">Impressum</Link>
            <Link to={createPageUrl("Datenschutz")} className="text-gray-500 hover:text-white transition-colors text-sm">Datenschutz</Link>
          </div>
        </div>
        <div className="text-center text-gray-600 text-sm mt-8 pt-8 border-t border-gray-800">
          <p>© {new Date().getFullYear()} Welder's PlayGround. Alle Rechte vorbehalten.</p>
          <p className="mt-4 text-xs text-gray-700">
            <a 
              href="https://scripta-labs.de" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              Designed by Scripta Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}