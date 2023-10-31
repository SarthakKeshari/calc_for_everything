import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

function MainDiamondProblemSolver() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [product, setProduct] = useState('');
  const [sum, setSum] = useState('');
  const [equationSteps, setEquationSteps] = useState([]);
  const [calculateButtonClicked, setCalculateButtonClicked] = useState(false);

  const isInteger = (value) => /^-?\d+$/.test(value);

  useEffect(() => {
    const calculateValues = () => {
      if (calculateButtonClicked) {
        setEquationSteps([]);

        if (isInteger(a) && isInteger(b)) {
          setProduct(Number(a) * Number(b));
          setSum(Number(a) + Number(b));
          setEquationSteps((prevSteps) => [
            ...prevSteps,
            `Step: a * b = ${a} * ${b} = ${Number(a) * Number(b)}`,
            `Step: a + b = ${a} + ${b} = ${Number(a) + Number(b)}`,
          ]);
        } else if (isInteger(a) && isInteger(product)) {
          setB(product / a);
          setSum(Number(a) + Number(b));
          setEquationSteps((prevSteps) => [
            ...prevSteps,
            `Step: b = product / a = ${product} / ${a} = ${product / a}`,
            `Step: a + b = ${a} + ${product / a} = ${Number(a) + product / a}`,
          ]);
        } else if (isInteger(b) && isInteger(product)) {
          setA(product / b);
          setSum(Number(a) + Number(b));
          setEquationSteps((prevSteps) => [
            ...prevSteps,
            `Step: a = product / b = ${product} / ${b} = ${product / b}`,
            `Step: a + b = ${product / b} + ${b} = ${product / b + Number(b)}`,
          ]);
        } else if (isInteger(a) && isInteger(sum)) {
          setB(sum - a);
          setProduct(Number(a) * Number(b));
          setEquationSteps((prevSteps) => [
            ...prevSteps,
            `Step: b = sum - a = ${sum} - ${a} = ${sum - a}`,
            `Step: a * b = ${a} * ${sum - a} = ${Number(a) * (sum - a)}`,
          ]);
        } else if (isInteger(b) && isInteger(sum)) {
          setA(sum - b);
          setProduct(Number(a) * Number(b));
          setEquationSteps((prevSteps) => [
            ...prevSteps,
            `Step: a = sum - b = ${sum} - ${b} = ${sum - b}`,
            `Step: a * b = ${sum - b} * ${b} = ${(sum - b) * Number(b)}`,
          ]);
        } else if (isInteger(product) && isInteger(sum)) {
          let result = findNumbers(Number(product), Number(sum));
          setA(result[0]);
          setB(result[1]);
          setProduct(result[0] * result[1]);
          setEquationSteps((prevSteps) => [
            ...prevSteps,
            `Step: a = x = ${result[0]}, b = y = ${result[1]}`,
          ]);
        }

        setCalculateButtonClicked(false);
      }
    };

    calculateValues();
  }, [a, b, product, sum, calculateButtonClicked]);

  const handleInputChange = (event, inputType) => {
    const value = event.target.value;

    if (/^-?\d*$/.test(value) || value === '') {
      if (inputType === 'a') {
        setA(value);
      } else if (inputType === 'b') {
        setB(value);
      } else if (inputType === 'product') {
        setProduct(value);
        if (isInteger(value) && isInteger(b)) {
          setSum(Number(value) + Number(b));
        }
      } else if (inputType === 'sum') {
        setSum(value);
        if (isInteger(value) && isInteger(a)) {
          setProduct(Number(value) * Number(a));
        }
      }
    }
  };

  const handleClear = () => {
    setA('');
    setB('');
    setProduct('');
    setSum('');
    setEquationSteps([]);
  };

  const handleCalculate = () => {
    setCalculateButtonClicked(true);
  };

  const findNumbers = (product, sum) => {
    let discriminant = Math.sqrt(sum * sum - 4 * product);
    let x = (sum + discriminant) / 2;
    let y = (sum - discriminant) / 2;

    setEquationSteps((prevSteps) => [
      ...prevSteps,
      `Here,we set a=1,b=sum,and c=-4*product.This transforms our equation to:`,
      `Step: x^2+sum*x-4*product=0`,
      `Step: Calculate discriminant = sqrt(sum^2 - 4 * product) = sqrt(${sum}^2 - 4 * ${product}) = ${discriminant}`,
      `Step: Calculate x = (sum + discriminant) / 2 = (${sum} + ${discriminant}) / 2 = ${x}`,
      `Step: Calculate y = (sum - discriminant) / 2 = (${sum} - ${discriminant}) / 2 = ${y}`,
    ]);

    return [x, y];
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: '#eeeeee',
        minHeight: '90vh',
        paddingY: '10',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: 'center', mb: 2 }}>
        Diamond Problem Solver
      </Typography>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <TextField
            label="Product"
            variant="outlined"
            margin="normal"
            value={product}
            onChange={(e) => handleInputChange(e, 'product')}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <TextField
            label="a"
            variant="outlined"
            margin="normal"
            value={a}
            onChange={(e) => handleInputChange(e, 'a')}
          />
        </Grid>
        <Grid item>
          <TextField
            label="b"
            variant="outlined"
            margin="normal"
            value={b}
            onChange={(e) => handleInputChange(e, 'b')}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <TextField
            label="Sum"
            variant="outlined"
            margin="normal"
            value={sum}
            onChange={(e) => handleInputChange(e, 'sum')}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleCalculate}>
            Calculate
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={handleClear}>
            Clear All
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <Typography variant="subtitle1">Equation Steps:</Typography>
          {equationSteps.map((step, index) => (
            <Typography key={index} variant="body2">
              {step}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default MainDiamondProblemSolver;
