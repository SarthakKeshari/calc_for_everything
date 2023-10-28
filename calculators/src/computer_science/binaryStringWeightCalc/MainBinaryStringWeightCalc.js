import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";

const containerStyle = {
  /* Original background */
  // background: "linear-gradient(to bottom, #4481eb, #04befe)",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const formContainerStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", 
  display:"flex" ,
  justifyContent:"space-around"
};

const buttonStyle = {
  backgroundColor: "#ff5e3a",
  color: "#fff",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "#ff4d26",
  }, 
  marginTop:"4px"
};

function countOnesInString(str) {
  if (/[^01]/.test(str)) {
    alert("Error: Input must contain only '0' and '1' characters.");
    return false;
  }
  return true;
}

function numberOfOnes(str) {
  const onesMatches = str.match(/1/g);
  return onesMatches ? onesMatches.length : 0;
}

function MainBinaryStringWeightCalc() {
  const [helperText, setHelper] = useState("");
  const [ans, setAns] = useState("");

  function handleUserInput(e) {
    setHelper("");
    const { value } = e.target;
    setAns(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!ans) {
      setHelper("Please write something");
      return;
    }
    if (!countOnesInString(ans)) return;

    const finalAnswer = numberOfOnes(ans);
    setHelper("Ans is: " + finalAnswer);
  }

  return (
    <Container maxWidth="md" sx={containerStyle}>
      <Typography variant="h4" gutterBottom sx={{ color: "#fff" }}>
        Binary String Weight Calculator
      </Typography>
      <Container maxWidth="sm" sx={formContainerStyle}>
        <FormControl onSubmit={handleSubmit}>
          <InputLabel htmlFor="ans">Enter a Binary String</InputLabel>
          <Input
            id="ans"
            name="ans"
            value={ans}
            onChange={handleUserInput}
            placeholder="e.g., 1100101"
          />
          <Button
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            sx={buttonStyle}
          >
            Calculate
          </Button>
        </FormControl>
        {helperText ? (
          <Typography variant="h6" mt={2}>
            {helperText}
          </Typography>
        ):(
            
          <Typography variant="h6" mt={2}>
            Enter String
          </Typography>
        )}
      </Container>
    </Container>
  );
}

export default MainBinaryStringWeightCalc;
