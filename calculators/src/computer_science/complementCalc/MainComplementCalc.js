import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

function MainComplementCalc() {
  const [number, setNumber] = useState("");
  const [base, setBase] = useState("");
  const [nthComplement, setNthComplement] = useState("");

  // Handle changes to the number input field
  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
  };
  // Handle changes to the base input field
  const handleChangeBase = (event) => {
    setBase(event.target.value);
  };
  // Calculate the nth complement of the input number
  const calculateNthComplement = () => {
    if (number === "" || base === "") {
      return;
    }

    const binaryNumber = parseInt(number, base).toString(2);
    let nthComplementBinary = "";

    for (let i = 0; i < binaryNumber.length; i++) {
      if (binaryNumber[i] === "0") {
        nthComplementBinary += "1"; // If digit is 0, complement it to 1
      } else {
        nthComplementBinary += "0"; // If digit is 1, complement it to 0
      }
    }

    const nthComplementDecimal = parseInt(nthComplementBinary, 2);
    const nthComplementInBase = nthComplementDecimal.toString(base);
    setNthComplement(nthComplementInBase);
  };
  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Complement Calculator
      </Typography>
      <hr />
      <br />
      <TextField label="Number" value={number} onChange={handleChangeNumber} />
      <br />
      <br />
      <TextField label="Base" value={base} onChange={handleChangeBase} />
      <br />
      <br />
      <Button variant="contained" onClick={calculateNthComplement}>
        Calculate Nth Complement
      </Button>
      <br />
      <br />
      <Typography variant="h6" sx={{ textAlign: "left" }}>
        Nth Complement: {nthComplement}
      </Typography>
    </Container>
  );
}

export default MainComplementCalc;
