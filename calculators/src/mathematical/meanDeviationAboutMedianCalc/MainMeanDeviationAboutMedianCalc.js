import React, { useState } from 'react';
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Button,
} from '@mui/material';

/**
 * MainMeanDeviationAboutMedianCalc component.
 * @returns {JSX.Element} React component
 */
function MainMeanDeviationAboutMedianCalc() {
  // State for the data in the table
  const [data, setData] = useState([
    { ci1: 0, ci2: 0, frequencies: 0 },
  ]);

  // State to store the calculation result
  const [result, setResult] = useState(null);

  // Function to handle changes in table cells
  const handleCellChange = (e, rowIndex, columnName) => {
    const newData = [...data];

    var newValEntry = 0;

    if (e.target.value === "") {
      newValEntry = 0;
    } else {
      newValEntry = parseFloat(e.target.value); // Parse as a floating-point number
    }
    newData[rowIndex][columnName] = newValEntry;
    setData(newData);
  };

  // Function to handle clicks in table cells
  const handleCellClick = (e) => {
    if (e.target.value === "0") {
      e.target.value = "";
    }
  };

  // Function to add a new row to the table
  const addNewRow = () => {
    setData([
      ...data,
      { ci1: 0, ci2: 0, frequencies: 0 } // Add a new row with default values
    ]);
  };

  // Function to delete the last row from the table
  const deleteRow = () => {
    if (data.length > 1) {
      const newData = [...data];
      newData.pop(); // Remove the last row
      setData(newData);
    }
  };

  // Function to reset the table to a single row with default values
  const reset = () => {
    setData([
      { ci1: 0, ci2: 0, frequencies: 0 } // Reset to a single row with default values
    ]);
    setResult(null);
  };

  // Function to calculate mean deviation
  const calculateMeanDeviation = () => {
    const ci1Array = data.map((row) => row.ci1);
    const ci2Array = data.map((row) => row.ci2);
    const fArray = data.map((row) => row.frequencies);

    // Ensure all arrays are of the same length
    const maxLength = Math.max(ci1Array.length, ci2Array.length, fArray.length);

    // Fill arrays with 0 to match maxLength
    while (ci1Array.length < maxLength) ci1Array.push(0);
    while (ci2Array.length < maxLength) ci2Array.push(0);
    while (fArray.length < maxLength) fArray.push(0);

    const result = meanDeviationHandler(ci1Array, ci2Array, fArray);
    setResult(result);
  };

  // Function to calculate mean deviation based on input data (Main algorithm)
  const meanDeviationHandler = (ci1, ci2, f) => {

    // 1. *** creating cumulative frequency array ***
    let cf = []; 
    let cfsum = f[0];
    cf.push(cfsum);

    for (let i = 1; i < f.length; i++) {
      cfsum += f[i];
      cf.push(cfsum);
    }

    // 2. *** calculating the required values for finding the median ***
    const N = cf[cf.length - 1];
    const N_2 = (N / 2).toFixed(2);

    // 3. *** finding and getting the required values from median class ***

    var medianIndex = 0;
    while (cf[medianIndex] <= N_2) { // median class corresponding to cumulative frequency <= N/2
      medianIndex++;
    }
    
    // 4. *** getting variables from median class to embed in median finding formula ***
    var median_l = ci1[medianIndex]; 
    var median_f = f[medianIndex];
    var median_c = cf[medianIndex - 1]; // finding value just above median class, so medianIndex-1
    var median_h = ci2[0] - ci1[0];

    var median = (median_l + (((N_2 - median_c) / median_f) * median_h));

    // 5. *** finding mid point which is |xi| column in the calc table ***
    var mid = [];
    for (let i = 0; i < ci1.length; i++) {
      let midpt = (ci2[i] + ci1[i]) / 2;
      mid.push(midpt);
    }

    // 5. *** finding |xi - md| column in the calc table ***
    var mid_md_dist = [];
    for (let i = 0; i < mid.length; i++) {
      mid_md_dist.push(Math.abs(median - mid[i]));
    }

    // 6. *** finding frequency * |xi - md| column in the calc table ***
    var freq_dist = [];
    for (let i = 0; i < mid_md_dist.length; i++) {
      freq_dist.push(mid_md_dist[i] * f[i]);
    }

    // 7. *** summming up |xi - md| column in the calc table ***
    var freq_dist_sum = 0;
    for (let i = 0; i < freq_dist.length; i++) {
      freq_dist_sum += freq_dist[i];
    }

    // 8. *** final calculation ***
    const mean_deviation_abt_median = (freq_dist_sum / N).toFixed(2);

    // returning the answer
    return mean_deviation_abt_median;

  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
      <Typography pt={1} variant='h5' sx={{ textAlign: "center", fontFamily: 'KaTeX_Math' }}>Mean Deviation about Median Calculator</Typography>
      <hr />
      <br />

      <div>
        <Table sx={{ border: '1px solid #ccc' }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{textAlign: 'center', fontFamily: 'KaTeX_Math', fontSize:'20px', fontWeight: 'bold', borderRight: '1px solid #ccc', paddingRight: '8px'}}>
                Class Interval<br />Lower Limit
              </TableCell>
              <TableCell sx={{textAlign: 'center', fontFamily: 'KaTeX_Math', fontSize:'20px', fontWeight: 'bold', borderRight: '1px solid #ccc', paddingRight: '8px'}}>
                Class Interval<br />Upper Limit
              </TableCell>
              <TableCell sx={{textAlign: 'center', fontFamily: 'KaTeX_Math', fontSize:'20px', fontWeight: 'bold'}}>
                Frequency
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell sx={{textAlign:'center', borderRight: '1px solid #ccc'}}>
                  <TextField
                    type="number"
                    step="0.01" // Allows input of decimal values
                    value={row.ci1}
                    onClick={handleCellClick}
                    onChange={(e) => handleCellChange(e, rowIndex, "ci1")}
                  />
                </TableCell>
                <TableCell sx={{textAlign:'center', borderRight: '1px solid #ccc'}}>
                  <TextField
                    type="number"
                    step="0.01" // Allows input of decimal values
                    value={row.ci2}
                    onClick={handleCellClick}
                    onChange={(e) => handleCellChange(e, rowIndex, "ci2")}
                  />
                </TableCell>
                <TableCell sx={{textAlign:'center'}}>
                  <TextField
                    type="number"
                    step="0.01" // Allows input of decimal values
                    value={row.frequencies}
                    onClick={handleCellClick}
                    onChange={(e) => handleCellChange(e, rowIndex, "frequencies")}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems:'center' }}>
        <div>
          <Button variant="contained" color="primary" onClick={addNewRow}>
            +
          </Button>
        </div>
        <div>
          <Button variant="contained" color="secondary" onClick={reset}>
            Reset
          </Button>
        </div>
        <div>
          <Button variant="contained" color="primary" onClick={deleteRow}>
            -
          </Button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', marginTop: '60px' }}>
        <Button variant="contained" color="primary" onClick={calculateMeanDeviation}>
          Calculate
        </Button>

        <div style={{margin:'60px'}}>
          {
            result !== null && result !== NaN ? (
              <Typography variant="h6" style={{
                lineHeight: '1.5',
                fontFamily: 'KaTeX_Math',
                textAlign: 'center',
                fontSize:'25px'
              }}>
                Mean Deviation about the Median:&nbsp;&nbsp;{result}
              </Typography>
            ) : (
              <Typography variant="h6" style={{
                lineHeight: '1.5',
                fontFamily: 'KaTeX_Math',
                textAlign: 'center',
                fontSize:'25px'
              }}>
                Check if the input is valid and complete before calculation !
              </Typography>
            )
          }
        </div>
      </div>
    </Container>
  );
}

export default MainMeanDeviationAboutMedianCalc;
