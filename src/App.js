import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { initFullpage } from './components/initFullpage';
import Section1 from './components/Section-1';
import Section2 from './components/Section-2';
import Section3 from './components/Section-3';
import Section4 from './components/Section-4';
import Section5 from './components/Section-5';
import Section6 from './components/Section-6';
import Section7 from './components/Section-7';
import Footer from './components/footer/Footer';

export default function App() {
    useEffect(() => {
        initFullpage();
    }, []);
    return (
        <div>
            <Navbar />
            <div id="fullpage">
                <div className="section"><Section1 /></div>
                <div className="section"><Section2 /></div>
                <div className="section"><Section3 /></div>
                <div className="section"><Section4 /></div>
                <div className="section"><Section5 /></div>
                <div className="section"><Section6 /></div>
                <div className="section"><Section7 /></div>
                <div className="section"><Footer /></div>
            </div>
        </div>
    );
}