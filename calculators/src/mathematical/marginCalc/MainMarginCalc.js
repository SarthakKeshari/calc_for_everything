import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function MainMarginCalc(){
const [cost, setCost] = useState('');
const [revenue, setRevenue] = useState('');
const [markupPercentage, setMarkupPercentage] = useState('');
const [grossMarginPercentage, setGrossMarginPercentage] = useState('');

const calculateMargin = () => {
    try {
        const costFloat = parseFloat(cost);
        const revenueFloat = parseFloat(revenue);
        const profitFloat = revenueFloat - costFloat; 
        const markupPercentageFloat = (profitFloat / costFloat) * 100; 
        const grossMarginPercentageFloat = (profitFloat / revenueFloat) * 100;

        setMarkupPercentage(`${markupPercentageFloat.toFixed(2)}%`);
        setGrossMarginPercentage(`${grossMarginPercentageFloat.toFixed(2)}%`);
    } catch (error) {
        setMarkupPercentage('');
        setGrossMarginPercentage('');
    }
};

return(
    <Container maxWidth='lg' sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
        <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Margin Calculator</Typography>
        <hr/>
        <br/>

        <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
            <TextField
              label="Cost to Make a Product"
              variant="outlined"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              sx={{ width: "500px" }}
            />
        </Box>

        <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
            <TextField
              label="Selling Price or Revenue"
              variant="outlined"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
              sx={{ width: "500px" }}
            />
        </Box>

        <Box mt={2} sx={{ textAlign: "center" }}>
            <Button variant="contained" color="primary" onClick={calculateMargin}>
              Calculate Margin
            </Button>
        </Box>

        <Box mt={2} sx={{ textAlign: "center" }}>
            <Typography variant="h6">Markup Percentage: {markupPercentage}</Typography>
            <Typography variant="h6">Gross Margin Percentage: {grossMarginPercentage}</Typography>
        </Box>

    </Container>
)
}

export default MainMarginCalc;

