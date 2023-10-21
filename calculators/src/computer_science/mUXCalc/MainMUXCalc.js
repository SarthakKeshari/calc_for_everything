import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

function MainMUXCalc() {
  const [n, setN] = useState(2); // Default value for n
  const [i, setI] = useState("01"); // Default value for i
  const [f, setF] = useState("");

  const handleNChange = (event) => {
    setN(event.target.value);
  };

  const handleIChange = (event) => {
    setI(event.target.value);
  };

  const calculateF = () => {
    if (i.length <= n) {
      const selectedIndex = parseInt(i, 2);
      if (selectedIndex >= 0 && selectedIndex < Math.pow(2, n)) {
        const inputLines = Array(Math.pow(2, n)).fill(0);
        inputLines[selectedIndex] = 1;
        setF(inputLines.join(" ")); // Output the selected input line
      } else {
        setF("Invalid input string i");
      }
    } else {
      setF("Length of i exceeds n");
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        MUX Calculator
      </Typography>
      <hr />
      <br />
      <TextField
        label="Number of Selection Lines (n)"
        variant="outlined"
        value={n}
        onChange={handleNChange}
      />
      <br />
      <br />
      <TextField
        label="Binary Input String (i)"
        variant="outlined"
        value={i}
        onChange={handleIChange}
      />
      <br />
      <br />
      <Button variant="contained" color="primary" onClick={calculateF}>
        Calculate F
      </Button>
      <br />
      <br />
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        Output F: {f}
      </Typography>
      {f && parseInt(i, 2) >= 0 && parseInt(i, 2) < Math.pow(2, n) && (
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Selected line : D{parseInt(i, 2)}
        </Typography>
      )}
    </Container>
  );
}

export default MainMUXCalc;
