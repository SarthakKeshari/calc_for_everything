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
export default function InfoRandomNumberGenerator() {

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
                        Random Number Generator

                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* Definition */}
                        <br></br>
                        A random number generator is a tool or process that produces numbers
                        in a way that each number is unpredictable
                        and has an equal chance of being selected from a specified range.
                        <br />
                        {/* Replace the below calculator name with yuor calculator name */}
                        <br></br>
                        for example:-
                        <br />
                        <code style={{ display: 'flex', justifyContent: 'center' }}>
                            <h3>
                                {/* Add calc formula */}
                                <br></br>
                                between 10 and 100
                                <br></br>
                                random number - 49
                            </h3>
                        </code>
                        <code style={{ display: 'flex', justifyContent: 'center' }}>
                            <h5>
                                {/* Define meaning that each variable convey */}
                                <br></br>
                                A computer random number generator (RNG) is a software or hardware
                                component that produces sequences of numbers with statistically random
                                characteristics, often used to introduce unpredictability and fairness in
                                various computer applications.
                            </h5>
                        </code>
                    </Typography>
                </Box>
            </Modal>
        </span>
    );
}