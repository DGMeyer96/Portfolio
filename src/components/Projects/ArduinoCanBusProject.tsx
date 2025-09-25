import { Typography, Grow, Chip, Stack, IconButton, ImageList, ImageListItem } from "@mui/material";
import { type Dispatch, type SetStateAction } from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Arduino1 from '../../assets/projects/arduino_can_bus/arduino-2.png';

export default function ArduinoCanBusProject({
    onClose
} : {
    onClose: Dispatch<SetStateAction<string>>
}) {

    const images = [ Arduino1, ];

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
                            Using a Arduino UNO v3 to read CAN Bus messages from a simulated ECU. The simulated ECU is developed using Vector CANoe and transmitted to the Arduino via a Vector VN1640A. For testing passing the CAN data onto a device, I connected the Arduino to a Raspberry Pi via USB and used USB Serial to communicate between the two devices.
                        </Typography>
                        <Typography variant="body1">
                            I used CAT6 Ethernet cables for my twisted pair. I cut off the RJ45 connectors from an old cable and removed the outer jacket. I then removed two of the twisted pair and crimped terminals onto each of them. One acts as my CAN Low and the other as CAN High.
                            <ul>
                                <li>Hardware: Arduino UNO v3, Seed Studio CAN-BUS Shield V2, Vector VN1640a.</li>
                                <li>Software: VSCode (w/ Platform IO), Vector CANoe 17.</li>
                                <li>Using Seeed Studio CAN Bus Shield v2 and their library for RX/TX of messages.</li>
                                <li>Using Arduino Cryptography Library by RWeather for Checksum generation.</li>
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