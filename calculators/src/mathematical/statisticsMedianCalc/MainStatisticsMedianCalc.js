import React, { useState } from 'react';
import { Container, Typography, TextField, Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material';

function MainStatisticsMedianCalc() {
  const [tableData, setTableData] = useState([
    { range: '10-20', count: 10 },
    { range: '21-30', count: 30 }, // Cumulative frequency is provided here.
  ]);

  const [numberOfRows, setNumberOfRows] = useState(2);
  const [useCumulativeFrequency, setUseCumulativeFrequency] = useState(false);
  const [useRange, setUseRange] = useState(true);
  const [ans, setAns] = useState();

  const calculateMedian = (tableData) => {
    let data = [];

    tableData.forEach((row) => {
      if (useRange) {
        const range = row.range.split('-');
        const start = parseInt(range[0]);
        const end = parseInt(range[1]);
        if (useCumulativeFrequency) {
          let halfTotal = row.count / 2; // Calculate half of the total cumulative frequency

          if (row.count >= halfTotal) {
            // If the cumulative frequency is greater than or equal to half the total, consider this value.
            data.push((start + end) / 2); // Use the midpoint of the range.
          }
        } else {
          // If not using cumulative frequency, create an array with the values within the range.
          for (let i = 0; i < row.count; i++) {
            data.push(start + (i / (row.count - 1)) * (end - start));
          }
        }
      } else {
        if (useCumulativeFrequency) {
          let halfTotal = row.count / 2; // Calculate half of the total cumulative frequency

          if (row.count >= halfTotal) {
            // If the cumulative frequency is greater than or equal to half the total, consider this value.
            
            data.push(parseInt(row.range)); // Convert the value to a number.
          }
        } else {
          // If not using range, simply create an array with the values and their respective frequencies.
          for (let i = 0; i < row.count; i++) {
            data.push(parseInt(row.range)); // Convert the value to a number.
          }
        }
      }
    });

    // Sort the data.
    data.sort((a, b) => a - b);

    let median;
    const middle = Math.floor(data.length / 2);

    if (data.length % 2 === 0) {
      // If the data set has an even number of values, take the average of the two middle values.
      median = parseInt((data[middle - 1] + data[middle]) / 2);
    } else {
      // If the data set has an odd number of values, take the middle value.
      median = data[middle];
    }

    setAns(median);
    return median;
  };

  const generateRows = () => {
    const newTableData = [];
    for (let i = 0; i < numberOfRows; i++) {
      newTableData.push(useRange ? { range: '21-30', count: 20 } : { range: 'Value', count: 20 });
    }

    setTableData(newTableData);
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
      <Typography pt={1} variant="h5" sx={{ textAlign: 'center' }}>
        Statistics Median Calculator
      </Typography>
      <hr />
      <br />

      <div>
        <TextField style={{ marginRight: '4px' }}
          type="number"
          label="Number of Classes"
          value={numberOfRows}
          onChange={(event) => setNumberOfRows(event.target.value)}
        />
        <label style={{ marginLeft: '8px' }}>
          Use Cumulative Frequency
          <input
            type="checkbox"
            style={{ width: '20px', height: '20px' }}
            checked={useCumulativeFrequency}
            onChange={() => setUseCumulativeFrequency(!useCumulativeFrequency)}
          />
        </label>
        
        <label style={{ marginLeft: '30px' }}>
          Use Range
          <input
            type="checkbox"
            style={{ width: '20px', height: '20px' }}
            checked={useRange}
            onChange={() => setUseRange(!useRange)}
          />
        </label>
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={generateRows}>
          Number of Groups/Classes
        </Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{useRange ? 'Range' : 'Value'}</TableCell>
              <TableCell>Count (Cumulative Frequency if checked)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell key={index}>
                  <TextField
                    type="text"
                    value={row.range}
                    onChange={(event) => {
                      const newTableData = [...tableData];
                      newTableData[index].range = event.target.value;
                      setTableData(newTableData);
                    }}
                  />
                </TableCell>
                <TableCell key={index}>
                  <TextField
                    type="number"
                    value={row.count}
                    onChange={(event) => {
                      const newTableData = [...tableData];
                      newTableData[index].count = event.target.value;
                      setTableData(newTableData);
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <br />
        <Button variant="contained" color="primary" onClick={() => calculateMedian(tableData)}>
          Calculate Median
        </Button>
        <br />
        <br />
        <p>Median: {ans}</p>
      </div>
    </Container>
  );
}

export default MainStatisticsMedianCalc;
