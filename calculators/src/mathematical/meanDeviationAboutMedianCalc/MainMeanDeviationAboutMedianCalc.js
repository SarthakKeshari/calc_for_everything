import React, { useState } from 'react';
import { Container, Typography, Table, TableHead, TableBody, TableRow, TableCell, TextField, Paper, Button, TableContainer } from '@mui/material';

function MainMeanDeviationAboutMedianCalc() {

  const [data, setData] = useState([
    { ci1: 0, ci2: 0, frequencies: 0 },
  ]);

  const [result, setResult] = useState(null);

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

  const handleCellClick = (e) => {
    if (e.target.value === "0") {
      e.target.value = "";
    }
  };

  const addNewRow = () => {
    setData([
      ...data,
      { ci1: 0, ci2: 0, frequencies: 0 } // Add a new row with default values
    ]);
  };

  const deleteRow = () => {
    if (data.length > 1) {
      const newData = [...data];
      newData.pop(); // Remove the last row
      setData(newData);
    }
  };

  const reset = () => {
    setData([
      { ci1: 0, ci2: 0, frequencies: 0 } // Reset to a single row with default values
    ]);
    setResult(null);
  };

  const meanDeviationHandler = (ci1, ci2, f) => {
    let cf = [];
    let cfsum = f[0];
    cf.push(cfsum);

    for (let i = 1; i < f.length; i++) {
      cfsum += f[i];
      cf.push(cfsum);
    }

    const N = cf[cf.length - 1];
    const N_2 = (N / 2).toFixed(2);

    var medianIndex = 0;
    while (cf[medianIndex] <= N_2) {
      medianIndex++;
    }

    var median_l = ci1[medianIndex];
    var median_f = f[medianIndex];
    var median_c = cf[medianIndex - 1];
    var median_h = ci2[0] - ci1[0];

    var median = (median_l + (((N_2 - median_c) / median_f) * median_h));

    var mid = [];
    for (let i = 0; i < ci1.length; i++) {
      let midpt = (ci2[i] + ci1[i]) / 2;
      mid.push(midpt);
    }

    var mid_md_dist = [];
    for (let i = 0; i < mid.length; i++) {
      mid_md_dist.push(Math.abs(median - mid[i]));
    }

    var freq_dist = [];
    for (let i = 0; i < mid_md_dist.length; i++) {
      freq_dist.push(mid_md_dist[i] * f[i]);
    }

    var freq_dist_sum = 0;
    for (let i = 0; i < freq_dist.length; i++) {
      freq_dist_sum += freq_dist[i];
    }

    const mean_deviation_abt_median = (freq_dist_sum / N).toFixed(2);
    return mean_deviation_abt_median;
  };

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

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
      <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Mean Deviation about Median Calculator</Typography>
      <hr />
      <br />

      <div>
      <Table sx={{ border: '1px solid #ccc' }}>
        <TableHead>
            <TableRow>
            <TableCell sx={{textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid #ccc', paddingRight: '8px'}}>
                Class Interval<br />Lower Limit
            </TableCell>
            <TableCell sx={{textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid #ccc', paddingRight: '8px'}}>
                Class Interval<br />Upper Limit
            </TableCell>
            <TableCell sx={{textAlign: 'center', fontWeight: 'bold'}}>
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
            
            {
                result !== null && result!==NaN ? (
                    <Typography variant="h6" style={{ marginTop: "40px" }}>
                        Mean Deviation about Median: {result}
                    </Typography>
                ) : (
                    <Typography variant="h6" style={{ marginTop: "40px" }}>
                        Check if the input is entered right !
                    </Typography>    
                )
            }
        </div>

    </Container>
  );
}

export default MainMeanDeviationAboutMedianCalc;
