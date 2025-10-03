import type { SvgIconTypeMap } from "@mui/material";
import { Stack, Paper, Typography } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";
import { gray } from "../../theme/themePrimitives";

export default function WhatIDoItem({
    IconComponent,
    label,
    text,
} : {
    IconComponent: OverridableComponent<SvgIconTypeMap<{}, "svg">>,
    label: string, 
    text: string,
}) {

    return (
        <Paper elevation={5} sx={[
            { p:2, display: 'flex', justifyContent: 'center', alignItems: 'start' },
            (theme) => ({
                ...theme.applyStyles('dark', {
                    backgroundColor: gray[900],
                }),
            })
        ]}>
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