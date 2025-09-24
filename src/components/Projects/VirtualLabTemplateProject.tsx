import { Typography, Grow, Chip, Stack, IconButton, ImageList, ImageListItem } from "@mui/material";
import { type Dispatch, type SetStateAction } from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import VirtualLab1 from '../../assets/projects/virtual_lab/virtual_lab_1.jpg';
import VirtualLab2 from '../../assets/projects/virtual_lab/virtual_lab_2.jpg';
import VirtualLab3 from '../../assets/projects/virtual_lab/virtual_lab_3.jpg';


export default function VirtualLabTemplateProject({
    onClose
} : {
    onClose: Dispatch<SetStateAction<string>>
}) {

    const images = [ VirtualLab1, VirtualLab2, VirtualLab3 ];

    return (
        <Grow in={true} easing={{ enter: 'cubic-bezier(0, 1.5, .8, 1)', exit: 'linear' }} mountOnEnter unmountOnExit>
            <Stack direction="column" spacing={2} sx={{ width: '100%', maxHeight: '75vh' }}>
                {/* Header */}
                <Stack direction="column" spacing={2}>
                    <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", }}>
                        <Typography variant="h3">
                            ATI Virtual Lab Template
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
                            Create a virtual reality lab template that can be used to develop virtual labs for staff. The template serves as a way for future developers for the ATI VR Lab to be able to make Virtual Labs within a short time &#40; &lt;2 weeks &#41; frame, on demand for professors of different departments. The template had to be highly flexible and modular to account for the different departments at CSUSB.
                            <ul>
                                <li>Created in Unity using the Unity XR system and is designed for multiple VR devices.</li>
                                <li>Supports standing and room scale VR depending on the need.</li>
                                <li>Created a new interaction system and control handler that allows for both hands to be able to teleport and interact with world objects.</li>
                                <li>Created an Interactive Tablet system that gives students lab information, texts, and images in-game. It also supported multiple choice questions for testing student knowledge that is then saved and exported via JSON for grading.</li>
                                <li>Integrated fluid simulation to allow for the chemistry department to experiment with chemical mixing.</li>
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