import React from 'react';
import { Box, Typography, Container, Grid, IconButton } from '@mui/material';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from 'react-icons/fa';

const socialMediaLinks = [
    {
        name: 'Facebook',
        icon: <FaFacebookF size={40} />,
        link: 'https://www.facebook.com/profile.php?id=100094648251641&mibextid=ZbWKwL',
        color: '#4267B2',
    },
    {
        name: 'Instagram',
        icon: <FaInstagram size={40} />,
        link: 'https://www.instagram.com/jacorporation16?igsh=MTQ3bHhrYzM2aDMwNA==', 
        color: '#C13584',
    },
    {
        name: 'LinkedIn',
        icon: <FaLinkedinIn size={40} />,
        link: 'https://www.linkedin.com/company/j-a-corporation/', 
        color: '#0077B5',
    },
    {
        name: 'YouTube',
        icon: <FaYoutube size={40} />,
        link: 'https://youtube.com/@jacorporation?si=int-AJXIuXRzwsoz', 
        color: '#FF0000',
    },
    {
        name: 'TikTok',
        icon: <FaTiktok size={40} />,
        link: 'https://www.tiktok.com/@jacorporation4?_t=8othKtNjZmn&_r=1', 
        color: '#010101',
    },
];

const SocialMediaSection: React.FC = () => {
    return (
        <Box
            sx={{
                py: 8,
                background: 'linear-gradient(135deg, #004080 0%, #0073e6 50%, #99ccff 100%)',
                color: '#ffffff',
                position: 'relative',
                textAlign: 'center',
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    component="h2"
                    sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold', color: '#ffffff' }}
                >
                    Conéctate con Nosotros en Redes Sociales
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {socialMediaLinks.map((social, index) => (
                        <Grid item xs={12} sm={6} md={2} key={index}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                    },
                                }}
                            >
                                <IconButton
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        bgcolor: social.color,
                                        color: '#ffffff',
                                        width: 80,
                                        height: 80,
                                        '&:hover': {
                                            bgcolor: social.color,
                                            boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
                                        },
                                        transition: 'box-shadow 0.3s ease-in-out',
                                    }}
                                >
                                    {social.icon}
                                </IconButton>
                                <Typography variant="h6" sx={{ mt: 2 }}>
                                    {social.name}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default SocialMediaSection;
