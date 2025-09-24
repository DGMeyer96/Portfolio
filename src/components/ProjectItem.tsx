import { Avatar, Box, Card, CardContent, CardMedia, Paper, Stack, Typography } from "@mui/material";

export default function ProjectItem({
    width = '100%',
    height,
    imageSrc,
    title,
    description,
} : {
    width?: number | string,
    height?: number | string,
    imageSrc: string,
    title: string,
    description: string,
}) {

    return (
        <Paper elevation={5} sx={{ p:2, width: width, height: height }}>
            <Stack direction='column' spacing={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Avatar 
                alt={title} 
                src={imageSrc} 
                variant='rounded' 
                // sx={{ width: 128, height: 108, '& img': { objectFit: 'contain', height: '100%' } }} 
                sx={{ width: '100%', height: '100%', maxHeight: '100%', '& img': { objectFit: 'contain', width: '100%' } }} 
                />
                {/* <Typography variant="h5">{title}</Typography>
                <Typography variant="body1">{description}</Typography> */}
            </Stack>
        </Paper>
    ); 
}