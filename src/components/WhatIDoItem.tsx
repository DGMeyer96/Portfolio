import type { SvgIconTypeMap } from "@mui/material";
import { Stack, Paper, Typography } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

export default function WhatIDoItem({
    IconComponent,
    label,
    text,
    size,
} : {
    IconComponent: OverridableComponent<SvgIconTypeMap<{}, "svg">>,
    label: string, 
    text: string,
    size: 'lg' | 'md' | 'sm',
}) {

    const getHeight = (size: string) => {
        if(size === 'lg') {
            return 200;
        } else if (size === 'md') {
            return 150;
        } else {
            return 100;
        }
    }

    return (
        <Paper elevation={5} sx={{ p:2, display: 'flex', justifyContent: 'center', alignItems: 'start', height: getHeight(size) }}>
            <Stack direction='row' spacing={2} >
                <IconComponent color='primary' sx={{ width: 48, height: 48 }} />
                <Stack direction='column' spacing={2} sx={{ width: '100%', pb: 2 }}>
                    <Typography variant="h5">
                        {label}
                    </Typography>
                    <Typography variant="body1">
                        {text}
                    </Typography>
                </Stack>
            </Stack>
        </Paper>
    );
}