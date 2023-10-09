import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'; // Import Box component

function MainFractionSortingCalculator() {

    const [inputValue, setInputValue] = useState('');
    const [sortedFractions, setSortedFractions] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleCalculateClick = () => {
        // Split the input string by commas and trim any leading/trailing whitespace
        const fractionsArray = inputValue.split(',').map((fraction) => fraction.trim());

        // Sort the fractions using a custom sorting function
        const sortedArray = fractionsArray.sort((a, b) => {
            const [numA, denomA] = a.split('/').map(Number);
            const [numB, denomB] = b.split('/').map(Number);
            return (numA / denomA) - (numB / denomB);
        });

        setSortedFractions(sortedArray);
    };

    return (
        <div
            style={{
                marginTop: "2rem",
                padding: "0 20rem"
            }}
        >
            <TextField
                label="Enter fractions (e.g., 7/2, 8/2, 9/2, 1/2)"
                variant="outlined"
                fullWidth
                value={inputValue}
                onChange={handleInputChange}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleCalculateClick}
                style={{
                    marginTop: "1rem"
                }}
            >
                Calculate
            </Button>
            <Box
                mt={2} // Add margin-top
                style={{
                    display:"flex",
                    alignItems:"center",
                    flexDirection:"column"
                }}
                p={2} // Add padding
            >
                <div
                style={{
                    fontSize:"20px",
                    fontWeight:"500"
                }}
                >
                    SORTED VALUES ARE:
                </div>
                <div
                style={{
                    border:"1px solid #9e9e9e",
                    padding:"1rem 1rem",
                    width:"56.5vw",
                    marginTop:"1rem",
                    borderRadius:"5px",
                    fontSize:"18px",
                    fontWeight:"500"

                }}
                >
                    {sortedFractions.join(', ')}
                </div>
            </Box>
        </div>
    )
}

export default MainFractionSortingCalculator;
