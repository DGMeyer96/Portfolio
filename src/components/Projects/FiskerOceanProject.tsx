import { Button, Modal, Backdrop, Fade, Box, Typography, type ModalProps, styled, Grow, Chip, Stack, IconButton, List, ListItem, ListItemText, ImageList, ImageListItem, Container } from "@mui/material";
import { useState, type Dispatch, type SetStateAction } from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Fisker1 from '../../assets/projects/fisker/_Z3A8744.jpg';
import Fisker2 from '../..//assets/projects/fisker/032-2024-fisker-ocean-interior.avif';
import Fisker3 from '../..//assets/projects/fisker/210623_HM_085601.jpg';
import Fisker4 from '../..//assets/projects/fisker/220623_HM_172913.jpg';
import Fisker5 from '../..//assets/projects/fisker/20230505_Fisker_Center+_JesperPalermo_583.jpg';
import Fisker6 from '../..//assets/projects/fisker/ocean_blue.webp';
import Fisker7 from '../..//assets/projects/fisker/ocean_example_1.webp';
import Fisker8 from '../..//assets/projects/fisker/ocean_example_2.webp';
import Fisker9 from '../..//assets/projects/fisker/ocean_example_3.webp';

export default function FiskerOceanProject({
    onClose
} : {
    onClose: Dispatch<SetStateAction<string>>
}) {

    const images = [ Fisker1, Fisker2, Fisker3, Fisker4, Fisker5, Fisker6, Fisker7, Fisker8, Fisker9 ];

    return (
        <Grow in={true} easing={{ enter: 'cubic-bezier(0, 1.5, .8, 1)', exit: 'linear' }} mountOnEnter unmountOnExit>
            <Stack direction="column" spacing={2} sx={{ width: '100%', maxHeight: '75vh' }}>
                {/* Header */}
                <Stack direction="column" spacing={2}>
                    <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", }}>
                        <Typography variant="h3">
                            Fisker Ocean
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
                            Integrate Unity3D in a production vehicle.
                            <ul>
                                <li>Used for ADAS visualization in the Central Display.</li>
                                <li>Wrote a custom VHAL to Unity bridge that passed CAN through the Android layer to Unity.</li>
                            </ul>
                        </Typography>
                        <Typography variant="body1">
                            Improved system performance and led Infotainment performance related efforts.
                            <ul>
                                <li>Overhauled the software backend to improve CAN BUS read/write times from 300-500ms per CAN signal to 0.3-0.8ms per CAN signal.</li>
                                <li>Rebuilt the Infotainment software architecture to be multithreaded instead of single thread leading to 2-3x performance uplift.</li>
                                <li>Reduced garbage collection by 10x through reduction of logging, loose variables, and logic improvements.</li>
                            </ul>
                        </Typography>
                        <Typography variant="body1">
                            Used Vector CANoe to debug, record, and monitor various vehicle ECUs.
                        </Typography>
                        <Typography variant="body1">
                            Developed internal tools for software installation, testing, benchmarking, and development.
                            <ul>
                                <li>Performance logger and graph generator that were used to analyze performance deltas between releases.</li>
                                <li>Python converter and playback tool for .BLF and .ASC logs in Unity.</li>
                                <li>Shell and Batch installation scripts for installing engineering builds to target hardware and vehicles.</li>
                                <li>XCode application for Design team to display and capture images on the vehicle.</li>
                            </ul>
                        </Typography>
                        <Typography variant="body1">
                            Spearheaded effort to create an Android-based Infotainment platform to replace the existing one.  This would be used for the current Ocean program and all future vehicles while reducing the reliance on external SDKs. 
                        </Typography>
                    </Stack>
                </Stack>
                <ImageList sx={{ width: '100%', height: 450 }} cols={3} rowHeight={164}>
                    {
                        images.map((item, index) => (
                            <ImageListItem key={index}>
                                <img
                                    srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                    alt={item}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </Stack>
        </Grow>
    )
}