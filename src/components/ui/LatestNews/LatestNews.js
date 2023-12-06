import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
// import Grid from '@mui/material/Grid'; // Grid version 1
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import latestNews01 from '@/assets/latest-news-1.png';
import latestNews02 from '@/assets/latest-news-2.png';
import sideTopNews from '@/assets/side-top-news.png';
import Image from "next/image";
import { getAllNews } from "@/utils/getAllNews";

const LatestNews = async () => {
    const { data } = await getAllNews();
    console.log(data);
    return (
        <Box className="my-5" >
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={data[ 0 ]?.thumbnail_url} height={500} width={800} alt="Latest News"></Image>
                    </CardMedia>
                    <CardContent>
                        <p className="bg-red-600 text-white p-2 my-8 max-w-min rounded">{data[ 0 ]?.category}</p>
                        <Typography gutterBottom variant="h5" fontSize={32} fontWeight={700} component="div">
                            {data[ 0 ]?.title}
                        </Typography>
                        <Typography gutterBottom color="text.secondary" className="my-3">
                            By {data[ 0 ]?.author?.name} - {data[ 0 ]?.author?.published_date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {data[ 0 ]?.details?.length > 200 ? data[ 0 ]?.details.slice(0, 200) + "..." : data[ 0 ]?.details}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} mt={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    data?.slice(1, 5).map(news => (
                        <Grid key={news?._id} xs={6} spacing={24}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia>
                                        <Image src={news?.thumbnail_url} height={250} width={800} alt="Latest News"></Image>
                                    </CardMedia>
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" fontSize={20} fontWeight={600} component="div">
                                            {news?.title}
                                        </Typography>
                                        <Typography gutterBottom color="text.secondary" className="my-3">
                                            By {news?.author?.name} - {news?.author?.published_date}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {news?.details?.length > 100 ? news?.details.slice(0, 100) + "..." : news?.details}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};

export default LatestNews;