import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function MainWorkAndTimeCalculator() {
    const [numOfWorkers, setNumOfWorkers] = useState("");
    const [workerTimes, setWorkerTimes] = useState([]);
    const [results, setResults] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    const handleNumOfWorkersChange = (event) => {
        const value = event.target.value;
        setNumOfWorkers(value);
        setShowAlert(false);
    };

    const handleWorkerTimeChange = (index, value) => {
        const newWorkerTimes = [...workerTimes];
        newWorkerTimes[index] = value;
        setWorkerTimes(newWorkerTimes);
    };

    const handleNumOfWorkersSubmit = () => {
        if (!validateNumOfWorkers(numOfWorkers)) {
            setShowAlert(true);
            return;
        }

        setShowAlert(false);
        setWorkerTimes(Array(parseInt(numOfWorkers, 10)).fill(""));
    };

    const calculateTime = () => {
        if (!validateInputs()) {
            setShowAlert(true);
            return;
        }

        const combinations = generateCombinations(workerTimes.length);

        const results = combinations.map((workers) => {
            const timeNeeded = 1 / workers.reduce((acc, worker) => {
                const index = worker.charCodeAt(0) - 'A'.charCodeAt(0);
                return acc + 1 / parseFloat(workerTimes[index]);
            }, 0);

            return `Workers ${workers.join(' and ')} together can complete the task in ${timeNeeded.toFixed(2)} hours.`;
        });

        setResults(results);
    };

    const validateNumOfWorkers = (value) => {
        const numOfWorkersInt = parseInt(value, 10);
        return !isNaN(numOfWorkersInt) && numOfWorkersInt >= 2 && numOfWorkersInt <= 4;
    };

    const validateInputs = () => {
        return (
            validateNumOfWorkers(numOfWorkers) &&
            workerTimes.every((time) => !isNaN(parseFloat(time)) && parseFloat(time) > 0)
        );
    };

    const generateCombinations = (numOfWorkers) => {
        const workers = ['A', 'B', 'C', 'D'].slice(0, numOfWorkers); // Adjust workers based on the number
        const combinations = [];

        for (let i = 2; i <= numOfWorkers; i++) {
            const subset = [];
            generateCombinationHelper(workers, i, 0, subset, combinations);
        }

        return combinations;
    };

    const generateCombinationHelper = (workers, k, start, subset, combinations) => {
        if (k === 0) {
            combinations.push([...subset]);
            return;
        }

        for (let i = start; i < workers.length; i++) {
            subset.push(workers[i]);
            generateCombinationHelper(workers, k - 1, i + 1, subset, combinations);
            subset.pop();
        }
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Work And Time Calculator</Typography>
            <hr />
            <br />

            <Box mb={2}>
                <Typography variant='h6'>Enter Calculator Name:</Typography>
            </Box>

            <Box mb={2}>
                <Typography variant='h6'>Enter the number of workers (2-4):</Typography>
                <TextField
                    type="number"
                    value={numOfWorkers}
                    onChange={handleNumOfWorkersChange}
                />
                <Button variant="contained" onClick={handleNumOfWorkersSubmit} sx={{ ml: 2 }}>Submit</Button>
                {showAlert && !validateNumOfWorkers(numOfWorkers) && (
                    <Typography color="error" variant='body1'>Please enter a valid number of workers (2-4).</Typography>
                )}
            </Box>

            {workerTimes.length > 0 && (
                <div>
                    {[...Array(parseInt(numOfWorkers, 10) || 0).keys()].map((index) => (
                        <div key={index} mb={2}>
                            <Typography variant='h6'>{`Enter the time taken by Worker ${String.fromCharCode('A'.charCodeAt(0) + index)}:`}</Typography>
                            <TextField
                                type="number"
                                value={workerTimes[index]}
                                onChange={(e) => handleWorkerTimeChange(index, e.target.value)}
                            />
                        </div>
                    ))}
                </div>
            )}

            <Box mt={2}>
                <Button variant="contained" onClick={calculateTime}>Calculate</Button>
            </Box>

            {showAlert && !validateInputs() && (
                <Typography color="error" variant='body1'>Please enter valid hours for each worker.</Typography>
            )}

            <div>
                {results.map((result, index) => (
                    <Typography key={index} variant='body1'>{result}</Typography>
                ))}
            </div>
        </Container>
    );
}

export default MainWorkAndTimeCalculator;
