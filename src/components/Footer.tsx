import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            sx={{
                backgroundColor: '#1a1a1a', 
                color: '#ffffff',
                py: 2,
                textAlign: 'center',
                mt: 'auto',
            }}
        >
            <Typography variant="body2">
                © {currentYear} Todos los derechos reservados. Desarrollado por Wilfredo Aaron Sosa Ramos.
            </Typography>
        </Box>
    );
};

export default Footer;
