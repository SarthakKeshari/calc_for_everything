import React, { useState } from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";

function MainProjectileRangeCalc(){
  //all the useState hooks
  const [velocity, setVelocity] = useState("");
  const [height, setHeight] = useState("");
  const [angle, setAngle] = useState("");
  const [range, setRange] = useState("");

  //function to calculate round off upto given decimals
  function round(value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
  }
  const pi = 3.14159;
  const g = 9.80665;
  //function to calculate range of projectile
  const handleCalculateRange = () => {
    //checks for valid input
    if (
      !isNaN(velocity) &&
      !isNaN(height) &&
      !isNaN(angle) &&
      0 <= angle &&
      angle <= 90 &&
      height >= 0
    ) {
      const cosValue = round(Math.cos((angle / 180) * pi), 4);
      const sinValue = round(Math.sin((angle / 180) * pi), 4);
      const answer =
        ((velocity * cosValue) / g) *
        (velocity * sinValue +
          Math.sqrt(
            velocity * velocity * sinValue * sinValue + 2 * g * height
          ));
      setRange(answer);
    } else {
      if (isNaN(velocity)) setVelocity("Must be a number");
      if (isNaN(height)) setHeight("Must be a number");
      if (isNaN(angle)) setAngle("Must be a number");
      if (height < 0) setHeight("Must be positive");
      if (angle < 0 || angle > 90) setAngle("Valid range:0 to 90°");
      setRange("");
    }
  };
  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Projectile Range Calculator
      </Typography>
      <hr />
      <br />
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {/* input textfield for Velocity */}
            <TextField
              label="Velocity(m/s)"
              fullWidth
              variant="outlined"
              value={velocity}
              onChange={(e) => setVelocity(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            {/* input textfield for Height */}
            <TextField
              label="Initial Height(h)"
              fullWidth
              variant="outlined"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            {/* input textfield for Angle */}
            <TextField
              label="Angle(θ°)"
              fullWidth
              variant="outlined"
              value={angle}
              onChange={(e) => setAngle(e.target.value)}
            />
          </Grid>
        </Grid>
        {/* button to execute handleCalculateRange function */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "20px" }}
          onClick={handleCalculateRange}
        >
          Calculate Projectile Range
        </Button>

        <Typography variant="h6" align="center" style={{ marginTop: "20px" }}>
          Projectile Range : {range !== "" ? range + " meter" : ""}
        </Typography>
      </Container>
    </Container>
  );
}

export default MainProjectileRangeCalc;