import { Chip, Stack, Typography } from "@mui/material";

export default function WorkHistoryMobile({
    timeWorked,
    location,
    position,
    company,
    descriptionItems,
    skills,
} : {
    timeWorked: string,
    location: string,
    position: string,
    company: string,
    descriptionItems: string[],
    skills: string[],
}) {

    return (
        <Typography variant="body1">
            <Stack direction="column" spacing={0}>
                <Typography variant="h5">
                    {position}
                </Typography>
                <Typography variant="h6">
                    @ {company}
                </Typography>
                <Stack direction="column" spacing={0} sx={{ minWidth: 180 }}>
                    <Typography variant="subtitle2">
                        {timeWorked}
                    </Typography>
                    <Typography variant="subtitle2">
                        {location}
                    </Typography>
                </Stack>
                <ul style={{ paddingLeft: 16 }}>
                {
                    descriptionItems.map((item, index) => (
                        <li key={`${item}-${index}`}>{item}</li>
                    ))
                }
                </ul>
                <Stack direction='row' spacing={1} sx={{ maxWidth: "100%", display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'left', alignItems: 'start' }}>
                {
                    skills.map((skill, index) => (
                        <Chip key={`${skill}-${index}`} label={skill} variant="outlined" color="secondary"/>
                    ))
                }
                </Stack>
            </Stack>
        </Typography>
    )
}