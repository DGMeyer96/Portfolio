import { useState } from 'react'
import './App.css'
import { Container, Stack, styled, useMediaQuery, useTheme } from '@mui/material'
import Sidebar from './components/Desktop/Sidebar'
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/200.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/600.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/800.css';
import '@fontsource/roboto/900.css';
import Header from './components/Desktop/Header'
import Content from './components/Desktop/Content'
import ContentMobile from './components/Mobile/ContentMobile'
import FooterMobile from './components/Mobile/FooterMobile'

function App() {
    const [ activeContent, setActiveContent ] = useState('about');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
    const StyledBox = styled('div')(({ theme }) => ({
        alignSelf: 'center',
        width: '100%',
        maxWidth: '100%',
        minHeight: '85%',
        maxHeight: '85%',
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
        width: '90%',
        height: '95%',
        overflow: 'hidden',
        borderRadius: (theme.vars || theme).shape.borderRadius,
        outline: '6px solid',
        outlineColor: '#bfc8d933',
        border: '1px solid',
        borderColor: (theme.vars || theme).palette.grey[200],
        boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
        backgroundSize: 'cover',
        ...theme.applyStyles('dark', {
            boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
            outlineColor: 'hsla(220, 20%, 42%, 0.1)',
            borderColor: (theme.vars || theme).palette.grey[700],
        }),
    }));

    function bodyDesktop() {
        return (
            <Container id='AppContainer' fixed sx={{ display: 'flex', justifyContent: 'center', m: 'auto' }}>
                <StyledBox id="AppStyledBox">
                    <Stack id='AppStackRow' direction='row' spacing={0}>
                        <Container sx={{ py:3, pr:0, width: 'fit-content', height: 'fit-content', }}>
                            <Sidebar/>
                        </Container>
                        <Stack id='AppStackColumn' direction="column" spacing={1} sx={{ p:3, overflow: 'hidden' }}>
                            <Header activeContent={activeContent} setActiveContent={setActiveContent} />
                            <Content activeContent={activeContent} />
                        </Stack>
                    </Stack>
                </StyledBox>
            </Container>
        );
    }

    function bodyMobile() {
        return (
            <Container id='AppMobileContainer' fixed sx={{ p:0, width: '100dvw', height: '100dvh', overflow: 'hidden', display: 'flex', justifyContent: "center", alignItems: "center", }}>
                <StyledBoxMobile id="StyleBoxMobile">
                    <Stack direction='column' spacing={0} sx={{ height: '100%', justifyContent: "space-between", alignItems: "center", overflow: 'hidden' }}>
                        <FooterMobile setActiveContent={setActiveContent} activeContent={activeContent}/>
                        <ContentMobile activeContent={activeContent}/>
                    </Stack>
                </StyledBoxMobile>
            </Container>
        );
    }

    if(isMobile === true) {
        return bodyMobile();
    } else {
        return bodyDesktop();
    }
}

export default App
