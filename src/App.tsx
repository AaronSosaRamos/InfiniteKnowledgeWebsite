import React from 'react';
import MainLayout from './layouts/MainLayout';
import MainBanner from './components/MainBanner';

const Home: React.FC = () => {
    return (
        <MainLayout>
            <MainBanner />
        </MainLayout>
    );
};

export default Home;
