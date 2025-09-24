import type { SvgIconTypeMap } from "@mui/material";
import { Stack, Paper, Typography } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

export default function IconWith2Text({
    IconComponent,
    label,
    text,
} : {
    IconComponent: OverridableComponent<SvgIconTypeMap<{}, "svg">>,
    label: string, 
    text: string,
}) {
    return (
        <Stack direction='row' spacing={3} sx={{ width: '100%' }}>
            <Paper elevation={5} sx={{ p:1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <IconComponent color='primary' sx={{ width: 32, height: 32 }} />
            </Paper>
            <Stack direction='column'>
                <Typography variant="subtitle1">
                    {label}
                </Typography>
                <Typography variant="subtitle2">
                    {text}
                </Typography>
            </Stack>
        </Stack>
    )
}