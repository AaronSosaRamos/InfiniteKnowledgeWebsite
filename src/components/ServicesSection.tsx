// src/components/ServicesSection.tsx
import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { FaWhatsapp, FaYoutube, FaTiktok } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const services = [
    {
        title: 'Asistencia en Tareas Académicas',
        description: 'Brindamos apoyo en la realización de quizzes, prácticas y fichas, asegurando un rendimiento académico excepcional en todas tus asignaciones.',
        image: 'https://www.sydle.com/blog/assets/post/asistencia-escolar-63d7c6a96a38c10ae1ad6f74/capa%20frequencia%20escolar.png', 
    },
    {
        title: 'Preparación para Exámenes',
        description: 'Ofrecemos preparación integral para exámenes en inglés, matemáticas, física, química, biología, historia y más, adaptándonos a tus necesidades específicas.',
        image: 'https://www.berlinsbi.com/uploads/sites/2/2023/07/slide5carouselhome.png?w=1500&h=1080&crop=1', 
    },
    {
        title: 'Desarrollo de Ejercicios y Tareas de Libros',
        description: 'Creamos ejercicios y tareas para libros en inglés y español sobre cualquier tema, proporcionando contenido de alta calidad y relevancia educativa.',
        image: 'https://www.berlinsbi.com/uploads/sites/2/2023/07/careers-centre-800-x-600-003.jpg?w=800&h=600&crop=1', 
    },
    {
        title: 'Desarrollo de Contenidos MOOC',
        description: 'Creamos contenido para plataformas MOOC como Myelt, edx, Khan Academy y más, garantizando un aprendizaje efectivo y personalizado.',
        image: 'https://profewpp.com/wp-content/uploads/2020/07/redactando-tesis.jpg', 
    },
    {
        title: 'Redacción de Ensayos y Monografías',
        description: 'Ofrecemos servicios de redacción profesional de ensayos y monografías para todas las materias, asegurando un análisis profundo y bien estructurado.',
        image: 'https://img.freepik.com/fotos-premium/tutor-o-grupo-estudiantes-universitarios-sentados-escritorio-biblioteca-estudiando-leyendo-haciendo-tarea_28283-1230.jpg', 
    },
    {
        title: 'Asesoría en Tesis y Disertaciones',
        description: 'Proporcionamos asesoría completa en la redacción de tesis, desde la estructura inicial hasta la investigación y redacción final.',
        image: 'https://img.freepik.com/fotos-premium/universidad-usando-laptop-tareas-investigacion_1421-2470.jpg', 
    },
    {
        title: 'Elaboración de Resúmenes de Curso',
        description: 'Desarrollamos resúmenes detallados de curso para facilitar tu estudio y comprensión del material académico.',
        image: 'https://st4.depositphotos.com/2712843/31615/i/450/depositphotos_316159472-stock-photo-closeup-asian-young-student-hand.jpg', 
    },
];

const ServicesSection: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Box
            sx={{
                py: 8,
                bgcolor: '#e6f2ff', 
                color: '#003366',
            }}
            ref={ref}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    component="h2"
                    sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold', color: '#003366' }}
                >
                    Nuestros Servicios Profesionales
                </Typography>
                <Grid container spacing={4}>
                    {services.map((service, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={6}
                            lg={4}
                            key={service.title}
                            sx={{
                                transform: inView ? 'none' : 'translateY(20px)',
                                opacity: inView ? 1 : 0,
                                transition: `all 0.5s ease-in-out ${index * 0.3}s`,
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    width: { xs: '100%', sm: '80%', md: '70%', lg: '100%' },
                                    bgcolor: 'white',
                                    boxShadow: 3,
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    p: 3,
                                    textAlign: 'center',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        transition: 'all 0.3s ease-in-out',
                                    },
                                    transition: 'all 0.3s ease-in-out',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={service.image}
                                    alt={service.title}
                                    sx={{
                                        height: 200,
                                        width: '100%',
                                        objectFit: 'cover',
                                        mb: 3,
                                    }}
                                />
                                <Typography
                                    variant="h5"
                                    component="h3"
                                    sx={{ fontWeight: 'bold', mb: 2, color: '#003366' }}
                                >
                                    {service.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    component="p"
                                    sx={{ mb: 3, color: '#003366' }}
                                >
                                    {service.description}
                                </Typography>
                                <Grid container spacing={1} sx={{ mb: 2 }}>
                                    <Grid item xs={12}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            startIcon={<FaWhatsapp />}
                                            sx={{
                                                bgcolor: '#25D366',
                                                '&:hover': {
                                                    bgcolor: '#1DA851',
                                                },
                                                transition: 'all 0.3s ease-in-out',
                                                width: '100%',
                                            }}
                                        >
                                            Solicítalo
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            startIcon={<FaYoutube />}
                                            sx={{
                                                bgcolor: '#FF0000',
                                                '&:hover': {
                                                    bgcolor: '#CC0000',
                                                },
                                                transition: 'all 0.3s ease-in-out',
                                                width: '100%',
                                            }}
                                        >
                                            Videos
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            startIcon={<FaTiktok />}
                                            sx={{
                                                bgcolor: '#010101',
                                                '&:hover': {
                                                    bgcolor: '#0D0D0D',
                                                },
                                                transition: 'all 0.3s ease-in-out',
                                                width: '100%',
                                            }}
                                        >
                                            TikTok
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ServicesSection;
