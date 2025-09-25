import { Typography, Grow, Chip, Stack, IconButton, ImageList, ImageListItem } from "@mui/material";
import { type Dispatch, type SetStateAction } from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Flightcase1 from '../../assets/projects/flightcase/analytics.png';
import Flightcase2 from '../../assets/projects/flightcase/architecture.png';
import Flightcase3 from '../../assets/projects/flightcase/digital_cockpit.png';
import Flightcase4 from '../../assets/projects/flightcase/e2e_toolchain.png';
import Flightcase5 from '../../assets/projects/flightcase/ecosystem.png';

export default function FlightcaseProject({
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
                            Flightcase
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
                            This project originally began as a personal project. I became fascinated with creating a custom Android Automotive OS (AAOS) Image with a simulated CANBUS. 
                            As I started development on the project a couple of friends of mine reached out and were interested in developing an app for it after I had showed it to them.
                            I had already begun work on a backend library taht could be used in conjuction with a frontend to hook into AAOS and the CAN-BUS. 
                        </Typography>
                        <Typography variant="body1">
                            To this day I am the software architect and primary backend engineer of this project. I architected the backend to be completely stateless and support
                            multi-threading by default. I created a series of safety checks to prevent module cross-dependencies (i.e. You can disable digital HVAC controls frontend, but
                            the User Profiles system will remain and allow save/restore of HVAC preferences). The frontend and backend are completely separated to prevent UI thread stalls
                            while the backend is still processing.
                        </Typography>
                        <Typography variant="body1">
                            The custom AAOS Image and APK have been deployed and tested on Raspberry Pi 4 (4GB) and 5 (8GB) models. The ECU and CAN-BUS are simulated using an Arduino and CANoe.
                        </Typography>
                        <Typography variant="body1">
                            The main goals of the project are to:
                            <ul>
                                <li>Create a next generation automotive HMI platform that reduces development time from years to months for a fully functional automotive HMI.</li>
                                <li>Create an architecture for the platform with an emphasis on componentization to reduce dependencies, increase modularity, and provide faster development time.</li>
                                <li>Have an integrated platform demo with a customized Android Automotive OS system image.</li>
                                <li>Be able to create and deploy system image builds for emulator, Raspberry Pi, and tablet development.</li>
                                <li>Be able to attach a simulated/real ECU and transmit/receive data via CAN-BUS.</li>
                            </ul>
                        </Typography>
                    </Stack>
                </Stack>
                {/* Images */}
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