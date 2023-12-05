import { Box, Container, Typography } from '@mui/material';
import { getCurrentDate } from '@/utils/getCurrentDate';
import headerImage from '@/assets/The Dragon News.png';
import Image from 'next/image';
import React from 'react';

const Header = () => {
    const getDate = getCurrentDate();
    return (
        <Box className="w-full my-5">
            <Container>
                <Image className='mx-auto' src={headerImage} width={500} height={500} alt='Title' />
                <Typography color='gray' variant='body2' textAlign='center' className='my-2'>
                    Journalism Without Fear or Favour
                </Typography>
                <Typography textAlign='center'>
                    {getDate}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;