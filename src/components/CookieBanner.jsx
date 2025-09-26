import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    statistik: false,
    marketing: false
  });

  useEffect(() => {
    // Prüfe, ob bereits eine Cookie-Entscheidung getroffen wurde
    const cookieConsent = localStorage.getItem('cookieConsent');
    const savedSettings = localStorage.getItem('cookieSettings');
    
    if (!cookieConsent) {
      setShowBanner(true);
    }
    
    if (savedSettings) {
      setCookieSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieSettings', JSON.stringify({
      statistik: true,
      marketing: true
    }));
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookieSettings', JSON.stringify({
      statistik: false,
      marketing: false
    }));
    setShowBanner(false);
  };

  const handleSettings = () => {
    setShowSettings(true);
  };

  const handleSaveSettings = () => {
    localStorage.setItem('cookieConsent', 'customized');
    localStorage.setItem('cookieSettings', JSON.stringify(cookieSettings));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSettingChange = (setting) => {
    setCookieSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-black text-white p-4 md:p-6 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Cookie-Einstellungen</h3>
            <p className="text-sm text-gray-300">
              Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. 
              Sie können Ihre Einstellungen jederzeit anpassen.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleDecline}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              Ablehnen
            </button>
            
            <button
              onClick={handleSettings}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              Einstellungen
            </button>
            
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-[#C1121F] hover:bg-red-800 text-white rounded-lg transition-colors duration-200 text-sm font-semibold"
            >
              Akzeptieren
            </button>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white text-gray-900 rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Cookie-Einstellungen</h2>
                <button
                  onClick={handleCloseSettings}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cookie Categories */}
              <div className="space-y-6">
                {/* Notwendige Cookies */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">Notwendige Cookies</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Diese Cookies sind für die Grundfunktionen der Website erforderlich.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-6 bg-gray-300 rounded-full flex items-center justify-end pr-1">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                      <span className="ml-2 text-sm text-gray-500">Immer aktiv</span>
                    </div>
                  </div>
                </div>

                {/* Statistik Cookies */}
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">Statistik-Cookies</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                      </p>
                    </div>
                    <button
                      onClick={() => handleSettingChange('statistik')}
                      className={`w-10 h-6 rounded-full flex items-center transition-colors duration-200 ${
                        cookieSettings.statistik ? 'bg-[#C1121F]' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                        cookieSettings.statistik ? 'translate-x-4' : 'translate-x-1'
                      }`}></div>
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">Marketing-Cookies</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Werden verwendet, um Besuchern relevante Anzeigen zu zeigen.
                      </p>
                    </div>
                    <button
                      onClick={() => handleSettingChange('marketing')}
                      className={`w-10 h-6 rounded-full flex items-center transition-colors duration-200 ${
                        cookieSettings.marketing ? 'bg-[#C1121F]' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                        cookieSettings.marketing ? 'translate-x-4' : 'translate-x-1'
                      }`}></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-8">
                <button
                  onClick={handleCloseSettings}
                  className="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors duration-200 font-medium"
                >
                  Abbrechen
                </button>
                <button
                  onClick={handleSaveSettings}
                  className="flex-1 px-4 py-2 bg-[#C1121F] hover:bg-red-800 text-white rounded-lg transition-colors duration-200 font-semibold flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Speichern
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
