import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import sideNews from '@/assets/side-top-news.png';

const SideBar = () => {
    return (
        <Box className="my-5">
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={sideNews} width={800} alt="Latest News"></Image>
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
        </Box>
    );
};

export default SideBar;