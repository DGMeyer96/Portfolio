import { Card, Chip, ImageList, ImageListItem, ImageListItemBar, Stack, Typography } from "@mui/material";

import Flightcase from '../../assets/projects/flightcase/logo2.png';
import Fisker from '../../assets/projects/fisker/ocean_blue.webp';
import Arduino from '../../assets/projects/arduino_can_bus/arduino.png';
import CSUSB from '../../assets/projects/csusb-ati-logo.png';
import CompanionSpecies from '../../assets/projects/companion_species/Green-Science-Games-Learning-games.webp';
import MEngine92 from '../../assets/projects/mengine92/mengine92-1.png';

export default function ProjectsListMobile({
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
        <Card id="ProjectsListMobile">
            <Stack direction="column" spacing={4}>
                <Stack direction="column" spacing={1}>
                    <Stack direction="row">
                        <Typography variant="h3">
                            Projects
                        </Typography>
                    </Stack>
                    <Chip color="primary" size="small" sx={{ width: 40, height: 8 }} />
                </Stack>
                <ImageList variant="masonry" cols={2} gap={8}>
                {
                    projectList.map((item, index) => (
                        <ImageListItem key={`${item.img}-${index}`} onClick={() => onClick(item.title)}>
                            <img
                                srcSet={item.img}
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                sx={{ pr: 1 }}
                                title={
                                    <Typography sx={{ fontWeight: 400, textAlign: 'center' }}>
                                        {item.title}
                                    </Typography>
                                }
                                subtitle={
                                    <Typography  sx={{ fontWeight: 200, textAlign: 'center' }}>
                                        {item.company}
                                    </Typography>
                                }
                            />
                        </ImageListItem>
                    ))
                }
                </ImageList>
            </Stack>
        </Card>
    );
}