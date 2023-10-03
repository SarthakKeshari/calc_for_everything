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
        default:
          break;
      }
    });

    setresults(calculatedResults);
  };

  // * functions to check number types

  // armstrong
  const checkArmstrong = (num) => {
    let value = 0;
    let x = num.toString();
    x = x.split("");
    x.forEach((digit) => {
      value += parseInt(digit) ** x.length;
    });
    return value === num;
  };

  // Kaprekar Number
  const checkKaprekar = (num) => {
    let x = num ** 2;
    x = x.toString();
    const mid = Math.floor((x.length - 1) / 2);
    const leftNum = x.substring(0, mid + 1);
    const rightNum = x.substring(mid + 1, x.length);
    const value = parseInt(leftNum) + parseInt(rightNum);
    return value === num;
  };

  // Automorphic Number
  const checkAutomorphic = (num) => {
    let x = num ** 2;
    x = x.toString();
    x = x.substring(x.length - num.toString().length, x.length);
    return parseInt(x) === num;
  };

  // sum of proper divisors of a Number
  const sumProperDivisors = (num) => {
    if (num <= 1) {
      return 0;
    }

    let sum = 1;
    const sqrtNum = Math.sqrt(num);

    for (let i = 2; i <= sqrtNum; i++) {
      if (num % i === 0) {
        sum += i;
        const divisor = num / i;
        if (divisor !== i) {
          sum += divisor;
        }
      }
    }

    return sum;
  };

  // Perfect Number
  const checkPerfect = (num) => {
    if (num <= 0) {
      return false;
    } else {
      return sumProperDivisors(num) === num;
    }
  };

  // Amicable Number
  const checkAmicable = (num) => {
    const x = sumProperDivisors(num);
    if (x !== num) {
      if (sumProperDivisors(x) === num) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
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
