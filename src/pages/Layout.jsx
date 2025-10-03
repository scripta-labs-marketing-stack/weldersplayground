import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';

const navItems = [
    { name: "Startseite", path: createPageUrl("Home") },
    { name: "Leistungen", path: "/#leistungen" },
    { name: "Galerie", path: "/#galerie" },
    { name: "Kontakt", path: "/#kontakt" },
    { name: "Impressum", path: createPageUrl("Impressum") },
    { name: "Datenschutz", path: createPageUrl("Datenschutz") },
];

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Smooth scroll wenn Hash in der URL steht
        if (location.hash) {
            const id = location.hash.substring(1);
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    const handleNavClick = (e, path) => {
        setIsOpen(false);

        if (path.startsWith('/#')) {
            e.preventDefault();
            const id = path.substring(2);

            if (location.pathname === '/' || location.pathname === createPageUrl('Home')) {
                // Bereits auf Startseite → nur scrollen
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Auf andere Seite → zuerst nach "/" navigieren + Hash setzen
                navigate(`/#${id}`);
            }
        }
    };

    const NavLink = ({ item }) => {
        const isActive = location.pathname === item.path.split('#')[0];
        return (
            <Link
                to={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`font-['Montserrat'] font-semibold text-sm uppercase tracking-wider relative transition-colors duration-300 ${
                    isActive && !item.path.includes('#')
                        ? 'text-[#C1121F]'
                        : 'text-gray-300 hover:text-white'
                }`}
            >
                {item.name}
            </Link>
        );
    };

    return (
        <header className="bg-[#111111] z-40 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    <Link to={createPageUrl('Home')} className="flex items-center">
                        <img
                            src="/LOGOweiss.svg"
                            alt="Welder's Playground"
                            className="h-16 md:h-20 w-auto"
                            loading="eager"
                            fetchpriority="high"
                        />
                    </Link>

                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map(item => <NavLink key={item.name} item={item} />)}
                    </nav>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#111111]"
                    >
                        <nav className="flex flex-col items-center space-y-6 py-8">
                            {navItems.map(item => <NavLink key={item.name} item={item} />)}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top on every route change
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; 
  }, [pathname]);

  useEffect(() => {
    // Set favicon
    const favicon = document.querySelector("link[rel~='icon']");
    if (favicon) {
      favicon.href = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d109b85bc98c79f2257484/1abd5b038_LogoWebseite.png";
    } else {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.href = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d109b85bc98c79f2257484/1abd5b038_LogoWebseite.png";
      document.head.appendChild(newFavicon);
    }
    
    // Set page title
    document.title = "Welder's PlayGround - Peter Kapsalis";

    // Add Google reCAPTCHA v3 script
    const recaptchaScript = document.querySelector("script[src*='recaptcha']");
    if (!recaptchaScript) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?render=6Ld-59QrAAAAANukBOFTcPjf6yuGEvmILfo5bxhP'; // Replace with your reCAPTCHA site key
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="font-['Open_Sans']" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Open Sans', sans-serif;
          background-color: #FAFAFA;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Montserrat', sans-serif;
        }

        /* Hide scrollbar for mobile carousel */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Custom scrollbar for desktop */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #111111;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #C1121F;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #a10e1a;
        }
      `}</style>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}


