import { Card, Paper, Tab, Tabs } from "@mui/material";
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
        <Card
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 3,
            width: '100%',
            height: '100%',
            p: 1,
            boxShadow: 3,
            border: 'none',
            // bgcolor: 'primary.dark',
            // '&:hover': {
            //     bgcolor: 'primary.dark',
            // },
        }}
    >
            <Tabs value={activeContent} onChange={handleChange} aria-label="header-navigation-tabs">
                <Tab icon={<AccountCircleIcon />} label="About" value="about" sx={{ width: 64 }}/>
                <Tab icon={<ArticleIcon />} label="Resume" value="resume" sx={{ width: 64 }}/>
                <Tab icon={<InventoryIcon />} label="Projects" value="projects" sx={{ width: 64 }}/>
            </Tabs>
        </Card>
    );
}