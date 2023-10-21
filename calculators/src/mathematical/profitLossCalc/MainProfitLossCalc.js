import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Paper } from '@mui/material';
import InfoProfitLossCalc from './InfoProfitLossCalc';


function MainProfitLossCalc() {
    const [purchasePrice, setPurchasePrice] = useState('');
    const [stockQuantity, setStockQuantity] = useState('');
    const [currentPrice, setCurrentPrice] = useState('');
    const [result, setResult] = useState(null);

    const calculateProfitLoss = () => {
        const purchasePriceFloat = parseFloat(purchasePrice);
        const stockQuantityInt = parseInt(stockQuantity);
        const currentPriceFloat = parseFloat(currentPrice);

        if (
            isNaN(purchasePriceFloat) ||
            isNaN(stockQuantityInt) ||
            isNaN(currentPriceFloat)
        ) {
            setResult('Please enter valid numbers');
            return;
        }

        const costPrice = purchasePriceFloat * stockQuantityInt;
        const sellPrice = currentPriceFloat * stockQuantityInt;

        if (costPrice > sellPrice) {
            setResult(`You have a loss of $${(costPrice - sellPrice).toFixed(2)}`);
        } else if (sellPrice > costPrice) {
            setResult(`You have a profit of $${(sellPrice - costPrice).toFixed(2)}`);
        } else {
            setResult('You have no profit or loss.');
        }
    };
    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Profit Loss Calculator<InfoProfitLossCalc/></Typography>
            <hr />
            <br />
            <TextField
                fullWidth
                label="Purchase Price per Share ($)"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
            />
            <TextField
                fullWidth
                label="Stock Quantity"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(e.target.value)}
            />
            <TextField
                fullWidth
                label="Current Price per Share ($)"
                value={currentPrice}
                onChange={(e) => setCurrentPrice(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={calculateProfitLoss}
                style={{ marginTop: '10px' }}
            >
                Calculate
            </Button>
            {result && (
                <Box mt={2}>
                    <Typography variant="h6" color="textSecondary">
                        {result}
                    </Typography>
                </Box>
            )}
        </Container >
    )
}

export default MainProfitLossCalc;