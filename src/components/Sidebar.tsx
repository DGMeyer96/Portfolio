import { styled } from '@mui/material/styles';
import MuiCard from '@mui/material/Card';
import { Avatar, Chip, Link, Paper, Stack, Typography } from '@mui/material';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NearMeIcon from '@mui/icons-material/NearMe';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconWith2Text from './IconWith2Text';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '350px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

export default function Sidebar() {

    return (
        <Paper
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 3,
                // width: '100%',
                height: '100%',
                p: 3,
                boxShadow: 3,
                // bgcolor: 'primary.dark',
                // '&:hover': {
                //     bgcolor: 'primary.dark',
                // },
            }}
        >
            <Stack direction='column' spacing={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Avatar alt="Daniel Meyer" src="/static/images/daniel_headshot-3.jpg" variant='rounded' sx={{ minWidth: 256, minHeight: 256 }} />
                <Stack direction='column' spacing={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                    >
                        Daniel Meyer
                    </Typography>         
                    <Chip label="Software Engineer" variant="outlined" color='secondary'/>
                </Stack>
                <hr style={{ width: '100%' }}></hr>
                <IconWith2Text IconComponent={MailOutlineIcon} label='Email' text='dmlegoman96@gmail.com' />
                <IconWith2Text IconComponent={PhoneIcon} label='Phone' text='+1(951)537-8567' />
                <IconWith2Text IconComponent={NearMeIcon} label='Location' text='Chino, CA USA' />
                <hr style={{ width: '100%' }}></hr>
                <Stack direction='row' spacing={3}>
                    <Link href="https://github.com/DGMeyer96" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon sx={{ width: 32, height: 32 }} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/daniel-meyer-dev/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon sx={{ width: 32, height: 32 }} />
                    </Link>
                </Stack>
            </Stack>

        </Paper>
    )
}