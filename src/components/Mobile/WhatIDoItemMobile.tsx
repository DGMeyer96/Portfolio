import type { SvgIconTypeMap } from "@mui/material";
import { Stack, Paper, Typography } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";
import { gray } from "../../theme/themePrimitives";

export default function WhatIDoItemMobile({
    IconComponent,
    label,
    text,
    size,
} : {
    IconComponent: OverridableComponent<SvgIconTypeMap<{}, "svg">>,
    label: string, 
    text: string,
    size: 'lg' | 'md' | 'sm' | 'auto',
}) {

    const getHeight = (size: string) => {
        if(size === 'lg') {
            return 200;
        } else if (size === 'md') {
            return 150;
        } else if (size === 'sm') {
            return 100;
        } else {
            return "fit-content"
        }
    }

    return (
        <Paper elevation={5} sx={[
            { p:2, display: 'flex', justifyContent: 'center', alignItems: 'start', height: getHeight(size) },
            (theme) => ({
                ...theme.applyStyles('dark', {
                    backgroundColor: gray[900],
                }),
            })
        ]}>
            <Stack direction='row' spacing={2} >
                <IconComponent color='primary' sx={{ width: 24, height: 24 }} />
                <Stack direction='column' spacing={2} sx={{ pb: 2 }}>
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