import { Typography, Grow, Chip, Stack, IconButton, ImageList, ImageListItem } from "@mui/material";
import { type Dispatch, type ReactNode, type SetStateAction } from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ProjectItem({
    children,
    projectTitle,
    images,
    onClose,
} : {
    children: ReactNode,
    projectTitle: string,
    images: string[],
    onClose: Dispatch<SetStateAction<string>>,
}) {

    return (
        <Grow id="ProjectItemGrow" in={true} easing={{ enter: 'cubic-bezier(0, 1.5, .8, 1)', exit: 'linear' }} mountOnEnter unmountOnExit>
            <Stack id="ProjectItem" direction="column" spacing={2} sx={{ width: '100%', maxHeight: '100vh', p:1 }}>
                {/* Header */}
                <Stack direction="column" spacing={2}>
                    <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", }}>
                        <Typography variant="h3">
                            { projectTitle }
                        </Typography>
                        <IconButton color="primary" size="small" onClick={() => onClose('None')}>
                            <ArrowBackIcon fontSize="inherit" />
                        </IconButton>
                    </Stack>
                    <Chip color="primary" size="small" sx={{ width: '10%', height: 8 }} />
                </Stack>
                {/* Content */}
                <Stack direction="column" spacing={1}>
                    {children}
                </Stack>
                {/* Images */}
                <ImageList sx={{ width: '100%', height: '50%', pb:2 }} cols={2} rowHeight={164}>
                    {
                        images.map((item, index) => (
                            <ImageListItem key={index}>
                                <img
                                    srcSet={`${item}`}
                                    src={`${item}`}
                                    alt={item}
                                    loading="lazy"
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </Stack>
        </Grow>
    )
}