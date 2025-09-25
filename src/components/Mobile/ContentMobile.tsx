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
        sx={[
            {
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                borderRadius: 3,
                maxWidth: '100%',
                maxHeight: '90vh',
                // height: '100%',
                // p: 2,
                // pt: 2,
                boxShadow: 3,
                border: 'none',
                // bgcolor: 'primary.dark',
                // '&:hover': {
                //     bgcolor: 'primary.dark',
                // },
                // overflowX: 'hidden',
                // overflowY: 'scroll'
            },
            (theme) => ({
                ...theme.applyStyles('dark', {
                    backgroundColor: gray[800],
                }),
                borderRadius: (theme.vars || theme).shape.borderRadius,
            })
        ]}
    >
    {/* <Container sx={{ width: '100%', height: '100%', overflowY: 'scroll' }}> */}
        <Grow in={activeContent === 'about'} easing={{ enter: 'cubic-bezier(0, 1.5, .8, 1)', exit: 'linear' }} mountOnEnter unmountOnExit>
            <Container sx={{ width: '100%', height: '100%', }}>
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
    {/* </Container> */}
    </Card>
  );
}
