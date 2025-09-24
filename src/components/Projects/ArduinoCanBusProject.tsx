import { Typography, Grow, Chip, Stack, IconButton, ImageList, ImageListItem } from "@mui/material";
import { type Dispatch, type SetStateAction } from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Flightcase1 from '../../assets/projects/companion_species/Green-Science-Games-Alter-Learning.webp';
import Flightcase2 from '../../assets/projects/companion_species/Green-Science-Games-Android.webp';
import Flightcase3 from '../../assets/projects/companion_species/Green-Science-Games-Educational-games.webp';
import Flightcase4 from '../../assets/projects/companion_species/Green-Science-Games-Learning-games.webp';
import Flightcase5 from '../../assets/projects/companion_species/Green-Science-Games-Mobile.webp';

export default function ArduinoCanBusProject({
    onClose
} : {
    onClose: Dispatch<SetStateAction<string>>
}) {

    const images = [ Flightcase1, Flightcase2, Flightcase3, Flightcase4, Flightcase5 ];

    return (
        <Grow in={true} easing={{ enter: 'cubic-bezier(0, 1.5, .8, 1)', exit: 'linear' }} mountOnEnter unmountOnExit>
            <Stack direction="column" spacing={2} sx={{ width: '100%', maxHeight: '75vh' }}>
                {/* Header */}
                <Stack direction="column" spacing={2}>
                    <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", }}>
                        <Typography variant="h3">
                            Arduino CAN BUS
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
                            Create a next generation automotive HMI platform that reduces development time from years to months for a fully functional automotive HMI.
                            <ul>
                                <li></li>
                                <li></li>
                            </ul>
                        </Typography>
                    </Stack>
                </Stack>
                <ImageList sx={{ width: '100%', height: '100%' }} cols={2} rowHeight={164}>
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