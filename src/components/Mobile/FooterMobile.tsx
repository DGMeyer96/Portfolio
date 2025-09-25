import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import type { Dispatch } from "react";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';
import InventoryIcon from '@mui/icons-material/Inventory';

export default function FooterMobile({ 
    activeContent, 
    setActiveContent 
} : { 
    activeContent: string, 
    setActiveContent: Dispatch<React.SetStateAction<string>>
}) {
    return (
        <Box sx={{ width: '100vw' }}>
            <BottomNavigation
                showLabels
                value={activeContent}
                onChange={(_, newValue) => { setActiveContent(newValue) }}
            >
                <BottomNavigationAction label="About" value="about" icon={<AccountCircleIcon />} />
                <BottomNavigationAction label="Resume" value="resume" icon={<ArticleIcon />} />
                <BottomNavigationAction label="Projects" value="projects" icon={<InventoryIcon />} />
            </BottomNavigation>
        </Box>
    );
}