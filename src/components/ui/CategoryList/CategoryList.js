import { getAllCategories } from '@/utils/getAllCategories';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const CategoryList = async () => {
    const { data: allCategories } = await getAllCategories();
    // console.log(allCategories);
    return (
        <Box sx={{ padding: 5 }} className='mt-5 bg-gray-200 rounded space-y-5'>
            <Typography variant='h1' fontSize={20} fontWeight={600}>Categories</Typography>
            <Divider />
            <Stack rowGap={1}>
                {allCategories?.map(category => <Button key={category?._id} variant='outlined'>
                    <Link href={`news?category=${category?.title.toLowerCase()}`}>
                        {category?.title}
                    </Link>
                </Button>)}
            </Stack>
        </Box>
    );
};

export default CategoryList;