import React, { useState } from 'react';
import {
    Container,
    Paper,
    TextField,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Button,
    Typography
}from '@mui/material';

function MainTableOfNumber() {
    const [number, setNumber] = useState(1);
    const [table, setTable] = useState([]);

    const generateTable = () => {
        const newTable = [];
        for (let i = 1; i <= 10; i++) {
            newTable.push({ factor: i, product: i * number });
        }
        setTable(newTable);
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Table Of A Number</Typography>
            <hr />
            <br />
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <TextField
                    label="Enter a number"
                    type="number"
                    variant="outlined"
                    fullWidth
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: '10px' }}
                    onClick={generateTable}
                >
                    Generate Table
                </Button>
            </Paper>

            {table.length > 0 && (
                <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Factor</TableCell>
                                <TableCell>Product</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {table.map((row) => (
                                <TableRow key={row.factor}>
                                    <TableCell>{row.factor}</TableCell>
                                    <TableCell>{row.product}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Container>
    )
}

export default MainTableOfNumber;