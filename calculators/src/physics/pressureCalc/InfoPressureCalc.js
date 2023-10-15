import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 500,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 3,
};

{/* For reference look into the following file - calc_for_everything\calculators\src\mathematical\simple_interest\InfoSI.js */ }
// Change the name of the function as the file name
export default function InfoPressureCalc() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <span style={{ cursor: 'pointer' }}>
            <InfoOutlinedIcon color='primary' onClick={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {/* For reference look into the following file - calc_for_everything\calculators\src\mathematical\simple_interest\InfoSI.js */}
                <Box sx={style} sm={1}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {/* Calculator Heading */}
                        Pressure Calculator
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* Definition */}
                        Pressure is the force per unit area exerted by a fluid or solid on its surroundings.

                        <br />
                        {/* Replace the below calculator name with yuor calculator name */}
                        <br></br>
                        <br></br>
                        
                        The formula for calculating Pressure is
                        <br></br>
                        Pressure (P) = Force (F) / Area (A)
                        <br></br>
                        <br />
                        <code style={{ display: 'flex', justifyContent: 'center' }}>
                            <h3>
                                {/* Add calc formula */}

                            </h3>
                        </code>
                        <code style={{ display: 'flex', justifyContent: 'center' }}>
                            <h5>
                                {/* Define meaning that each variable convey */}
                                where P is pressure, F is force, and A is the area over which the force is applied.
                                Pressure is typically measured in pascals (Pa) or other units like atmospheres (atm)
                                or millimeters of mercury (mmHg).

                            </h5>
                        </code>
                    </Typography>
                </Box>
            </Modal>
        </span>
    );
}