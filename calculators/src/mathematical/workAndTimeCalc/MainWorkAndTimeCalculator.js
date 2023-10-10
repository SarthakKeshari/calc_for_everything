import React, {useState} from 'react';
import { TextField, Button, Box, Radio, RadioGroup, FormControlLabel, Container, Typography } from '@mui/material';

function MainWorkAndTimeCalculator(){
    
  const [numWorkers, setNumWorkers] = useState(2);
  const [workerTimes, setWorkerTimes] = useState(Array(2).fill(1)); // Default to 1 to avoid division by 0
  const [totalTime, setTotalTime] = useState(null);
  const [selectedTimeUnit, setSelectedTimeUnit] = useState('hours'); // Default to hours

  const handleNumWorkersChange = (event) => {
    const num = parseInt(event.target.value, 10);
    if (num === 2 || num === 3 || num === 4) {
      setNumWorkers(num);
      setWorkerTimes(Array(num).fill(1)); // Reset values to 1 when the number of workers changes
      setTotalTime(null); // Reset totalTime when the number of workers changes
    }
  };

  const handleWorkerTimeChange = (event, index) => {
    const time = parseInt(event.target.value, 10);
    const updatedWorkerTimes = [...workerTimes];
    updatedWorkerTimes[index] = time;
    setWorkerTimes(updatedWorkerTimes);
    setTotalTime(null); 
  };

  const handleTimeUnitChange = (event) => {
    setSelectedTimeUnit(event.target.value);
  };

  const calculateTotalTime = () => {
    const totalInverseTime = workerTimes.reduce((acc, time) => acc + 1 / time, 0);
    const totalTimeTaken = 1 / totalInverseTime;
    setTotalTime(totalTimeTaken.toFixed(2)); // Rounded to 2 decimal places
  };

    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Work And Time Calculator</Typography>
            <hr/>
            <Box sx={{ padding: '20px' }}>
              <TextField
                label="Number of Workers (2, 3, or 4 only)"
                type="number"
                value={numWorkers}
                onChange={handleNumWorkersChange}
                inputProps={{ min: 2, max: 4 }}
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <br />
              <RadioGroup row value={selectedTimeUnit} onChange={handleTimeUnitChange}>
                <FormControlLabel value="hours" control={<Radio />} label="Hours" />
                <FormControlLabel value="days" control={<Radio />} label="Days" />
              </RadioGroup>
              <br />
              {Array.from({ length: numWorkers }, (_, index) => (
                <div key={index}>
                  <TextField
                    label={`Time taken by Worker ${index + 1} (${selectedTimeUnit === 'days' ? 'days' : 'hours'})`}
                    type="number"
                    value={workerTimes[index]}
                    onChange={(e) => handleWorkerTimeChange(e, index)}
                    inputProps={{ min: 1 }}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                </div>
              ))}
              <Button variant="contained" onClick={calculateTotalTime} sx={{ marginTop: 2 }}>
                Submit
              </Button>
              <br />
              {totalTime !== null && <div>Total time taken: {totalTime} {selectedTimeUnit}</div>}
            </Box>

        </Container>
    )
}

export default MainWorkAndTimeCalculator;