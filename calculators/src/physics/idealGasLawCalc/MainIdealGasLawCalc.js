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

function MainIdealGasLawCalc() {
const [pressure, setPressure] = useState("");
const [volume, setVolume] = useState("");
const [temperature, setTemperature] = useState("");
const [gasConstant, setGasConstant] = useState("8.314");

// Function to calculate the number of moles
const calculateMoles = () => {
if (!isNaN(pressure) && !isNaN(volume) && !isNaN(temperature) && !isNaN(gasConstant)) {
const moles = (pressure * volume) / (gasConstant * temperature);
return moles.toFixed(2); // Limiting to 2 decimal places
} else {
return "";
}
};

useEffect(() => {
calculateMoles();
}, [pressure, volume, temperature, gasConstant]);

return (
<Container
maxWidth="lg"
sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
>
<Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
Ideal Gas Law Calculator
</Typography>
<hr />
<br />
<Container maxWidth="sm">
{/* Input textfield for pressure */}
<TextField
label="Pressure (Pa)"
fullWidth
variant="outlined"
value={pressure}
onChange={(e) => setPressure(e.target.value)}
/>

    {/* Input textfield for volume */}
    <TextField
      label="Volume (m³)"
      fullWidth
      variant="outlined"
      value={volume}
      onChange={(e) => setVolume(e.target.value)}
    />

    {/* Input textfield for temperature */}
    <TextField
      label="Temperature (K)"
      fullWidth
      variant="outlined"
      value={temperature}
      onChange={(e) => setTemperature(e.target.value)}
    />

    {/* Select dropdown for gas constant */}
    <Select
      labelId="gas-constant-label"
      id="gas-constant-select"
      value={gasConstant}
      label="Gas Constant"
      fullWidth
      onChange={(e) => setGasConstant(e.target.value)}
    >
      <MenuItem value="8.314">J/(mol·K)</MenuItem>
      <MenuItem value="0.0821">atm·L/(mol·K)</MenuItem>
    </Select>

    {/* Button to calculate moles */}
    <Button
      variant="contained"
      color="primary"
      fullWidth
      style={{ marginTop: "20px", marginBottom: "20px" }}
    >
      Calculate Moles
    </Button>

    {/* Display the number of moles */}
    <Typography
      variant="h6"
      align="center"
      style={{ marginTop: "20px" }}
    >
      Moles: {calculateMoles()}
    </Typography>
  </Container>
</Container>
);
}

export default MainIdealGasLawCalc;
