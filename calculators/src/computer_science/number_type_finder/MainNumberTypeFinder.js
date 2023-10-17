import React, { useState } from "react";

import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { checkArmstrong } from "./Armstrong";
import { checkKaprekar } from "./Kaprekar";
import { checkAutomorphic } from "./Automorphic";
import { checkPerfect } from "./Perfect";
import { checkAmicable } from "./Amicable";
import { checkFibonacci } from "./Fibonacci";
import { checkPalindromic } from "./Palindromic";
import { checkSmith } from "./Smith";
import { checkHarshad } from "./Harshad";
import { checkHappy } from "./Happy";
import { checkZeisel } from "./Zeisel";
import { checkPancake } from "./Pancake";
import { checkZuckerman } from "./Zuckerman";
import { checkTaxicab } from "./Taxicab";
function MainNumberTypeFinder() {
  const [number, setnumber] = useState("");
  const [selectedNumberTypes, setselectedNumberTypes] = useState([]);
  const [results, setresults] = useState(null);

  const handleCheck = () => {
    if (number === "" || selectedNumberTypes.length === 0) {
      return alert(
        "Please make sure to select atleast one number type and add a number to check."
      );
    }

    setnumber(parseInt(number));
    const calculatedResults = {};

    selectedNumberTypes.forEach((type) => {
      switch (type) {
        case "armstrong":
          calculatedResults.armstrong = checkArmstrong(number);
          break;
        case "kaprekar":
          calculatedResults.kaprekar = checkKaprekar(number);
          break;
        case "automorphic":
          calculatedResults.automorphic = checkAutomorphic(number);
          break;
        case "perfect":
          calculatedResults.perfect = checkPerfect(number);
          break;
        case "amicable":
          calculatedResults.amicable = checkAmicable(number);
          break;
          case "fibonacci":
          calculatedResults.fibonacci = checkFibonacci(number);
          break;
        case "palindromic":
          calculatedResults.palindromic = checkPalindromic(number);
          break;
        case "smith":
          calculatedResults.smith = checkSmith(number);
          break;
        case "harshad":
          calculatedResults.harshad = checkHarshad(number);
          break;
        case "happy":
          calculatedResults.happy = checkHappy(number);
          break;
        case "zeizel":
          calculatedResults.zeisel = checkZeisel(number);
          break;
          case "pancake":
            calculatedResults.pancake = checkPancake(number);
            break; 
          case "taxicab":
            calculatedResults.taxicab = checkTaxicab(number);
          break;
          case "zuckerman":
          calculatedResults.zuckerman = checkZuckerman(number);
          break;
        default:
          break;
      }
    });

    setresults(calculatedResults);
  };
  
  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Number Type Finder
      </Typography>
      <hr />
      <br />
      {/* input for the number */}
      <TextField
        type="Number"
        label="Enter number"
        variant="outlined"
        value={number}
        onChange={(e) => setnumber(e.target.value)}
        fullWidth
        sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      />
      {/* multi-select dropdown list */}
      <FormControl
        variant="outlined"
        fullWidth
        sx={{ marginTop: "1rem", backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      >
        <InputLabel>Select Calculations</InputLabel>
        <Select
          multiple
          value={selectedNumberTypes}
          onChange={(e) => setselectedNumberTypes(e.target.value)}
          label="Select Calculations"
          renderValue={(selected) => selected.join(", ")}
        >
          <MenuItem value="armstrong">Armstrong Number</MenuItem>
          <MenuItem value="kaprekar">Kaprekar Number</MenuItem>
          <MenuItem value="automorphic">Automorphic Number</MenuItem>
          <MenuItem value="perfect">Perfect Number</MenuItem>
          <MenuItem value="amicable">Amicable Number</MenuItem>
          <MenuItem value="fibonacci">Fibonacci Number</MenuItem>
          <MenuItem value="palindromic">Palindromic Number</MenuItem>
          <MenuItem value="smith">Smith Number</MenuItem>
          <MenuItem value="harshad">Harshad Number</MenuItem>
          <MenuItem value="happy">Happy Number</MenuItem>
          <MenuItem value="zeisel">Zeisel Number</MenuItem>
          <MenuItem value="pancake">Pancake Number</MenuItem>
          <MenuItem value="taxicab">Taxicab Number</MenuItem>
          <MenuItem value="zuckerman">Zuckerman Number</MenuItem>
        </Select>
      </FormControl>
      {/* button to check the number type */}
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: "1rem" }}
        onClick={handleCheck}
      >
        Check
      </Button>

      {/* results */}
      {results !== null && (
        <Box mt={3}>
          <Paper
            elevation={3}
            sx={{ maxHeight: "380px", overflowY: "auto", padding: "16px" }}
          >
            {Object.keys(results).map((type) => (
              <div key={type}>
                <Typography variant="h6">
                  {type.charAt(0).toUpperCase() + type.slice(1)} Number :
                </Typography>
                <Typography variant="body1">
                  {results[type] ? "Yes" : "No"}
                </Typography>
                <Divider sx={{ marginY: "8px" }} />
              </div>
            ))}
          </Paper>
        </Box>
      )}
    </Container>
  );
}

export default MainNumberTypeFinder;
