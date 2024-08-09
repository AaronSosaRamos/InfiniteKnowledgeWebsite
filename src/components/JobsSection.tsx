import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const jobs = [
    {
        title: 'Practicante de Docencia y Desarrollo Académico',
        description: 'Apoya en la creación, desarrollo y mejora de materiales académicos. Colabora en proyectos educativos enfocados en el éxito académico de estudiantes de todos los niveles.',
        image: 'https://estudiarvirtual.unipiloto.edu.co/hubfs/Imported_Blog_Media/que-es-la-especializacion-en-docencia-universitaria-y-por-que-estudiarla.webp',
    },
    {
        title: 'Practicante de Administración de Empresas',
        description: 'Contribuye en la gestión y optimización de procesos administrativos. Desarrolla habilidades en planificación, organización y liderazgo en un entorno dinámico.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fUEBZNqn1pUsQPJWtq0v5Ddu2Rx1kJneRQ&s',
    },
    {
        title: 'Practicante de Marketing',
        description: 'Participa en la creación y ejecución de estrategias de marketing digital. Apoya en campañas orientadas a promover nuestros servicios educativos a través de diversos canales.',
        image: 'https://cdn.corporatefinanceinstitute.com/assets/marketing-1024x594.jpeg',
    },
    {
        title: 'Practicante de Gestión de Proyectos',
        description: 'Colabora en la planificación y ejecución de proyectos educativos. Desarrolla habilidades en la gestión de recursos, plazos y equipos multidisciplinarios.',
        image: 'https://www.ticpymes.es/wp-content/uploads/2023/07/AdobeStock_573838027-scaled.jpeg',
    },
    {
        title: 'Practicante de Gestión de Recursos Humanos',
        description: 'Apoya en la selección, formación y desarrollo del talento dentro de la empresa. Contribuye a la creación de un ambiente laboral positivo y productivo.',
        image: 'https://www.bizneo.com/blog/wp-content/uploads/2019/08/gestion-recursos-humanos-810x455.jpeg',
    },
    {
        title: 'Practicante de Ingeniería de Software',
        description: 'Participa en el desarrollo de soluciones tecnológicas que apoyan nuestros servicios educativos. Apoya en la creación y mantenimiento de aplicaciones y sistemas eficientes.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd_YboUjs3q9Mp6qF7bvaaLT4MTMC-k0H_fQ&s',
    },
    {
        title: 'Practicante de Ingeniería de Inteligencia Artificial',
        description: 'Contribuye al desarrollo de herramientas basadas en inteligencia artificial para mejorar la experiencia de aprendizaje. Apoya en la investigación y desarrollo de algoritmos innovadores.',
        image: 'https://cdn.prod.website-files.com/5f5a53e153805db840dae2db/65dcc7dc0e3b99757115ca4b_aprender-trabajar-inteligencia-artificial.webp',
    },
    {
        title: 'Practicante de Product Design y Design Thinking',
        description: 'Apoya en el diseño de productos educativos innovadores. Participa en procesos de design thinking para crear soluciones centradas en el usuario y mejorar la experiencia de aprendizaje.',
        image: 'https://media.designrush.com/articles/265028/conversions/types-of-product-design-details.jpg',
    },
];

const JobsSection: React.FC = () => {
    return (
        <Box
            sx={{
                py: 8,
                background: 'linear-gradient(135deg, #004080 0%, #0073e6 50%, #99ccff 100%)', 
                color: '#ffffff',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    width: '200%',
                    height: '200%',
                    top: '-100%',
                    left: '-100%',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0) 70%)',
                    animation: 'moveBubbles 10s linear infinite',
                }}
            />

            <style>
                {`
                    @keyframes moveBubbles {
                        0% {
                            transform: translate(0, 0);
                        }
                        50% {
                            transform: translate(20%, 20%);
                        }
                        100% {
                            transform: translate(0, 0);
                        }
                    }
                `}
            </style>

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <Typography
                    variant="h3"
                    component="h2"
                    sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold', color: '#ffffff' }}
                >
                    Oportunidades de Empleo
                </Typography>
                <Grid container spacing={4}>
                    {jobs.map((job, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s ease-in-out',
                                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4)',
                                    },
                                    backgroundColor: 'white', 
                                    color: '#ffffff',
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={job.image}
                                    alt={job.title}
                                    sx={{ height: 200 }}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2, color: 'black' }}>
                                        {job.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 3, color: 'black' }}>
                                        {job.description}
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 'auto' }}>
                                        <Button
                                            variant="contained"
                                            color="success"
                                            startIcon={<FaWhatsapp />}
                                            sx={{
                                                width: '48%',
                                                bgcolor: '#25D366',
                                                '&:hover': {
                                                    bgcolor: '#1DA851',
                                                },
                                            }}
                                        >
                                            Más info.
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            startIcon={<FaLinkedin />}
                                            sx={{
                                                width: '48%',
                                                bgcolor: '#0A66C2',
                                                '&:hover': {
                                                    bgcolor: '#004182',
                                                },
                                            }}
                                        >
                                            Postular
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default JobsSection;
