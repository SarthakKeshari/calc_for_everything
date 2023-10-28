import React, { useState } from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";

function MainTorqueCalc() {
  //all the useState hooks
  const [distance, setDistance] = useState("");
  const [force, setForce] = useState("");
  const [angle, setAngle] = useState("90");
  const [torque, setTorque] = useState("");

  //function to calculate round off upto given decimals
  function round(value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
  }
  const pi = 3.14159;
  //function to calculate Time Dilation
  const handleCalculateTorque = () => {
    //checks for valid input
    if (!isNaN(distance) && !isNaN(force) && !isNaN(angle)) {
      const sinValue = round(Math.sin((angle / 180) * pi), 4);
      const answer = force * distance * sinValue;
      setTorque(answer);
    } else {
      if (isNaN(distance)) setDistance("Must be a number");
      if (isNaN(force)) setForce("Must be a number");
      if (isNaN(angle)) setAngle("Must be a number");
      setTorque("");
    }
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}>
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Torque Calculator
      </Typography>
      <hr />
      <br />
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {/* input textfield for Distance */}
            <TextField label="Distance(m)" fullWidth variant="outlined" value={distance} onChange={(e) => setDistance(e.target.value)} />
          </Grid>
          <Grid item xs={4}>
            {/* input textfield for Force */}
            <TextField label="Force(N)" fullWidth variant="outlined" value={force} onChange={(e) => setForce(e.target.value)} />
          </Grid>
          <Grid item xs={4}>
            {/* input textfield for Angle */}
            <TextField label="Angle(θ°)" fullWidth variant="outlined" value={angle} onChange={(e) => setAngle(e.target.value)} />
          </Grid>
        </Grid>
        {/* button to execute handleCalculateTorque function */}
        <Button variant="contained" color="primary" fullWidth style={{ marginTop: "20px" }} onClick={handleCalculateTorque}>
          Calculate Torque
        </Button>

        <Typography variant="h6" align="center" style={{ marginTop: "20px" }}>
          Torque : {torque !== "" ? torque + " sec" : ""}
        </Typography>
      </Container>
    </Container>
  );
}

export default MainTorqueCalc;
