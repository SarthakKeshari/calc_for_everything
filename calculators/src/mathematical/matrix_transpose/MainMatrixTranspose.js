import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import InfoMatrixTranspose from './InfoMatrixTranspose';

function MainMatrixTranspose() {
    const [numRows, setNumRows] = useState(0);
    const [numCols, setNumCols] = useState(0);
    const [matrix, setMatrix] = useState([]);
    const [transposeMatrix, setTransposeMatrix] = useState([]);

    const handleRowsChange = (event) => {
        const newValue = parseInt(event.target.value, 10);
        if (newValue >= 1 && newValue <= 6) {
            setNumRows(newValue);
            const newMatrix = Array.from({ length: newValue }, () => Array(numCols).fill(null));
            setMatrix(newMatrix);
            setTransposeMatrix([]);
        }
    };

    const handleColsChange = (event) => {
        const newValue = parseInt(event.target.value, 10);
        if (newValue >= 1 && newValue <= 6) {
            setNumCols(newValue);
            const newMatrix = Array.from({ length: numRows }, () => Array(newValue).fill(null));
            setMatrix(newMatrix);
            setTransposeMatrix([]);
        }
    };

    const handleMatrixChange = (event, rowIndex, colIndex) => {
        const newValue = event.target.value;
        
        // Check if the input is a valid number
        if (!isNaN(newValue)) {
            const newMatrix = [...matrix];
            newMatrix[rowIndex][colIndex] = newValue;
            setMatrix(newMatrix);
        }
    };

    const calculateTranspose = () => {
        const newTransposeMatrix = [];
        for (let i = 0; i < numCols; i++) {
            newTransposeMatrix[i] = [];
            for (let j = 0; j < numRows; j++) {
                newTransposeMatrix[i][j] = matrix[j][i];
            }
        }
        setTransposeMatrix(newTransposeMatrix);
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Transpose of Matrix Calculator <InfoMatrixTranspose/></Typography>
            <hr />
            <br />

            <div style={{ textAlign: "center" }}>
                <TextField
                    label="Number of Rows"
                    type="number"
                    value={numRows}
                    onChange={handleRowsChange}
                />
                <TextField
                    label="Number of Columns"
                    type="number"
                    value={numCols}
                    onChange={handleColsChange}
                />
                <br /><br />
                {numRows > 0 && numCols > 0 && (
                    <div>
                        <p>Enter the matrix elements:</p>
                        {Array.from({ length: numRows }, (_, rowIndex) => (
                            <div key={rowIndex}>
                                {Array.from({ length: numCols }, (_, colIndex) => (
                                    <TextField
                                        key={colIndex}
                                        label={`Matrix[${rowIndex}][${colIndex}]`}
                                        type="text"
                                        value={matrix[rowIndex]?.[colIndex] || ''}
                                        onChange={(event) => handleMatrixChange(event, rowIndex, colIndex)}
                                        sx={{ width: '100px' }}
                                    />
                                ))}
                                <br />
                            </div>
                        ))}
                        <Button variant="contained" onClick={calculateTranspose}>Calculate Transpose</Button>
                    </div>
                )}

                {transposeMatrix.length > 0 && (
                    <div>
                        <p>Transpose of the matrix:</p>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableBody>
                                    {transposeMatrix.map((row, rowIndex) => (
                                        <TableRow key={rowIndex}>
                                            {row.map((value, colIndex) => (
                                                <TableCell key={colIndex}>{value}</TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                )}
            </div>
        </Container>
    );
}

export default MainMatrixTranspose;