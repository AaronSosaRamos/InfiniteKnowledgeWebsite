import React from 'react';
import MainLayout from './layouts/MainLayout';
import MainBanner from './components/MainBanner';
import ServicesSection from './components/ServicesSection';

const Home: React.FC = () => {
    return (
        <MainLayout>
            <MainBanner />
            <ServicesSection />
        </MainLayout>
    );
};

export default Home;
