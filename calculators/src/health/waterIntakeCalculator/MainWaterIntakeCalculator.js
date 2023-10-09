import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function MainWaterIntakeCalculator() {
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [climate, setClimate] = useState("");
  const [gender, setGender] = useState("");
  const [units, setUnits] = useState("kg");
  const [result, setResult] = useState(null);

  const calculateWaterIntake = () => {
    // Calculate Basal Sweat Rate (BSR) based on gender
    const bsr = gender === "male" ? 35 : 31;

    // Map activity levels to their corresponding factors
    const activityLevelsFactors = {
      sedentary: 0,
      lightlyActive: 400,
      moderatelyActive: 700,
      veryActive: 950,
      extraActive: 1400,
    };

    // Map temperature ranges to their corresponding factors
    const temperatureFactors = {
      cold: 0.8,
      average: 1,
      hot: 1.2,
    };

    // conversion into kg
    const weightInKg = units === "lb" ? weight * 0.453592 : parseFloat(weight);
    const climateFactor = temperatureFactors[climate];
    const activityLevelFactor = activityLevelsFactors[activityLevel]; // Default to sedentary

    // water intake formula
    const recommendedIntake =
      ((weightInKg * bsr + activityLevelFactor) * climateFactor) / 1000;

    setResult(
      `Your recommended water intake: ${recommendedIntake.toFixed(2)} l`
    );
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: 10 }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Water Intake Calculator
      </Typography>
      <hr />
      <br />
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel
          style={{ backgroundColor: "#eeeeee", paddingInline: "4px" }}
        >
          Units
        </InputLabel>
        <Select value={units} onChange={(e) => setUnits(e.target.value)}>
          <MenuItem value="kg">Kg</MenuItem>
          <MenuItem value="lb">Lb</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label={`Weight (${units})`}
        variant="outlined"
        fullWidth
        margin="normal"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel
          style={{ backgroundColor: "#eeeeee", paddingInline: "4px" }}
        >
          Activity Level
        </InputLabel>
        <Select
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
        >
          <MenuItem value="sedentary">Sedentary</MenuItem>
          <MenuItem value="lightlyActive">Lightly Active</MenuItem>
          <MenuItem value="moderatelyActive">Moderately Active</MenuItem>
          <MenuItem value="veryActive">Very Active</MenuItem>
          <MenuItem value="extraActive">Extra Active</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel
          style={{ backgroundColor: "#eeeeee", paddingInline: "4px" }}
        >
          Climate
        </InputLabel>
        <Select value={climate} onChange={(e) => setClimate(e.target.value)}>
          <MenuItem value="cold">Cold</MenuItem>
          <MenuItem value="average">Average</MenuItem>
          <MenuItem value="hot">Hot</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel
          style={{ backgroundColor: "#eeeeee", paddingInline: "4px" }}
        >
          Gender
        </InputLabel>
        <Select value={gender} onChange={(e) => setGender(e.target.value)}>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        onClick={calculateWaterIntake}
      >
        Calculate
      </Button>

      {result && (
        <Typography variant="h6" sx={{ textAlign: "center", marginTop: 2 }}>
          {result}
        </Typography>
      )}
    </Container>
  );
}

export default MainWaterIntakeCalculator;
