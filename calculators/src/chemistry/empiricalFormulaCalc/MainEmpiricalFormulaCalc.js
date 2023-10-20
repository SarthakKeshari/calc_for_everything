import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
} from '@mui/material';

function EmpiricalFormulaCalculator() {
  const [masses, setMasses] = useState({
    element1: '',
    element2: '',
    element3: '',
  });
  const [empiricalFormula, setEmpiricalFormula] = useState('');

  const calculateEmpiricalFormula = () => {
    // Your empirical formula calculation logic here
    // Replace the following example with your actual calculation logic
    const { element1, element2, element3 } = masses;

    if (element1 && element2 && element3) {
      const formula = `C${element1}H${element2}O${element3}`;
      setEmpiricalFormula(formula);
    } else {
      setEmpiricalFormula('Please enter all element masses');
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMasses({ ...masses, [name]: value });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Empirical Formula Calculator
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            label="Element 1 Mass"
            name="element1"
            value={masses.element1}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Element 2 Mass"
            name="element2"
            value={masses.element2}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Element 3 Mass"
            name="element3"
            value={masses.element3}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={calculateEmpiricalFormula}
      >
        Calculate Empirical Formula
      </Button>
      <Typography variant="h6" gutterBottom>
        Empirical Formula: {empiricalFormula}
      </Typography>
    </Container>
  );
}

export default EmpiricalFormulaCalculator;
