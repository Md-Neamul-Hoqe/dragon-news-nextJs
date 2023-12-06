import { getCategoryNews } from '@/utils/getCategoryNews';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const categoryNews = async ({ params, searchParams }) => {
    console.log(searchParams?.category);
    const { data: categoryNews } = await getCategoryNews(searchParams?.category);

    // console.log(searchParams?.category, categoryNews);
    return (
        <div>
            {/* <h1>Details news : {categoryNews[ 0 ]?.category}</h1> */}
            <Box className="my-5">
                <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} mt={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                        categoryNews?.map(news => <Grid key={news?._id} xs={6} item >
                            <Link href={`/${news?.category.toLowerCase()}/${news?._id}`}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia sx={{
                                            '& img': {
                                                width: '100%',
                                                height: '250px'
                                            }
                                        }}>
                                            <div className='w-full h-60 bg-gray-100'></div>
                                            {/* <Image src={news?.image_url} height={400} width={900} alt="Latest News"></Image> */}
                                        </CardMedia>
                                        <CardContent>
                                            <p className="bg-red-600 text-white p-2 my-3 max-w-min rounded">{news?.category}</p>
                                            <Typography title={news?.title} gutterBottom variant="h6" fontSize={20} fontWeight={600} component="div">
                                                {news?.title?.length > 30 ? news?.title?.slice(0, 30) + "..." : news?.title}
                                            </Typography>
                                            <Typography gutterBottom color="text.secondary" className="my-3">
                                                By {news?.author?.name} - {news?.author?.published_date}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {news?.details?.length > 200 ? news?.details?.slice(0, 200) + '...' : news?.details}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card></Link>

                        </Grid>)
                    }
                </Grid>
            </Box>
        </div>
    );
};

export default categoryNews;