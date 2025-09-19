import { Box, Card, Collapse, Container, Fade, Grow, Skeleton, Slide, Zoom } from '@mui/material';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';
import { useRef, type Ref, type RefObject } from 'react';

export default function Content({
  activeContent,
} : {
  activeContent: string,
}) {
    const containerRef = useRef<HTMLElement>(null);

    function content() {
        switch(activeContent) {
            case 'about':
                return <AboutMe />;
            case 'resume':
                return <Resume />;
            case 'projects':
                return <Projects />;
        }
    }

  return (
    <Card
        sx={{
            display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            borderRadius: 3,
            width: '100%',
            height: '75vh',
            p: 3,
            boxShadow: 3,
            border: 'none',
            // bgcolor: 'primary.dark',
            // '&:hover': {
            //     bgcolor: 'primary.dark',
            // },
        }}
    >
        <Grow in={activeContent === 'about'} easing={{ enter: 'cubic-bezier(0, 1.5, .8, 1)', exit: 'linear' }} mountOnEnter unmountOnExit>
            <Container  sx={{ width: '100%', height: '100%', }}>
                <AboutMe/>
            </Container >
        </Grow>
        <Grow in={activeContent === 'resume'} easing={{ enter: 'cubic-bezier(0, 1.5, .8, 1)', exit: 'linear' }} mountOnEnter unmountOnExit>
            <Container sx={{ width: '100%', height: '100%', }}>
                <Resume/>
            </Container>
        </Grow>
        <Grow in={activeContent === 'projects'} easing={{ enter: 'cubic-bezier(0, 1.5, .8, 1)', exit: 'linear' }} mountOnEnter unmountOnExit>
            <Container sx={{ width: '100%', height: '100%', }}>
                <Projects/>
            </Container>
        </Grow> 
    </Card>
  );
}
