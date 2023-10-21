import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Typography, MenuItem } from '@mui/material';

function App() {
  const [totalCost, setTotalCost] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [change, setChange] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState('INR');

  const currencyInfo = {
    INR: {
      denominations: {
        '500 Rupees': 500,
        '100 Rupees': 100,
        '50 Rupees': 50,
        '20 Rupees': 20,
        '10 Rupees': 10,
        '5 Rupees': 5,
        '2 Rupees': 2,
        '1 Rupee': 1,
      },
    },
    USD: {
      denominations: {
        '100 Dollars': 100,
        '50 Dollars': 50,
        '20 Dollars': 20,
        '10 Dollars': 10,
        '5 Dollars': 5,
        '2 Dollars': 2,
        '1 Dollar': 1,
      },
    },
    EUR: {
      denominations: {
        '500 Euros': 500,
        '200 Euros': 200,
        '100 Euros': 100,
        '50 Euros': 50,
        '20 Euros': 20,
        '10 Euros': 10,
        '5 Euros': 5,
        '2 Euros': 2,
        '1 Euro': 1,
      },
    },
    AUD: {
      denominations: {
        '100 Australian Dollars': 100,
        '50 Australian Dollars': 50,
        '20 Australian Dollars': 20,
        '10 Australian Dollars': 10,
        '5 Australian Dollars': 5,
        '2 Australian Dollars': 2,
        '1 Australian Dollar': 1,
      },
    },
    JPY: {
      denominations: {
        '10,000 Yen': 10000,
        '5,000 Yen': 5000,
        '2,000 Yen': 2000,
        '1,000 Yen': 1000,
        '500 Yen': 500,
        '100 Yen': 100,
        '50 Yen': 50,
        '10 Yen': 10,
        '5 Yen': 5,
        '1 Yen': 1,
      },
    },
    // Add more currencies and their denominations here
  };
  

  const calculateChange = () => {
    const totalCostFloat = parseFloat(totalCost);
    const amountPaidFloat = parseFloat(amountPaid);

    if (isNaN(totalCostFloat) || isNaN(amountPaidFloat)) {
      alert('Please enter valid numbers for Total Cost and Amount Paid.');
    } else {
      let changeAmount = amountPaidFloat - totalCostFloat;

      if (changeAmount < 0) {
        alert('Insufficient payment.');
      } else {
        const currencyData = currencyInfo[selectedCurrency];

        const change = {};
        for (const denomination in currencyData.denominations) {
          const value = currencyData.denominations[denomination];
          const count = Math.floor(changeAmount / value);
          if (count > 0) {
            change[denomination] = count;
          }
          changeAmount %= value;
        }

        setChange(change);
      }
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Change Calculator
        </Typography>
        <TextField
          fullWidth
          label="Total Cost"
          variant="outlined"
          value={totalCost}
          onChange={(e) => setTotalCost(e.target.value)}
        />
        <TextField
          fullWidth
          label="Amount Paid"
          variant="outlined"
          value={amountPaid}
          onChange={(e) => setAmountPaid(e.target.value)}
          style={{ marginTop: '20px' }}
        />
        <TextField
          fullWidth
          label="Currency"
          select
          variant="outlined"
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
          style={{ marginTop: '20px' }}
        >
          <MenuItem value="INR">Indian Rupees (INR)</MenuItem>
          <MenuItem value="USD">US Dollars (USD)</MenuItem>
          <MenuItem value="EUR">Euros (EUR)</MenuItem>
          <MenuItem value="AUD">Australian Dollars (AUD)</MenuItem>
          <MenuItem value="JPY">Japanese Yen (JPY)</MenuItem>
          {/* Add more currencies here */}
        </TextField>
        <Button
          variant="contained"
          color="primary"
          onClick={calculateChange}
          style={{ marginTop: '20px' }}
        >
          Calculate Change
        </Button>
        {Object.keys(change).length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Change:
            </Typography>
            {Object.keys(change).map((denomination) => (
              <p key={denomination}>
                {denomination}: {change[denomination]} {currencyInfo[selectedCurrency].symbol}
              </p>
            ))}
          </div>
        )}
      </Paper>
    </Container>
  );
}

export default App;
