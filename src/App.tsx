import React from 'react';
import MainLayout from './layouts/MainLayout';

const Home: React.FC = () => {
    return (
        <MainLayout>
            <div className="p-4">
                <h1 className="text-2xl font-bold">Bienvenido a InfiniteKnowledge</h1>
            </div>
        </MainLayout>
    );
};

export default Home;
