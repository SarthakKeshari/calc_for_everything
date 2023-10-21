import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

function MainPipesAndCisternsCalc() {
  const [numTaps, setNumTaps] = useState(1);
  const [flowRate, setFlowRate] = useState(10);
  const [functionType, setFunctionType] = useState("fill");
  const [tankCapacity, setTankCapacity] = useState(1000);
  const [results, setResults] = useState(null);

  const calculateTime = () => {
    // Calculate time for filling, emptying, half-full, and full cistern
    const fillTime = tankCapacity / (numTaps * flowRate);
    const emptyTime = tankCapacity / (numTaps * flowRate);
    const halfFullTime = tankCapacity / (2 * numTaps * flowRate);
    const fullTime = tankCapacity / (numTaps * flowRate);

    setResults({
      fillTime,
      emptyTime,
      halfFullTime,
      fullTime,
    });
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Pipes And Cisterns Calculator
      </Typography>
      <hr />
      <br />
      {/* Write your code here */}

      <form>
        <TextField
          label="Number of Taps"
          type="number"
          fullWidth
          value={numTaps}
          onChange={(e) => setNumTaps(e.target.value)}
        />
        <br />
        <br />
        <TextField
          label="Flow Rate per Tap"
          type="number"
          fullWidth
          value={flowRate}
          onChange={(e) => setFlowRate(e.target.value)}
        />
        <br />
        <br />
        <FormControl>
          {/* <InputLabel>Function</InputLabel> */}
          <Select
            value={functionType}
            onChange={(e) => setFunctionType(e.target.value)}
          >
            <MenuItem value="fill">Filling</MenuItem>
            <MenuItem value="empty">Emptying</MenuItem>
          </Select>
        </FormControl>
        <br />
        <br />
        <TextField
          label="Tank Capacity"
          type="number"
          fullWidth
          value={tankCapacity}
          onChange={(e) => setTankCapacity(e.target.value)}
        />
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={calculateTime}>
          Calculate
        </Button>
      </form>

      {results && (
        <div>
          <h2>Results:</h2>
          <p>Time to Fill: {results.fillTime} hours</p>
          <p>Time to Empty: {results.emptyTime} hours</p>
          <p>Time to Half-Full: {results.halfFullTime} hours</p>
          <p>Time to Full: {results.fullTime} hours</p>
        </div>
      )}

      {/* End your code here */}
    </Container>
  );
}

export default MainPipesAndCisternsCalc;
