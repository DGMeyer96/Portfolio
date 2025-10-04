import { Stack, Typography, Chip, Card, Avatar, Link, Paper } from "@mui/material";

import Arduino from "../../assets/arduino.svg";
import AndroidStudio from "../../assets/android-studio.svg";
import Cpp from "../../assets/cpp.svg";
import CSharp from "../../assets/csharp.svg";
import OpenGL from "../../assets/opengl.svg";
import Python from "../../assets/python.svg";
import React from "../../assets/react.svg";
import Unity from "../../assets/unity.svg";
import Unreal from "../../assets/unreal.svg";

import Headshot from '../../assets/daniel_headshot-3.jpg';

import BuildIcon from '@mui/icons-material/Build';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import WhatIDoItemMobile from "./WhatIDoItemMobile";

export default function AboutMeMobile() {

    const skillsSVGs = [
        { url: "https://unity.com/", image: Unity },
        { url: "https://developer.android.com/", image: AndroidStudio },
        { url: "https://www.python.org/", image: Python },
        { url: "https://react.dev/", image: React },
        { url: "https://www.arduino.cc/", image: Arduino },
        { url: "https://www.unrealengine.com/", image: Unreal },
        { url: "", image: Cpp },
        { url: "", image: CSharp },
        { url: "https://www.opengl.org/", image: OpenGL },
    ];

    return (
        <Stack id='AboutMeMobile' direction="column" spacing={2} sx={{ width: '100%', height: '100%' }}>
            <Card sx={{ height: 'fit-content' }}>
                <Stack direction="row" sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', pb:1 }}>
                    <Avatar alt="Daniel Meyer" src={Headshot} variant='rounded' sx={{ width: 56, height: 56 }} />
                    <Stack direction='column' spacing={1} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                        <Typography
                            component="h1"
                            variant="h4"
                            sx={{ width: '100%' }}
                        >
                            Daniel Meyer
                        </Typography>         
                        <Chip label="Software Engineer" variant="outlined" color='secondary'/>
                    </Stack>
                </Stack>
            </Card>
            <Card sx={{ height: '100%', overflowY: 'scroll', overflowX: 'hidden' }}>
                <Stack direction="column" spacing={2}>
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
                        <Stack direction='column' spacing={2} sx={{ pb: 2 }}>
                            <WhatIDoItemMobile 
                                IconComponent={ElectricCarIcon} 
                                label="Embedded Systems" 
                                text="I have experience developing software for embedded systems where resources are precious and limited. These include for Automotive and Low Power (i.e. RPi/ESP32) applications." 
                                size="auto" 
                            />
                            <WhatIDoItemMobile 
                                IconComponent={AutoAwesomeMotionIcon} 
                                label="Threading" 
                                text="I specialize in improving software performance via asynchronous and multi-threaded systems design." 
                                size="auto" 
                            />
                            <WhatIDoItemMobile 
                                IconComponent={BuildIcon} 
                                label="Development Tools" 
                                text="More and more features are being requested but the number of developers remains the same. We need to improve the performance of not only the application but those who create it as well." 
                                size="auto" 
                            />
                            <WhatIDoItemMobile 
                                IconComponent={QueryStatsIcon} 
                                label="Data Analysis" 
                                text="Data is more important than ever whether it be for measuring application health and performance or finding trends." 
                                size="auto" 
                            />
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
                        {
                            skillsSVGs.map((skill, index) => (
                                <Link 
                                    key={index} 
                                    href={skill.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                >
                                    <Paper elevation={5} sx={{ p:2, display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
                                        <img src={skill.image} style={{ width: 48, height: 48 }}/> 
                                    </Paper>
                                </Link>
                            ))
                        }
                        </Stack>
                    </Stack>
                </Stack>
            </Card>
        </Stack>
    );
}