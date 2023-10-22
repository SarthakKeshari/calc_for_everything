import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function App() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState(15);

  const calculateTip = () => {
    if (billAmount === '') return 0;
    const tip = (billAmount * tipPercentage) / 100;
    return tip.toFixed(2);
  };
  const totalAmountToPay = parseFloat(calculateTip()) + parseFloat(billAmount);


  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '50px' }}>
        <Typography variant="h5" align="center" marginBottom='20px'>
          Tip Calculator
        </Typography>
        <TextField
          label="Bill Amount"
          fullWidth
          type="number"
          value={billAmount}
          sx={{ marginBottom: 5 }}
          onChange={(e) => setBillAmount(e.target.value)}
          InputProps={{
            startAdornment: (
                <div style={{marginRight:'10px'}}>
                    ₹
                </div>
            ),
          }}
        />
        <TextField
          label="Tip Percentage"
          fullWidth
          type="number"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(e.target.value)}
        />
        <Typography variant="h6" style={{ marginTop: '10px' }}>
          Tip Amount: ₹{calculateTip()}
        </Typography>
        <Typography variant="h6" style={{ marginTop: '10px' }}>
          Amount to pay: ₹{isNaN(totalAmountToPay) ? 0 : totalAmountToPay}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setBillAmount('')}
          style={{ marginTop: '20px' }}
        >
          Clear
        </Button>
      </Paper>
    </Container>
  );
}

export default App;
