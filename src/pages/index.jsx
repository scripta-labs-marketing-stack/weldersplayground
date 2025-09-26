import Layout from "./Layout.jsx";

import Home from "./Home";

import Lohnschweissungen from "./Lohnschweissungen";

import Ausbildung from "./Ausbildung";

import Zertifikate from "./Zertifikate";

import Impressum from "./Impressum";

import Datenschutz from "./Datenschutz";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Lohnschweissungen: Lohnschweissungen,
    
    Ausbildung: Ausbildung,
    
    Zertifikate: Zertifikate,
    
    Impressum: Impressum,
    
    Datenschutz: Datenschutz,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Lohnschweissungen" element={<Lohnschweissungen />} />
                
                <Route path="/Ausbildung" element={<Ausbildung />} />
                
                <Route path="/Zertifikate" element={<Zertifikate />} />
                
                <Route path="/Impressum" element={<Impressum />} />
                
                <Route path="/Datenschutz" element={<Datenschutz />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}