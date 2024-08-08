// src/components/Navbar.tsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import InfiniteIcon from '@mui/icons-material/AllInclusive'; // This can represent "InfiniteKnowledge"
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FaHome, FaServicestack, FaChartLine, FaBriefcase, FaShareAlt, FaEnvelope } from 'react-icons/fa';

const pages = [
    { text: 'Inicio', icon: <FaHome /> },
    { text: 'Servicios', icon: <FaServicestack /> },
    { text: 'Resultados', icon: <FaChartLine /> },
    { text: 'Empleos', icon: <FaBriefcase /> },
    { text: 'Redes Sociales', icon: <FaShareAlt /> },
    { text: 'Contáctanos', icon: <FaEnvelope /> },
];

const Navbar: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const drawer = (
        <Box
            sx={{ width: 250, bgcolor: '#003366', height: '100%' }}
            role="presentation"
            onClick={handleDrawerClose}
            onKeyDown={handleDrawerClose}
        >
            <List>
                {pages.map((page) => (
                    <ListItem 
                        button 
                        key={page.text} 
                        sx={{
                            '&:hover': {
                                backgroundColor: '#0056b3',
                                color: 'white',
                            },
                            transition: 'background-color 0.3s ease',
                            color: 'white',
                        }}
                    >
                        <ListItemIcon sx={{ color: 'inherit' }}>{page.icon}</ListItemIcon>
                        <ListItemText 
                            primary={page.text} 
                            sx={{
                                color: 'inherit',
                            }} 
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="static" sx={{ bgcolor: '#007BFF' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <InfiniteIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
                    >
                        InfiniteKnowledge
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleDrawerToggle}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="left"
                            open={drawerOpen}
                            onClose={handleDrawerClose}
                        >
                            {drawer}
                        </Drawer>
                    </Box>
                    <InfiniteIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        InfiniteKnowledge
                    </Typography>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        {pages.map((page) => (
                            <Button
                                key={page.text}
                                onClick={handleDrawerClose}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    '&:hover': {
                                        backgroundColor: '#0056b3',
                                    },
                                    transition: 'background-color 0.3s ease',
                                }}
                            >
                                {page.text}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
