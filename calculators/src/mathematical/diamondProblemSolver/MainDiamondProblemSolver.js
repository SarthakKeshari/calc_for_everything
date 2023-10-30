import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, TextField } from '@mui/material';

function MainDiamondProblemSolver() {
  const [factor1, setFactor1] = useState('');
  const [factor2, setFactor2] = useState('');
  const [product, setProduct] = useState('');
  const [sum, setSum] = useState('');

  useEffect(() => {
    calculate();
  }, [factor1, factor2]);

  const calculate = () => {
    const num1 = parseFloat(factor1);
    const num2 = parseFloat(factor2);

    if (isNaN(num1) || isNaN(num2)) {
      setProduct('Please enter valid numbers.');
      setSum('');
      return;
    }

    const calculatedProduct = num1 * num2;
    const calculatedSum = num1 + num2;

    setProduct(`Product: ${calculatedProduct}`);
    setSum(`Sum: ${calculatedSum}`);
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
      <Typography pt={1} variant="h5" sx={{ textAlign: 'center' }}>
        Diamond Problem Solver
      </Typography>
      <hr />

      <Card
        sx={{
          backgroundColor: 'inherit',
          margin: '5px',
          padding: '5px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >


        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
          <Typography variant="h6" style={{ fontSize: '1.5rem', fontFamily: 'KaTeX_Math' }}>
            {product}
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <TextField
            label="Factor 1"
            variant="outlined"
            value={factor1}
            onChange={(e) => setFactor1(e.target.value)}
          />
          <Typography variant="h4" style={{ margin: '0 10px' }}>
            ⨯ {/* Replace '×' with a larger symbol */}
          </Typography>
          <TextField
            label="Factor 2"
            variant="outlined"
            value={factor2}
            onChange={(e) => setFactor2(e.target.value)}
          />
        </div>

    

        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
          <Typography variant="h6" style={{ fontSize: '1.5rem', fontFamily: 'KaTeX_Math' }}>
            {sum}
          </Typography>
        </div>
      </Card>
    </Container>
  );
}

export default MainDiamondProblemSolver;
