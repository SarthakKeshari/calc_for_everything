import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

function multiplyMatrices(matrixA, matrixB) {
  const result = [];

  for (let i = 0; i < matrixA.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrixB[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < matrixA[0].length; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      result[i][j] = sum;
    }
  }

  return result;
}

function addMatrices(matrixA, matrixB) {
  const result = [];

  for (let i = 0; i < matrixA.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrixA[0].length; j++) {
      result[i][j] = matrixA[i][j] + matrixB[i][j];
    }
  }

  return result;
}

function createEmptyMatrix(size) {
  return Array.from({ length: size }, () => Array.from({ length: size }, () => 0));
}

function MainCommutativePropertyCalc() {
  const [matrixSize, setMatrixSize] = useState('');
  const [matrixA, setMatrixA] = useState(createEmptyMatrix(2));
  const [matrixB, setMatrixB] = useState(createEmptyMatrix(2));
  const [operator, setOperator] = useState('+');
  const [isCommutative, setIsCommutative] = useState(null);

  const handleMatrixSizeChange = (event) => {
    const newSize = event.target.value.trim();
    setMatrixSize(newSize);
    if (!isNaN(newSize) && newSize !== '') {
      const size = parseInt(newSize, 10);
      setMatrixA(createEmptyMatrix(size));
      setMatrixB(createEmptyMatrix(size));
    }
  };

  const handleMatrixInputChange = (matrix, row, col, value) => {
    const newMatrix = [...matrix];
    newMatrix[row][col] = parseFloat(value) || 0;
    matrix === matrixA ? setMatrixA(newMatrix) : setMatrixB(newMatrix);
  };

  const handleOperatorChange = (event) => {
    setOperator(event.target.value);
  };

  const handleCheckCommutative = () => {
    const resultAB = operator === '+' ? addMatrices(matrixA, matrixB) : multiplyMatrices(matrixA, matrixB);
    const resultBA = operator === '+' ? addMatrices(matrixB, matrixA) : multiplyMatrices(matrixB, matrixA);
    setIsCommutative(JSON.stringify(resultAB) === JSON.stringify(resultBA));
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
      <Typography pt={1} variant="h5" sx={{ textAlign: 'center' }}>
        Commutative Property Calculator
      </Typography>
      <hr />
      <br />
      <div>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          Enter Matrix Size (n):
        </Typography>
        <TextField
          type="number"
          label="Matrix Size (n)"
          variant="outlined"
          margin="normal"
          value={matrixSize}
          onChange={handleMatrixSizeChange}
        />
      </div>
      <div>
        <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '10px' }}>
          Enter Matrix A:
        </Typography>
        {matrixA.map((row, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
            {row.map((value, j) => (
              <TextField
                key={j}
                label={`A[${i}][${j}]`}
                variant="outlined"
                margin="normal"
                value={value}
                onChange={(e) => handleMatrixInputChange(matrixA, i, j, e.target.value)}
              />
            ))}
          </div>
        ))}
      </div>
      <div>
        <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '10px' }}>
          Enter Matrix B:
        </Typography>
        {matrixB.map((row, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
            {row.map((value, j) => (
              <TextField
                key={j}
                label={`B[${i}][${j}]`}
                variant="outlined"
                margin="normal"
                value={value}
                onChange={(e) => handleMatrixInputChange(matrixB, i, j, e.target.value)}
              />
            ))}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <FormControl variant="outlined" sx={{ margin: '0 10px' }}>
          <InputLabel>Operator</InputLabel>
          <Select value={operator} onChange={handleOperatorChange} label="Operator">
            <MenuItem value="+">+</MenuItem>
            <MenuItem value="x">x</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" onClick={handleCheckCommutative}>
          Check Commutative Property
        </Button>
      </div>
      <Typography variant="body1" sx={{ textAlign: 'center', marginTop: '20px' }}>
        {isCommutative !== null &&
          (isCommutative
            ? 'Commutative property holds true.'
            : 'Commutative property does not hold true.')}
      </Typography>
    </Container>
  );
}

export default MainCommutativePropertyCalc;



