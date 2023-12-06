import { getSingleNews } from '@/utils/getSingleNews';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const newsDetails = async ({ params }) => {

    console.log(params?.newsId);
    const { data: news } = await getSingleNews(params?.newsId)
    console.log(news);

    return (
        <Box>
            <Container className='mt-5'>
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                        <Image src={news?.thumbnail_url} width={800} height={500} alt={news?.title} />
                        <Grid container spacing={2} className='mt-2'>
                            <Grid item lg={6}>
                                <Image src={news?.image_url} width={800} height={500} alt={news?.title} />
                            </Grid>
                            <Grid item lg={6}>
                                <Image src={news?.image_url} width={800} height={500} alt={news?.title} />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item lg={6}>
                        <Typography variant='h5' component="h2">{news?.title}</Typography>
                        <Box sx={{
                            display: 'flex', gap: 3, alignItems: 'center'
                        }}>
                            <Avatar alt='author' src='news?.author?.img' />
                            <Typography>By {news?.author?.name}</Typography>
                            <Typography>-- {news?.author?.published_date}</Typography>
                        </Box>
                        <Typography className='text-justify whitespace-pre-line my-10 text-gray-500'>{news?.details}</Typography>
                        <Typography >``Many desktop publishing packages and web page editors now use as their default model text!</Typography>
                        <Typography >-- Ibn Aroub</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default newsDetails;