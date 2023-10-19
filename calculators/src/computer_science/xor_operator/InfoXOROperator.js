import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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
{/* Change the name of the function as the file name */ }
export default function InfoXOROperator() {

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
                        XOR Operator
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* Definition */}
                        The XOR (exclusive OR) operator is a logical operation that returns true (or 1) when an odd number of inputs are true (or 1)
                        <br />
                        <br />
                        {/* Replace the below calculator name with yuor calculator name */}
                        Table for XOR Operator is:
                        <code style={{ display: 'flex', justifyContent: 'center' }}>
                            <h3>
                                {/* Add calc formula */}
                                <Table sx={{ minWidth: 200 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow component="th" scope="row">
                                            <TableCell>A</TableCell>
                                            <TableCell>B</TableCell>
                                            <TableCell>A XOR B</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>0</TableCell>
                                            <TableCell>0</TableCell>
                                            <TableCell>0</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>0</TableCell>
                                            <TableCell>1</TableCell>
                                            <TableCell>1</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>1</TableCell>
                                            <TableCell>0</TableCell>
                                            <TableCell>1</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>1</TableCell>
                                            <TableCell>1</TableCell>
                                            <TableCell>0</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </h3>
                        </code>
                        <code style={{ display: 'flex', justifyContent: 'center' }}>
                            <h5>
                                {/* Define meaning that each variable convey */}
                                In this truth table:<br></br>

                                Input A and Input B are the two input values to the XOR operator.<br></br>
                                Output is the result of the XOR operation on the inputs.<br></br>
                                As you can see, the XOR operator returns true (1) when the inputs are different, and false (0) when they are the same.
                            </h5>
                        </code>
                    </Typography>
                </Box>
            </Modal>
        </span>
    );
}