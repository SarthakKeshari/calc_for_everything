import React, { useState } from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    Paper,
} from '@mui/material';


function MainPermutationAndCombinationCalc() {
    const [n, setN] = useState('');
    const [r, setR] = useState('');
    const [resultPermutation, setResultPermutation] = useState(null);
    const [resultCombination, setResultCombination] = useState(null);

    const calculatePermutationCombination = () => {
        const nInt = parseInt(n);
        const rInt = parseInt(r);

        if (isNaN(nInt) || isNaN(rInt) || nInt < 0 || rInt < 0) {
            setResultPermutation('Please enter valid positive integers');
            setResultCombination(null);
            return;
        }

        const permutation = calculateFactorial(nInt) / calculateFactorial(nInt - rInt);
        const combination = calculateFactorial(nInt) / (calculateFactorial(rInt) * calculateFactorial(nInt - rInt));

        setResultPermutation(`Permutations: ${permutation}`);
        setResultCombination(`Combinations: ${combination}`);
    };

    const calculateFactorial = (num) => {
        if (num === 0) return 1;
        return num * calculateFactorial(num - 1);
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Permutation And Combination Calculator</Typography>
            <hr />
            <br />
            <TextField
                fullWidth
                label="n (Total Items)"
                value={n}
                onChange={(e) => setN(e.target.value)}
            />
            <TextField
                fullWidth
                label="r (Items to Choose)"
                value={r}
                onChange={(e) => setR(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={calculatePermutationCombination}
                style={{ marginTop: '10px' }}
            >
                Calculate
            </Button>
            {resultPermutation && (
                <Box mt={2}>
                    <Typography variant="h6" color="textSecondary">
                        {resultPermutation}
                    </Typography>
                </Box>
            )}
            {resultCombination && (
                <Box mt={2}>
                    <Typography variant="h6" color="textSecondary">
                        {resultCombination}
                    </Typography>
                </Box>
            )}
        </Container>
    )
}

export default MainPermutationAndCombinationCalc;