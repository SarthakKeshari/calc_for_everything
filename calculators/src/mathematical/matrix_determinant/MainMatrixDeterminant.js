import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

function MainMatrixDeterminant() {
    const [matrixSize, setMatrixSize] = useState('');
    const [matrix, setMatrix] = useState([]);
    const [determinant, setDeterminant] = useState(null);

    const handleSizeChange = (event) => {
        const newSize = parseInt(event.target.value, 10);
        if (newSize >= 2 && newSize <= 6) {
            setMatrixSize(newSize);
            // Initialize the matrix with the new size
            const newMatrix = Array.from({ length: newSize }, () => Array(newSize));
            setMatrix(newMatrix);
            setDeterminant(null);
        }
    };

    const handleMatrixChange = (event, rowIndex, colIndex) => {
        const newValue = event.target.value.trim();
        const newMatrix = [...matrix];
        newMatrix[rowIndex][colIndex] = newValue;
        setMatrix(newMatrix);
    };

    const calculateDeterminant = () => {
        const numRows = matrix.length;
        const numCols = matrix[0].length;

        if (numRows !== numCols) {
            alert('Matrix must be square to calculate determinant.');
            return;
        }

        const calculateDeterminantRecursive = (matrix) => {
            const numRows = matrix.length;
            const numCols = matrix[0].length;

            if (numRows === 1) {
                return parseInt(matrix[0][0], 10);
            } else if (numRows === 2) {
                return (
                    parseInt(matrix[0][0], 10) * parseInt(matrix[1][1], 10) -
                    parseInt(matrix[0][1], 10) * parseInt(matrix[1][0], 10)
                );
            }

            let det = 0;

            for (let col = 0; col < numCols; col++) {
                det +=
                    parseInt(matrix[0][col], 10) *
                    calculateDeterminantRecursive(
                        matrix
                            .slice(1)
                            .map((row) => row.filter((_, i) => i !== col))
                    ) *
                    (col % 2 === 0 ? 1 : -1);
            }

            return det;
        };

        const det = calculateDeterminantRecursive(matrix);
        setDeterminant(det);
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Determinant of Matrix Calculator</Typography>
            <hr />
            <br />

            <div style={{ textAlign: "center" }}>
                <TextField
                    label="Matrix Size (N x N)"
                    type="number"
                    value={matrixSize}
                    onChange={handleSizeChange}
                />
                <br /><br />
                {matrixSize >= 1 && (
                    <div>
                        <p>Enter the matrix elements:</p>
                        {Array.from({ length: matrixSize }, (_, rowIndex) => (
                            <div key={rowIndex}>
                                {Array.from({ length: matrixSize }, (_, colIndex) => (
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
                        <Button variant="contained" onClick={calculateDeterminant}>Calculate Determinant</Button>
                    </div>
                )}

                {determinant !== null && (
                    <div>
                        <p>Determinant of the matrix:</p>
                        <Typography variant="h6">{determinant}</Typography>
                    </div>
                )}
            </div>
        </Container>
    );
}

export default MainMatrixDeterminant;