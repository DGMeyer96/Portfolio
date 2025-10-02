import { Card, Container, Grow } from '@mui/material';
import { gray } from '../../theme/themePrimitives';
import AboutMeMobile from './AboutMeMobile';
import ResumeMobile from './ResumeMobile';
import ProjectsMobile from './ProjectsMobile';

export default function ContentMobile({
  activeContent,
} : {
  activeContent: string,
}) {
  return (
    <Card 
        id="ContentMobileCard"
        sx={[
            {
                borderRadius: 3,
                width: '100%',
                height: '100%',
                boxShadow: 3,
                border: 'none',
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
            <Container sx={{ width: '100%', height: '100%', p:0 }}>
                <AboutMeMobile/>
            </Container >
        </Grow>
        <Grow in={activeContent === 'resume'} easing={{ enter: 'cubic-bezier(0, 1.5, .8, 1)', exit: 'linear' }} mountOnEnter unmountOnExit>
            <Container sx={{ width: '100%', height: '100%', p:0 }}>
                <ResumeMobile/>
            </Container>
        </Grow>
        <Grow in={activeContent === 'projects'} easing={{ enter: 'cubic-bezier(0, 1.5, .8, 1)', exit: 'linear' }} mountOnEnter unmountOnExit>
            <Container sx={{ width: '100%', height: '100%', p:0 }}>
                <ProjectsMobile/>
            </Container>
        </Grow> 
    </Card>
  );
}
