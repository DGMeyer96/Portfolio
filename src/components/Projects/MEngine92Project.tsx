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
                            Create a virtual reality experience in Unreal Engine that will introduce students to archeology through Virtual Reality and Multiplayer by entering the world of Ambrosia to find possible dig sites and identify artifacts.
                            <ul>
                                <li>Created custom Virtual Reality interaction and movement system that features slow walking instead of teleporting due to the need to perform transactional surveys.</li>
                                <li>Multiplayer was built around up to 4 players connecting to a dedicated server with proper object, character, and movement replication.</li>
                                <li>VR and Multiplayer functionality were created in C++ with some UI elements in Blueprint.</li>
                                <li>Imported 3D scanned models of real artifacts for students to find.</li>
                                <li>Utilizes Steamworks SDK integration for multiplayer integration and matchmaking.</li>
                            </ul>
                        </Typography>
                    </Stack>
                </Stack>
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