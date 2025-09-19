import { useState } from 'react'
import './App.css'
import { Card, CssBaseline, Stack, styled } from '@mui/material'
import AppTheme from './theme/AppTheme'
import ColorModeSelect from './theme/ColorModeSelect'
import Sidebar from './components/Sidebar'
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/200.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/600.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/800.css';
import '@fontsource/roboto/900.css';
import Header from './components/Header'
import Content from './components/Content'

function App(props: { disableCustomTheme?: boolean }) {
    const [ activeContent, setActiveContent ] = useState('about');
    
    const StyledBox = styled('div')(({ theme }) => ({
        alignSelf: 'center',
        width: '100%',
        // height: '100%',
        // marginTop: theme.spacing(8),
        borderRadius: (theme.vars || theme).shape.borderRadius,
        outline: '6px solid',
        outlineColor: '#bfc8d933',
        border: '1px solid',
        borderColor: (theme.vars || theme).palette.grey[200],
        boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
    //   backgroundImage: `url(${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/screenshots/material-ui/getting-started/templates/dashboard.jpg)`,
        backgroundSize: 'cover',
        [theme.breakpoints.up('sm')]: {
        // marginTop: theme.spacing(10),
        // height: 700,
        },
        ...theme.applyStyles('dark', {
        boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
        // backgroundImage: `url(${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/screenshots/material-ui/getting-started/templates/dashboard-dark.jpg)`,
        outlineColor: 'hsla(220, 20%, 42%, 0.1)',
        borderColor: (theme.vars || theme).palette.grey[700],
        }),
    }));

    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
            <Stack
                direction="column"
                component="main"
                sx={[
                {
                    justifyContent: 'center',
                    height: 'calc((var(--template-frame-height, 0)) * 100%)',
                    // marginTop: 'max(var(--template-frame-height, 0px), 0px)',
                    minHeight: '100%',
                    // maxWidth: '1100px',
                },
                (theme) => ({
                    '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    zIndex: -1,
                    inset: 0,
                    backgroundImage:
                        'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
                    backgroundRepeat: 'no-repeat',
                    ...theme.applyStyles('dark', {
                        backgroundImage:
                        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
                    }),
                    },
                }),
                ]}
            >
                <StyledBox>
                <Stack
                    direction={{ xs: 'column-reverse', md: 'row' }}
                    sx={{
                        justifyContent: 'center',
                        gap: { xs: 3, sm: 6 },
                        p: 2,
                        mx: 'auto',
                    }}
                >
                    <Sidebar/>
                    <Card
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 3,
                        width: '100%',
                        height: '100%',
                        p: 3,
                        boxShadow: 3,
                        border: 'none',
                        // bgcolor: 'primary.dark',
                        // '&:hover': {
                        //     bgcolor: 'primary.dark',
                        // },
                    }}
                    >
                    <Stack 
                        direction="column" 
                        spacing={1} 
                        sx={{ 
                            width: '100%', 
                            height: '100%' ,
                            display: 'flex',
                            justifyContent: 'right',
                            alignItems: 'center',
                        }}
                    >
                        <Header activeContent={activeContent} setActiveContent={setActiveContent} />
                        <Content activeContent={activeContent} />
                    </Stack>
                    </Card>
                </Stack>
                </StyledBox>
            </Stack>
        </AppTheme>
    );
}

export default App
