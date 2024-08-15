import React from 'react';
import MainLayout from './layouts/MainLayout';
import MainBanner from './components/MainBanner';
import ServicesSection from './components/ServicesSection';
import ResultsSection from './components/ResultsSection';
import JobsSection from './components/JobsSection';
import SocialMediaSection from './components/SocialMediaSection';
import ContactSection from './components/ContactSection';

const Home: React.FC = () => {
    return (
        <MainLayout>
            <div id="main-banner">
                <MainBanner />
            </div>
            <div id="services-section">
                <ServicesSection />
            </div>
            <div id="results-section">
                <ResultsSection />
            </div>
            <div id="jobs-section">
                <JobsSection />
            </div>
            <div id="social-media-section">
                <SocialMediaSection />
            </div>
            <div id="contact-section">
                <ContactSection />
            </div>
        </MainLayout>
    );
};

export default Home;
