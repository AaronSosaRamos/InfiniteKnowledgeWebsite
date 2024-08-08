// src/layouts/MainLayout.tsx
import React from 'react';
import Navbar from '../components/Navbar';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;
