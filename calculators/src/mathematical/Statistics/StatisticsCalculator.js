import React, { useState } from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Paper,
    Box,
    Divider,
} from '@mui/material';

function StatisticsCalculator() {
    const [data, setData] = useState('');
    const [selectedCalculations, setSelectedCalculations] = useState([]);
    const [result, setResult] = useState({});
    const handleCalculate = () => {
        let modifyData = data;
        while (modifyData[modifyData.length - 1] === ',') {
            modifyData = modifyData.slice(0, -1)
        }
        const dataArray = modifyData.split(',').map((item) => parseFloat(item.trim()));
        const calculatedResults = {};

        selectedCalculations.forEach((calculation) => {
            switch (calculation) {
                case 'mean':
                    calculatedResults.mean = calculateMean(dataArray);
                    break;
                case 'median':
                    calculatedResults.median = calculateMedian(dataArray);
                    break;
                case 'mode':
                    calculatedResults.mode = calculateMode(dataArray);
                    break;
                case 'range':
                    calculatedResults.range = calculateRange(dataArray);
                    break;
                case 'variance':
                    calculatedResults.variance = calculateVariance(dataArray);
                    break;
                case 'standardDeviation':
                    calculatedResults.standardDeviation = calculateStandardDeviation(dataArray);
                    break;
                case 'sum':
                    calculatedResults.sum = calculateSum(dataArray);
                    break;
                case 'count':
                    calculatedResults.count = dataArray.length;
                    break;
                default:
                    break;
            }
        });

        setResult(calculatedResults);
    };

    const calculateMean = (data) => {
        const sum = data.reduce((acc, value) => acc + value, 0);
        return +parseFloat(sum / data.length).toFixed(2);
    };

    const calculateSum = (data) => {
        const sum = data.reduce((acc, value) => acc + value, 0);
        return +parseFloat(sum).toFixed(2);
    };

    const calculateVariance = (data) => {
        const mean = calculateMean(data);
        let squaredDifference = 0;
        for (let i = 0; i < data.length; i++) {
            squaredDifference += parseFloat((data[i] - mean) * (data[i] - mean));
        }
        return +parseFloat(squaredDifference / data.length).toFixed(2);
    };

    const calculateStandardDeviation = (data) => {
        const variance = calculateVariance(data);
        return +Math.sqrt(variance).toFixed(2)
    };

    const calculateMedian = (data) => {
        const sortedData = data.sort((a, b) => a - b);
        const middle = Math.floor(sortedData.length / 2);
        if (sortedData.length % 2 === 0) {
            return +parseFloat((sortedData[middle - 1] + sortedData[middle]) / 2.0).toFixed(2);
        } else {
            return sortedData[middle];
        }
    };

    const calculateMode = (data) => {
        const frequencyMap = {};
        data.forEach((value) => {
            frequencyMap[value] = (frequencyMap[value] || 0) + 1;
        });
        let mode = '';
        let maxFrequency = 0;
        for (const value in frequencyMap) {
            if (frequencyMap[value] > maxFrequency) {
                mode = value + ",";
                maxFrequency = frequencyMap[value];
            } else if (frequencyMap[value] === maxFrequency) {
                mode += value + ",";
            }
        }
        if (mode.length)
            mode = mode.slice(0, -1)
        return mode.split(',').length === data.length ? 'No mode' : mode;
    };

    const calculateRange = (data) => {
        return +parseFloat(Math.max(...data) - Math.min(...data)).toFixed(2);
    };
    const isResultAvailable = Object.keys(result).length == selectedCalculations.length && selectedCalculations.length !== 0;
    return (
        <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
            <Typography variant="h4" gutterBottom>
                Statistics Calculator
            </Typography>
            <TextField
                label="Enter data (comma-separated)"
                variant="outlined"
                fullWidth
                value={data}
                onChange={(e) => setData(e.target.value)}
                sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
            />
            <FormControl variant="outlined" fullWidth sx={{ marginTop: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <InputLabel>Select Calculations</InputLabel>
                <Select
                    multiple
                    value={selectedCalculations}
                    onChange={(e) => setSelectedCalculations(e.target.value)}
                    label="Select Calculations"
                    renderValue={(selected) => selected.join(', ')}
                >
                    <MenuItem value="mean">Mean</MenuItem>
                    <MenuItem value="median">Median</MenuItem>
                    <MenuItem value="mode">Mode</MenuItem>
                    <MenuItem value="range">Range</MenuItem>
                    <MenuItem value="variance">Variance</MenuItem>
                    <MenuItem value="standardDeviation">Standard Devation</MenuItem>
                    <MenuItem value="sum">Sum of elements</MenuItem>
                    <MenuItem value="count">Count of elements</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleCalculate} sx={{ marginTop: '1rem' }}>
                Calculate
            </Button>
            {isResultAvailable &&
                <Box mt={3}>
                    <Paper elevation={3} sx={{ maxHeight: '300px', overflowY: 'auto', padding: '16px' }}>
                        {Object.keys(result).map((calculation) => (
                            <div key={calculation}>
                                <Typography variant="h6">{calculation.charAt(0).toUpperCase() + calculation.slice(1)}:</Typography>
                                <Typography variant="body1">{result[calculation]}</Typography>
                                <Divider sx={{ marginY: '8px' }} />
                            </div>
                        ))}
                    </Paper>
                </Box>
            }
        </Container>
    );
}

export default StatisticsCalculator;
