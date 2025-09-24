import { Box, Chip, Container, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Stack, Typography } from "@mui/material";
import ProjectItem from "./ProjectItem";

import Flightcase from '../assets/projects/flightcase/logo2.png';
import Fisker from '../assets/projects/fisker/ocean_blue.webp';
import Arduino from '../assets/projects/arduino_can_bus/arduino-2.png';
import CSUSB from '../assets/projects/csusb.png';
import CompanionSpecies from '../assets/projects/companion_species/Green-Science-Games-Learning-games.webp';
import MEngine92 from '../assets/projects/mengine92/mengine92-1.png';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";
import FlightcaseProjectModal from "./Projects/FlightcaseProjectModal";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}


export default function Projects() {

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

    const [ activeModal, setActiveModal ] = useState('None');
 
    return (
        <Stack direction="column" spacing={4} sx={{ width: '100%', maxHeight: '75vh' }}>
            <Stack direction="column" spacing={2}>
                <Stack direction="row">
                    <Typography variant="h3">
                        Projects
                    </Typography>
                </Stack>
                <Chip color="primary" size="small" sx={{ width: '10%', height: 8 }} />
            </Stack>
            <ImageList sx={{ width: 500, height: '100%' }} variant="masonry" cols={2} gap={8}>
            {
                projectList.map((item) => (
                    <ImageListItem key={item.img}>
                    <img
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=248&fit=crop&auto=format`}
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
                                onClick={() => setActiveModal(item.title) }
                            >
                                <InfoIcon />
                            </IconButton>
                        }
                    />
                    </ImageListItem>
                ))
            }
            </ImageList>
            <FlightcaseProjectModal open={activeModal === 'Flightcase'} onClose={ () => setActiveModal('None') }/>
            {/* <Stack direction="column" spacing={2} sx={{ overflowY: 'scroll', p:1 }}>
                <Stack direction='row' spacing={2}>
                    <Box sx={{ width: '100%', padding: 0 }}>
                        <ProjectItem 
                            height={260}
                            imageSrc={Flightcase} 
                            title="Flightcase" 
                            description="Create a modular, efficient and performant next-gen HMIs with innovative features."
                        />
                    </Box>
                    <Box sx={{ width: '50%', p:0 }}>
                        <ProjectItem 
                            height={260}
                            imageSrc={Arduino} 
                            title="Arduino CAN" 
                            description="An all-electric SUV designed by Henrik Fisker to be dynamic, driver-centric, and sustainable."
                        />
                    </Box>
                </Stack>
                <Stack direction='row' spacing={2}>
                    <Box sx={{ width: '50%', p:0 }}>
                        <ProjectItem 
                            height={260}
                            imageSrc={MEngine92} 
                            title="MEngine92" 
                            description="An all-electric SUV designed by Henrik Fisker to be dynamic, driver-centric, and sustainable."
                        />
                    </Box>
                    <Box sx={{ width: '100%', padding: 0 }}>
                        <ProjectItem 
                            height={250}
                            imageSrc={Fisker} 
                            title="Fisker Ocean" 
                            description="An all-electric SUV designed by Henrik Fisker to be dynamic, driver-centric, and sustainable."
                        />
                    </Box>
                </Stack>
                <Stack direction='row' spacing={2}>
                    <ProjectItem 
                        imageSrc={CompanionSpecies} 
                        title="Companion Species" 
                        description="A mobile game that focuses on teaching children (age 4-12) about green sciences and alternative energy."
                    />
                    <ProjectItem 
                        imageSrc={CSUSB} 
                        title="Virtual Lab Template" 
                        description="A virtual lab template that is used for developers in the ATI VR Lab to create labs within a short period of time bases on the needs of professors."
                    />
                    <ProjectItem 
                        imageSrc={CSUSB} 
                        title="Project Ambrosia" 
                        description="A multiplayer, virtual classroom to introduce students to archaeology through the world of Ambrosia."
                    />
                </Stack>
            </Stack> */}
        </Stack>
    );
}