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
export default function InfoBinaryAdder() {

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
                        Binary Adder

                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* Definition */}
                        A binary adder is a digital circuit or mathematical operation that combines binary numbers by adding their individual bits to produce a sum with carry-out.

                        <br />
                        {/* Replace the below calculator name with yuor calculator name */}
                        The formula for adding two binary digits (bits) A and B, along with a carry-in (Cin), to produce a sum (S) and a carry-out (Cout) is: <br></br>
                        
                        S = A XOR B XOR Cin <br></br>
                        Cout = (A AND B) OR (Cin AND (A XOR B))
                        
                        <br />
                        <code style={{ display: 'flex', justifyContent: 'center' }}>
                            <h3>
                                {/* Add calc formula */}


                            </h3>
                        </code>
                        <code style={{ display: 'flex', justifyContent: 'center' }}>
                            <h5>
                                {/* Define meaning that each variable convey */}
                                XOR represents the exclusive OR operation.
                                AND represents the logical AND operation.
                                OR represents the logical OR operation.

                            </h5>
                        </code>
                    </Typography>
                </Box>
            </Modal>
        </span>
    );
}