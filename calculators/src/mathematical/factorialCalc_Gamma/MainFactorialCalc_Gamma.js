import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { create, all } from "mathjs";

const math = create(all);

function MainFactorialCalc_Gamma() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const calculateFactorial = () => {
    try {
      const inputValue = math.evaluate(input);
      const factorial = math.gamma(inputValue + 1);
      setResult(`${factorial}`);
    } catch (error) {
      setResult("Invalid input. Please enter a valid number.");
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    ><br />
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Factorial Calculator (Gamma)
      </Typography>
      <hr />
      <br />
      <br />
      <br />
      <br />
      <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          label="Enter a number"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{ width: "500px" }}
        />
      </Box>

      <br />
      <br />
      <Box mt={2} sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={calculateFactorial}
        >
          Calculate Factorial
        </Button>
      </Box>

      <Box mt={2} sx={{ textAlign: "center" }}>
        <Typography variant="h6">Result: {result}</Typography>
      </Box>
    </Container>
  );
}

export default MainFactorialCalc_Gamma;
