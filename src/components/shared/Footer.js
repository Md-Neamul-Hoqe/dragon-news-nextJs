import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import React from 'react';

import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';

const Footer = () => {

    const navItems = [
        {
            route: 'Home',
            pathname: '/'
        },
        {
            route: 'Pages',
            pathname: '/pages'
        },
        {
            route: 'Category',
            pathname: '/category'
        },
        {
            route: 'News',
            pathname: '/news'
        },
        {
            route: 'About',
            pathname: '/about'
        },
        {
            route: 'Contact',
            pathname: '/contact'
        },
    ]

    return (
        <Box className="bg-black px-2 py-10">
            <Container>
                <Box sx={{ "& svg": { color: 'white' } }} className="w-full text-center">
                    <IconButton aria-label="delete">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                        <FacebookIcon />
                    </IconButton>
                </Box>

                <Box className="w-full text-center">
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            href={item?.pathname}
                        >
                            <Button className="text-white">{item?.route}</Button>
                        </Link>
                    ))}
                </Box>

                <Typography color='gray' variant='body2' textAlign='center'>
                    @2023 The Dragon News Not Design By Neamul
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;