import { Tab, Tabs } from "@mui/material";
import { type Dispatch } from "react";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';
import WorkIcon from '@mui/icons-material/Work';
import InventoryIcon from '@mui/icons-material/Inventory';

export default function Header({ 
    activeContent, 
    setActiveContent 
} : { 
    activeContent: string, 
    setActiveContent: Dispatch<React.SetStateAction<string>>
}) {

    const handleChange = (_: React.SyntheticEvent, newValue: string) => {
        setActiveContent(newValue);
    };

    return (
        <Tabs value={activeContent} onChange={handleChange} aria-label="header-navigation-tabs">
            <Tab icon={<AccountCircleIcon />} label="About" value="about"/>
            <Tab icon={<ArticleIcon />} label="Resume" value="resume"/>
            <Tab icon={<WorkIcon />} label="Experence" value="experience"/>
            <Tab icon={<InventoryIcon />} label="Projects" value="projects" />
        </Tabs>
    );
}