import { useState } from "react";
import { Typography } from "@mui/material";
import ProjectsList from "./ProjectsList";
import ProjectItem from "./ProjectItem";

// Flightcase Images
import Flightcase1 from '../../assets/projects/flightcase/analytics.png';
import Flightcase2 from '../../assets/projects/flightcase/architecture.png';
import Flightcase3 from '../../assets/projects/flightcase/digital_cockpit.png';
import Flightcase4 from '../../assets/projects/flightcase/e2e_toolchain.png';
import Flightcase5 from '../../assets/projects/flightcase/ecosystem.png';
// Arduino Images
import Arduino1 from '../../assets/projects/arduino_can_bus/arduino-can-bus-1.jpg';
import Arduino2 from '../../assets/projects/arduino_can_bus/arduino-can-bus-3.jpg';
import Arduino3 from '../../assets/projects/arduino_can_bus/arduino-can-bus-4.jpg';
// MEngine Images
import MEngine1 from '../../assets/projects/mengine92/mengine92-1.png';
import MEngine2 from '../../assets/projects/mengine92/mengine92-2.png';
import MEngine3 from '../../assets/projects/mengine92/mengine92-3.png';
// Fisker Images
import Fisker1 from '../../assets/projects/fisker/_Z3A8744.jpg';
import Fisker2 from '../..//assets/projects/fisker/032-2024-fisker-ocean-interior.avif';
import Fisker3 from '../..//assets/projects/fisker/210623_HM_085601.jpg';
import Fisker4 from '../..//assets/projects/fisker/220623_HM_172913.jpg';
import Fisker5 from '../..//assets/projects/fisker/20230505_Fisker_Center+_JesperPalermo_583.jpg';
import Fisker6 from '../..//assets/projects/fisker/ocean_blue.webp';
import Fisker7 from '../..//assets/projects/fisker/ocean_example_1.webp';
import Fisker8 from '../..//assets/projects/fisker/ocean_example_2.webp';
import Fisker9 from '../..//assets/projects/fisker/ocean_example_3.webp';
// Companion Species Images
import CompanionSpecies1 from '../../assets/projects/companion_species/Green-Science-Games-Alter-Learning.webp';
import CompanionSpecies2 from '../../assets/projects/companion_species/Green-Science-Games-Android.webp';
import CompanionSpecies3 from '../../assets/projects/companion_species/Green-Science-Games-Educational-games.webp';
import CompanionSpecies4 from '../../assets/projects/companion_species/Green-Science-Games-Learning-games.webp';
import CompanionSpecies5 from '../../assets/projects/companion_species/Green-Science-Games-Mobile.webp';
// Virtual Lab Images
import VirtualLab1 from '../../assets/projects/virtual_lab/virtual_lab_1.jpg';
import VirtualLab2 from '../../assets/projects/virtual_lab/virtual_lab_2.jpg';
import VirtualLab3 from '../../assets/projects/virtual_lab/virtual_lab_3.jpg';
// Ambrosia Images
import Ambrosia1 from '../../assets/projects/ambrosia/Ambrosia_3.png';
import Ambrosia2 from '../../assets/projects/ambrosia/Ambrosia_4.png';
import Ambrosia3 from '../../assets/projects/ambrosia/Ambrosia_5.png';

