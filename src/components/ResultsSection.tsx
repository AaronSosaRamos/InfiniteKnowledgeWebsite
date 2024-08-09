import React from 'react';
import { Box, Typography, Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaRegCalendarAlt, FaUserFriends, FaBriefcase, FaChartLine } from 'react-icons/fa';

const results = [
    {
        title: 'Años de Experiencia',
        value: 3,
        suffix: '+',
        description: 'Brindando servicios académicos de alto nivel con los mejores resultados',
        icon: <FaRegCalendarAlt size={40} color="#ffffff" />,
    },
    {
        title: 'Clientes Satisfechos',
        value: 100,
        suffix: '+',
        description: 'Más de 100 clientes satisfechos',
        icon: <FaUserFriends size={40} color="#ffffff" />,
    },
    {
        title: 'Nuevas Oportunidades Laborales',
        value: 10,
        suffix: '+',
        description: 'Generando más de 10 nuevas oportunidades laborales',
        icon: <FaBriefcase size={40} color="#ffffff" />,
    },
    {
        title: 'Proyectos',
        value: 10,
        suffix: '',
        description: 'Crecimiento continuo e innovador',
        icon: <FaChartLine size={40} color="#ffffff" />,
    },
];

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const ResultsSection: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 
    const isTablet = useMediaQuery('(min-width: 600px) and (max-width: 1024px)');

    const WrapperComponent = isMobile ? 'div' : motion.div;

    return (
        <Box
            sx={{
                py: 8,
                bgcolor: '#003366', 
                color: 'white',
            }}
            component={WrapperComponent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={!isMobile ? containerVariants : undefined}
        >
            <Container maxWidth="lg">
                <WrapperComponent variants={!isMobile ? itemVariants : undefined}>
                    <Typography
                        variant="h3"
                        component="h2"
                        sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold', color: '#ffffff' }}
                    >
                        Nuestros Resultados
                    </Typography>
                </WrapperComponent>
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    sx={{paddingLeft: (isMobile || isTablet) ? 4 : 0}}
                >
                    {results.map((result, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            key={index}
                            component={WrapperComponent}
                            variants={!isMobile ? itemVariants : undefined} 
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                backgroundColor: '#1a5276', // Un tono más claro de azul para las tarjetas
                                borderRadius: 2,
                                p: 3,
                                boxShadow: 3,
                                transition: 'transform 0.3s ease-in-out',
                                maxWidth: 300, // Limitar el ancho máximo de las tarjetas para mantenerlas centradas
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    backgroundColor: '#0056b3', // Fondo azul más brillante en hover
                                },
                                marginBottom: isMobile ? 2 : 0
                            }}
                        >
                            <Box
                                sx={{
                                    mb: 2,
                                    backgroundColor: '#003366',
                                    borderRadius: '50%',
                                    padding: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 80,
                                    height: 80,
                                    '&:hover': {
                                        backgroundColor: '#004080', // Cambio de color en hover
                                    },
                                    transition: 'background-color 0.3s ease-in-out',
                                }}
                            >
                                {result.icon}
                            </Box>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                                <CountUp end={result.value} suffix={result.suffix} duration={2} />
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                {result.title}
                            </Typography>
                            <Typography variant="body1">
                                {result.description}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ResultsSection;
