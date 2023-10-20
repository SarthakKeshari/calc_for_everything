import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';

const EmpiricalFormulaCalculator = () => {
  const [open, setOpen] = useState(false);
  const [inputElement, setInputElement] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [elements, setElements] = useState([]);
  const [empiricalFormula, setEmpiricalFormula] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddElement = () => {
    if (inputElement && inputNumber) {
      setElements((prevState) => [
        ...prevState,
        { element: inputElement, number: inputNumber },
      ]);
      setInputElement('');
      setInputNumber('');
    }
  };

  const handleCalculate = () => {
    const formula = elements
      .map(({ element, number }) => {
        return number === '1' ? element : `${element}${number}`;
      })
      .join('');
    setEmpiricalFormula(formula);
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Calculate Empirical Formula
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Empirical Formula Calculator</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter element symbols and their counts:
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Element Symbol"
                value={inputElement}
                onChange={(e) => setInputElement(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Element Count"
                type="number"
                value={inputNumber}
                onChange={(e) => setInputNumber(e.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddElement} color="primary">
            Add Element
          </Button>
          <Button onClick={handleCalculate} color="primary">
            Calculate
          </Button>
        </DialogActions>
      </Dialog>
      <div>
        <p>Empirical Formula: {empiricalFormula}</p>
      </div>
    </div>
  );
};

export default EmpiricalFormulaCalculator;
