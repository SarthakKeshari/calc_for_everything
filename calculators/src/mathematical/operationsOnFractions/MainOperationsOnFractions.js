import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

function MainOperationsOnFractions() {
  const [fraction1, setFraction1] = useState("");
  const [fraction2, setFraction2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const performOperation = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior.

    if (!fraction1 || !fraction2 || !operation) {
      setResult("Please enter valid fractions and select an operation.");
      return;
    }

    const [numerator1, denominator1] = fraction1.split("/").map(Number);
    const [numerator2, denominator2] = fraction2.split("/").map(Number);

    let resNumerator, resDenominator;

    switch (operation) {
      case "add":
        resNumerator = numerator1 * denominator2 + numerator2 * denominator1;
        resDenominator = denominator1 * denominator2;
        break;
      case "subtract":
        resNumerator = numerator1 * denominator2 - numerator2 * denominator1;
        resDenominator = denominator1 * denominator2;
        break;
      case "multiply":
        resNumerator = numerator1 * numerator2;
        resDenominator = denominator1 * denominator2;
        break;
      case "divide":
        if (numerator2 === 0) {
          setResult("Division by zero is not allowed.");
          return;
        }
        resNumerator = numerator1 * denominator2;
        resDenominator = denominator1 * numerator2;
        break;
      default:
        setResult("Invalid operation selected.");
        return;
    }

    // Simplify the result by finding the greatest common divisor (GCD).
    const greatestCommonDivisor = gcd(resNumerator, resDenominator);
    resNumerator /= greatestCommonDivisor;
    resDenominator /= greatestCommonDivisor;

    setResult(`${resNumerator} / ${resDenominator}`);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: 10 }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Operations On Fractions Calculator
      </Typography>
      <hr />
      <br />
      <form onSubmit={performOperation}>
        <TextField
          label="Fraction 1"
          variant="outlined"
          value={fraction1}
          onChange={(e) => setFraction1(e.target.value)}
        />
        <TextField
          label="Fraction 2"
          variant="outlined"
          value={fraction2}
          onChange={(e) => setFraction2(e.target.value)}
        />
        <div>
          <Button
            variant="contained"
            color="primary"
            sx={{ margin: "5px" }}
            onClick={() => setOperation("add")}
          >
            Add
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ margin: "5px" }}
            onClick={() => setOperation("subtract")}
          >
            Subtract
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ margin: "5px" }}
            onClick={() => setOperation("multiply")}
          >
            Multiply
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ margin: "5px" }}
            onClick={() => setOperation("divide")}
          >
            Divide
          </Button>
        </div>
        <Button type="submit" variant="contained" color="primary">
          Perform Operation
        </Button>
      </form>
      <br />
      <Typography>Result: {result}</Typography>
    </Container>
  );
}

export default MainOperationsOnFractions;
