import { useState } from 'react'
import './App.css'
import { Card, Container, CssBaseline, Stack, styled, useMediaQuery, useTheme } from '@mui/material'
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
import { gray } from './theme/themePrimitives'
import ContentMobile from './components/Mobile/ContentMobile'
import FooterMobile from './components/Mobile/FooterMobile'

function App() {
    const [ activeContent, setActiveContent ] = useState('about');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
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
        backgroundSize: 'cover',
        [theme.breakpoints.up('sm')]: {
            // marginTop: theme.spacing(10),
            // height: 700,
        },
        ...theme.applyStyles('dark', {
            boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
            outlineColor: 'hsla(220, 20%, 42%, 0.1)',
            borderColor: (theme.vars || theme).palette.grey[700],
        }),
    }));

    const StyledBoxMobile = styled('div')(({ theme }) => ({
        alignSelf: 'center',
        // width: '95vw',
        // height: '100vh',
        maxWidth: '100%',
        maxHeight: '100%',
        // marginTop: theme.spacing(3),
        // marginBottom: theme.spacing(3),
        // marginLeft: theme.spacing(3),
        // marginRight: theme.spacing(3),
        borderRadius: (theme.vars || theme).shape.borderRadius,
        outline: '6px solid',
        outlineColor: '#bfc8d933',
        border: '1px solid',
        borderColor: (theme.vars || theme).palette.grey[200],
        boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
        backgroundSize: 'cover',
        // padding: 16,
        // margin: 'auto',
        // margin: 24,
        ...theme.applyStyles('dark', {
            boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
            outlineColor: 'hsla(220, 20%, 42%, 0.1)',
            borderColor: (theme.vars || theme).palette.grey[700],
        }),
    }));

    function body() {
        if(isMobile === true) {
            return (
                // <Stack
                //     direction="column"
                //     component="main"
                //     sx={[
                //     {
                //         justifyContent: 'center',
                //         height: 'calc((var(--template-frame-height, 0)) * 100%)',
                //         // marginTop: 'max(var(--template-frame-height, 0px), 0px)',
                //         minHeight: '100%',
                //         // maxWidth: '1100px',
                //     },
                //     (theme) => ({
                //         '&::before': {
                //             content: '""',
                //             display: 'block',
                //             position: 'absolute',
                //             zIndex: -1,
                //             inset: 0,
                //             backgroundImage:
                //                 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
                //             backgroundRepeat: 'no-repeat',
                //             ...theme.applyStyles('dark', {
                //                 backgroundImage:
                //                 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
                //             }),
                //         },
                //     }),
                //     ]}
                // >
                <Container id='AppMobileContainer' fixed sx={{ p: 0, width: '100vw', height: '100vh' }}>
                    <Stack direction='column' spacing={0} sx={{ maxHeight: '100%', justifyContent: "space-between", alignItems: "center", }}>
                        <StyledBoxMobile id="StyleBoxMobile">
                            <ContentMobile activeContent={activeContent}/>
                        </StyledBoxMobile>
                        <FooterMobile setActiveContent={setActiveContent} activeContent={activeContent}/>
                    </Stack>
                </Container>
                // </Stack>
            );
        } else {
            return (
                <Stack
                    direction="column"
                    component="main"
                    sx={[
                        {
                            display: 'flex',
                            justifyContent: 'center',
                            height: 'calc((var(--template-frame-height, 0)) * 100%)',
                            // marginTop: 'max(var(--template-frame-height, 0px), 0px)',
                            maxHeight: '85vh',
                            maxWidth: '45vw',
                            m: 'auto'
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
                            sx={[
                                {
                                    justifyContent: 'center',
                                    gap: { xs: 3, sm: 6 },
                                    p: 2,
                                    mx: 'auto',
                                },
                                (theme) => ({
                                    // backgroundColor: gray[50],
                                    ...theme.applyStyles('dark', {
                                        backgroundColor: gray[800],
                                    }),
                                    borderRadius: (theme.vars || theme).shape.borderRadius,
                                })
                            ]}
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
            );
        }
    }

    return (
        body()
    );
}

export default App
