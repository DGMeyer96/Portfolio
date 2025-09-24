import { Button, Modal, Backdrop, Fade, Box, Typography, type ModalProps, styled } from "@mui/material";
import { useState, type Dispatch, type SetStateAction } from "react";

const StyledModalContent = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[24],
    padding: theme.spacing(4),
}));

export default function FlightcaseProjectModal({
    open,
    onClose
} : {
    open: boolean,
    onClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)
}) {
    return (
        <Modal
            open={open}
            onClose={onClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={true}>
                <StyledModalContent>
                    <Typography id="Flightcase-modal-title" variant="h6" component="h2">
                        Flightcase
                    </Typography>
                    <Typography id="Flightcase-modal-description" sx={{ mt: 2 }}>
                        Created a next generation automotive HMI platform that reduces development time from years to months for a fully functional automotive HMI.
                        Created the architecture for the platform with an emphasis on componentization to reduce dependencies, increase modularity, and provide faster development time.
                        Integrated platform demo into a customized Android Automotive OS system image.
                        Created and deployed system image builds for emulator, Raspberry Pi, and tablet development.
                    </Typography>
                </StyledModalContent>
            </Fade>
        </Modal>
    );
} 