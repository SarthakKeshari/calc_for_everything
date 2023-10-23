import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

function MainOhmsLawCalc() {
  const [voltage, setVoltage] = useState("");
  const [current, setCurrent] = useState("");
  const [resistance, setResistance] = useState("");
  const [result, setResult] = useState("");

  const calculateOhmsLaw = () => {
    if (voltage && current) {
      const calculatedResistance = voltage / current;
      setResistance(calculatedResistance);
      setResult(`Resistance: ${calculatedResistance} ohms`);
    } else if (voltage && resistance) {
      const calculatedCurrent = voltage / resistance;
      setCurrent(calculatedCurrent);
      setResult(`Current: ${calculatedCurrent} amps`);
    } else if (current && resistance) {
      const calculatedVoltage = current * resistance;
      setVoltage(calculatedVoltage);
      setResult(`Voltage: ${calculatedVoltage} volts`);
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Ohm's Law Calculator
      </Typography>

      <hr />
      <div>
        <h2>Ohm's Law</h2> is a fundamental principle in electrical engineering
        and physics that describes the relationship between voltage (V), current
        (I), and resistance (R) in an electrical circuit. It is named after the
        German physicist Georg Simon Ohm, who formulated the law.
        <br />
        <br />
        <h4> Ohm's Law states: V = I * R</h4>
      </div>
      <br />
      <TextField
        label="Voltage (V)"
        type="number"
        value={voltage}
        onChange={(e) => setVoltage(e.target.value)}
        sx={{ margin: 2 }}
      />
      <TextField
        label="Current (A)"
        type="number"
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
        sx={{ margin: 2 }}
      />
      <TextField
        label="Resistance (Ω)"
        type="number"
        value={resistance}
        onChange={(e) => setResistance(e.target.value)}
        sx={{ margin: 2 }}
      />
      {result && <Typography sx={{ margin: 2 }}>{result}</Typography>}

      <br />
      <Button variant="contained" color="primary" onClick={calculateOhmsLaw}>
        Calculate
      </Button>
    </Container>
  );
}

export default MainOhmsLawCalc;
