import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from 'react-icons/fa';

const MainBanner: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20230331/pngtree-classroom-classroom-indoor-environment-warm-light-tone-cartoon-background-image_2120413.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                textAlign: 'center',
                padding: 2,
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                    zIndex: 1,
                },
                '& > *': {
                    position: 'relative',
                    zIndex: 2,
                },
            }}
        >
            <Container maxWidth="md">
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        fontSize: { xs: '2rem', md: '4rem' },
                        mb: 3,
                        animation: 'fadeIn 1s ease-in-out',
                        fontWeight: 'bold',
                        letterSpacing: '2px',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    Somos InfiniteKnowledge
                </Typography>
                <Typography
                    variant="h5"
                    component="p"
                    sx={{
                        fontSize: { xs: '1rem', md: '2rem' },
                        mb: 5,
                        animation: 'fadeIn 2s ease-in-out',
                        fontWeight: 'bold',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    Tu primera opción en el desarrollo de tareas y exámenes de cualquier grado
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        mb: 4,
                        bgcolor: '#007BFF',
                        fontSize: '1.2rem',
                        padding: '10px 20px',
                        '&:hover': {
                            bgcolor: '#0056b3',
                            transform: 'scale(1.05)',
                            transition: 'all 0.3s ease-in-out',
                        },
                        animation: 'fadeIn 3s ease-in-out',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    }}
                    href='/#services-section'
                >
                    Descubre más
                </Button>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 2,
                        animation: 'fadeIn 4s ease-in-out',
                    }}
                >
                    <a href='https://www.facebook.com/profile.php?id=100094648251641&mibextid=ZbWKwL' target='_blank'> <FaFacebookF className="text-white hover:text-blue-500 transition-colors duration-300" size={40} /> </a> 
                    <a href='https://www.instagram.com/jacorporation16?igsh=MTQ3bHhrYzM2aDMwNA==' target='_blank'> <FaInstagram className="text-white hover:text-pink-500 transition-colors duration-300" size={40} /> </a>
                    <a href='https://www.linkedin.com/company/j-a-corporation/' target='_blank'> <FaLinkedinIn className="text-white hover:text-blue-500 transition-colors duration-300" size={40} /> </a>
                    <a href='https://youtube.com/@jacorporation?si=int-AJXIuXRzwsoz' target='_blank'> <FaYoutube className="text-white hover:text-red-500 transition-colors duration-300" size={40} /> </a>
                    <a href='https://www.tiktok.com/@jacorporation4?_t=8othKtNjZmn&_r=1' target='_blank'>  <FaTiktok className="text-white hover:text-black transition-colors duration-300" size={40} /> </a>
                </Box>
            </Container>
        </Box>
    );
};

export default MainBanner;
