import React, { useState, useEffect } from 'react';
import { Container, Typography,TextField,Button } from '@mui/material';

function MainMatrixSubstraction(){
    const [matrix1, setMatrix1] = useState([]);
    const [matrix2, setMatrix2] = useState([]);
    const [result, setResult] = useState([]);
    const [rows, setRows] = useState(2);
    const [cols, setCols] = useState(2);
  
    useEffect(() => {
      // Initialize matrices when rows and columns change
      const newMatrix1 = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => 0)
      );
      const newMatrix2 = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => 0)
      );
      setMatrix1(newMatrix1);
      setMatrix2(newMatrix2);
    }, [rows, cols]);
  
    const handleMatrixChange = (event, rowIndex, colIndex, matrixType) => {
      const newValue = parseFloat(event.target.value);
      const updatedMatrix = matrixType === 'matrix1' ? [...matrix1] : [...matrix2];
      updatedMatrix[rowIndex][colIndex] = newValue;
      matrixType === 'matrix1' ? setMatrix1(updatedMatrix) : setMatrix2(updatedMatrix);
    };
  
    const subMatrices = () => {
      if (matrix1.length !== rows || matrix2.length !== rows || matrix1[0].length !== cols || matrix2[0].length !== cols) {
        alert('Matrices must have the same dimensions for addition.');
        return;
      }
  
      const resultMatrix = matrix1.map((row, rowIndex) =>
        row.map((value, colIndex) => value - matrix2[rowIndex][colIndex])
      );
  
      setResult(resultMatrix);
    };
  
    return (
        <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>
                Matrix Subtraction
        </Typography>
                <div>
                <h3>Matrix Dimensions</h3>
                <TextField
                    type="number"
                    label="Rows"
                    min={2}
                    max={6}
                    value={rows}
                    onChange={(e) => setRows(parseInt(e.target.value, 10) || 0)}
                />
                <TextField
                    type="number"
                    label="Columns"
                    min={2}
                    max={6}
                    value={cols}
                    onChange={(e) => setCols(parseInt(e.target.value, 10) || 0)}
                />
                </div>
        
                <div>
                <h3>Matrix 1</h3>
                {matrix1.map((row, rowIndex) => (
                    <div key={rowIndex}>
                    {row.map((value, colIndex) => (
                        <TextField
                        key={colIndex}
                        type="number"
                        value={value}
                        onChange={(event) => handleMatrixChange(event, rowIndex, colIndex, 'matrix1')}
                        />
                    ))}
                    </div>
                ))}
                </div>
        
                <div>
                <h3>Matrix 2</h3>
                {matrix2.map((row, rowIndex) => (
                    <div key={rowIndex}>
                    {row.map((value, colIndex) => (
                        <TextField
                        key={colIndex}
                        type="number"
                        value={value}
                        onChange={(event) => handleMatrixChange(event, rowIndex, colIndex, 'matrix2')}
                        />
                    ))}
                    </div>
                ))}
                </div>
                <br></br>
                <Button variant="contained" color="primary" onClick={subMatrices}>
                Subtract Matrices
                </Button>
        
                {result.length > 0 && (
                <div>
                    <h3>Result</h3>
                    {result.map((row, rowIndex) => (
                    <div key={rowIndex}>
                        {row.map((value, colIndex) => (
                        <TextField key={colIndex} type="number" value={value} readOnly />
                        ))}
                    </div>
                    ))}
                </div>
                )}
        </Container>
    );
    //Done
}

export default MainMatrixSubstraction;