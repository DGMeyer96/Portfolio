
import { useState } from "react";
import FlightcaseProject from "../Projects/FlightcaseProject";
import ProjectsList from "../Projects/ProjectsList";
import FiskerOceanProject from "../Projects/FiskerOceanProject";
import ArduinoCanBusProject from "../Projects/ArduinoCanBusProject";
import CompanionSpeciesProject from "../Projects/CompanionSpeciesProject";
import VirtualLabTemplateProject from "../Projects/VirtualLabTemplateProject";
import AmbrosiaProject from "../Projects/AmbrosiaProject";
import MEngine92Project from "../Projects/MEngine92Project";

export default function Projects() {

    const [ activeModal, setActiveModal ] = useState('None');

    function body() {
        switch(activeModal) {
            case 'None':
                return <ProjectsList onClick={setActiveModal}/>;
            case 'Flightcase':
                return <FlightcaseProject onClose={setActiveModal}/>;
            case 'Arduino CAN BUS':
                return <ArduinoCanBusProject onClose={setActiveModal}/>;
            case 'MEngine92':
                return <MEngine92Project onClose={setActiveModal}/>;
            case 'Fisker':
                return <FiskerOceanProject onClose={setActiveModal}/>;
            case 'Companion Species':
                return <CompanionSpeciesProject onClose={setActiveModal}/>;
            case 'Virtual Lab Template':
                return <VirtualLabTemplateProject onClose={setActiveModal}/>
            case 'Project Ambrosia':
                return <AmbrosiaProject onClose={setActiveModal}/>
            default:
                return <ProjectsList onClick={setActiveModal}/>;
        }
    }
 
    return (
        body()
    );
}