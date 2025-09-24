import { Typography, Grow, Chip, Stack, IconButton, ImageList, ImageListItem } from "@mui/material";
import { type Dispatch, type SetStateAction } from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import CompanionSpecies1 from '../../assets/projects/companion_species/Green-Science-Games-Alter-Learning.webp';
import CompanionSpecies2 from '../../assets/projects/companion_species/Green-Science-Games-Android.webp';
import CompanionSpecies3 from '../../assets/projects/companion_species/Green-Science-Games-Educational-games.webp';
import CompanionSpecies4 from '../../assets/projects/companion_species/Green-Science-Games-Learning-games.webp';
import CompanionSpecies5 from '../../assets/projects/companion_species/Green-Science-Games-Mobile.webp';

export default function CompanionSpeciesProject({
    onClose
} : {
    onClose: Dispatch<SetStateAction<string>>
}) {

    const images = [ CompanionSpecies1, CompanionSpecies2, CompanionSpecies3, CompanionSpecies4, CompanionSpecies5 ];

    return (
        <Grow in={true} easing={{ enter: 'cubic-bezier(0, 1.5, .8, 1)', exit: 'linear' }} mountOnEnter unmountOnExit>
            <Stack direction="column" spacing={2} sx={{ width: '100%', maxHeight: '75vh' }}>
                {/* Header */}
                <Stack direction="column" spacing={2}>
                    <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", }}>
                        <Typography variant="h3">
                            Companion Species
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
                            Develop a mobile game that focuses on teaching children (age 4-12) about green sciences and alternative energy. The game will be packaged with a new online learning platform called Alter Learning. It features a tower defense game mode, an open sandbox mode for players to create custom gardens, and an Augmented Reality sandbox game mode.
                            <ul>
                                <li>Developed in Unity and managed through Git.</li>
                                <li>Created the foundation of the tower defense game mode and worked with the artist directly to create and integrate art assets.</li>
                                <li>Developed back-end loading and AR integration.</li>
                                <li>Created the store and inventory systems with ability to purchase items from a store, place items and return them to the player inventory.</li>
                                <li>Integrated real world AQI and Weather data that affects in-game weather and environment.</li>
                                <li>Optimized the game for mobile platforms, leading to a 75-80% increase in performance.</li>
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