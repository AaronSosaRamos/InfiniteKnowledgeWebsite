import React from 'react';
import MainLayout from './layouts/MainLayout';
import MainBanner from './components/MainBanner';
import ServicesSection from './components/ServicesSection';
import ResultsSection from './components/ResultsSection';

const Home: React.FC = () => {
    return (
        <MainLayout>
            <MainBanner />
            <ServicesSection />
            <ResultsSection />
        </MainLayout>
    );
};

export default Home;
