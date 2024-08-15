import React from 'react';
import { Box, Typography, Container, Grid, Button, Card, CardContent } from '@mui/material';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const ContactSection: React.FC = () => {
    return (
        <Box
            sx={{
                py: 8,
                backgroundColor: '#1a1a1a', 
                color: '#ffffff',
                position: 'relative',
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    component="h2"
                    sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold', color: '#ffffff' }}
                >
                    Contáctanos
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Card
                                sx={{
                                    backgroundColor: '#282828', 
                                    color: '#ffffff',
                                    borderRadius: 2,
                                    height: '100%', 
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
                                    },
                                }}
                            >
                                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                                    <FaWhatsapp size={50} color="#25D366" />
                                    <Typography variant="h5" sx={{ mt: 3, mb: 3 }}>
                                        Envíanos un WhatsApp
                                    </Typography>
                                    <Button
                                        href="https://wa.link/rrts2o" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#25D366',
                                            color: '#ffffff',
                                            '&:hover': {
                                                backgroundColor: '#1DA851',
                                            },
                                        }}
                                        fullWidth
                                    >
                                        Abrir WhatsApp (Canal 1)
                                    </Button>
                                    <Button
                                        href="https://wa.link/6rdpta" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#25D366',
                                            color: '#ffffff',
                                            '&:hover': {
                                                backgroundColor: '#1DA851',
                                            },
                                            marginTop: '10px'
                                        }}
                                        fullWidth
                                    >
                                        Abrir WhatsApp (Canal 2)
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Card
                                sx={{
                                    backgroundColor: '#282828',
                                    color: '#ffffff',
                                    borderRadius: 2,
                                    height: '100%', 
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
                                    },
                                }}
                            >
                                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                                    <FaEnvelope size={50} color="#D44638" />
                                    <Typography variant="h5" sx={{ mt: 3, mb: 3 }}>
                                        Envíanos un Correo Electrónico
                                    </Typography>
                                    <Button
                                        href="mailto:U20204320@gmail.com"
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#D44638',
                                            color: '#ffffff',
                                            '&:hover': {
                                                backgroundColor: '#C23321',
                                            },
                                        }}
                                        fullWidth
                                    >
                                        Abrir Gmail
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactSection;
