import { Typography, Grow, Chip, Stack, IconButton, ImageList, ImageListItem } from "@mui/material";
import { type Dispatch, type SetStateAction } from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import MEngine1 from '../../assets/projects/mengine92/mengine92-1.png';
import MEngine2 from '../../assets/projects/mengine92/mengine92-2.png';
import MEngine3 from '../../assets/projects/mengine92/mengine92-3.png';

export default function MEngine92Project({
    onClose
} : {
    onClose: Dispatch<SetStateAction<string>>
}) {

    const images = [ MEngine1, MEngine2, MEngine3 ];

    return (
        <Grow in={true} easing={{ enter: 'cubic-bezier(0, 1.5, .8, 1)', exit: 'linear' }} mountOnEnter unmountOnExit>
            <Stack direction="column" spacing={2} sx={{ width: '100%', maxHeight: '75vh' }}>
                {/* Header */}
                <Stack direction="column" spacing={2}>
                    <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", }}>
                        <Typography variant="h3">
                            MEngine92
                        </Typography>
                        <IconButton color="primary" size="small" onClick={() => onClose('None')}>
                            <ArrowBackIcon fontSize="inherit" />
                        </IconButton>
                    </Stack>
                    <Chip color="primary" size="small" sx={{ width: '10%', height: 8 }} />
                </Stack>
                {/* Content */}
                <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", }}>
                    <Stack direction="column" spacing={1}>
                        <Typography variant="body1">
                            This project came about after reading the <strong>Game Engine Black Book</strong> series by <strong>Fabian Sanglard</strong>. After reading the Wolfesnstein 3D and DOOM books I thought it would be a fun experiment to create my own Raycast Renderer.
                        </Typography>
                        <Typography variant="body1">
                            This is part one of a two part project I want to complete. The idea is to replicate the capabilities of the Wolfenstein 3D game engine, which was released in May, 1992 (hence the name).
                        </Typography>
                        <Typography variant="body1">
                            My intention is to follow this up with a MEngine93 which will simulate the capabilties of the DOOM engine.
                        </Typography>
                        <Typography variant="body1">
                            Development:
                            <ul>
                                <li>Written in C.</li>
                                <li>Built on the Raylib 5 framework.</li>
                                <li>Intention is to rewrite eventually in Rust (excuse to make something using Rust).</li>
                            </ul>
                            Feature Roadmap:
                            <ul>
                                <li>Level Creator</li>
                                <li>Sprite Editor</li>
                                <li>Example Game</li>
                            </ul>
                        </Typography>
                    </Stack>
                </Stack>
                {/* Images */}
                <ImageList sx={{ width: '100%', height: '100%' }} cols={2} rowHeight={350}>
                    {
                        images.map((item, index) => (
                            <ImageListItem key={index}>
                                <img
                                    srcSet={`${item}`}
                                    src={`${item}`}
                                    alt={item}
                                    loading="lazy"
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </Stack>
        </Grow>
    )
}