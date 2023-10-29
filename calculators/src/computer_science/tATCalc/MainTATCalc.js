import React, { useState } from 'react';
import { Container, Typography, Card, TextField, Button } from '@mui/material';

const MainTATCalc = () => {
    // State variables to manage input and results
    const [processCount, setProcessCount] = useState({ count: '' });
    const [processes, setProcesses] = useState([{ arrivalTime: '', completionTime: '' }]);
    const [results, setResults] = useState('');

    // Handle change in the number of processes
    const handleProcessCountChange = (e) => {
        const count = parseInt(e.target.value);
        if (!isNaN(count) && count > 0) {
            setProcessCount(count);
            const newProcesses = Array.from({ length: count }, () => ({ arrivalTime: '', completionTime: '' }));
            setProcesses(newProcesses);
        }
    };

    // Handle change in arrival time for a process
    const handleArrivalTimeChange = (e, index) => {
        const newProcesses = [...processes];
        newProcesses[index].arrivalTime = e.target.value;
        setProcesses(newProcesses);
    };

    // Handle change in completion time for a process
    const handleCompletionTimeChange = (e, index) => {
        const newProcesses = [...processes];
        newProcesses[index].completionTime = e.target.value;
        setProcesses(newProcesses);
    };

    // Calculate Turnaround Time (TAT) for the processes
    const calculateTAT = () => {
        const tatArray = [];
        let totalTAT = 0;

        // Sort processes by arrival time in ascending order
        const sortedProcesses = processes.slice().sort((a, b) => parseFloat(a.arrivalTime) - parseFloat(b.arrivalTime));

        // Initialize the completion time of the first process with its arrival time
        let currentTime = parseFloat(sortedProcesses[0].arrivalTime);

        // Calculate completion time and TAT for each process
        for (let i = 0; i < sortedProcesses.length; i++) {
            const arrivalTime = parseFloat(sortedProcesses[i].arrivalTime);
            const completionTime = parseFloat(sortedProcesses[i].completionTime);
            if (arrivalTime < 0 || completionTime < 0 || isNaN(arrivalTime) || isNaN(completionTime)) {
                break; // Exit if invalid input
            }

            // If the current time is before the arrival time, set it to the arrival time
            if (currentTime < arrivalTime) {
                currentTime = arrivalTime;
            }

            // Calculate TAT for the current process
            const TATi = currentTime + completionTime - arrivalTime;

            tatArray.push(`P${i + 1}: ${TATi}`);
            totalTAT += TATi;

            // Update the current time for the next process
            currentTime += completionTime;
        }

        if (tatArray.length > 0) {
            const averageTAT = totalTAT / tatArray.length;
            setResults(`TAT values: ${tatArray.join(', ')}, Total TAT: ${totalTAT}, Average TAT: ${averageTAT}`);
        } else {
            setResults('Please enter valid arrival and completion times.');
        }
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
            <Typography pt={1} variant="h5" sx={{ textAlign: 'center' }}>
                TAT Calculator
            </Typography>
            <hr />

            <Card
                sx={{
                    backgroundColor: 'inherit',
                    margin: '5px',
                    padding: '5px',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            margin: '10px',
                            padding: '10px',
                            boxSizing: 'border-box',
                        }}
                    >
                        <Typography variant="h6" style={{ fontSize: '1.5rem', lineHeight: '1.5', fontFamily: 'KaTeX_Math', textAlign: 'center' }}>
                            Number of Processes
                        </Typography>
                        <TextField
                            sx={{ m: '20px' }}
                            label="Process Count"
                            variant="filled"
                            required
                            value={processCount.count}
                            onChange={handleProcessCountChange}
                        />
                    </div>
                </div>

                {processes.map((process, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '10px',
                            padding: '10px',
                            boxSizing: 'border-box',
                        }}
                    >
                        <Typography variant="h6" style={{ fontSize: '1.5rem', lineHeight: '1.5', fontFamily: 'KaTeX_Math', textAlign: 'center' }}>
                            Process P{index + 1}
                        </Typography>
                        <TextField
                            sx={{ m: '20px' }}
                            label={`Arrival Time P${index + 1}`}
                            variant="filled"
                            required
                            value={process.arrivalTime}
                            onChange={(e) => handleArrivalTimeChange(e, index)}
                        />
                        <TextField
                            sx={{ m: '20px' }}
                            label={`Completion Time P${index + 1}`}
                            variant="filled"
                            required
                            value={process.completionTime}
                            onChange={(e) => handleCompletionTimeChange(e, index)}
                        />
                    </div>
                ))}

                <div style={{ alignSelf: 'center', margin: '10px' }}>
                    <Button variant="contained" color="primary" onClick={calculateTAT}>
                        Calculate TAT
                    </Button>
                </div>

                <div style={{ alignSelf: 'center', margin: '30px' }}>
                    <Typography variant="h6" style={{
                        lineHeight: '1.5',
                        fontFamily: 'KaTeX_Math',
                        textAlign: 'center',
                        fontSize: '1.5rem',
                    }}>
                        {results}
                    </Typography>
                </div>
            </Card>
        </Container>
    );
};

export default MainTATCalc;