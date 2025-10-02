import { Stack, Typography, Chip } from "@mui/material";

import BuildIcon from '@mui/icons-material/Build';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import WhatIDoItemMobile from "./WhatIDoItemMobile";

export default function AboutMeMobile() {
    return (
        <Stack direction="column" spacing={4}>
            <Stack direction="column" spacing={2}>
                <Stack direction="row">
                    <Typography variant="h3">
                        A little bit about me...
                    </Typography>
                </Stack>
                <Chip color="primary" size="small" sx={{ width: '10%', height: 8 }} />
                <Typography variant="body1">
                    My name is Daniel Meyer and I am a Full Stack Software Engineer 
                    born and raised in Southern California.My career has led me to a 
                    variety of development roles such as Software Tester, Engineer, 
                    Architect, and Team Lead. I am also a enthusiast of all things 
                    combustion and electric. I enjoy being a home mechanic and it 
                    feeds my drive to understand the engineering behind all things 
                    whether it be hardware or software.
                </Typography>
            </Stack>
            <Stack direction="column" spacing={2}>
                <Stack direction="row">
                    <Typography variant="h3">
                        What I do
                    </Typography>
                </Stack>
                <Chip color="primary" size="small" sx={{ width: '10%', height: 8 }} />
                <Stack direction='row' spacing={2} sx={{ pb: 2 }}>
                    <Stack direction='column' spacing={2} sx={{ pb: 2 }}>
                        <WhatIDoItemMobile 
                            IconComponent={ElectricCarIcon} 
                            label="Embedded Systems" 
                            text="I have experience developing software for embedded systems where resources are precious and limited. These include for Automotive and Low Power (i.e. RPi/ESP32) applications." 
                            size="lg" 
                        />
                        <WhatIDoItemMobile 
                            IconComponent={AutoAwesomeMotionIcon} 
                            label="Threading" 
                            text="I specialize in improving software performance via asynchronous and multi-threaded systems design." 
                            size="md" 
                        />
                    </Stack>
                    <Stack direction='column' spacing={2} sx={{ pb: 2 }}>
                        <WhatIDoItemMobile 
                            IconComponent={BuildIcon} 
                            label="Development Tools" 
                            text="More and more features are being requested but the number of developers remains the same. We need to improve the performance of not only the application but those who create it as well." 
                            size="lg" 
                        />
                        <WhatIDoItemMobile 
                            IconComponent={QueryStatsIcon} 
                            label="Data Analysis" 
                            text="Data is more important than ever whether it be for measuring application health and performance or finding trends." 
                            size="md" 
                        />
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction="column" spacing={2}>
                <Stack direction="row">
                    <Typography variant="h3">
                        Skills
                    </Typography>
                </Stack>
                <Chip color="primary" size="small" sx={{ width: '10%', height: 8 }} />
                <Stack direction='row' spacing={3} sx={{ width: '100%', overflowX: 'scroll', pb: 2, px: 1 }}>
                </Stack>
            </Stack>
        </Stack>
    );
}