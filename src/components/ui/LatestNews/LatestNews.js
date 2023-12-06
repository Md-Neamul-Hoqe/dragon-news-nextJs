import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
// import Grid from '@mui/material/Grid'; // Grid version 1
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import latestNews01 from '@/assets/latest-news-1.png';
import latestNews02 from '@/assets/latest-news-2.png';
import sideTopNews from '@/assets/side-top-news.png';
import Image from "next/image";

const LatestNews = () => {
    return (
        <Box className="my-5" >
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={latestNews01} width={800} alt="Latest News"></Image>
                    </CardMedia>
                    <CardContent>
                        <p className="bg-red-600 text-white p-2 my-8 max-w-min rounded">Technology</p>
                        <Typography gutterBottom variant="h5" fontSize={32} fontWeight={700} component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography gutterBottom color="text.secondary" className="my-3">
                            By Awlad Hossain - Mar 18 2023
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} mt={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={6} spacing={24}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={latestNews02} width={800} alt="Latest News"></Image>
                            </CardMedia>
                            <CardContent>
                                <p className="bg-red-600 text-white p-2 my-8 max-w-min rounded">Technology</p>
                                <Typography gutterBottom variant="h5" fontSize={20} fontWeight={600} component="div">
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography gutterBottom color="text.secondary" className="my-3">
                                    By Awlad Hossain - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid xs={6} spacing={24}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={latestNews02} width={800} alt="Latest News"></Image>
                            </CardMedia>
                            <CardContent>
                                <p className="bg-red-600 text-white p-2 my-8 max-w-min rounded">Technology</p>
                                <Typography gutterBottom variant="h5" fontSize={20} fontWeight={600} component="div">
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography gutterBottom color="text.secondary" className="my-3">
                                    By Awlad Hossain - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid xs={6} spacing={24}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={latestNews02} width={800} alt="Latest News"></Image>
                            </CardMedia>
                            <CardContent>
                                <p className="bg-red-600 text-white p-2 my-8 max-w-min rounded">Technology</p>
                                <Typography gutterBottom variant="h5" fontSize={20} fontWeight={600} component="div">
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography gutterBottom color="text.secondary" className="my-3">
                                    By Awlad Hossain - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid xs={6} spacing={24}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={latestNews02} width={800} alt="Latest News"></Image>
                            </CardMedia>
                            <CardContent>
                                <p className="bg-red-600 text-white p-2 my-8 max-w-min rounded">Technology</p>
                                <Typography gutterBottom variant="h5" fontSize={20} fontWeight={600} component="div">
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography gutterBottom color="text.secondary" className="my-3">
                                    By Awlad Hossain - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LatestNews;