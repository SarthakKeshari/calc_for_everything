import React, { useState } from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import InfoTimeDilationCalc from "./InfoTimeDilationCalc";

function MainTimeDilationCalc() {
  //all the useState hooks
  const [timeInterval, setTimeInterval] = useState("");
  const [observerVelocity, setObserverVelocity] = useState("");
  const [relativeTime, setRelativeTime] = useState("");
  const speedOfLight = 299792458;
  //function to calculate Time Dilation
  const handleCalculateTimeDilation = () => {
    const timeIntervalValue = parseFloat(timeInterval);
    const observerVelocityValue = parseFloat(observerVelocity);

    //checks for valid input
    if (!isNaN(timeIntervalValue) && !isNaN(observerVelocityValue) && timeIntervalValue >= 0 && observerVelocityValue < speedOfLight) {
      setRelativeTime((timeIntervalValue / Math.sqrt(1 - (observerVelocityValue * observerVelocityValue) / (speedOfLight * speedOfLight))).toString());
    } else if (!isNaN(timeIntervalValue) && !isNaN(observerVelocityValue) && timeIntervalValue >= 0 && observerVelocityValue === speedOfLight) {
      setRelativeTime("Infinite");
    } else if (!isNaN(timeIntervalValue) && !isNaN(observerVelocityValue) && timeIntervalValue >= 0 && observerVelocityValue > speedOfLight) {
      setObserverVelocity("Must be less than speed of light");
      setRelativeTime("");
    } else {
      setTimeInterval("Must be a positive number");
    }
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}>
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Time Dilation Calculator
        <InfoTimeDilationCalc />
      </Typography>
      <hr />
      <br />
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {/* input textfield for Time Interval */}
            <TextField label="Time Interval(t)" fullWidth variant="outlined" value={timeInterval} onChange={(e) => setTimeInterval(e.target.value)} />
          </Grid>

          <Grid item xs={6}>
            {/* input textfield for Observer velocity */}
            <TextField label="Observer Velocity(v)" fullWidth variant="outlined" value={observerVelocity} onChange={(e) => setObserverVelocity(e.target.value)} />
          </Grid>
        </Grid>
        {/* button to execute handleCalculateTimeDilation function */}
        <Button variant="contained" color="primary" fullWidth style={{ marginTop: "20px" }} onClick={handleCalculateTimeDilation}>
          Calculate Relative Time
        </Button>

        <Typography variant="h6" align="center" style={{ marginTop: "20px" }}>
          Relative Time : {relativeTime !== "" ? relativeTime + " sec" : ""}
        </Typography>
      </Container>
    </Container>
  );
}

export default MainTimeDilationCalc;
