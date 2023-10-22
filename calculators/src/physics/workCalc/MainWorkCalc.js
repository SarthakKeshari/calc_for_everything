import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";

function MainWorkCalc() {
  const [force, setForce] = useState("");
  const [displacement, setDisplacement] = useState("");
  const [work, setWork] = useState("");
  const [unit, setUnit] = useState("joules");

  //function to calculate work
  const handleCalculateWork = () => {
    //checks for valid input
    if (!isNaN(force) && !isNaN(displacement)) {
      let answer = 0;
      switch (unit) {
        case "joules":
          answer = force * displacement;
          break;
        case "horsepower-hour":
          answer = (force * displacement) / 2684519.5369;
          break;
        case "newton-metre":
          answer = force * displacement;
          break;
        case "foot-pound":
          answer = force * displacement * 0.737562;
          break;
        case "kilowatt-hour":
          answer = (force * displacement) / 3600000;
          break;
        case "kilo-calories":
          answer = (force * displacement) / 4184;
          break;
      }
      setWork(answer.toString());
    } else {
      setForce("Must be a number");
      setDisplacement("Must be a number");
      setWork("");
    }
  };

  useEffect(() => {
    handleCalculateWork();
  }, [unit]);

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Work Calculator
      </Typography>
      <hr />
      <br />
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {/* input textfield for force */}
            <TextField
              label="Force (N)"
              fullWidth
              variant="outlined"
              value={force}
              onChange={(e) => setForce(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            {/* input textfield for displacement */}
            <TextField
              label="Displacement(m)"
              fullWidth
              variant="outlined"
              value={displacement}
              onChange={(e) => setDisplacement(e.target.value)}
            />
          </Grid>
        </Grid>
        {/* button to execute handleCalculateWork function */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "20px", marginBottom: "20px" }}
          onClick={handleCalculateWork}
        >
          Calculate Work
        </Button>

        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography
              variant="h6"
              align="center"
              style={{ marginTop: "20px" }}
            >
              Work : {work !== "" ? work + " " : ""}
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={unit}
              label="Unit"
              onChange={(e) => {
                setUnit(e.target.value);
              }}
            >
              <MenuItem value={"joules"}>joules</MenuItem>
              <MenuItem value={"horsepower-hour"}>horsepower-hour</MenuItem>
              <MenuItem value={"newton-metre"}>newton-metre</MenuItem>
              <MenuItem value={"foot-pound"}>foot-pound</MenuItem>
              <MenuItem value={"kilowatt-hour"}>kilowatt-hour</MenuItem>
              <MenuItem value={"kilo-calories"}>kilo-calories</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default MainWorkCalc;
