import { Card, Chip, Container, Stack, Typography } from "@mui/material";
import WorkHistoryMobile from "./WorkHistoryMobile";

import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolIcon from '@mui/icons-material/School';

export default function ResumeMobile() {
    return (
        <Stack id='ResumeMobile' direction="column" spacing={2} sx={{ width: '100%', height: '100%' }}>
            {/* Work History */}
            <Card id="WorkHistoryCard">
                <Stack direction='column' spacing={2} sx={{ p: 1, height: '100%' }}>
                    <Stack direction='row' spacing={2} >
                        <WorkOutlineIcon color='primary' sx={{ width: 48, height: 48 }} />
                        <Typography variant="h3" sx={{ pt: 1 }}>
                            Work History
                        </Typography>
                    </Stack>
                    <Chip color="primary" size="small" sx={{ width: '10%', height: 8 }} />
                    <Container sx={{ width: '100%', maxHeight: '40vh', overflowY: 'scroll', pl:0 }}>
                        <WorkHistoryMobile 
                            timeWorked={"Feb. 2025 - Present"}
                            location={"Long Beach, CA"} 
                            position={"Software Development Engineer (Powertrain)"} 
                            company={"Mercedes-Benz Research & Development North America"} 
                            descriptionItems={[
                                "Create web tools for Powertrain, Durability, and Emission development teams using React JS for the frontend and Django for the backend.",
                                "Create and modify MATLAB scripts to make them compatible with MATLAB Engine for Python and multi-threading.",
                                "Create a native desktop application for the Driveability team using ElectronJS + React Typescript + Flask.",
                                "Rewrite existing Python tools to support multi-threading/processing."
                            ]} 
                            skills={[
                                "MATLAB",
                                "Django",
                                "React (+Native)",
                                "Python",
                                "Postgres"
                            ]}                
                        />
                        <WorkHistoryMobile 
                            timeWorked={"Sep. 2021 - Jul. 2024"}
                            location={"Long Palma, CA"} 
                            position={"Software Engineer (ADAS & HMI)"} 
                            company={"Fisker Inc."} 
                            descriptionItems={[
                                "Develop internal tools for the engineering, design, and validation teams to use for development and testing.",
                                "Integrated Unity into the Fisker Ocean Infotainment for ADAS visualization.",
                                "Led performance logging, analysis, and improvement efforts for Infotainment.",
                                "Overhauled CAN-bus backend for the HMI platform to support multithreading using a data-first design approach.",
                                "Spearheaded the architecture and development of the company’s next generation Infotainment platform to replace the existing one on customer vehicles as well as be used on all future vehicles."
                            ]} 
                            skills={[
                                "Android Automotive",
                                "Kotlin",
                                "Python",
                                "Swift",
                                "Unity 3D",
                                "C#",
                            ]}                
                        />
                        <WorkHistoryMobile 
                            timeWorked={"Jun. 2021 - Sep. 2021"}
                            location={"Cary, NC"} 
                            position={"Software Tester (Unreal Engine Core)"} 
                            company={"Epic Games"} 
                            descriptionItems={[
                                "Executed test cases and wrote reports for C++ backend health.",
                                "Executed test cases and wrote reports for builds for Windows, Linux, Xbox, Switch, and Playstation platforms.",
                                "Collaborated with feature owners to resolve bugs in Unreal Engine 4 and 5.",
                                "Verified and ensured proprietary files were not present in releases.",
                            ]} 
                            skills={[
                                "C++",
                                "Unreal Engine 4/5",
                                "TestRail",
                                "Perforce",
                                "RenderDoc",
                            ]}                
                        />
                        <WorkHistoryMobile 
                            timeWorked={"Jun. 2020 - Jun. 2021"}
                            location={"Davis, CA"} 
                            position={"Game Developer"} 
                            company={"Green Science Games"} 
                            descriptionItems={[
                                "Lead development on the educational mobile game, Companion Species.",
                                "Programmed in Unity and held weekly Agile meetings to update team goals and check on team member progress.",
                                "Worked directly with the game’s director to ensure their vision for the game was made reality.",
                                "Designed the core gameplay systems and backend for the Asteroid Garden and Aphid Defense game modes.",
                            ]} 
                            skills={[
                                "C#",
                                "Unity 3D",
                                "Blender",
                                "Adobe Photoshop",
                            ]}                
                        />
                        <WorkHistoryMobile 
                            timeWorked={"Aug. 2019 - Aug. 2020"}
                            location={"San Bernardino, CA"} 
                            position={"Virtual Reality Developer"} 
                            company={"California State University, San Bernardino"} 
                            descriptionItems={[
                                "Developed 2 projects for the Virtual Reality lab: Ambrosia and the Virtual Lab template.",
                                "Ensured the Ambrosia project met the needs of the Archaeology department and provided a comfortable experience for users who were new to Virtual Reality.",
                                "Worked closely with professors and field experts to ensure accuracy and educational value.",
                                "Created a pipeline for multiplayer Virtual Reality experiences in Unreal utilizing a central server with multiple clients.",
                            ]} 
                            skills={[
                                "C++",
                                "Unreal Engine 4",
                                "Blender",
                                "Networking",
                                "RenderDoc"
                            ]}                
                        />
                    </Container>
                </Stack>
            </Card>
            {/* Education */}
            <Card id="EducationCard">
                <Stack direction='column' spacing={2} sx={{ p: 1, height: '100%' }}>
                    <Stack direction='row' spacing={2} >
                        <SchoolIcon color='primary' sx={{ width: 48, height: 48 }} />
                        <Typography variant="h3" sx={{ pt: 1 }}>
                            Education
                        </Typography>
                    </Stack>
                    <Chip color="primary" size="small" sx={{ width: '10%', height: 8 }} />
                    <Container sx={{ width: '100%', maxHeight: '20vh', overflowY: 'scroll', pl:0 }}>
                        {/* <hr></hr> */}
                        <Typography variant="h4">
                            Bachelor's in Computer Systems & Information - Game Development
                        </Typography>
                        <Typography variant="h5">
                            + Minor in Mathematics
                        </Typography>
                        <Typography variant="subtitle2">
                            California State University, San Bernardino
                        </Typography>
                        <hr></hr>
                        <Typography variant="h4">
                            Bachelor's in Computer Systems & Information - Graphics Programming
                        </Typography>
                        <Typography variant="subtitle2">
                            California State University, San Bernardino
                        </Typography>
                    </Container>
                </Stack>
            </Card>
        </Stack>
    );
}