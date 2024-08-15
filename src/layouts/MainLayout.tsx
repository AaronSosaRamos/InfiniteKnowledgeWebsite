import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
