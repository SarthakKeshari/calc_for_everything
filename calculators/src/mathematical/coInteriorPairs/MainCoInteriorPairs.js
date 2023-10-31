import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

function MainCoInteriorPairs(){
  const [angle, setAngle] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    // Assuming the sum of co-interior angles is always 180 degrees
    const otherAngle = 180 - parseFloat(angle);
    setResult(otherAngle.toFixed(2)); 
  };
  return(
    <Container maxWidth="lg" sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}>
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}> Co-Interior Pairs Calculator </Typography>
      <hr />
      <br />
      {/* Write your code here */}

      <TextField
        label="Enter first Angle"
        fullWidth
        value={angle}
        onChange={(e) => setAngle(e.target.value)}
        type="number"
        inputProps={{ step: "any" }}
      />

      <Button variant="contained" color="primary" onClick={handleCalculate}>
        Calculate
      </Button>

      {result !== null && (
        <Box mt={2}>
          <Typography>Second Angle: {result}°</Typography>
        </Box>
      )}

      {/* End your code here */}
    </Container>
  );
}

export default MainCoInteriorPairs;
