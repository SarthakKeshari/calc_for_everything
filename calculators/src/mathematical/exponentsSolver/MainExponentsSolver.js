import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

function MainExponentsSolver() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const calculateExponent = () => {
    try {
      const inputValue = parseFloat(input);
      const exponent = Math.exp(inputValue);
      setResult(`${exponent}`);
    } catch (error) {
      setResult("Invalid input. Please enter a valid number.");
    }
  };

  return (
    <>
      <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          label="Enter a number"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{ width: "500px" }}
        />
      </Box>

      <Box mt={2} sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={calculateExponent}
        >
          Calculate Exponent
        </Button>
      </Box>

      <Box mt={2} sx={{ textAlign: "center" }}>
        <Typography variant="h6">Result: {result}</Typography>
      </Box>
    </>
  );
}

export default MainExponentsSolver;