export default function Projects() {

    const [ activeModal, setActiveModal ] = useState('None');

    const flightcaseImages = [ Flightcase1, Flightcase2, Flightcase3, Flightcase4, Flightcase5 ];
    const arduinoCANImages = [ Arduino1, Arduino2, Arduino3 ];
    const mEngine92Images = [ MEngine1, MEngine2, MEngine3 ];
    const fiskerOceanImages = [ Fisker1, Fisker2, Fisker3, Fisker4, Fisker5, Fisker6, Fisker7, Fisker8, Fisker9 ];
    const companionSpeciesImages = [ CompanionSpecies1, CompanionSpecies2, CompanionSpecies3, CompanionSpecies4, CompanionSpecies5 ];
    const virtualLabImages = [ VirtualLab1, VirtualLab2, VirtualLab3 ];
    const ambrosiaImages = [ Ambrosia1, Ambrosia2, Ambrosia3 ];

    function body() {
        switch(activeModal) {
            case 'None':
                return <ProjectsList onClick={setActiveModal}/>;
            case 'Flightcase':
                return (
                    <ProjectItem projectTitle="Flightcase" images={flightcaseImages} onClose={setActiveModal}>
                        <Typography variant="body1">
                            This project originally began as a personal project. I became fascinated with creating a custom Android Automotive OS (AAOS) Image with a simulated CANBUS. 
                            As I started development on the project a couple of friends of mine reached out and were interested in developing an app for it after I had showed it to them.
                            I had already begun work on a backend library that could be used in conjunction with a frontend to hook into AAOS and the CAN-BUS. 
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
                    </ProjectItem>
                );
            case 'Arduino CAN BUS':
                return (
                    <ProjectItem projectTitle="Arduino CAN BUS" images={arduinoCANImages} onClose={setActiveModal}>
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
                    </ProjectItem>
                );
            case 'MEngine92':
                return (
                    <ProjectItem projectTitle="MEngine92" images={mEngine92Images} onClose={setActiveModal}>
                        <Typography variant="body1">
                            This project came about after reading the <strong>Game Engine Black Book</strong> series by <strong>Fabian Sanglard</strong>. After reading the Wolfesnstein 3D and DOOM books I thought it would be a fun experiment to create my own Raycast Renderer.
                        </Typography>
                        <Typography variant="body1">
                            This is part one of a two part project I want to complete. The idea is to replicate the capabilities of the Wolfenstein 3D game engine, which was released in May, 1992 (hence the name).
                        </Typography>
                        <Typography variant="body1">
                            My intention is to follow this up with a MEngine93 which will simulate the capabilties of the DOOM engine.
                        </Typography>
                        <Typography variant="body1">
                            Development:
                            <ul>
                                <li>Written in C.</li>
                                <li>Built on the Raylib 5 framework.</li>
                                <li>Intention is to rewrite eventually in Rust (excuse to make something using Rust).</li>
                            </ul>
                            Feature Roadmap:
                            <ul>
                                <li>Level Creator</li>
                                <li>Sprite Editor</li>
                                <li>Example Game</li>
                            </ul>
                        </Typography>
                    </ProjectItem>
                );
            case 'Fisker':
                return (
                    <ProjectItem projectTitle="Fisker Ocean" images={fiskerOceanImages} onClose={setActiveModal}>
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
                    </ProjectItem>
                );
            case 'Companion Species':
                return (
                    <ProjectItem projectTitle="Companion Species" images={companionSpeciesImages} onClose={setActiveModal}>
                        <Typography variant="body1">
                            Develop a mobile game that focuses on teaching children (age 4-12) about green sciences and alternative energy. The game will be packaged with a new online learning platform called Alter Learning. It features a tower defense game mode, an open sandbox mode for players to create custom gardens, and an Augmented Reality sandbox game mode.
                            <ul>
                                <li>Developed in Unity and managed through Git.</li>
                                <li>Created the foundation of the tower defense game mode and worked with the artist directly to create and integrate art assets.</li>
                                <li>Developed back-end loading and AR integration.</li>
                                <li>Created the store and inventory systems with ability to purchase items from a store, place items and return them to the player inventory.</li>
                                <li>Integrated real world AQI and Weather data that affects in-game weather and environment.</li>
                                <li>Optimized the game for mobile platforms, leading to a 75-80% increase in performance.</li>
                            </ul>
                        </Typography>
                    </ProjectItem>
                );
            case 'Virtual Lab Template':
                return (
                    <ProjectItem projectTitle="ATI Virtual Lab Template" images={virtualLabImages} onClose={setActiveModal}>
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
                    </ProjectItem>
                );
            case 'Project Ambrosia':
                return (
                    <ProjectItem projectTitle="ATI Project Ambrosia" images={ambrosiaImages} onClose={setActiveModal}>
                        <Typography variant="body1">
                            Create a virtual reality experience in Unreal Engine that will introduce students to archeology through Virtual Reality and Multiplayer by entering the world of Ambrosia to find possible dig sites and identify artifacts.
                            <ul>
                                <li>Created custom Virtual Reality interaction and movement system that features slow walking instead of teleporting due to the need to perform transactional surveys.</li>
                                <li>Multiplayer was built around up to 4 players connecting to a dedicated server with proper object, character, and movement replication.</li>
                                <li>VR and Multiplayer functionality were created in C++ with some UI elements in Blueprint.</li>
                                <li>Imported 3D scanned models of real artifacts for students to find.</li>
                                <li>Utilizes Steamworks SDK integration for multiplayer integration and matchmaking.</li>
                            </ul>
                        </Typography>
                    </ProjectItem>
                );
            default:
                return <ProjectsList onClick={setActiveModal}/>;
        }
    }
 
    return (
        body()
    );
}