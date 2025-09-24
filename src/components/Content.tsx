import { Card, Container, Grow } from '@mui/material';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';
import { gray } from '../theme/themePrimitives';

export default function Content({
  activeContent,
} : {
  activeContent: string,
}) {
  return (
    <Card
        sx={[
            {
                display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                borderRadius: 3,
                width: '100%',
                height: '75vh',
                p: 0,
                pt: 2,
                boxShadow: 3,
                border: 'none',
                // bgcolor: 'primary.dark',
                // '&:hover': {
                //     bgcolor: 'primary.dark',
                // },
            },
            (theme) => ({
                ...theme.applyStyles('dark', {
                    backgroundColor: gray[800],
                }),
                borderRadius: (theme.vars || theme).shape.borderRadius,
            })
        ]}
    >
        <Grow in={activeContent === 'about'} easing={{ enter: 'cubic-bezier(0, 1.5, .8, 1)', exit: 'linear' }} mountOnEnter unmountOnExit>
            <Container  sx={{ width: '100%', height: '100%', p:0 }}>
                <AboutMe/>
            </Container >
        </Grow>
        <Grow in={activeContent === 'resume'} easing={{ enter: 'cubic-bezier(0, 1.5, .8, 1)', exit: 'linear' }} mountOnEnter unmountOnExit>
            <Container sx={{ width: '100%', height: '100%', p:0 }}>
                <Resume/>
            </Container>
        </Grow>
        <Grow in={activeContent === 'projects'} easing={{ enter: 'cubic-bezier(0, 1.5, .8, 1)', exit: 'linear' }} mountOnEnter unmountOnExit>
            <Container sx={{ width: '100%', height: '100%', p:0 }}>
                <Projects/>
            </Container>
        </Grow> 
    </Card>
  );
}
