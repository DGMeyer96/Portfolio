import { Chip, IconButton, ImageList, ImageListItem, ImageListItemBar, Stack, Typography } from "@mui/material";

import Flightcase from '../../assets/projects/flightcase/logo2.png';
import Fisker from '../../assets/projects/fisker/ocean_blue.webp';
import Arduino from '../../assets/projects/arduino_can_bus/arduino.png';
import CSUSB from '../../assets/projects/csusb-ati-logo.png';
import CompanionSpecies from '../../assets/projects/companion_species/Green-Science-Games-Learning-games.webp';
import MEngine92 from '../../assets/projects/mengine92/mengine92-1.png';
import InfoIcon from '@mui/icons-material/Info';

export default function ProjectsList({
    onClick,
} : {
    onClick: React.Dispatch<React.SetStateAction<string>>
}) {
    const projectList = [
        {
            img: Flightcase,
            title: 'Flightcase',
            company: 'Flightcase Inc.',
            rows: 1,
            cols: 2,
        },
        {
            img: MEngine92,
            title: 'MEngine92',
            company: 'Personal'
        },
        {
            img: Fisker,
            title: 'Fisker',
            company: 'Fisker Inc.',
            rows: 2,
            cols: 3,
        },
        {
            img: Arduino,
            title: 'Arduino CAN BUS',
            company: 'Personal'
        },
        {
            img: CSUSB,
            title: 'Virtual Lab Template',
            company: 'CSUSB',
            rows: 1,
            cols: 1,
        },
        {
            img: CSUSB,
            title: 'Project Ambrosia',
            company: 'CSUSB',
            rows: 1,
            cols: 1,
        },
        {
            img: CompanionSpecies,
            title: 'Companion Species',
            company: 'Green Science Games',
            cols: 2,
        },
    ];

    return (
        <Stack id="ProjectsList" direction="column" spacing={4} sx={{ pb: 2 }}>
            <Stack direction="column" spacing={2}>
                <Stack direction="row">
                    <Typography variant="h3">
                        Projects
                    </Typography>
                </Stack>
                <Chip color="primary" size="small" sx={{ width: '10%', height: 8 }} />
            </Stack>
            <ImageList variant="masonry" cols={3} gap={8}>
            {
                projectList.map((item, index) => (
                    <ImageListItem key={`${item.img}-${index}`}>
                        <img
                            srcSet={item.img}
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            sx={{ pr: 1 }}
                            title={item.title}
                            subtitle={item.company}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                    onClick={() => onClick(item.title) }
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))
            }
            </ImageList>
        </Stack>
    );
}